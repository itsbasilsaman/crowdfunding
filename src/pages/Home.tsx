// src/pages/Home.tsx

import React, { useRef, useEffect, useState } from 'react';
import { FaRocket, FaUsers, FaChartLine, FaHandHoldingUsd, FaRegLightbulb, FaRegCheckCircle } from 'react-icons/fa';


const stats = [
  { label: 'Founders', value: 120, icon: <FaUsers /> },
  { label: 'Investors', value: 300, icon: <FaHandHoldingUsd /> },
  { label: 'Raised', value: 50000, suffix: ' AED', icon: <FaChartLine /> },
  { label: 'Live', value: 15, icon: <FaRegCheckCircle /> },
  { label: 'Funds', value: 120000, suffix: ' AED', icon: <FaRegLightbulb /> },
  { label: 'Running', value: 8, icon: <FaRocket /> },
];

const fundingStages = [
  "Ideation", "Pre-Seed", "Seed", "Series A", "Series B", "Series C", "IPO"
];

interface HomeProps {
  onNavigate: (page: string) => void;
  language?: 'en' | 'ar';
}



const Home: React.FC<HomeProps> = ({ onNavigate, language = 'en' }) => {
  React.useEffect(() => {
    // Update all elements with data-en/data-ar
    const lang = language;
    document.querySelectorAll('[data-en], [data-ar]').forEach((el) => {
      const element = el as HTMLElement;
      const text = element.getAttribute(`data-${lang}`);
      if (text) element.textContent = text;
    });
    // Set direction on body or main section
    const main = document.getElementById('main-home-section');
    if (main) main.dir = lang === 'ar' ? 'rtl' : 'ltr';
  }, [language]);

  const isArabic = language === 'ar';
  // Animated count-up logic
  const statsRef = useRef<HTMLDivElement>(null);
  const [startCount, setStartCount] = useState(false);
  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    const handleScroll = () => {
      if (!statsRef.current) return;
      const rect = statsRef.current.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        setStartCount(true);
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!startCount) return;
    let frame: number;
    const duration = 2000; // ms
    const start = performance.now();
    const animate = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      setCounts(stats.map(s => Math.floor(progress * s.value)));
      if (progress < 1) {
        frame = requestAnimationFrame(animate);
      } else {
        setCounts(stats.map(s => s.value));
      }
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
    // eslint-disable-next-line
  }, [startCount]);

  return (
    <section
      id="main-home-section"
      className={`w-full pt-24 sm:pt-32 pb-4 bg-white min-h-screen font-montserrat transition-colors duration-300 ${isArabic ? 'text-right' : 'text-left'}`}
      dir={isArabic ? 'rtl' : 'ltr'}
    >
    <div className="max-w-5xl mx-auto px-4">
      {/* Intro Section */}
      <div className="mb-12 text-center flex flex-col items-center">
        <h1 className="text-5xl md:text-6xl font-extrabold text-[#222] mb-4 leading-tight tracking-tight drop-shadow-sm"     style={{
        fontFamily: "'Montserrat', system-ui, Avenir, Helvetica, Arial, sans-serif", letterSpacing: '-1px'
      }}>
          <span data-en="Crowdfunding" data-ar="التمويل الجماعي">Crowdfunding</span> <span className="text-[#eb1478]" data-en="Prosperity" data-ar="الازدهار">Prosperity</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-6 max-w-2xl font-medium">
          <span data-en="Empower founders with a vision, supporting startups from " data-ar="مكّن المؤسسين أصحاب الرؤية، وادعم الشركات الناشئة من ">Empower founders with a vision, supporting startups from </span>
          <span className="text-[#eb1478] font-semibold" data-en="Ideation" data-ar="الفكرة">Ideation</span>
          <span data-en=" to " data-ar=" إلى "> to </span>
          <span className="text-[#eb1478] font-semibold" data-en="IPO" data-ar="الاكتتاب العام">IPO</span>
          <span data-en=" with verified projects—100% non-profit." data-ar=" مع مشاريع موثوقة - غير ربحية بالكامل."> with verified projects—100% non-profit.</span>
        </p>
        <div className="flex flex-wrap justify-center gap-4 mt-2">
          <button
            className="bg-[#eb1478] hover:bg-[#c0105e] text-white font-bold px-8 py-3 rounded-full shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#eb1478] focus:ring-offset-2 text-lg"
            onClick={() => onNavigate('start-project')}
          >
            <span data-en="Get Started" data-ar="ابدأ الآن">Get Started</span>
          </button>
          <button
            className="bg-white border-2 border-[#eb1478] text-[#eb1478] font-bold px-8 py-3 rounded-full shadow hover:bg-[#eb1478] hover:text-white transition-all duration-200 text-lg"
            onClick={() => onNavigate('projects')}
          >
            <span data-en="Explore Projects" data-ar="استكشف المشاريع">Explore Projects</span>
          </button>
        </div>
      </div>
      {/* Founders & Investors Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="rounded-3xl bg-white p-8 flex flex-col justify-between h-full shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow duration-300 relative overflow-hidden group">
          <div className="absolute -top-8 -right-8 opacity-10 text-[#eb1478] text-8xl pointer-events-none group-hover:opacity-20 transition-opacity duration-300"><FaRocket /></div>
          <h2 className="text-2xl font-bold text-[#eb1478] mb-3 text-center" data-en="For Founders" data-ar="للمؤسسين">For Founders</h2>
          <p className="text-gray-700 mb-4 text-center font-medium">
            <span data-en="Launch verified projects and share " data-ar="أطلق مشاريع موثوقة وشارك ">Launch verified projects and share </span>
            <span className="text-[#eb1478] font-semibold" data-en="10% equity" data-ar="10% من الأسهم">10% equity</span>
            <span data-en=" with the platform—no personal funding loss." data-ar=" مع المنصة - بدون خسارة تمويل شخصي."> with the platform—no personal funding loss.</span>
          </p>
          <div className="flex justify-center space-x-3 mt-2">
            <a href="https://chat.whatsapp.com/BwkEsUmbRERGsnriJuHR2R" target="_blank" rel="noopener noreferrer"
              className="bg-[#eb1478] hover:bg-[#c0105e] text-white font-semibold px-6 py-2 rounded-full shadow transition-all duration-200">
              <span data-en="Join Group" data-ar="انضم للمجموعة">Join Group</span>
            </a>
            <button className="bg-white border-2 border-[#eb1478] text-[#eb1478] font-semibold px-6 py-2 rounded-full shadow hover:bg-[#eb1478] hover:text-white transition-all duration-200"
              onClick={() => onNavigate('start-project')}>
              <span data-en="Start Project" data-ar="ابدأ مشروع">Start Project</span>
            </button>
          </div>
        </div>
        <div className="rounded-3xl bg-white p-8 flex flex-col justify-between h-full shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow duration-300 relative overflow-hidden group">
          <div className="absolute -top-8 -right-8 opacity-10 text-[#eb1478] text-8xl pointer-events-none group-hover:opacity-20 transition-opacity duration-300"><FaHandHoldingUsd /></div>
          <h2 className="text-2xl font-bold text-[#eb1478] mb-3 text-center" data-en="For Investors" data-ar="للمستثمرين">For Investors</h2>
          <p className="text-gray-700 mb-4 text-center font-medium">
            <span data-en="Invest from " data-ar="استثمر من ">Invest from </span>
            <span className="text-[#eb1478] font-semibold" data-en="100 AED" data-ar="100 درهم">100 AED</span>
            <span data-en=" in verified projects and earn dividends with up to " data-ar=" في مشاريع موثوقة واربح أرباحًا سنوية تصل إلى "> in verified projects and earn dividends with up to </span>
            <span className="text-[#eb1478] font-semibold" data-en="90% profit share" data-ar="90% من الأرباح">90% profit share</span>
            <span data-en=" annually." data-ar=" سنويًا."> annually.</span>
          </p>
          <div className="flex justify-center space-x-3 mt-2">
            <button onClick={() => onNavigate('projects')}
              className="bg-[#eb1478] hover:bg-[#c0105e] text-white font-semibold px-6 py-2 rounded-full shadow transition-all duration-200">
              <span data-en="Invest Now" data-ar="استثمر الآن">Invest Now</span>
            </button>
          </div>
        </div>
      </div>
      {/* Funding Stages */}
      <div className="mb-12">
  <h2 className="text-2xl font-bold text-[#222] mb-5 text-center tracking-tight" data-en="Funding Stages" data-ar="مراحل التمويل">Funding Stages</h2>
        <div className="grid grid-cols-2 md:grid-cols-7 gap-3">
          {fundingStages.map((stage, i) => (
            <div key={stage} className="bg-white rounded-xl shadow-md p-4 flex flex-col items-center justify-center border border-gray-100 relative overflow-hidden group hover:shadow-xl transition-shadow duration-300">
              <span className="text-[#eb1478] text-2xl mb-1">{i === 0 ? <FaRegLightbulb /> : i === fundingStages.length-1 ? <FaRegCheckCircle /> : <FaChartLine />}</span>
              <p className="text-base font-semibold text-[#222] text-center mt-1" data-en={stage} data-ar={
                [
                  "الفكرة", "ما قبل البذرة", "البذرة", "السلسلة أ", "السلسلة ب", "السلسلة ج", "الاكتتاب العام"
                ][i]
              }>{stage}</p>
            </div>
          ))}
        </div>
        <p className="text-base text-gray-600 mt-5 text-center italic">
          <span data-en="A " data-ar="استثمار بقيمة ">A </span>
          <span className="text-[#eb1478] font-semibold" data-en="100 AED" data-ar="100 درهم">100 AED</span>
          <span data-en=" investment can transform a startup and yield rich returns." data-ar=" يمكن أن يغير شركة ناشئة ويحقق عوائد كبيرة."> investment can transform a startup and yield rich returns.</span>
        </p>
        <div className="flex justify-center mt-4">
          <button className="bg-[#eb1478] hover:bg-[#c0105e] text-white font-bold px-8 py-3 rounded-full shadow-lg transition-all duration-200 text-lg"
            onClick={() => window.open('https://chat.whatsapp.com/BwkEsUmbRERGsnriJuHR2R', '_blank')}>
            <span data-en="Donate" data-ar="تبرع">Donate</span>
          </button>
        </div>
        <p className="text-xs text-gray-500 mt-3 text-center">
          <span data-en="Via WhatsApp: " data-ar="عبر واتساب: ">Via WhatsApp: </span>
          <a href="https://chat.whatsapp.com/BwkEsUmbRERGsnriJuHR2R"
            target="_blank" rel="noopener noreferrer"
            className="text-[#eb1478] underline font-semibold"
            data-en="Join" data-ar="انضم">Join</a>
        </p>
      </div>
      {/* Platform Statistics */}
      <div ref={statsRef} className="bg-white rounded-3xl shadow-xl p-8 mb-12 border border-gray-100">
        <h2 className="text-2xl font-bold text-[#222] mb-6 text-center tracking-tight" data-en="Platform Statistics" data-ar="إحصائيات المنصة">Platform Statistics</h2>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
          {stats.map((stat, i) => (
            <div key={stat.label} className="flex flex-col items-center justify-center p-3 animate-fade-in-up">
              <span className="text-3xl text-[#eb1478] mb-2">{stat.icon}</span>
              <span className="text-2xl font-extrabold text-[#222] mb-1">
                {counts[i].toLocaleString()}{stat.suffix || ''}
              </span>
              <span className="text-sm font-medium text-gray-600" data-en={stat.label} data-ar={
                [
                  "المؤسسون", "المستثمرون", "المبلغ المجموع", "مشاريع نشطة", "الأموال", "قيد التشغيل"
                ][i]
              }>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
      {/* Join the Movement / CTA */}
      <div className="bg-gradient-to-r from-white via-[#fce4f2] to-white rounded-3xl shadow-xl p-8 mb-12 flex flex-col md:flex-row items-center justify-between border border-gray-100">
        <div className="flex-1 mb-4 md:mb-0">
          <h2 className="text-2xl font-bold text-[#eb1478] mb-3 text-center md:text-left" data-en="Join the Movement" data-ar="انضم للحركة">Join the Movement</h2>
          <p className="text-gray-700 text-center md:text-left font-medium">
            <span data-en="The platform takes " data-ar="تأخذ المنصة ">The platform takes </span>
            <span className="text-[#eb1478] font-semibold" data-en="10% equity" data-ar="10% من الأسهم">10% equity</span>
            <span data-en=", enabling investor dividends from profits." data-ar=", مما يتيح أرباحًا للمستثمرين من العوائد.">, enabling investor dividends from profits.</span>
          </p>
        </div>
        <div className="flex space-x-3">
          <button className="bg-[#eb1478] hover:bg-[#c0105e] text-white font-bold px-8 py-3 rounded-full shadow-lg transition-all duration-200 text-lg"
            onClick={() => onNavigate('projects')}>
            <span data-en="Invest" data-ar="استثمر">Invest</span>
          </button>
          <button className="bg-white border-2 border-[#eb1478] text-[#eb1478] font-bold px-8 py-3 rounded-full shadow hover:bg-[#eb1478] hover:text-white transition-all duration-200 text-lg"
            onClick={() => onNavigate('start-project')}>
            <span data-en="Launch" data-ar="أطلق">Launch</span>
          </button>
        </div>
      </div>
      {/* Leadership Section */}
      <div className="bg-white rounded-3xl shadow-xl p-8 mb-6 grid grid-cols-1 md:grid-cols-2 gap-8 border border-gray-100">
        <div className="flex flex-col items-center justify-center text-center">
          <h3 className="text-xl font-bold text-[#eb1478] mb-2" data-en="For Founders" data-ar="للمؤسسين">For Founders</h3>
          <p className="text-gray-700 mb-3 font-medium">
            <span data-en="Led by " data-ar="بقيادة ">Led by </span>
            <span className="text-[#eb1478] font-semibold" data-en="CEO Asif Azad" data-ar="المدير التنفيذي آصف أزاد">CEO Asif Azad</span>
            <span data-en=", grow your business with " data-ar="، نم عملك مع ">, grow your business with </span>
            <span className="text-[#eb1478] font-semibold" data-en="10% equity partnership" data-ar="شراكة أسهم 10%">10% equity partnership</span>
            <span data-en="." data-ar=".">.</span>
          </p>
          <button className="bg-[#eb1478] hover:bg-[#c0105e] text-white font-bold px-8 py-3 rounded-full shadow-lg transition-all duration-200 text-lg"
            onClick={() => onNavigate('start-project')}>
            <span data-en="Start" data-ar="ابدأ">Start</span>
          </button>
        </div>
        <div className="flex flex-col items-center justify-center text-center">
          <h3 className="text-xl font-bold text-[#eb1478] mb-2" data-en="For Investors" data-ar="للمستثمرين">For Investors</h3>
          <p className="text-gray-700 mb-3 font-medium">
            <span data-en="Earn dividends from curated startups via " data-ar="اربح أرباحًا من شركات ناشئة مختارة عبر ">Earn dividends from curated startups via </span>
            <span className="text-[#eb1478] font-semibold" data-en="10% platform equity" data-ar="10% من أسهم المنصة">10% platform equity</span>
            <span data-en=" with annual returns." data-ar=" مع عوائد سنوية."> with annual returns.</span>
          </p>
          <button className="bg-[#eb1478] hover:bg-[#c0105e] text-white font-bold px-8 py-3 rounded-full shadow-lg transition-all duration-200 text-lg"
            onClick={() => onNavigate('projects')}>
            <span data-en="Invest" data-ar="استثمر">Invest</span>
          </button>
        </div>
      </div>

    </div>
    {/* Subtle divider for visual hierarchy */}
    <div className="w-full h-1 bg-gradient-to-r from-transparent via-gray-200 to-transparent my-8 rounded-full" />
  </section>
  );
}

export default Home;
