import React, { useRef, useEffect } from 'react';
import { Calendar, Users, Wallet, Building2, Globe2, CreditCard } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Roadmap: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const { t, i18n } = useTranslation();

  const roadmapItems = [
    {
      id: 1,
      period: "Q2 2025",
      title: t('roadmap.q2.title'),
      description: t('roadmap.q2.points', { returnObjects: true }) as string[],
      icon: <Calendar className="w-8 h-8 text-gold" />
    },
    {
      id: 2,
      period: "Q3 2025",
      title: t('roadmap.q3.title'),
      description: t('roadmap.q3.points', { returnObjects: true }) as string[],
      icon: <Users className="w-8 h-8 text-gold" />
    },
    {
      id: 3,
      period: "Q4 2025",
      title: t('roadmap.q4.title'),
      description: t('roadmap.q4.points', { returnObjects: true }) as string[],
      icon: <Wallet className="w-8 h-8 text-gold" />
    },
    {
      id: 4,
      period: "2026",
      title: t('roadmap.2026.title'),
      description: t('roadmap.2026.points', { returnObjects: true }) as string[],
      icon: <Building2 className="w-8 h-8 text-gold" />
    },
    {
      id: 5,
      period: "2027",
      title: t('roadmap.2027.title'),
      description: t('roadmap.2027.points', { returnObjects: true }) as string[],
      icon: <Globe2 className="w-8 h-8 text-gold" />
    },
    {
      id: 6,
      period: "2028",
      title: t('roadmap.2028.title'),
      description: t('roadmap.2028.points', { returnObjects: true }) as string[],
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
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/4386366/pexels-photo-4386366.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=2')] bg-cover bg-center opacity-10 z-0"></div>
      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-title">
            {t('roadmap.title')} <span className="text-gold">{t('roadmap.highlight')}</span>
          </h2>
          <p className="section-subtitle mx-auto">
            {t('roadmap.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {roadmapItems.map((item, index) => (
            <div
              key={item.id}
              ref={(el) => (itemRefs.current[index] = el)}
              className="bg-midnight-dark/80 backdrop-blur-md p-8 rounded-xl border border-gold/10 transition-all duration-700 transform translate-y-10 opacity-0 hover:border-gold/30"
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-midnight-light p-3 rounded-full">{item.icon}</div>
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