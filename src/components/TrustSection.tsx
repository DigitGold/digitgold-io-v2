import React, { useRef, useEffect } from 'react';
import { Shield, CheckCircle2, Lock, FileCheck, Link2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const TrustSection: React.FC = () => {
  const featureRefs = useRef<(HTMLDivElement | null)[]>([]);
  const { t } = useTranslation();

  const trustFeatures = [
    {
      id: 1,
      icon: <Shield className="w-10 h-10 text-gold" />,
      title: t('trust.features.storage.title'),
      description: t('trust.features.storage.description')
    },
    {
      id: 2,
      icon: <CheckCircle2 className="w-10 h-10 text-gold" />,
      title: t('trust.features.audit.title'),
      description: t('trust.features.audit.description')
    },
    {
      id: 3,
      icon: <FileCheck className="w-10 h-10 text-gold" />,
      title: t('trust.features.certificates.title'),
      description: t('trust.features.certificates.description'),
      details: t('trust.features.certificates.details', { returnObjects: true }) as string[]
    },
    {
      id: 4,
      icon: <Lock className="w-10 h-10 text-gold" />,
      title: t('trust.features.blockchain.title'),
      description: t('trust.features.blockchain.description')
    }
  ];

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
      { threshold: 0.1, rootMargin: '0px 0px -10% 0px' }
    );

    featureRefs.current.forEach((feature) => {
      if (feature) observer.observe(feature);
    });

    return () => {
      featureRefs.current.forEach((feature) => {
        if (feature) observer.unobserve(feature);
      });
    };
  }, []);

  return (
    <section id="trust" className="section relative bg-gradient-radial from-midnight-light to-midnight">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/6640962/pexels-photo-6640962.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=2')] bg-cover bg-fixed bg-center opacity-10 z-0"></div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-title">{t('trust.title')}</h2>
          <p className="section-subtitle mx-auto">{t('trust.subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {trustFeatures.map((feature, index) => (
            <div
              key={feature.id}
              ref={el => featureRefs.current[index] = el}
              className={`bg-midnight-dark/80 backdrop-blur-md p-8 rounded-xl border border-gold/10 
                transition-all duration-700 transform translate-y-10 opacity-0 
                hover:border-gold/30 hover:shadow-gold/5 hover:shadow-xl
                ${feature.id === 3 ? 'md:col-span-2' : ''}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="flex items-start gap-6">
                <div className="bg-midnight-light p-3 rounded-full flex-shrink-0">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-serif text-gold mb-3">{feature.title}</h3>
                  <p className="text-offwhite/80 leading-relaxed">{feature.description}</p>

                  {feature.details && (
                    <div className="grid md:grid-cols-2 gap-4 mt-6 pt-6 border-t border-gold/10">
                      {feature.details.map((detail, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <Link2 className="w-4 h-4 text-gold mt-1 flex-shrink-0" />
                          <span className="text-offwhite/70">{detail}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block bg-midnight-dark/80 backdrop-blur-md p-6 rounded-xl border border-gold/20 max-w-3xl">
            <p className="italic text-lg text-gold-light">{t('trust.quote')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
