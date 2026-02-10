import React, { useState, useEffect } from 'react';
import { Menu, X, Instagram, ArrowRight, Star, ChevronDown, CheckCircle } from 'lucide-react';
import { INSTAGRAM_LINK, NAV_LINKS, PERFUMES, FEATURES, REVIEWS, FAQS } from './constants';
import AIConsultant from './components/AIConsultant';

// --- UI Components ---

const Button: React.FC<{ 
  children: React.ReactNode; 
  variant?: 'primary' | 'secondary' | 'outline'; 
  href?: string;
  className?: string;
  onClick?: () => void;
}> = ({ children, variant = 'primary', href, className = '', onClick }) => {
  const baseStyles = "inline-flex items-center justify-center px-8 py-3 rounded-full font-medium transition-all duration-300 tracking-wide";
  const variants = {
    primary: "bg-gold-600 hover:bg-gold-500 text-white shadow-lg shadow-gold-900/20",
    secondary: "bg-white text-dark-900 hover:bg-stone-200",
    outline: "border border-gold-500/50 text-gold-400 hover:bg-gold-500/10 hover:border-gold-500"
  };

  if (href) {
    return (
      <a 
        href={href} 
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
        className={`${baseStyles} ${variants[variant]} ${className}`}
      >
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
};

const SectionTitle: React.FC<{ title: string; subtitle?: string; centered?: boolean }> = ({ title, subtitle, centered = true }) => (
  <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
    {subtitle && <p className="text-gold-500 font-medium tracking-widest text-xs uppercase mb-3">{subtitle}</p>}
    <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-white">{title}</h2>
    <div className={`h-1 w-20 bg-gold-600 mt-6 ${centered ? 'mx-auto' : ''}`}></div>
  </div>
);

// --- Main App ---

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-dark-900 flex flex-col font-sans">
      
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-dark-900/90 backdrop-blur-md border-b border-stone-800 py-4' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          <a href="#" className="text-2xl font-serif font-bold text-white tracking-tighter">
            ROZPYV<span className="text-gold-500">MANIA</span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="text-sm text-stone-300 hover:text-gold-400 transition-colors uppercase tracking-widest"
              >
                {link.name}
              </a>
            ))}
            <Button variant="outline" href={INSTAGRAM_LINK} className="!px-5 !py-2 text-sm">
              <Instagram size={16} className="mr-2" /> Instagram
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-dark-900 border-b border-stone-800 p-6 md:hidden flex flex-col space-y-4 animate-fade-in shadow-2xl">
            {NAV_LINKS.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsMenuOpen(false)}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="text-lg text-stone-200 hover:text-gold-500"
              >
                {link.name}
              </a>
            ))}
            <Button variant="primary" href={INSTAGRAM_LINK} className="w-full">
              Перейти в Instagram
            </Button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <header id="hero" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1547887538-e3a2f32cb1cc?auto=format&fit=crop&q=80&w=1920&h=1080" 
            alt="Luxury Perfume Background" 
            className="w-full h-full object-cover opacity-40 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/60 to-dark-900/30"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <span className="inline-block py-1 px-3 border border-gold-500/30 rounded-full text-gold-400 text-sm tracking-widest uppercase mb-6 backdrop-blur-sm">
            Exclusive Niche Perfumery
          </span>
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight">
            Мистецтво аромату <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 to-gold-600">
              доступне кожному
            </span>
          </h1>
          <p className="text-stone-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light leading-relaxed">
            Відкрийте для себе світ селективної парфумерії на розпив. 100% оригінальні аромати від кращих світових брендів з доставкою по всій Україні.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" href={INSTAGRAM_LINK}>
              <Instagram className="mr-2" size={20} /> Замовити в Instagram
            </Button>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-stone-500">
          <ChevronDown size={24} />
        </div>
      </header>

      {/* Features Section */}
      <section id="features" className="py-20 bg-dark-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {FEATURES.map((feature, idx) => (
              <div key={idx} className="p-8 rounded-2xl bg-stone-900/50 border border-stone-800 hover:border-gold-600/30 transition-all duration-300 group">
                <div className="w-14 h-14 bg-dark-800 rounded-full flex items-center justify-center mb-6 group-hover:bg-gold-500/10 transition-colors">
                  <feature.icon className="text-gold-500" size={28} />
                </div>
                <h3 className="text-xl font-serif text-white mb-3">{feature.title}</h3>
                <p className="text-stone-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Catalog Preview */}
      <section id="catalog" className="py-24 bg-dark-800">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Топ Продажів" 
            subtitle="Бестселери" 
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PERFUMES.map((perfume) => (
              <div key={perfume.id} className="group bg-dark-900 rounded-xl overflow-hidden border border-stone-800 hover:border-gold-500/30 transition-all duration-300 flex flex-col">
                <div className="relative aspect-square overflow-hidden">
                  <img 
                    src={perfume.imageUrl} 
                    alt={perfume.name} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  {perfume.isBestseller && (
                    <div className="absolute top-4 left-4 bg-gold-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-lg">
                      Хіт
                    </div>
                  )}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button variant="primary" href={INSTAGRAM_LINK} className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      Дізнатись ціну
                    </Button>
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <p className="text-gold-500 text-sm font-medium mb-1">{perfume.brand}</p>
                  <h3 className="text-xl font-serif text-white mb-3">{perfume.name}</h3>
                  <p className="text-stone-400 text-sm mb-4 line-clamp-2">{perfume.description}</p>
                  <div className="mt-auto pt-4 border-t border-stone-800">
                    <div className="flex flex-wrap gap-2">
                      {perfume.notes.slice(0, 3).map((note, idx) => (
                        <span key={idx} className="text-xs text-stone-500 bg-stone-900 px-2 py-1 rounded-md border border-stone-800">
                          {note}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-stone-400 mb-6">Це лише частина нашої колекції. Більше ароматів в Instagram.</p>
            <Button variant="outline" href={INSTAGRAM_LINK}>
              Переглянути весь асортимент <ArrowRight size={16} className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* AI Consultant */}
      <AIConsultant />

      {/* How it Works (Steps) */}
      <section className="py-20 bg-dark-900">
        <div className="container mx-auto px-4">
          <SectionTitle title="Як замовити?" centered />
          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { num: '01', title: 'Оберіть аромат', desc: 'На сторінці Instagram' },
              { num: '02', title: 'Напишіть нам', desc: 'В Direct для консультації' },
              { num: '03', title: 'Оплата', desc: 'Оплата на IBAN або карту' },
              { num: '04', title: 'Доставка', desc: 'Новою Поштою або Укрпоштою' },
            ].map((step, idx) => (
              <div key={idx} className="text-center relative">
                <div className="text-6xl font-serif text-stone-800 font-bold mb-4">{step.num}</div>
                <h4 className="text-lg font-bold text-white mb-2">{step.title}</h4>
                <p className="text-stone-400 text-sm">{step.desc}</p>
                {idx !== 3 && (
                  <div className="hidden md:block absolute top-1/2 right-[-20px] -translate-y-1/2 text-stone-800">
                    <ArrowRight size={24} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="py-20 bg-stone-900/30">
        <div className="container mx-auto px-4">
          <SectionTitle title="Що кажуть клієнти" subtitle="Відгуки" centered />
          <div className="grid md:grid-cols-3 gap-8">
            {REVIEWS.map((review) => (
              <div key={review.id} className="bg-dark-900 p-6 rounded-xl border border-stone-800">
                <div className="flex gap-1 text-gold-500 mb-4">
                  {[...Array(review.rating)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <p className="text-stone-300 mb-6 italic">"{review.comment}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center text-stone-400 font-bold">
                    {review.name.charAt(0)}
                  </div>
                  <span className="text-white font-medium">{review.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-dark-900">
        <div className="container mx-auto px-4 max-w-3xl">
          <SectionTitle title="Питання та відповіді" centered />
          <div className="space-y-4">
            {FAQS.map((faq, idx) => (
              <div key={idx} className="border border-stone-800 rounded-lg overflow-hidden">
                <div className="p-4 bg-stone-900/50">
                  <h4 className="font-medium text-white flex items-start gap-3">
                     <span className="text-gold-500">Q:</span> {faq.question}
                  </h4>
                </div>
                <div className="p-4 bg-dark-900 text-stone-400 text-sm border-t border-stone-800">
                   {faq.answer}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO & Footer */}
      <footer className="bg-black py-16 border-t border-stone-900 text-sm">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-1">
              <a href="#" className="text-xl font-serif font-bold text-white block mb-4">
                ROZPYV<span className="text-gold-500">MANIA</span>
              </a>
              <p className="text-stone-500 mb-6">
                Твій путівник у світ нішевої парфумерії. Тільки оригінали, тільки найкращі емоції.
              </p>
              <div className="flex gap-4">
                <a href={INSTAGRAM_LINK} className="text-stone-400 hover:text-white transition-colors">
                  <Instagram size={24} />
                </a>
              </div>
            </div>
            
            <div>
              <h5 className="text-white font-bold mb-4 uppercase tracking-wider text-xs">Навігація</h5>
              <ul className="space-y-2 text-stone-500">
                {NAV_LINKS.map(link => (
                  <li key={link.name}>
                    <a 
                      href={link.href} 
                      target={link.href.startsWith('http') ? '_blank' : undefined}
                      rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="hover:text-gold-500 transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="md:col-span-2">
              <h5 className="text-white font-bold mb-4 uppercase tracking-wider text-xs">Популярні запити (SEO)</h5>
              <div className="flex flex-wrap gap-2 text-stone-600 text-xs">
                <span>нішева парфумерія Україна</span> •
                <span>розпив парфумів Київ</span> •
                <span>купити Baccarat Rouge 540 оригінал</span> •
                <span>атомайзери для парфумів</span> •
                <span>подарунок дівчині парфуми</span> •
                <span>Ganymede розпив</span> •
                <span>Tiziana Terenzi Kirke ціна</span> •
                <span>парфумерний гардероб</span> •
                <span>консультація парфумера онлайн</span>
              </div>
            </div>
          </div>
          
          <div className="border-t border-stone-900 pt-8 flex flex-col md:flex-row justify-between items-center text-stone-600 text-xs">
            <p>&copy; {new Date().getFullYear()} Rozpyvmania. Всі права захищено.</p>
            <p className="mt-2 md:mt-0">Made for perfume lovers.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;