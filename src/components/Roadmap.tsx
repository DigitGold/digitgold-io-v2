import React, { useRef, useEffect } from 'react';
import { Calendar, Users, Wallet, Building2, Globe2, CreditCard } from 'lucide-react';

interface RoadmapItem {
  id: number;
  period: string;
  title: string;
  description: string[];
  icon: React.ReactNode;
}

const Roadmap: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  const roadmapItems: RoadmapItem[] = [
    {
      id: 1,
      period: "Q2 2025",
      title: "Lancement initial",
      description: [
        "Lancement de DigitGold Collection 1 (5000 NFTs de 2g)",
        "Déploiement sur Polygon avec paiement en $MATIC",
        "Stockage sécurisé en Europe (hors Suisse)",
        "Audit de la réserve semestriel par organisme externe",
        "Intégration d'une galerie immersive dédiée"
      ],
      icon: <Calendar className="w-8 h-8 text-gold" />
    },
    {
      id: 2,
      period: "Q3 2025",
      title: "Croissance organique & communauté",
      description: [
        "Mise en place du lead magnet (capture d'emails)",
        "Lancement d'un mini-site éducatif sur l'or et les NFT",
        "Influenceurs ciblés Web3 / Finance / Précieux",
        "Préparation du staking des NFTs"
      ],
      icon: <Users className="w-8 h-8 text-gold" />
    },
    {
      id: 3,
      period: "Q4 2025",
      title: "Fonction Staking & fusion exclusive",
      description: [
        "Déblocage du staking (1 an minimum) → droit au burn",
        "Lancement du système de burn/fusion pour upgrade",
        "Premier NFT \"spécial\" pour les stackeurs fidèles"
      ],
      icon: <Wallet className="w-8 h-8 text-gold" />
    },
    {
      id: 4,
      period: "2026",
      title: "Nouvelle collection & infrastructure",
      description: [
        "Création d'une Collection 2 avec variation de grammage",
        "Intégration avec des wallets mobiles pour simplifier l'accès",
        "Déploiement d'un tableau de bord utilisateur"
      ],
      icon: <Building2 className="w-8 h-8 text-gold" />
    },
    {
      id: 5,
      period: "2027",
      title: "Marketplace & institutionnels",
      description: [
        "Lancement d'un mini-market secondaire natif (KYC requis)",
        "Ouverture de la plateforme B2B (revendeurs, family offices)",
        "Début d'une campagne d'évangélisation institutionnelle"
      ],
      icon: <Globe2 className="w-8 h-8 text-gold" />
    },
    {
      id: 6,
      period: "2028",
      title: "Expansion physique & conformité",
      description: [
        "Projet de carte physique de garde ou d'accès",
        "Alignement avec réglementations européennes à venir",
        "Roadshow mondial + Conférence annuelle DigitGold",
        "Objectif : Or tokenisé = nouvelle norme d'épargne alternative"
      ],
      icon: <CreditCard className="w-8 h-8 text-gold" />
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

    itemRefs.current.forEach((item) => {
      if (item) observer.observe(item);
    });

    return () => {
      itemRefs.current.forEach((item) => {
        if (item) observer.unobserve(item);
      });
    };
  }, []);

  return (
    <section className="section bg-midnight relative">
      {/* Background effect */}
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/4386366/pexels-photo-4386366.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=2')] bg-cover bg-center opacity-10 z-0"></div>
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-title">Notre <span className="text-gold">Vision</span> Long Terme</h2>
          <p className="section-subtitle mx-auto">
            Une feuille de route ambitieuse pour révolutionner l'investissement dans l'or
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {roadmapItems.map((item, index) => (
            <div
              key={item.id}
              ref={el => itemRefs.current[index] = el}
              className="bg-midnight-dark/80 backdrop-blur-md p-8 rounded-xl border border-gold/10 transition-all duration-700 transform translate-y-10 opacity-0 hover:border-gold/30"
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-midnight-light p-3 rounded-full">
                  {item.icon}
                </div>
                <div>
                  <div className="text-gold font-serif text-2xl">{item.period}</div>
                  <h3 className="text-xl text-offwhite">{item.title}</h3>
                </div>
              </div>
              
              <ul className="space-y-3">
                {item.description.map((desc, i) => (
                  <li key={i} className="text-offwhite/80 flex items-start">
                    <span className="text-gold mr-2">•</span>
                    <span>{desc}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Roadmap;