import React, { useState, useRef, useEffect } from 'react';

interface TransformationFeature {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Transformation: React.FC = () => {
  const [activeFeature, setActiveFeature] = useState('burn');
  const sectionRef = useRef<HTMLDivElement>(null);

  const features: TransformationFeature[] = [
    {
      id: 'burn',
      icon: (
        <img
          src="/assets/images/burnkeyssite.png"
          alt="Clé DigitGold"
          className="w-6 h-12 object-contain"
        />
      ),
      title: 'Programme de Burn',
      description:
        "80% des NFTs seront progressivement brûlés sur 5 ans, augmentant mécaniquement la rareté et la valeur potentielle des 20% restants. Chaque opération de burn est publique, traçable et irréversible.",
    },
    {
      id: 'staking',
      icon: (
        <img
          src="/assets/images/stackingdigitgoldkeys.png"
          alt="Icône Clé cadenassée"
          className="w-6 h-12 object-contain"
        />
      ),
      title: 'Staking Obligatoire',
      description:
        "Pour échanger votre NFT contre son équivalent en or physique, un staking minimum de 12 mois est requis. Cette règle crée une pression temporelle favorable et récompense les détenteurs de long terme.",
    },
    {
      id: 'fusion',
      icon: (
        <img
          src="/assets/images/fusionnftsdigirgold.png"
          alt="NFT fusionnés"
          className="w-6 h-3 object-contain"
        />
      ),
      title: 'Fusion Sur-Mesure',
      description:
        "Fusionnez plusieurs NFTs pour créer une pièce exclusive de plus grande valeur. Par exemple, combinez 3 NFTs de 2g pour obtenir un NFT unique de 6g avec un design exclusif frappé à la demande.",
    },
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
            Mécanismes de <span className="text-gold">Transformation</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Grâce à ces mécanismes innovants, votre NFT devient bien plus qu'un simple actif numérique
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
                <span className="font-serif">{feature.title}</span>
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
                    <h3 className="text-3xl font-serif text-gold mb-6">{feature.title}</h3>
                    <p className="text-lg text-offwhite/80 leading-relaxed mb-6">
                      {feature.description}
                    </p>
                    <div className="flex">
                      <div className="p-4 bg-gold/10 rounded-lg">
                        <p className="text-sm text-gold italic">
                          {feature.id === 'burn' &&
                            "Une stratégie de rareté programmée qui renforce la valeur dans le temps."}
                          {feature.id === 'staking' &&
                            "Un mécanisme d'engagement qui favorise une vision long terme."}
                          {feature.id === 'fusion' &&
                            "Une personnalisation exclusive qui augmente la valeur émotionnelle."}
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
                            className="w-20 h-20 object-contain"
                          />
                        </div>
                      </div>
                    )}

                    {feature.id === 'staking' && (
                      <div className="relative w-64 h-64 flex items-center justify-center">
                        <div className="w-48 h-48 rounded-full border-4 border-dashed border-gold/40 animate-spin-slow flex items-center justify-center">
                          <div className="w-32 h-32 bg-gold/20 rounded-full flex items-center justify-center overflow-hidden">
                            <img
                              src="/assets/images/stackingdigitgoldkeys.png"
                              alt="Clé cadenassée"
                              className="object-contain w-20 h-20"
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
