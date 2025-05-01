import React, { useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const titleElement = titleRef.current;
    if (!titleElement) return;

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

    observer.observe(titleElement);

    return () => {
      if (titleElement) observer.unobserve(titleElement);
    };
  }, []);

  const handleOpenModal = () => {
    const modal = document.getElementById('lead-capture-modal');
    if (modal) {
      modal.classList.remove('hidden');
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-40">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-midnight to-midnight-light opacity-90 z-0"></div>

      {/* Gold particle effect (simulated here) */}
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/4644812/pexels-photo-4644812.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=2')] bg-cover bg-center opacity-20 z-0"></div>

      <div className="container-custom relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <h1
          ref={titleRef}
          className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight mb-8 transition-all duration-1000 transform translate-y-10 opacity-0"
        >
          Et si votre prochain <span className="text-gold">NFT</span> représentait <br className="hidden md:block" />
          <span className="text-gold">2 grammes d'or réel</span>,<br className="hidden md:block" />
          stocké en Europe, vérifiable sur la blockchain ?
        </h1>

        <p className="text-xl md:text-2xl text-offwhite/80 max-w-3xl mx-auto mb-12 animate-pulse-slow">
          Une nouvelle approche du patrimoine à la croisée de l'investissement et du numérique.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <button
            onClick={handleOpenModal}
            className="btn-primary rounded-full text-lg px-8 py-4 shadow-lg shadow-gold/20"
          >
            Découvrir la Réserve
          </button>

          <a
            href="#story"
            className="btn-outline rounded-full text-lg"
          >
            Notre Histoire
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#story" className="text-gold">
          <ChevronDown className="w-8 h-8" />
        </a>
      </div>
    </div>
  );
};

export default Hero;
