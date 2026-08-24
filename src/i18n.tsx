import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import type { Locale } from 'date-fns'
import { ar, ckb, enUS } from 'date-fns/locale'
import type {
  AppointmentOption,
  CareFeature,
  ContactChannel,
  DoctorProfile,
  ImpactMetric,
  NavigationItem,
  RoutePath,
  ServiceTag,
} from './types'

export type LanguageCode = 'ku' | 'en' | 'ar'

type TranslationContent = {
  titles: Record<RoutePath, string>
  shell: {
    brand: string
    mobileTagline: string
    desktopTagline: string
    centerBadge: string
    phone: string
    bookAppointment: string
    specialtyScope: string
    specialtySummary: string
    footerTagline: string
    footerBody: string
    footerCta: string
    language: string
  }
  home: {
    heroBadge: string
    heroTitle: string
    heroBody: string
    primaryCta: string
    secondaryCta: string
    heroStats: Array<{ value: string; label: string }>
    heartWidgetLabel: string
    heartWidgetValue: string
    coordinationEyebrow: string
    coordinationTitle: string
    coordinationBody: string
    scopeCardTitle: string
    scopeCardBody: string
    accessTitle: string
    accessItems: Array<{ value: string; label: string }>
    aboutEyebrow: string
    aboutTitle: string
    aboutBody: string
    learnMore: string
    whyEyebrow: string
    whyTitle: string
    whyBody: string
    advancedEyebrow: string
    advancedTitle: string
    advancedBody: string
    advancedCards: Array<{ title: string; body: string }>
    viewStaff: string
    doctorsEyebrow: string
    doctorsTitle: string
    doctorsBody: string
    appointmentsEyebrow: string
    appointmentsTitle: string
    appointmentsBody: string
    browseSchedule: string
    reviewEyebrow: string
    reviewTitle: string
    reviewBody: string
    reviewCta: string
  }
  about: {
    leadershipPoints: string[]
    heroEyebrow: string
    heroTitle: string
    heroBody: string
    brandPrincipleLabel: string
    brandPrincipleValue: string
    missionEyebrow: string
    missionTitle: string
    missionBody: string
    missionCards: Array<{ title: string; body: string }>
    leadershipEyebrow: string
    leadershipTitle: string
    leadershipBody: string
  }
  staff: {
    heroBadge: string
    heroTitle: string
    heroBody: string
    doctorsEyebrow: string
    doctorsTitle: string
    doctorsBody: string
    operatingEyebrow: string
    operatingTitle: string
    operatingBody: string
    scopeBadge: string
    scopeBody: string
    bookingFlow: string
    bookingSteps: string[]
    requestAppointment: string
    appointmentsEyebrow: string
    appointmentsTitle: string
    appointmentsBody: string
  }
  contact: {
    heroEyebrow: string
    heroTitle: string
    heroBody: string
    deskLabel: string
    deskBody: string
    reviewStaff: string
    getInTouchEyebrow: string
    getInTouchTitle: string
    getInTouchBody: string
    referralTitle: string
    referralBody: string
    responseTitle: string
    responseBody: string
  }
  bookingForm: {
    eyebrow: string
    title: string
    body: string
    availableDates: string
    name: string
    namePlaceholder: string
    phone: string
    phonePlaceholder: string
    date: string
    pickDate: string
    submit: string
    success: string
  }
  doctorGrid: {
    available: string
    appointmentDays: string
  }
  appointmentGrid: {
    bookButton: string
  }
  site: {
    siteNavigation: NavigationItem[]
    keyMetrics: ImpactMetric[]
    operatingPrinciples: string[]
    serviceTags: ServiceTag[]
    careFeatures: CareFeature[]
    doctorProfiles: DoctorProfile[]
    appointmentOptions: AppointmentOption[]
    contactChannels: ContactChannel[]
  }
}

