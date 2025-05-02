import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import LanguageSwitch from './LanguageSwitch';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenModal = () => {
    const modal = document.getElementById('lead-capture-modal');
    if (modal) {
      modal.classList.remove('hidden');
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-midnight/90 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        <a href="/" className="flex items-center">
          <div className="text-gold font-serif text-2xl md:text-3xl tracking-tight">
            Digit<span className="text-stroke">Gold</span>
          </div>
        </a>

        <div className="hidden md:flex items-center space-x-6">
          <LanguageSwitch />
          <button 
            onClick={handleOpenModal}
            className="btn-primary rounded-full"
          >
            {t('nav.reserve')}
            <ChevronRight className="w-4 h-4 ml-2" />
          </button>
        </div>

        <div className="md:hidden flex items-center space-x-4">
          <LanguageSwitch />
          <button
            className="text-offwhite p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-midnight/95 backdrop-blur-md">
          <div className="container-custom py-4 flex flex-col space-y-4">
            <LanguageSwitch />
            <button 
              onClick={() => {
                handleOpenModal();
                setIsOpen(false);
              }}
              className="btn-primary rounded-full mt-2"
            >
              {t('nav.reserve')}
              <ChevronRight className="w-4 h-4 ml-2" />
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
