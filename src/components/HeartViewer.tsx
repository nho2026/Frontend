import { useEffect, useRef, useState } from 'react';
import { HeartPulse, Move } from 'lucide-react';
import { useI18n } from '../i18n';
import type { createHeartScene } from './HeartScene';

const labels = {
  en: { title: 'At the heart of better care.', subtitle: 'Explore the human heart', drag: 'Drag to rotate · Scroll or pinch to zoom', loading: 'Preparing your 3D experience…', unavailable: 'A closer look at the human heart', controls: 'Interactive heart. Drag or use arrow keys to rotate. Plus and minus to zoom; R to reset.' },
  ku: { title: 'لە دڵی چاودێریی باشتر.', subtitle: 'دڵی مرۆڤ بناسە', drag: 'ڕایبکێشە بۆ سووڕاندن · سکرۆڵ بۆ گەورەکردن', loading: 'دڵی سێ ڕەهەندی ئامادە دەکرێت…', unavailable: 'بینینێکی نزیکتر بۆ دڵی مرۆڤ', controls: 'دڵی سێ ڕەهەندی. ڕایبکێشە یان تیرەکان بەکاربهێنە بۆ سووڕاندن.' },
  ar: { title: 'في قلب رعاية أفضل.', subtitle: 'استكشف قلب الإنسان', drag: 'اسحب للتدوير · مرّر أو قرّب بإصبعين للتكبير', loading: 'جارٍ تحضير القلب ثلاثي الأبعاد…', unavailable: 'نظرة أقرب إلى قلب الإنسان', controls: 'قلب تفاعلي. اسحب أو استخدم الأسهم للتدوير. زائد وناقص للتكبير؛ R لإعادة العرض.' },
};

export default function HeartViewer() {
  const { language } = useI18n();
  const copy = labels[language];
  const hostRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<ReturnType<typeof createHeartScene> | null>(null);
  const [status, setStatus] = useState<'loading' | 'ready' | 'unavailable'>('loading');

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;
    let cancelled = false;
    const observer = new IntersectionObserver(entries => {
      if (!entries.some(entry => entry.isIntersecting)) return;
      observer.disconnect();
      import('./HeartScene').then(({ createHeartScene }) => {
        if (cancelled) return;
        sceneRef.current = createHeartScene(host, () => setStatus('ready'), () => setStatus('unavailable'));
      }).catch(() => { if (!cancelled) setStatus('unavailable'); });
    }, { rootMargin: '150px' });
    observer.observe(host);
    return () => { cancelled = true; observer.disconnect(); sceneRef.current?.dispose(); sceneRef.current = null; };
  }, []);

  return (
    <div className="heart-explorer" data-status={status}>
      <div className="heart-explorer-heading">
        <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-(--brand-green)"><HeartPulse className="h-4 w-4" />{copy.subtitle}</span>
        <h2 className="mt-2 text-2xl font-semibold text-(--brand-ink)">{copy.title}</h2>
      </div>
      <div className="heart-orbit" aria-hidden="true" />
      <div
        ref={hostRef}
        className="heart-canvas"
        role="group"
        tabIndex={0}
        aria-label={copy.controls}
        aria-busy={status === 'loading'}
        onKeyDown={event => {
          if (status !== 'ready') return;
          const scene = sceneRef.current;
          if (['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', '+', '=', '-', 'r', 'R'].includes(event.key)) event.preventDefault();
          if (event.key === 'ArrowLeft') scene?.rotate(0.15, 0);
          if (event.key === 'ArrowRight') scene?.rotate(-0.15, 0);
          if (event.key === 'ArrowUp') scene?.rotate(0, 0.15);
          if (event.key === 'ArrowDown') scene?.rotate(0, -0.15);
          if (event.key === '+' || event.key === '=') scene?.zoom(-1);
          if (event.key === '-') scene?.zoom(1);
          if (event.key.toLowerCase() === 'r') scene?.reset();
        }}
      />
      {status !== 'ready' && <div className="heart-poster"><img src="/images/heart-poster.webp" alt="Anatomical illustration of the human heart" /><p role="status">{status === 'loading' ? copy.loading : copy.unavailable}</p></div>}
      <div className="heart-explorer-toolbar">
        <span className="flex items-center gap-2 text-xs text-(--brand-copy)"><Move className="h-4 w-4 shrink-0" />{copy.drag}</span>

      </div>
    </div>
  );
}
