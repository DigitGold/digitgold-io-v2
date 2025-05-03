import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

interface TransformationFeature {
  id: 'burn' | 'staking' | 'fusion';
  icon: React.ReactNode;
}

const Transformation: React.FC = () => {
  const [activeFeature, setActiveFeature] = useState<'burn' | 'staking' | 'fusion'>('burn');
  const sectionRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();

  const features: TransformationFeature[] = [
    {
      id: 'burn',
      icon: (
        <img
          src="/assets/images/burnkeyssite.png"
          alt="Clé DigitGold"
          className="w-6 h-12 object-contain"
        />
      )
    },
    {
      id: 'staking',
      icon: (
        <img
          src="/assets/images/stackingdigitgoldkeys.png"
          alt="Icône Clé cadenassée"
          className="w-6 h-12 object-contain"
        />
      )
    },
    {
      id: 'fusion',
      icon: (
        <img
          src="/assets/images/fusionnftsdigirgold.png"
          alt="NFT fusionnés"
          className="w-24 h-12 object-contain"
        />
      )
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
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="section bg-midnight relative transition-all duration-1000 transform translate-y-10 opacity-0"
    >
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title">
            {t('transformation.title')}
            <span className="text-gold"> {t('')}</span>
          </h2>
          <p className="section-subtitle mx-auto">
            {t('transformation.subtitle')}
          </p>
        </div>

        <div className="bg-midnight-dark/80 backdrop-blur-md rounded-2xl border border-gold/10 overflow-hidden">
          {/* Tabs */}
          <div className="flex border-b border-gold/10">
            {features.map((feature) => (
              <button
                key={feature.id}
                onClick={() => setActiveFeature(feature.id)}
                className={`flex-1 py-4 px-4 text-center transition-colors ${
                  activeFeature === feature.id
                    ? 'bg-gold/10 text-gold border-b-2 border-gold'
                    : 'text-offwhite/70 hover:bg-midnight-light'
                }`}
              >
                <div className="flex items-center justify-center mb-2">
                  {feature.icon}
                </div>
                <span className="font-serif">
                  {t(`transformation.features.${feature.id}.title`)}
                </span>
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="p-8 md:p-12">
            {features.map((feature) => (
              <div
                key={feature.id}
                className={`transition-opacity duration-300 ${
                  activeFeature === feature.id ? 'block opacity-100' : 'hidden opacity-0'
                }`}
              >
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="md:w-1/2">
                    <h3 className="text-3xl font-serif text-gold mb-6">
                      {t(`transformation.features.${feature.id}.title`)}
                    </h3>
                    <p className="text-lg text-offwhite/80 leading-relaxed mb-6">
                      {t(`transformation.features.${feature.id}.description`)}
                    </p>
                    <div className="flex">
                      <div className="p-4 bg-gold/10 rounded-lg">
                        <p className="text-sm text-gold italic">
                          {t(`transformation.features.${feature.id}.note`)}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="md:w-1/2 flex justify-center">
                    {feature.id === 'burn' && (
                      <div className="relative w-64 h-64 flex items-center justify-center">
                        <div className="absolute w-full h-full bg-gold/20 rounded-full animate-pulse-slow" />
                        <div className="absolute w-3/4 h-3/4 bg-gold/30 rounded-full" />
                        <div className="absolute w-1/2 h-1/2 bg-gold/40 rounded-full flex items-center justify-center">
                          <img
                            src="/assets/images/burnkeyssite.png"
                            alt="Clé DigitGold"
                            className="w-22 h-22 object-contain"
                          />
                        </div>
                      </div>
                    )}

                    {feature.id === 'staking' && (
                      <div className="relative w-72 h-72 flex items-center justify-center">
                        <div className="w-68 h-68 rounded-full border-4 border-dashed border-gold/40 animate-spin-slow flex items-center justify-center">
                          <div className="w-64 h-64 bg-gold/20 rounded-full flex items-center justify-center overflow-hidden">
                            <img
                              src="/assets/images/stackingdigitgoldkeys.png"
                              alt="Clé cadenassée"
                              className="object-contain w-21 h-21"
                            />
                          </div>
                        </div>
                      </div>
                    )}

                    {feature.id === 'fusion' && (
                      <div className="relative w-250 h-125 flex items-center justify-center">
                        <img
                          src="/assets/images/fusionnftsdigirgold.png"
                          alt="NFT fusionnés"
                          className="object-contain w-full h-full rounded-lg shadow-lg"
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Transformation;
