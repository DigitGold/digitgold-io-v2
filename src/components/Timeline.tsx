import React, { useEffect, useRef } from 'react';
import { Circle, CircleDot } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Timeline: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const blockRefs = useRef<(HTMLDivElement | null)[]>([]);
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
      { threshold: 0.1, rootMargin: '0px 0px -10% 0px' }
    );
    
    blockRefs.current.forEach((block) => {
      if (block) observer.observe(block);
    });
    
    return () => {
      blockRefs.current.forEach((block) => {
        if (block) observer.unobserve(block);
      });
    };
  }, []);
  
  const storyBlocks = [
    {
      id: 1,
      title: t('story.blocks.idea.title'),
      description: t('story.blocks.idea.description'),
      icon: "✨"
    },
    {
      id: 2,
      title: t('story.blocks.reserve.title'),
      description: t('story.blocks.reserve.description'),
      icon: "🏛️"
    },
    {
      id: 3,
      title: t('story.blocks.mechanism.title'),
      description: t('story.blocks.mechanism.description'),
      icon: "⚙️"
    },
    {
      id: 4,
      title: t('story.blocks.legacy.title'),
      description: t('story.blocks.legacy.description'),
      icon: "🔄"
    }
  ];
  
  return (
    <section id="story" ref={sectionRef} className="section bg-midnight-light relative">
      <div className="container-custom">
        <div className="text-center mb-16">
        <h2 className="section-title">
  {t('story.title.first')} <span className="text-gold">{t('story.title.highlight')}</span></h2>
            <p className="section-subtitle mx-auto">
              {t('story.subtitle')}
            </p>
        </div>
        
        <div className="relative">
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gold/80 via-gold to-gold/20 transform md:-translate-x-px"></div>
          
          <div className="space-y-16 md:space-y-24 relative z-10">
            {storyBlocks.map((block, index) => (
              <div 
                key={block.id}
                ref={el => blockRefs.current[index] = el}
                className={`flex flex-col md:flex-row items-start md:items-center gap-6 transition-all duration-1000 transform translate-y-10 opacity-0 ${
                  index % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className="flex items-center justify-center md:w-6 relative z-10">
                  {index === 0 ? (
                    <CircleDot className="w-12 h-12 text-gold bg-midnight-light rounded-full p-2" />
                  ) : (
                    <Circle className="w-12 h-12 text-gold bg-midnight-light rounded-full p-2" />
                  )}
                </div>
                
                <div className={`w-full md:w-1/2 ${index % 2 === 1 ? 'md:text-right md:pr-16' : 'md:text-left md:pl-16'}`}>
                  <div className="bg-midnight/50 backdrop-blur-sm p-8 rounded-xl border border-gold/10 shadow-xl">
                    <div className="text-4xl mb-4">{block.icon}</div>
                    <h3 className="text-2xl md:text-3xl font-serif text-gold mb-4">{block.title}</h3>
                    <p className="text-offwhite/80 leading-relaxed">{block.description}</p>
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

export default Timeline;