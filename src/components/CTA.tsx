import React, { useRef, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const CTA: React.FC = () => {
  const ctaRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100');
            entry.target.classList.remove('translate-y-10', 'opacity-0');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (ctaRef.current) {
      observer.observe(ctaRef.current);
    }

    return () => {
      if (ctaRef.current) {
        observer.unobserve(ctaRef.current);
      }
    };
  }, []);

  const handleOpenModal = () => {
    const modal = document.getElementById('lead-capture-modal');
    if (modal) {
      modal.classList.remove('hidden');
    }
  };

  return (
    <section className="py-24 bg-gradient-to-b from-midnight to-midnight-dark relative">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1629236/pexels-photo-1629236.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=2')] bg-cover bg-center opacity-10 z-0"></div>

      <div
        ref={ctaRef}
        className="container-custom relative z-10 transition-all duration-1000 transform translate-y-10 opacity-0"
      >
        <div className="bg-midnight-light/30 backdrop-blur-md rounded-2xl p-12 border border-gold/20 shadow-2xl shadow-gold/5 text-center">
          <h2 className="font-serif text-4xl md:text-5xl mb-6">
            {t('cta.title.part1')} <span className="text-gold">{t('cta.title.highlight')}</span> ?
          </h2>

          <p className="text-xl text-offwhite/80 max-w-3xl mx-auto mb-12">
            {t('cta.description')}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button
              onClick={handleOpenModal}
              className="btn-primary rounded-full text-lg px-8 py-4 shadow-lg shadow-gold/20 group"
            >
              {t('cta.button.reserve')}
              <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href="https://opensea.io"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline rounded-full text-lg"
            >
              {t('cta.button.opensea')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
