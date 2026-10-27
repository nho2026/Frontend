import type { LanguageCode } from '../i18n';

type HomeSectionsCopy = {
  services: { eyebrow: string; title: string; body: string; link: string; items: { title: string; body: string }[] };
  journey: { eyebrow: string; title: string; body: string; items: { title: string; body: string }[] };
  faq: { eyebrow: string; title: string; body: string; contact: string; items: { question: string; answer: string }[] };
};

export const homeSections: Record<LanguageCode, HomeSectionsCopy> = {
  en: {
    services: {
      eyebrow: 'Our care services', title: 'Your heart. Our focus.',
      body: 'Find the right place to begin, with heart care at the center of our work.', link: 'Meet our specialists',
      items: [
        { title: 'Heart care', body: 'Start with a cardiac case review and discuss assessment, planning, and follow-up with the team.' },
        { title: 'Dental care', body: 'Connect with a dental specialist for assessment and treatment planning.' },
        { title: 'Children’s care', body: 'Find a children’s care specialist and request an evaluation.' },
      ],
    },
    journey: {
      eyebrow: 'Your next steps', title: 'A clear path to your first visit.',
      body: 'From choosing a specialist to requesting an appointment, start one step at a time.',
      items: [
        { title: 'Explore the team', body: 'Review doctor profiles, specialties, languages, and appointment days.' },
        { title: 'Send your request', body: 'Choose your care service and share your name, phone number, and preferred date.' },
        { title: 'Discuss the details', body: 'Contact the coordination team to confirm availability and ask about preparation for your visit.' },
      ],
    },
    faq: {
      eyebrow: 'Before your visit', title: 'A few things you might be wondering.',
      body: 'Practical answers to help you get started.', contact: 'Contact the team',
      items: [
        { question: 'How do I request an appointment?', answer: 'Open the Contact page, choose a care service, and fill in your name, phone number, and preferred appointment date.' },
        { question: 'Where can I find the right specialist?', answer: 'The Staff page lists each doctor’s specialty, focus, languages, and appointment days. You can also contact the coordination team for help choosing where to begin.' },
        { question: 'Is my preferred date a confirmed appointment?', answer: 'Your preferred date is part of the request. Confirm the appointment time and availability with the coordination team.' },
        { question: 'What should I prepare before my visit?', answer: 'Ask the coordination team what to bring and whether any preparation is needed for your appointment.' },
      ],
    },
  },
  ku: {
    services: {
      eyebrow: 'خزمەتگوزارییەکانمان', title: 'دڵی تۆ، گرنگی ئێمە.',
      body: 'شوێنی گونجاو بۆ دەستپێکردن بدۆزەوە؛ چاودێری دڵ لە ناوەندی کارەکانماندایە.', link: 'پسپۆڕەکانمان بناسە',
      items: [
        { title: 'چاودێری دڵ', body: 'بە پێداچوونەوەی حاڵەتی دڵ دەست پێ بکە و لەگەڵ تیمەکە باس لە هەڵسەنگاندن، پلان و بەدواداچوون بکە.' },
        { title: 'چاودێری ددان', body: 'بۆ هەڵسەنگاندن و پلانی چارەسەر پەیوەندی بە پسپۆڕی ددانەوە بکە.' },
        { title: 'چاودێری منداڵان', body: 'پسپۆڕی چاودێری منداڵان بدۆزەوە و داوای هەڵسەنگاندن بکە.' },
      ],
    },
    journey: {
      eyebrow: 'هەنگاوەکانی داهاتووت', title: 'ڕێگایەکی ڕوون بۆ یەکەم سەردانت.',
      body: 'لە هەڵبژاردنی پسپۆڕەوە تا داواکردنی وادە، هەنگاو بە هەنگاو دەست پێ بکە.',
      items: [
        { title: 'تیمەکە بناسە', body: 'پڕۆفایلی دکتۆرەکان، پسپۆڕی، زمانەکان و ڕۆژانی وادە ببینە.' },
        { title: 'داواکارییەکەت بنێرە', body: 'خزمەتگوزارییەکە هەڵبژێرە و ناو، ژمارەی تەلەفۆن و بەرواری خوازراو بنووسە.' },
        { title: 'وردەکارییەکان بپرسە', body: 'بۆ دڵنیابوونەوە لە بەردەستبوونی وادە و ئامادەکاریی سەردان، پەیوەندی بە تیمی هەماهەنگییەوە بکە.' },
      ],
    },
    faq: {
      eyebrow: 'پێش سەردانت', title: 'وەڵامی چەند پرسیارێکت.', body: 'وەڵامی کرداری بۆ دەستپێکردن.', contact: 'پەیوەندی بە تیمەکەوە بکە',
      items: [
        { question: 'چۆن داوای وادە بکەم؟', answer: 'پەڕەی پەیوەندی بکەرەوە، جۆری چاودێری هەڵبژێرە و ناو، ژمارەی تەلەفۆن و بەرواری خوازراو بنووسە.' },
        { question: 'لە کوێ پسپۆڕی گونجاو بدۆزمەوە؟', answer: 'پەڕەی ستاف پسپۆڕی، بوار، زمانەکان و ڕۆژانی وادەی هەر دکتۆرێک پیشان دەدات. بۆ یارمەتی دەتوانیت پەیوەندی بە تیمی هەماهەنگییەوە بکەیت.' },
        { question: 'بەرواری خوازراو وادەیەکی پشتڕاستکراوەیە؟', answer: 'بەرواری خوازراو بەشێکە لە داواکارییەکەت. کات و بەردەستبوونی وادە لەگەڵ تیمی هەماهەنگی پشتڕاست بکەرەوە.' },
        { question: 'پێش سەردان چی ئامادە بکەم؟', answer: 'لە تیمی هەماهەنگی بپرسە چی لەگەڵ خۆت بهێنیت و ئایا وادەکەت پێویستی بە ئامادەکارییەکی تایبەت هەیە.' },
      ],
    },
  },
  ar: {
    services: {
      eyebrow: 'خدمات الرعاية', title: 'قلبك محور اهتمامنا.',
      body: 'اعثر على نقطة البداية المناسبة، مع رعاية القلب في صميم عملنا.', link: 'تعرّف على اختصاصيينا',
      items: [
        { title: 'رعاية القلب', body: 'ابدأ بمراجعة حالة القلب وناقش التقييم والتخطيط والمتابعة مع الفريق.' },
        { title: 'رعاية الأسنان', body: 'تواصل مع اختصاصي الأسنان للتقييم ووضع خطة العلاج.' },
        { title: 'رعاية الأطفال', body: 'اعثر على اختصاصي رعاية الأطفال واطلب موعدًا للتقييم.' },
      ],
    },
    journey: {
      eyebrow: 'خطواتك التالية', title: 'طريق واضح إلى زيارتك الأولى.',
      body: 'من اختيار الاختصاصي إلى طلب الموعد، ابدأ خطوة بخطوة.',
      items: [
        { title: 'تعرّف على الفريق', body: 'اطّلع على ملفات الأطباء واختصاصاتهم ولغاتهم وأيام المواعيد.' },
        { title: 'أرسل طلبك', body: 'اختر خدمة الرعاية وأدخل اسمك ورقم هاتفك والتاريخ المفضّل.' },
        { title: 'ناقش التفاصيل', body: 'تواصل مع فريق التنسيق لتأكيد توفر الموعد والسؤال عن التحضير لزيارتك.' },
      ],
    },
    faq: {
      eyebrow: 'قبل زيارتك', title: 'إجابات عن أسئلتك الأولى.', body: 'معلومات عملية تساعدك على البدء.', contact: 'تواصل مع الفريق',
      items: [
        { question: 'كيف أطلب موعدًا؟', answer: 'افتح صفحة التواصل واختر خدمة الرعاية، ثم أدخل اسمك ورقم هاتفك والتاريخ المفضّل للموعد.' },
        { question: 'أين أجد الاختصاصي المناسب؟', answer: 'تعرض صفحة الطاقم اختصاص كل طبيب ومجال عمله ولغاته وأيام المواعيد. يمكنك أيضًا التواصل مع فريق التنسيق للمساعدة في تحديد نقطة البداية.' },
        { question: 'هل التاريخ المفضّل موعد مؤكّد؟', answer: 'التاريخ المفضّل جزء من طلبك. أكّد وقت الموعد وتوفّره مع فريق التنسيق.' },
        { question: 'ماذا أحضّر قبل الزيارة؟', answer: 'اسأل فريق التنسيق عمّا تحتاج إلى إحضاره وما إذا كان موعدك يتطلّب أي تحضير.' },
      ],
    },
  },
};