const translations: Record<LanguageCode, TranslationContent> = {
  ku: {
    titles: {
      '/': 'ڕێکخراوی تەندروستی نادر',
      '/about': 'دەربارە | ڕێکخراوی تەندروستی نادر',
      '/staff': 'ستاف | ڕێکخراوی تەندروستی نادر',
      '/contact': 'پەیوەندی | ڕێکخراوی تەندروستی نادر',
    },
    shell: {
      brand: 'ڕێکخراوی تەندروستی نادر',
      mobileTagline: 'دڵ، ددان و منداڵان',
      desktopTagline: 'چاودێری دڵ، ددان و منداڵان',
      centerBadge: 'ناوەندی چاودێری دڵ، ددان و منداڵان',
      phone: '+964 (0) 750 245 0788',
      bookAppointment: 'نۆرەگرتن',
      specialtyScope: 'بوارە پسپۆڕەکان',
      specialtySummary: 'دڵ، ددان و چاودێری منداڵان',
      footerTagline: 'چاودێری پسپۆڕی بۆ دڵ، ددان و منداڵان',
      footerBody:
        'مۆدێلێکی تایبەت بۆ چاودێری دڵ، ددان و منداڵان کە هەڵسەنگاندن، پلان و بەدواداچوون لە یەک ڕێکخستنەوەدا کۆدەکاتەوە.',
      footerCta: 'دەستپێکردنی پەیوەندی',
      language: 'زمان',
    },
    home: {
      heroBadge: 'ناوەندی تایبەت بۆ دڵ، ددان و منداڵان',
      heroTitle: 'نەشتەرگەری دڵ بەبێ فتح صدر',
      heroBody:
        'ڕێکخراوی تەندروستی نادر خزمەتگوزاریی دڵ، ددان و منداڵان بە هەڵسەنگاندن، پلان و بەدواداچوونی ڕێکخراو پێشکەش دەکات.',
      primaryCta: 'داوای هەڵسەنگاندنی حاڵەت',
      secondaryCta: 'بینینی دکتۆرەکان',
      heroStats: [
        { value: '3,200+', label: 'حاڵەتی تەواوکراو' },
        { value: '3', label: 'هێڵی پسپۆڕی' },
        { value: '96%', label: 'تەواوبوونی بەدواداچوون' },
      ],
      heartWidgetLabel: 'چالاکی ئێستا',
      heartWidgetValue: 'چاودێری چالاکی دڵ',
      coordinationEyebrow: 'ڕێکخستن',
      coordinationTitle: 'یەکەی ڕێکخستنی چاودێری دڵ',
      coordinationBody: 'هەڵسەنگاندن، پلان و بەدواداچوونی ڕێکخراو بۆ حاڵەتەکان.',
      scopeCardTitle: 'بوارێکی سنوورداری خزمەت',
      scopeCardBody: 'ئەم ناوەندە کلینیکی گشتی نییە. تەنها بۆ دڵ، ددان و منداڵانە.',
      accessTitle: 'دەستگەیشتنی ڕێکخراو',
      accessItems: [
        { value: '3', label: 'بەشی پسپۆڕی' },
        { value: '24/7', label: 'ڕێکخستنی پەیوەندی' },
      ],
      aboutEyebrow: 'دەربارەی ئێمە',
      aboutTitle: 'ڕێکخراوێک بە سنوور و ئارمانجی ڕوون.',
      aboutBody:
        'تیمەکە سەرنجی خۆی خستووەتە سەر دڵ، ددان و منداڵان تاکو پلان، ئامادەکاری و بەدواداچوون بە یەک ئاست بڕوات.',
      learnMore: 'زانیاری زیاتر',
      whyEyebrow: 'بۆچی ئێمە',
      whyTitle: 'سنووری ڕوون کوالیتی خزمەتگوزاری باشتر دەکات.',
      whyBody:
        'کاتێک بوارەکان دیار و سنووردار بن، بەڕێوەبردن، خشتەبەندی و بەدواداچوون بە شێوەیەکی باشتر ئەنجام دەدرێت.',
      advancedEyebrow: 'چاودێری پێشکەوتوو',
      advancedTitle: 'دڵ، ددان و منداڵان هێڵە سەرەکییەکانی خزمەتگوزارین.',
      advancedBody:
        'ڕێکخستنی سنووردار هەڵسەنگاندن، ئامادەکاری و هەماهەنگی تیمی بە شێوەیەکی پێشبینی کراو پێکەوە دەبەستێت.',
      advancedCards: [
        {
          title: 'چاودێری دڵ',
          body: 'پشکنینی حاڵەت، هەماهەنگی کات و ڕێنمایی بەدواداچوون بۆ حاڵەتەکانی دڵ.',
        },
        {
          title: 'چاودێری ددان',
          body: 'هەڵسەنگاندنی ددان، پلان بۆ چارەسەری پێویست و ڕێنمایی قۆناغی دواتر.',
        },
      ],
      viewStaff: 'بینینی ستاف',
      doctorsEyebrow: 'دکتۆرەکانمان',
      doctorsTitle: 'دکتۆرانی دڵ، ددان و منداڵان کە وادە وەر دەگرن.',
      doctorsBody:
        'پسپۆڕی، ئەزموون، بڕوانامەی بۆرد و کاتی بەردەستی بە شێوەی ڕوون لە هەر پرۆفایلێکدا نیشان دەدرێت.',
      appointmentsEyebrow: 'وادەکان',
      appointmentsTitle: 'وادەکان بە پێی هەڵسەنگاندن و بەدواداچوونی ڕێکخراو دادەنرێن.',
      appointmentsBody:
        'نەخۆش دەتوانێت بۆ هەڵسەنگاندنی دڵ، ددان یان چاودێری منداڵان وادە بگرێت.',
      browseSchedule: 'بینینی خشتەی ستاف',
      reviewEyebrow: 'ئامادەیە',
      reviewTitle: 'بە هەڵسەنگاندنی حاڵەتی دڵ، ددان یان منداڵەکەت دەست پێ بکە.',
      reviewBody:
        'بۆ ئاراستەکردن، پلان و بەدواداچوونی دواتر لەگەڵ تیمەکە پەیوەندی بکە.',
      reviewCta: 'پەیوەندی بە تیمەکە',
    },
    about: {
      leadershipPoints: [
        'بوارەکە بە ئامانج سنووردار کراوە: دڵ، ددان و منداڵان.',
        'بڕیارەکانی کارگێڕی لەسەر ئامادەیی حاڵەت، بەردەستی دکتۆر و بەدواداچوونی دواتر دەوەستن.',
        'ڕێکخراوەکە دوور دەکەوێتەوە لە خزمەتگوزاریی گشتی تاکو سیستمی چاودێری بەهێز و ڕێک بێت.',
      ],
      heroEyebrow: 'دەربارە',
      heroTitle: 'وەک ناوەندێکی تایبەت درووست کراوە، نەک وەک کلینیکێکی گشتی.',
      heroBody:
        'ڕێکخراوی تەندروستی نادر بۆ خزمەتگوزاریی دڵ، ددان و منداڵان بە ڕێکخستن و بەدواداچوونی باشتر دامەزراوە.',
      brandPrincipleLabel: 'بنەمای براند',
      brandPrincipleValue: 'فۆکەس، پشتگیری ڕوون و بەدواداچوونی ڕێکوپێک.',
      missionEyebrow: 'ئەرک',
      missionTitle:
        'پێشکەشکردنی چاودێری دڵ، ددان و منداڵان بە مۆدێلێکی پێشبینی کراو.',
      missionBody:
        'بوارە کلینیکییەکان سنووردار کراون تاکو هەڵسەنگاندن، خشتەبەندی و بەدواداچوون بە خزمەتگوزارییەکەوە بەستراو بمێنن.',
      missionCards: [
        {
          title: 'دەستگەیشتن بە چاودێری دڵ',
          body: 'حاڵەتەکانی دڵ بە پێی کاتی دکتۆر، پێویستی حاڵەت و پلانی بەدواداچوون هەڵدەسەنگێندرێن.',
        },
        {
          title: 'دەستگەیشتن بە چاودێری ددان',
          body: 'حاڵەتەکانی ددان بە هەڵسەنگاندن، وێنە و پلانی قۆناغی چارەسەر ڕێکدەخرێن.',
        },
        {
          title: 'بەردەوامی چاودێری',
          body: 'ڕێنمایی و بەدواداچوونی دوای خزمەتگوزاری وەک بەشێک لە خزمەتگوزارییەکە هەژمار دەکرێت.',
        },
      ],
      leadershipEyebrow: 'شێوازی بەڕێوەبردن',
      leadershipTitle: 'دسیپلینی کارگێڕی گرنگە چونکە بوارەکە تایبەتە.',
      leadershipBody:
        'مۆدێلێکی بچووک تەنها ئەو کاتە سەرکەوتوو دەبێت کە بڕیارەکان نزیكی ئامادەیی حاڵەت و کاری ڕۆژانەی دکتۆر بمێنن.',
    },
    staff: {
      heroBadge: 'ستافی دڵ، ددان و منداڵان',
      heroTitle: 'دکتۆرەکان بناسە و لەگەڵ پسپۆڕی گونجاو وادە بگرە.',
      heroBody:
        'ستافەکە پسپۆڕانی دڵ، ددان و منداڵان لەخۆ دەگرێت و ئەزموون و بڕوانامەی بۆرد لە هەر پرۆفایلێکدا نیشان دەدرێت.',
      doctorsEyebrow: 'دکتۆر',
      doctorsTitle: 'پرۆفایلی دکتۆرانی دڵ، ددان و منداڵان بە کاتی دیاریکراو.',
      doctorsBody:
        'هەر پرۆفایلێک پسپۆڕی، ئەزموون، بڕوانامەی بۆرد، بەردەستی و جۆری حاڵەتە گونجاوەکان نیشان دەدات.',
      operatingEyebrow: 'ڕێڕەوی چاودێری',
      operatingTitle: 'چاودێری لەسەر هەڵسەنگاندن، پلان و بەدواداچوون بە سەرپەرشتی دکتۆر ڕێکدەخرێت.',
      operatingBody:
        'ئاراستەکردنی حاڵەت، ئامادەکاری و بەدواداچوون لە ناو هێکلێکی ڕووندا بەڕێوە دەچێت.',
      scopeBadge: 'چاودێری دڵ، ددان و منداڵان',
      scopeBody:
        'حاڵەتەکان لەلایەن دکتۆری گونجاوەوە هەڵدەسەنگێندرێن نەک لە ڕێڕەوی وەرگرتنی گشتی.',
      bookingFlow: 'هەنگاوەکانی حجز',
      bookingSteps: [
        '1. بەشی دڵ، ددان یان منداڵان هەڵبژێرە.',
        '2. ستاف دکتۆر، کات و هەنگاوەکانی ئامادەکاری پشتڕاست دەکاتەوە.',
        '3. ئەگەر پێویست بێت، بەدواداچوونی دواتر خشتە دەکرێت.',
      ],
      requestAppointment: 'داوای وادە',
      appointmentsEyebrow: 'وادەکان',
      appointmentsTitle: 'وادەکان دەورووبەری پشکنین و بەدواداچوون ڕێکدەخرێن.',
      appointmentsBody:
        'وادە بۆ هەڵسەنگاندنی دڵ، ددان و چاودێری منداڵان بەردەستە.',
    },
    contact: {
      heroEyebrow: 'پەیوەندی',
      heroTitle: 'گفتوگۆ دەربارەی چاودێری دڵ، ددان یان منداڵان دەست پێ بکە.',
      heroBody:
        'کەناڵەکانی پەیوەندی بۆ ئاراستەکردن، خشتەبەندی و بەدواداچوون بە شێوەی ڕێکخراو دابەش کراون.',
      deskLabel: 'مێزی ڕێکخستن',
      deskBody: 'ئاراستەکردنی حاڵەتەکانی دڵ، ددان و منداڵان.',
      reviewStaff: 'بینینی ستاف',
      getInTouchEyebrow: 'پەیوەندی',
      getInTouchTitle: 'فۆرمی حجز یان کەناڵی گونجاو بۆ حاڵەتەکە بەکاربهێنە.',
      getInTouchBody:
        'بەروارە بەردەستەکان ڕاستەوخۆ لە فۆرمەکەدا نیشان دەدرێن تاکو داواکاری لەسەر کاتێکی ڕاست بێت.',
      referralTitle: 'داواکارییەکانی ئاراستەکردن',
      referralBody:
        'دیاری بکە حاڵەتەکە بۆ دڵە، ددانە یان منداڵان، تاکو تیمەکە خێراتر بگاتە دکتۆری گونجاو.',
      responseTitle: 'چاوەڕوانی وەڵام',
      responseBody:
        'پەیوەندییەکان بە پێی کاتی پشکنین، پلان و ماوەکانی بەدواداچوون ڕێکدەخرێن.',
    },
    bookingForm: {
      eyebrow: 'نۆرەگرتن',
      title: 'داوای بەروارێکی بەردەست بکە.',
      body: 'ناو، ژمارەی مۆبایل و بەروارێکی بەردەست هەڵبژێرە.',
      availableDates: 'بەروارە بەردەستەکان',
      name: 'ناو',
      namePlaceholder: 'ناوی تەواوی نەخۆش',
      phone: 'ژمارەی مۆبایل',
      phonePlaceholder: '+964 7xx xxx xxxx',
      date: 'بەروار',
      pickDate: 'بەروارێکی بەردەست هەڵبژێرە',
      submit: 'ناردنی داواکاری',
      success: 'داواکارییەکەت بە سەرکەوتوویی ئامادە کرا.',
    },
    doctorGrid: {
      available: 'بەردەست',
      appointmentDays: 'ڕۆژانی وادە',
    },
    appointmentGrid: {
      bookButton: 'حجزکردنی ئەم وادەیە',
    },
    site: {
      siteNavigation: [
        { label: 'سەرەکی', path: '/', summary: 'خزمەتگوزاریی دڵ، ددان و منداڵان.' },
        { label: 'دەربارە', path: '/about', summary: 'فۆکەس و ستانداردەکانی چاودێری.' },
        { label: 'ستاف', path: '/staff', summary: 'پسپۆڕانی دڵ، ددان و منداڵان.' },
        { label: 'پەیوەندی', path: '/contact', summary: 'ئاراستەکردن، وادە و ڕێکخستن.' },
      ],
      keyMetrics: [
        {
          value: '3,200+',
          label: 'حاڵەتی تەواوکراو',
          detail:
            'حاڵەتەکانی دڵ، ددان و منداڵان لە هەڵسەنگاندنەوە تا بەدواداچوون ڕێکخراون.',
        },
        {
          value: '3',
          label: 'بەشی پسپۆڕی',
          detail:
            'ڕێکخراوەکە تەنها لەسەر دڵ، ددان و منداڵان فۆکەس دەکات.',
        },
        {
          value: '96%',
          label: 'تەواوبوونی بەدواداچوون',
          detail:
            'پلانی بەدواداچوون پێش کۆتایی وەرگرتنی خزمەتگوزاری پشتڕاست دەکرێتەوە.',
        },
      ],
      operatingPrinciples: [
        'بوارەکە سنووردارە: دڵ، ددان و چاودێری منداڵان.',
        'هەڵسەنگاندن، پلان و بەدواداچوون وەک یەک ڕێڕەو مامەڵەیان لەگەڵ دەکرێت.',
        'نەخۆشەکان لە خشتەی دکتۆرە دیاریکراوەکاندا دادەنرێن، نەک لە ڕیزی وەرگرتنی گشتی.',
      ],
      serviceTags: [
        { label: 'چاودێری دڵ' },
        { label: 'چاودێری ددان' },
        { label: 'چاودێری منداڵان' },
        { label: 'پشکنینی دڵ' },
        { label: 'هەڵسەنگاندنی حاڵەت' },
        { label: 'بەدواداچوونی دواتر' },
      ],
      careFeatures: [
        {
          title: 'فۆکەسی دڵ',
          body: 'هەڵسەنگاندن، خشتەبەندی و ئامادەکاری بۆ حاڵەتەکانی دڵ بە شێوەی تایبەت ڕێکخراون.',
        },
        {
          title: 'فۆکەسی ددان',
          body: 'حاڵەتەکانی ددان لە ڕێڕەوێکی جیاواز بە هەڵسەنگاندن و پلانی ڕوون بەڕێوە دەچن.',
        },
        {
          title: 'فۆکەسی منداڵان',
          body: 'حاڵەتەکانی منداڵان بە چاودێری ڕوون و ڕێنمایی گونجاو بۆ خێزان وەرگیراون.',
        },
        {
          title: 'بەردەوامی چاودێری',
          body: 'بەدواداچوون و هەنگاوەکانی دواتر دەورووبەری خزمەتگوزاریی پێشکەشکراو ڕێکدەخرێن.',
        },
      ],
      doctorProfiles: [
        {
          name: 'Dr. Darya Nadir',
          specialty: 'دڵ',
          role: 'دکتۆری دڵ',
          experience: '10 ساڵ ئەزموون',
          availability: 'دووشەممە، چوارشەممە، پێنجشەممە',
          languages: ['کوردی', 'عەرەبی', 'ئینگلیزی'],
          focus: 'حاڵەتەکانی دڵ، هەڵسەنگاندنی حاڵەت و بەدواداچوونی ڕێکخراو.',
        },
        {
          name: 'Dr. Sonya Nadir',
          specialty: 'ددان',
          role: 'دکتۆری ددان',
          experience: '5 ساڵ ئەزموون',
          availability: 'یەکشەممە، سێشەممە، پێنجشەممە',
          languages: ['کوردی', 'عەرەبی'],
          focus: 'چارەسەری ددان، هەڵسەنگاندنی حاڵەت و پلانی بەدواداچوون.',
        },
        {
          name: 'Dr. Dunya Nadir',
          specialty: 'منداڵان',
          role: 'دکتۆری منداڵان',
          experience: '5 ساڵ ئەزموون',
          availability: 'هەموو ڕۆژێک',
          languages: ['کوردی', 'عەرەبی', 'ئینگلیزی'],
          focus: 'چاودێری منداڵان، هەڵسەنگاندنی حاڵەت و بەدواداچوونی ڕێکخراو بۆ منداڵان.',
        },
        {
          name: 'Dr. Saray Abdulrahman',
          specialty: 'منداڵان',
          role: 'دکتۆری منداڵان',
          experience: '10 ساڵ ئەزموون',
          availability: 'لە دووشەممەوە تا هەینی',
          languages: ['کوردی', 'عەرەبی', 'ئینگلیزی'],
          focus: 'پشکنینی منداڵان، چاودێری بەردەوام و ڕێنمایی خێزان.',
        },
      ],
      appointmentOptions: [
        {
          title: 'هەڵسەنگاندنی دڵ',
          timing: '30 بۆ 45 خولەک',
          format: 'پشکنینی ئامادەبوون',
          summary:
            'حاڵەتەکانی دڵ بە پێی پێویستی، ئاڵۆزی و هەنگاوەکانی ئامادەکاری هەڵدەسەنگێندرێن.',
        },
        {
          title: 'هەڵسەنگاندنی ددان',
          timing: '20 بۆ 30 خولەک',
          format: 'پشکنینی ددان',
          summary:
            'حاڵەتەکانی ددان لە ڕووی وێنە، پلانی چارەسەر و بەدواداچوون هەڵدەسەنگێندرێن.',
        },
        {
          title: 'هەڵسەنگاندنی منداڵان',
          timing: '20 بۆ 30 خولەک',
          format: 'پشکنینی منداڵان',
          summary:
            'حاڵەتەکانی منداڵان بە پێی تەمەن، پێویستی و پلانی بەدواداچوون وەرگیراون.',
        },
      ],
      contactChannels: [
        {
          label: 'ئاراستەکردنی حاڵەت',
          value: 'referrals@nadirhealth.org',
          note: 'بۆ حاڵەتەکانی دڵ، ددان و منداڵان کە پێویستیان بە پشکنینی دکتۆر هەیە.',
        },
        {
          label: 'ڕێکخستنی چاودێری',
          value: 'coordination@nadirhealth.org',
          note: 'بۆ وادە، ئامادەکاری و هەماهەنگی حاڵەت.',
        },
        {
          label: 'ئۆفیسی سەرەکی',
          value: '+964 (0) 750 245 0788',
          note: 'ڕۆژانی کار، 9:00 تا 17:00 بەکاتی بەغدا.',
        },
      ],
    },
  },
  en: {
    titles: {
      '/': 'Nadir Health Organization',
      '/about': 'About | Nadir Health Organization',
      '/staff': 'Staff | Nadir Health Organization',
      '/contact': 'Contact | Nadir Health Organization',
    },
    shell: {
      brand: 'Nadir Health Organization',
      mobileTagline: 'Heart, dental, and children care',
      desktopTagline: 'Heart, dental, and children care',
      centerBadge: 'Heart, dental, and children care center',
      phone: '+964 (0) 750 245 0788',
      bookAppointment: 'Book Appointment',
      specialtyScope: 'Specialty Scope',
      specialtySummary: 'Heart, dental, and children care',
      footerTagline: 'Focused heart, dental, and children care',
      footerBody:
        'A focused care model built around heart services, dental services, children care, and structured follow-through.',
      footerCta: 'Start coordination',
      language: 'Language',
    },
    home: {
      heroBadge: 'Focused heart, dental, and children care center',
      heroTitle: 'Minimally Invasive Heart Surgery',
      heroBody:
        'Nadir Health Organization provides heart services, dental services, and children care with structured assessment, planning, and follow-up.',
      primaryCta: 'Request case review',
      secondaryCta: 'View doctors',
      heroStats: [
        { value: '3,200+', label: 'Cases completed' },
        { value: '3', label: 'Specialty lines' },
        { value: '96%', label: 'Follow-up completion' },
      ],
      heartWidgetLabel: 'Live status',
      heartWidgetValue: 'Active heart care monitoring',
      coordinationEyebrow: 'Coordination',
      coordinationTitle: 'Heart care coordination unit',
      coordinationBody: 'Assessment, planning, and structured follow-through.',
      scopeCardTitle: 'Limited service scope',
      scopeCardBody:
        'This is not a general clinic. It is limited to heart, dental, and children care.',
      accessTitle: 'Organized access',
      accessItems: [
        { value: '3', label: 'Specialty lines' },
        { value: '24/7', label: 'Coordination support' },
      ],
      aboutEyebrow: 'About us',
      aboutTitle: 'An organization with clear limits and clear purpose.',
      aboutBody:
        'The team focuses on heart, dental, and children care so planning, preparation, and follow-up stay connected.',
      learnMore: 'Learn more',
      whyEyebrow: 'Why us',
      whyTitle: 'A narrower scope makes service quality stronger.',
      whyBody:
        'Clear boundaries allow tighter scheduling, better coordination, and more reliable follow-up.',
      advancedEyebrow: 'Advanced care',
      advancedTitle: 'Heart, dental, and children care are the primary lines.',
      advancedBody:
        'A narrower organization keeps assessment, preparation, and team coordination predictable.',
      advancedCards: [
        {
          title: 'Heart care',
          body: 'Case review, schedule coordination, and structured cardiac follow-up.',
        },
        {
          title: 'Dental care',
          body: 'Dental assessment, treatment planning, and guided recovery steps.',
        },
      ],
      viewStaff: 'View staff',
      doctorsEyebrow: 'Our doctors',
      doctorsTitle: 'Heart, dental, and children specialists taking appointments.',
      doctorsBody:
        'Specialty, experience, board certification, and availability are shown clearly in each profile.',
      appointmentsEyebrow: 'Appointments',
      appointmentsTitle: 'Appointments are structured around assessment and follow-through.',
      appointmentsBody:
        'Patients can book heart care, dental care, or children care evaluations.',
      browseSchedule: 'Browse staff schedule',
      reviewEyebrow: 'Ready now',
      reviewTitle: 'Start with a heart, dental, or children care evaluation.',
      reviewBody:
        'Contact the team for referrals, planning, and follow-up coordination.',
      reviewCta: 'Contact the team',
    },
    about: {
      leadershipPoints: [
        'The service scope is intentionally limited to heart, dental, and children care.',
        'Operating decisions are made around clinician availability, case readiness, and follow-up.',
        'The organization avoids broad clinic work so its systems stay tighter and easier to manage.',
      ],
      heroEyebrow: 'About',
      heroTitle: 'Built as a focused care organization, not a general clinic.',
      heroBody:
        'Nadir Health Organization exists to provide heart, dental, and children care with clearer operating discipline and more reliable follow-through.',
      brandPrincipleLabel: 'Brand principle',
      brandPrincipleValue: 'Focused care, clear support, disciplined follow-through.',
      missionEyebrow: 'Mission',
      missionTitle:
        'Deliver heart, dental, and children care through a tighter and more predictable model.',
      missionBody:
        'The organization keeps its clinical scope narrow so review, scheduling, and follow-up stay directly connected to care delivery.',
      missionCards: [
        {
          title: 'Heart care access',
          body: 'Heart cases are reviewed against clinician schedules, patient needs, and follow-up planning.',
        },
        {
          title: 'Dental care access',
          body: 'Dental cases move through dedicated consultation, imaging review, and treatment planning.',
        },
        {
          title: 'Continuity of care',
          body: 'Instructions and follow-up are treated as part of the care workflow, not an afterthought.',
        },
      ],
      leadershipEyebrow: 'Leadership approach',
      leadershipTitle: 'Operational discipline matters because the scope is focused.',
      leadershipBody:
        'A smaller service model only works if decisions stay close to case readiness, clinician workflow, and recovery responsibility.',
    },
    staff: {
      heroBadge: 'Heart, dental, and children staff',
      heroTitle: 'Meet the doctors and book with the right specialist.',
      heroBody:
        'The staff includes heart, dental, and children specialists, with experience and board certification shown directly in each profile.',
      doctorsEyebrow: 'Doctors',
      doctorsTitle: 'A portfolio of doctors with defined booking schedules.',
      doctorsBody:
        'Each profile shows specialty, experience, board certification, availability, and the kind of cases patients can book against.',
      operatingEyebrow: 'Care pathway',
      operatingTitle: 'Care is organized around assessment, planning, and clinician-led follow-through.',
      operatingBody:
        'Case routing, preparation, and next steps are handled inside a clear operating structure.',
      scopeBadge: 'Heart, dental, and children care',
      scopeBody:
        'Cases are reviewed by the relevant specialist instead of being mixed into a broad clinic intake process.',
      bookingFlow: 'Booking flow',
      bookingSteps: [
        '1. Select the heart, dental, or children care line.',
        '2. Staff confirm the doctor, timing, and preparation steps.',
        '3. Follow-up is scheduled when required.',
      ],
      requestAppointment: 'Request appointment',
      appointmentsEyebrow: 'Appointments',
      appointmentsTitle: 'Appointments are structured around review and recovery.',
      appointmentsBody:
        'Appointments are available for heart, dental, and children care cases.',
    },
    contact: {
      heroEyebrow: 'Contact',
      heroTitle: 'Start a conversation about heart, dental, or children care.',
      heroBody:
        'Contact channels are organized for referrals, scheduling, and follow-up coordination.',
      deskLabel: 'Coordination desk',
      deskBody: 'Routing for heart, dental, and children care cases.',
      reviewStaff: 'Review staff',
      getInTouchEyebrow: 'Get in touch',
      getInTouchTitle: 'Use the booking form or the channel that matches the case.',
      getInTouchBody:
        'Available booking dates are shown directly in the form so patients can request a real slot instead of a generic callback.',
      referralTitle: 'Referral requests',
      referralBody:
        'Share whether the case is heart, dental, or children care so staff can route it to the correct doctor faster.',
      responseTitle: 'Response expectations',
      responseBody:
        'Scheduling communication is built around consultation timing, planning, and follow-up windows.',
    },
    bookingForm: {
      eyebrow: 'Book Appointment',
      title: 'Request an available booking date.',
      body:
        'Enter the patient name, phone number, and select one of the available dates shown below.',
      availableDates: 'Available dates',
      name: 'Name',
      namePlaceholder: 'Patient full name',
      phone: 'Phone number',
      phonePlaceholder: '+964 7xx xxx xxxx',
      date: 'Date',
      pickDate: 'Pick an available date',
      submit: 'Submit booking request',
      success: 'Your booking request has been prepared successfully.',
    },
    doctorGrid: {
      available: 'Available',
      appointmentDays: 'Appointment days',
    },
    appointmentGrid: {
      bookButton: 'Book this appointment',
    },
    site: {
      siteNavigation: [
        { label: 'Home', path: '/', summary: 'Heart, dental, and children care.' },
        { label: 'About', path: '/about', summary: 'Care focus and operating standards.' },
        { label: 'Staff', path: '/staff', summary: 'Heart, dental, and children specialists.' },
        { label: 'Contact', path: '/contact', summary: 'Referrals, appointments, and coordination.' },
      ],
      keyMetrics: [
        {
          value: '3,200+',
          label: 'cases completed',
          detail:
            'Heart, dental, and children care cases coordinated from assessment through follow-up.',
        },
        {
          value: '3',
          label: 'specialty lines',
          detail:
            'The organization is limited to heart care, dental care, and children care.',
        },
        {
          value: '96%',
          label: 'follow-up completion',
          detail:
            'Follow-up schedules are confirmed before discharge whenever required.',
        },
      ],
      operatingPrinciples: [
        'The clinical scope stays narrow: heart care, dental care, and children care.',
        'Assessment, planning, and follow-up are handled as one workflow.',
        'Patients are booked into named clinician schedules instead of a general intake queue.',
      ],
      serviceTags: [
        { label: 'Heart Care' },
        { label: 'Dental Care' },
        { label: 'Children Care' },
        { label: 'Cardiac Review' },
        { label: 'Case Assessment' },
        { label: 'Follow-Up Review' },
      ],
      careFeatures: [
        {
          title: 'Heart Care Focus',
          body: 'Case review, scheduling, and preparation are built specifically for heart care pathways.',
        },
        {
          title: 'Dental Care Focus',
          body: 'Dental cases follow a separate track with clear assessment and recovery planning.',
        },
        {
          title: 'Children Care Focus',
          body: 'Children cases are handled with clear review steps and appropriate family guidance.',
        },
        {
          title: 'Continuity of Care',
          body: 'Follow-up checks and next steps are structured around the service already provided.',
        },
      ],
      doctorProfiles: [
        {
          name: 'Dr. Darya Nadir',
          specialty: 'Heart',
          role: 'Board-Certified Heart Doctor',
          experience: '10 years experience',
          availability: 'Mon, Wed, Thu',
          languages: ['Kurdish', 'Arabic', 'English'],
          focus: 'Heart cases, case review, and structured cardiac follow-up.',
        },
        {
          name: 'Dr. Sonya Nadir',
          specialty: 'Teeth',
          role: 'Board-Certified Teeth Doctor',
          experience: '5 years experience',
          availability: 'Sun, Tue, Thu',
          languages: ['Kurdish', 'Arabic'],
          focus: 'Teeth treatment, dental review, and recovery planning.',
        },
        {
          name: 'Dr. Dunya Nadir',
          specialty: 'Children',
          role: 'Board-Certified Child Doctor',
          experience: '5 years experience',
          availability: 'Daily appointments',
          languages: ['Kurdish', 'Arabic', 'English'],
          focus: 'Children care, child assessment, and structured follow-up for young patients.',
        },
        {
          name: 'Dr. Saray Abdulrahman',
          specialty: 'Children',
          role: 'Board-Certified Child Doctor',
          experience: '10 years experience',
          availability: 'Mon to Fri',
          languages: ['Kurdish', 'Arabic', 'English'],
          focus: 'Children consultations, ongoing child care, and family guidance.',
        },
      ],
      appointmentOptions: [
        {
          title: 'Heart Care Evaluation',
          timing: '30 to 45 minutes',
          format: 'In-person review',
          summary:
            'Patients are assessed for heart care needs, case complexity, and preparation steps before scheduling.',
        },
        {
          title: 'Dental Care Assessment',
          timing: '20 to 30 minutes',
          format: 'In-person dental review',
          summary:
            'Dental cases are reviewed for imaging, treatment scope, and recovery needs.',
        },
        {
          title: 'Children Care Evaluation',
          timing: '20 to 30 minutes',
          format: 'Children care consultation',
          summary:
            'Children cases are assessed according to age, needs, and the appropriate follow-up pathway.',
        },
      ],
      contactChannels: [
        {
          label: 'Care Referrals',
          value: 'referrals@nadirhealth.org',
          note: 'For heart, dental, and children care cases that need clinician review.',
        },
        {
          label: 'Care Coordination',
          value: 'coordination@nadirhealth.org',
          note: 'For scheduling, preparation, and case logistics.',
        },
        {
          label: 'Main Office',
          value: '+964 (0) 750 245 0788',
          note: 'Weekdays, 9:00 to 17:00 Baghdad time.',
        },
      ],
    },
  },
  ar: {
    titles: {
      '/': 'منظمة نادر الصحية',
      '/about': 'حول | منظمة نادر الصحية',
      '/staff': 'الطاقم | منظمة نادر الصحية',
      '/contact': 'اتصال | منظمة نادر الصحية',
    },
    shell: {
      brand: 'منظمة نادر الصحية',
      mobileTagline: 'القلب والأسنان والأطفال',
      desktopTagline: 'رعاية القلب والأسنان والأطفال',
      centerBadge: 'مركز رعاية القلب والأسنان والأطفال',
      phone: '+964 (0) 750 245 0788',
      bookAppointment: 'حجز موعد',
      specialtyScope: 'نطاق التخصص',
      specialtySummary: 'القلب والأسنان والأطفال',
      footerTagline: 'رعاية متخصصة للقلب والأسنان والأطفال',
      footerBody:
        'نموذج رعاية مركز ومبني على تقييم واضح وتخطيط ومتابعة منظمة في خدمات القلب والأسنان والأطفال.',
      footerCta: 'ابدأ التنسيق',
      language: 'اللغة',
    },
    home: {
      heroBadge: 'مركز متخصص لرعاية القلب والأسنان والأطفال',
      heroTitle: 'جراحة القلب طفيفة التوغل',
      heroBody:
        'تقدم منظمة نادر الصحية خدمات القلب والأسنان والأطفال عبر تقييم منظم وتخطيط واضح ومتابعة موثوقة.',
      primaryCta: 'طلب تقييم الحالة',
      secondaryCta: 'عرض الأطباء',
      heroStats: [
        { value: '3,200+', label: 'حالة مكتملة' },
        { value: '3', label: 'مسارات تخصص' },
        { value: '96%', label: 'اكتمال المتابعة' },
      ],
      heartWidgetLabel: 'الحالة الآن',
      heartWidgetValue: 'مراقبة نشطة لرعاية القلب',
      coordinationEyebrow: 'التنسيق',
      coordinationTitle: 'وحدة تنسيق رعاية القلب',
      coordinationBody: 'تقييم وتخطيط ومتابعة منظمة للحالات.',
      scopeCardTitle: 'نطاق خدمة محدد',
      scopeCardBody: 'هذا ليس مركزاً عاماً. الخدمة محددة بالقلب والأسنان والأطفال.',
      accessTitle: 'وصول منظم',
      accessItems: [
        { value: '3', label: 'مسارات تخصص' },
        { value: '24/7', label: 'دعم التنسيق' },
      ],
      aboutEyebrow: 'حولنا',
      aboutTitle: 'منظمة بحدود واضحة وهدف واضح.',
      aboutBody:
        'يركز الفريق على القلب والأسنان والأطفال حتى تبقى الخطة والتحضير والمتابعة مرتبطة مباشرة بالرعاية.',
      learnMore: 'اعرف المزيد',
      whyEyebrow: 'لماذا نحن',
      whyTitle: 'النطاق الأضيق يحسن جودة الخدمة.',
      whyBody:
        'عندما تكون الحدود واضحة، تصبح الجدولة والتنسيق والمتابعة أكثر ضبطاً.',
      advancedEyebrow: 'رعاية متقدمة',
      advancedTitle: 'القلب والأسنان والأطفال هي الخطوط الأساسية للخدمة.',
      advancedBody:
        'الهيكل الأكثر تركيزاً يجعل التقييم والتحضير وتنسيق الفريق أكثر قابلية للتوقع.',
      advancedCards: [
        {
          title: 'رعاية القلب',
          body: 'مراجعة الحالة وتنسيق الجدول والمتابعة المنظمة لحالات القلب.',
        },
        {
          title: 'رعاية الأسنان',
          body: 'تقييم الأسنان وخطة العلاج وخطوات متابعة واضحة.',
        },
      ],
      viewStaff: 'عرض الطاقم',
      doctorsEyebrow: 'أطباؤنا',
      doctorsTitle: 'أطباء القلب والأسنان والأطفال المتاحون للحجز.',
      doctorsBody:
        'يظهر التخصص والخبرة وشهادة البورد والتوفر بشكل واضح في كل ملف.',
      appointmentsEyebrow: 'المواعيد',
      appointmentsTitle: 'تنظم المواعيد حول التقييم والمتابعة المنظمة.',
      appointmentsBody:
        'يمكن للمرضى حجز تقييم لرعاية القلب أو الأسنان أو الأطفال.',
      browseSchedule: 'عرض جدول الطاقم',
      reviewEyebrow: 'جاهز الآن',
      reviewTitle: 'ابدأ بتقييم لحالة القلب أو الأسنان أو الأطفال.',
      reviewBody:
        'تواصل مع الفريق للإحالات والتخطيط والمتابعة.',
      reviewCta: 'اتصل بالفريق',
    },
    about: {
      leadershipPoints: [
        'تم تحديد نطاق الخدمة عمداً ليشمل القلب والأسنان والأطفال فقط.',
        'تستند القرارات التشغيلية إلى جاهزية الحالة وتوفر الطبيب وخطة المتابعة.',
        'تتجنب المنظمة العمل السريري العام حتى تبقى الأنظمة أكثر إحكاماً.',
      ],
      heroEyebrow: 'حول',
      heroTitle: 'بُنيت كمنظمة رعاية مركزة، لا كعيادة عامة.',
      heroBody:
        'توجد منظمة نادر الصحية لتقديم رعاية القلب والأسنان والأطفال بانضباط تشغيلي أوضح ومتابعة أكثر موثوقية.',
      brandPrincipleLabel: 'مبدأ العلامة',
      brandPrincipleValue: 'رعاية مركزة، دعم واضح، ومتابعة منضبطة.',
      missionEyebrow: 'الرسالة',
      missionTitle:
        'تقديم رعاية القلب والأسنان والأطفال عبر نموذج أكثر إحكاماً وقابلية للتوقع.',
      missionBody:
        'يبقى النطاق السريري محدوداً حتى تظل المراجعة والجدولة والمتابعة مرتبطة مباشرة بالرعاية.',
      missionCards: [
        {
          title: 'الوصول إلى رعاية القلب',
          body: 'تراجع حالات القلب حسب جدول الطبيب واحتياج الحالة وخطة المتابعة.',
        },
        {
          title: 'الوصول إلى رعاية الأسنان',
          body: 'تمر حالات الأسنان عبر الاستشارة ومراجعة الصور وخطة العلاج.',
        },
        {
          title: 'استمرارية الرعاية',
          body: 'تعد التعليمات والمتابعة جزءاً من سير العمل وليست مرحلة لاحقة منفصلة.',
        },
      ],
      leadershipEyebrow: 'أسلوب الإدارة',
      leadershipTitle: 'الانضباط التشغيلي مهم لأن النطاق مركز.',
      leadershipBody:
        'ينجح النموذج الأصغر فقط عندما تبقى القرارات قريبة من جاهزية الحالة وسير عمل الطبيب ومسؤولية المتابعة.',
    },
    staff: {
      heroBadge: 'طاقم القلب والأسنان والأطفال',
      heroTitle: 'تعرّف على الأطباء واحجز مع الاختصاص المناسب.',
      heroBody:
        'يضم الطاقم اختصاصيي القلب والأسنان والأطفال مع إظهار الخبرة وشهادة البورد في كل ملف.',
      doctorsEyebrow: 'الأطباء',
      doctorsTitle: 'ملفات الأطباء مع جداول حجز واضحة.',
      doctorsBody:
        'يعرض كل ملف التخصص والخبرة وشهادة البورد والتوفر ونوع الحالات المناسبة له.',
      operatingEyebrow: 'مسار الرعاية',
      operatingTitle: 'تنظم الرعاية حول التقييم والتخطيط والمتابعة بقيادة الطبيب.',
      operatingBody:
        'يتم التعامل مع توجيه الحالة والتحضير والمتابعة ضمن هيكل واضح.',
      scopeBadge: 'رعاية القلب والأسنان والأطفال',
      scopeBody:
        'تراجع الحالات من قبل الاختصاص المناسب بدلاً من إدخالها في مسار عام.',
      bookingFlow: 'خطوات الحجز',
      bookingSteps: [
        '1. اختر مسار القلب أو الأسنان أو الأطفال.',
        '2. يؤكد الطاقم الطبيب والوقت وخطوات التحضير.',
        '3. تتم جدولة المتابعة عند الحاجة.',
      ],
      requestAppointment: 'طلب موعد',
      appointmentsEyebrow: 'المواعيد',
      appointmentsTitle: 'تنظم المواعيد حول المراجعة والمتابعة.',
      appointmentsBody:
        'المواعيد متاحة لحالات القلب والأسنان والأطفال.',
    },
    contact: {
      heroEyebrow: 'اتصال',
      heroTitle: 'ابدأ الحديث حول رعاية القلب أو الأسنان أو الأطفال.',
      heroBody:
        'تم تنظيم قنوات الاتصال للإحالات والجدولة والمتابعة بشكل واضح.',
      deskLabel: 'مكتب التنسيق',
      deskBody: 'توجيه حالات القلب والأسنان والأطفال.',
      reviewStaff: 'مراجعة الطاقم',
      getInTouchEyebrow: 'تواصل',
      getInTouchTitle: 'استخدم نموذج الحجز أو القناة المناسبة للحالة.',
      getInTouchBody:
        'تظهر التواريخ المتاحة مباشرة داخل النموذج لكي يطلب المريض موعداً حقيقياً.',
      referralTitle: 'طلبات الإحالة',
      referralBody:
        'اذكر إن كانت الحالة للقلب أو الأسنان أو الأطفال ليتم توجيهها سريعاً للطبيب المناسب.',
      responseTitle: 'توقعات الرد',
      responseBody:
        'ينظم التواصل حول وقت الاستشارة والتخطيط وفترات المتابعة.',
    },
    bookingForm: {
      eyebrow: 'حجز موعد',
      title: 'اطلب تاريخاً متاحاً للحجز.',
      body:
        'أدخل اسم المريض ورقم الهاتف واختر أحد التواريخ المتاحة أدناه.',
      availableDates: 'التواريخ المتاحة',
      name: 'الاسم',
      namePlaceholder: 'الاسم الكامل للمريض',
      phone: 'رقم الهاتف',
      phonePlaceholder: '+964 7xx xxx xxxx',
      date: 'التاريخ',
      pickDate: 'اختر تاريخاً متاحاً',
      submit: 'إرسال طلب الحجز',
      success: 'تم تجهيز طلب الحجز بنجاح.',
    },
    doctorGrid: {
      available: 'متاح',
      appointmentDays: 'أيام المواعيد',
    },
    appointmentGrid: {
      bookButton: 'احجز هذا الموعد',
    },
    site: {
      siteNavigation: [
        { label: 'الرئيسية', path: '/', summary: 'خدمات القلب والأسنان والأطفال.' },
        { label: 'حول', path: '/about', summary: 'تركيز الرعاية ومعايير التشغيل.' },
        { label: 'الطاقم', path: '/staff', summary: 'اختصاصيو القلب والأسنان والأطفال.' },
        { label: 'اتصال', path: '/contact', summary: 'الإحالات والمواعيد والتنسيق.' },
      ],
      keyMetrics: [
        {
          value: '3,200+',
          label: 'حالة مكتملة',
          detail:
            'تم تنسيق حالات القلب والأسنان والأطفال من التقييم حتى المتابعة.',
        },
        {
          value: '3',
          label: 'مسارات تخصص',
          detail:
            'المنظمة محددة برعاية القلب والأسنان والأطفال.',
        },
        {
          value: '96%',
          label: 'اكتمال المتابعة',
          detail:
            'تتم جدولة المتابعة قبل مغادرة الحالة كلما كان ذلك مطلوباً.',
        },
      ],
      operatingPrinciples: [
        'يبقى نطاق الرعاية مركزاً على القلب والأسنان والأطفال.',
        'يتم التعامل مع التقييم والتخطيط والمتابعة كمسار واحد.',
        'يتم حجز المرضى في جداول أطباء محددين وليس في طابور عام.',
      ],
      serviceTags: [
        { label: 'رعاية القلب' },
        { label: 'رعاية الأسنان' },
        { label: 'رعاية الأطفال' },
        { label: 'مراجعة القلب' },
        { label: 'تقييم الحالة' },
        { label: 'مراجعة المتابعة' },
      ],
      careFeatures: [
        {
          title: 'تركيز على القلب',
          body: 'تم بناء مراجعة الحالات والجدولة والتحضير خصيصاً لحالات القلب.',
        },
        {
          title: 'تركيز على الأسنان',
          body: 'تتبع حالات الأسنان مساراً منفصلاً مع تقييم واضح وخطة متابعة.',
        },
        {
          title: 'تركيز على الأطفال',
          body: 'يتم التعامل مع حالات الأطفال بمراجعة واضحة وتوجيه مناسب للعائلة.',
        },
        {
          title: 'استمرارية الرعاية',
          body: 'تتم هيكلة المتابعة والخطوات التالية حول الخدمة المقدمة فعلاً.',
        },
      ],
      doctorProfiles: [
        {
          name: 'Dr. Darya Nadir',
          specialty: 'القلب',
          role: 'طبيب قلب معتمد بالبورد',
          experience: '10 سنوات خبرة',
          availability: 'الاثنين، الأربعاء، الخميس',
          languages: ['الكردية', 'العربية', 'الإنجليزية'],
          focus: 'حالات القلب ومراجعة الحالة والمتابعة المنظمة.',
        },
        {
          name: 'Dr. Sonya Nadir',
          specialty: 'الأسنان',
          role: 'طبيبة أسنان معتمدة بالبورد',
          experience: '5 سنوات خبرة',
          availability: 'الأحد، الثلاثاء، الخميس',
          languages: ['الكردية', 'العربية'],
          focus: 'علاج الأسنان ومراجعة الحالات وخطة المتابعة.',
        },
        {
          name: 'Dr. Dunya Nadir',
          specialty: 'الأطفال',
          role: 'طبيبة أطفال معتمدة بالبورد',
          experience: '5 سنوات خبرة',
          availability: 'مواعيد يومية',
          languages: ['الكردية', 'العربية', 'الإنجليزية'],
          focus: 'رعاية الأطفال وتقييم الحالة والمتابعة المنظمة للصغار.',
        },
        {
          name: 'Dr. Saray Abdulrahman',
          specialty: 'الأطفال',
          role: 'طبيبة أطفال معتمدة بالبورد',
          experience: '10 سنوات خبرة',
          availability: 'من الاثنين إلى الجمعة',
          languages: ['الكردية', 'العربية', 'الإنجليزية'],
          focus: 'استشارات الأطفال والرعاية المستمرة وإرشاد العائلة.',
        },
      ],
      appointmentOptions: [
        {
          title: 'تقييم رعاية القلب',
          timing: '30 إلى 45 دقيقة',
          format: 'مراجعة حضورية',
          summary:
            'يتم تقييم حالات القلب من حيث الحاجة وتعقيد الحالة وخطوات التحضير قبل الجدولة.',
        },
        {
          title: 'تقييم رعاية الأسنان',
          timing: '20 إلى 30 دقيقة',
          format: 'مراجعة أسنان حضورية',
          summary:
            'تراجع حالات الأسنان من حيث الصور ونطاق العلاج واحتياجات المتابعة.',
        },
        {
          title: 'تقييم رعاية الأطفال',
          timing: '20 إلى 30 دقيقة',
          format: 'استشارة رعاية الأطفال',
          summary:
            'يتم تقييم حالات الأطفال بحسب العمر والاحتياجات ومسار المتابعة المناسب.',
        },
      ],
      contactChannels: [
        {
          label: 'إحالات الرعاية',
          value: 'referrals@nadirhealth.org',
          note: 'لحالات القلب والأسنان والأطفال التي تحتاج مراجعة الطبيب.',
        },
        {
          label: 'تنسيق الرعاية',
          value: 'coordination@nadirhealth.org',
          note: 'للمواعيد والتحضير ولوجستيات الحالة.',
        },
        {
          label: 'المكتب الرئيسي',
          value: '+964 (0) 750 245 0788',
          note: 'أيام العمل من 9:00 إلى 17:00 بتوقيت بغداد.',
        },
      ],
    },
  },
}

