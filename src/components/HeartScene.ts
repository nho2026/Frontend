import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

export function createHeartScene(host: HTMLDivElement, onReady: () => void, onError: () => void) {
  const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'low-power' });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
  renderer.setClearColor(0x000000, 0);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.05;
  const canvas = renderer.domElement;
  canvas.setAttribute('aria-hidden', 'true');
  host.appendChild(canvas);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(34, 1, 0.01, 100);
  const controls = new OrbitControls(camera, canvas);
  controls.enablePan = false;
  controls.enableZoom = true;
  controls.zoomSpeed = 0.7;
  controls.rotateSpeed = 0.65;
  controls.minPolarAngle = 0.15;
  controls.maxPolarAngle = Math.PI - 0.15;
  controls.touches.TWO = THREE.TOUCH.DOLLY_ROTATE;
  controls.minDistance = 3.2;
  controls.maxDistance = 8;
  controls.cursorStyle = 'grab';
  scene.add(new THREE.HemisphereLight(0xfff8ef, 0x547466, 2.7));
  const key = new THREE.DirectionalLight(0xffeadd, 3.5);
  key.position.set(-3, 5, 6);
  scene.add(key);
  const rim = new THREE.DirectionalLight(0xddeaff, 2.8);
  rim.position.set(4, 2, -3);
  scene.add(rim);
  const fill = new THREE.DirectionalLight(0xffffff, 1.1);
  fill.position.set(2, -2, 5);
  scene.add(fill);

  let disposed = false;
  let model: THREE.Group | undefined;
  let loaded = false;
  const defaultZoomFactor = 1.22;
  let zoomFactor = defaultZoomFactor;
  const render = () => { if (!disposed) renderer.render(scene, camera); };
  const fit = () => {
    const width = host.clientWidth;
    const height = host.clientHeight;
    if (!width || !height) return;
    renderer.setSize(width, height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    const distance = (1.45 / Math.tan(THREE.MathUtils.degToRad(camera.fov / 2))) / Math.min(camera.aspect, 1) * zoomFactor;
    camera.position.copy(camera.position.clone().normalize().multiplyScalar(distance));
    controls.update();
    render();
  };
  // Start at the three-quarter view selected in the reference screenshot.
  camera.position.set(Math.sin(0.75) * 5.3, 0.6, Math.cos(0.75) * 5.3);
  const releaseModel = (root: THREE.Object3D) => root.traverse(object => {
    if (!(object instanceof THREE.Mesh)) return;
    object.geometry.dispose();
    for (const material of Array.isArray(object.material) ? object.material : [object.material]) {
      for (const value of Object.values(material)) if (value instanceof THREE.Texture) value.dispose();
      material.dispose();
    }
  });
  const loader = new GLTFLoader();
  loader.load('/models/heart.glb', gltf => {
    if (disposed) { releaseModel(gltf.scene); return; }
    model = gltf.scene;
    const box = new THREE.Box3().setFromObject(model);
    const size = box.getSize(new THREE.Vector3());
    const center = box.getCenter(new THREE.Vector3());
    const scale = 2.6 / Math.max(size.x, size.y, size.z);
    model.position.copy(center.multiplyScalar(-scale));
    model.scale.setScalar(scale);
    model.traverse(object => {
      if (!(object instanceof THREE.Mesh)) return;
      for (const material of Array.isArray(object.material) ? object.material : [object.material]) {
        if (material instanceof THREE.MeshStandardMaterial) {
          const name = material.name;
          material.color.set(
            name.includes('coronary') ? '#d7ad83' :
            name.includes('pulmonary') ? '#65577f' :
            name.includes('vena') ? '#686080' :
            name.includes('aort') ? '#a82e3f' :
            name.includes('atrium') ? '#a5364b' : '#a62a3a'
          );
          material.roughness = 0.46;
          material.metalness = 0.02;
        }
      }
    });
    scene.add(model);
    loaded = true;
    fit();
    controls.saveState();
    onReady();
  }, undefined, () => { if (!disposed) onError(); });
  const resize = new ResizeObserver(fit);
  resize.observe(host);
  controls.addEventListener('change', render);
  const contextLost = (event: Event) => { event.preventDefault(); if (!disposed) onError(); };
  canvas.addEventListener('webglcontextlost', contextLost);
  fit();

  return {
    rotate: (x: number, y: number) => { controls.rotateLeft(x); controls.rotateUp(y); controls.update(); },
    zoom: (direction: number) => { zoomFactor = THREE.MathUtils.clamp(zoomFactor + direction * 0.12, 0.75, 1.35); fit(); },
    reset: () => { zoomFactor = defaultZoomFactor; controls.reset(); fit(); },
    isLoaded: () => loaded,
    dispose: () => {
      disposed = true;
      resize.disconnect();
      controls.removeEventListener('change', render);
      controls.dispose();
      canvas.removeEventListener('webglcontextlost', contextLost);
      if (model) releaseModel(model);
      renderer.dispose();
      renderer.forceContextLoss();
      canvas.remove();
    },
  };
}
