import React from 'react';
import { Sparkles, Instagram } from 'lucide-react';
import { INSTAGRAM_LINK } from '../constants';

const AIConsultant: React.FC = () => {
    return (
        <section id="ai-consultant" className="py-20 bg-gradient-to-br from-stone-900 to-dark-800 border-y border-stone-800 relative overflow-hidden">
            {/* Abstract Background Decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            
            <div className="container mx-auto px-4 max-w-4xl relative z-10 text-center">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gold-500/30 text-gold-400 text-sm mb-6 bg-gold-500/5 backdrop-blur-sm">
                    <Sparkles size={14} />
                    <span>Парфум Сомельє</span>
                </span>
                
                <h2 className="text-3xl md:text-4xl font-serif text-gold-100 mb-6">
                    Не знаєте, що обрати?
                </h2>
                
                <p className="text-stone-300 text-lg leading-relaxed max-w-2xl mx-auto mb-10">
                    Зверністься до мене в дірект, опишіть свої вподобання (наприклад: "люблю свіжі цитрусові аромати" або "хочу щось солодке та вечірнє"), розкажіть про себе і я особисто підберу ідеальні аромати для вас.
                </p>

                <a 
                    href={INSTAGRAM_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-8 py-4 bg-gold-600 hover:bg-gold-500 text-white rounded-full font-medium transition-all duration-300 tracking-wide shadow-lg shadow-gold-900/20 group"
                >
                    <Instagram className="mr-2 group-hover:scale-110 transition-transform" size={20} />
                    Отримати консультацію
                </a>
            </div>
        </section>
    );
};

export default AIConsultant;