type I18nContextValue = {
  language: LanguageCode
  setLanguage: (language: LanguageCode) => void
  isRTL: boolean
  content: TranslationContent
  dateLocale: Locale
  formatDate: (date: Date, options?: Intl.DateTimeFormatOptions) => string
}

const I18nContext = createContext<I18nContextValue | null>(null)

const STORAGE_KEY = 'dr-darya-language'

function isRTLLanguage(language: LanguageCode) {
  return language === 'ku' || language === 'ar'
}

function getDateLocale(language: LanguageCode) {
  if (language === 'ar') return ar
  if (language === 'ku') return ckb
  return enUS
}

function getIntlLocale(language: LanguageCode) {
  if (language === 'ar') return 'ar-IQ'
  if (language === 'ku') return 'ckb-IQ'
  return 'en-US'
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<LanguageCode>(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY)
    if (saved === 'ku' || saved === 'en' || saved === 'ar') {
      return saved
    }
    return 'ku'
  })

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, language)
    document.documentElement.lang = getIntlLocale(language)
    document.documentElement.dir = isRTLLanguage(language) ? 'rtl' : 'ltr'
  }, [language])

  const value = useMemo<I18nContextValue>(() => {
    const intlLocale = getIntlLocale(language)

    return {
      language,
      setLanguage,
      isRTL: isRTLLanguage(language),
      content: translations[language],
      dateLocale: getDateLocale(language),
      formatDate: (date, options) =>
        new Intl.DateTimeFormat(intlLocale, options).format(date),
    }
  }, [language])

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useI18n() {
  const context = useContext(I18nContext)

  if (!context) {
    throw new Error('useI18n must be used within I18nProvider')
  }

  return context
}
