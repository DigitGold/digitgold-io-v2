import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
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
        <div className="text-gold font-serif text-2xl md:text-3xl tracking-tight relative z-20">
            Digit<span className="text-stroke">Gold</span>
          </div>
        </a>

        <div className="hidden md:flex items-center space-x-8">
          <a href="#story" className="text-offwhite hover:text-gold transition-colors">
            Notre Histoire
          </a>
          <a href="#trust" className="text-offwhite hover:text-gold transition-colors">
            Pourquoi Nous Faire Confiance
          </a>
          <button 
            onClick={handleOpenModal}
            className="btn-primary rounded-full"
          >
            Accéder à la Réserve
            <ChevronRight className="w-4 h-4 ml-2" />
          </button>
        </div>

        <button
          className="md:hidden text-offwhite p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-midnight/95 backdrop-blur-md">
          <div className="container-custom py-4 flex flex-col space-y-4">
            <a
              href="#story"
              className="text-offwhite py-2 hover:text-gold"
              onClick={() => setIsOpen(false)}
            >
              Notre Histoire
            </a>
            <a
              href="#trust"
              className="text-offwhite py-2 hover:text-gold"
              onClick={() => setIsOpen(false)}
            >
              Pourquoi Nous Faire Confiance
            </a>
            <button 
              onClick={() => {
                handleOpenModal();
                setIsOpen(false);
              }}
              className="btn-primary rounded-full mt-2"
            >
              Accéder à la Réserve
              <ChevronRight className="w-4 h-4 ml-2" />
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;