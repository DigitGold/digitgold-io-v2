import React, { useRef, useEffect } from 'react';
import { Shield, CheckCircle2, Lock, FileCheck, Link2 } from 'lucide-react';

interface TrustFeature {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  details?: string[];
}

const TrustSection: React.FC = () => {
  const featureRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  const trustFeatures: TrustFeature[] = [
    {
      id: 1,
      icon: <Shield className="w-10 h-10 text-gold" />,
      title: "Stocké en Europe",
      description: "Votre or est stocké dans des installations hautement sécurisées en Europe, avec des normes de sécurité militaires et une assurance complète."
    },
    {
      id: 2,
      icon: <CheckCircle2 className="w-10 h-10 text-gold" />,
      title: "Audit semestriel par un tiers",
      description: "Des auditeurs indépendants vérifient l'existence et la quantité de l'or physique tous les six mois. Les rapports sont rendus publics et accessibles à tous."
    },
    {
      id: 3,
      icon: <FileCheck className="w-10 h-10 text-gold" />,
      title: "Certificats & Blockchain Proofs",
      description: "Chaque NFT est associé à un certificat numérique signé et une traçabilité complète via la blockchain Polygon.",
      details: [
        "Certificat numérique unique pour chaque NFT",
        "Lien IPFS du certificat stocké publiquement",
        "Hash de métadonnées ancré sur la blockchain",
        "Audits indépendants 2x/an, résultats accessibles",
        "Smart contract open source vérifié"
      ]
    },
    {
      id: 4,
      icon: <Lock className="w-10 h-10 text-gold" />,
      title: "Blockchain vérifiable",
      description: "Chaque NFT est lié à un smart contract sur Polygon, offrant transparence et immuabilité. La propriété est inscrite de manière permanente et vérifiable."
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
      {/* Gold particle overlay effect */}
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/6640962/pexels-photo-6640962.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=2')] bg-cover bg-fixed bg-center opacity-10 z-0"></div>
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-title">Pourquoi faire <span className="text-gold">confiance</span> à DigitGold</h2>
          <p className="section-subtitle mx-auto">
            Nous avons construit notre protocole sur des principes inébranlables de sécurité, transparence et confiance
          </p>
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
            <p className="italic text-lg text-gold-light">
              "DigitGold n'est ni une spéculation, ni une série d'art PFP. C'est une passerelle entre valeur réelle et innovation, pensée pour durer."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;