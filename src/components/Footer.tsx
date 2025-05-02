import React, { useRef } from 'react';
import { ExternalLink, Mail, Shield } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Footer: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const { t } = useTranslation();

  return (
    <footer className="bg-midnight-dark text-offwhite/80 pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="text-gold font-serif text-2xl md:text-3xl tracking-tight mb-6">
              Digit<span className="text-stroke">Gold</span>
            </div>
            <p className="max-w-xs">
              {t('footer.about')}
            </p>
          </div>

          <div>
            <h3 className="font-serif text-xl text-offwhite mb-4">
              {t('footer.quickLinks.title')}
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#story" className="hover:text-gold transition-colors inline-flex items-center">
                  {t('footer.quickLinks.story')}
                </a>
              </li>
              <li>
                <a href="#trust" className="hover:text-gold transition-colors inline-flex items-center">
                  {t('footer.quickLinks.trust')}
                </a>
              </li>
              <li>
                <a
                  href="https://opensea.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold transition-colors inline-flex items-center"
                >
                  {t('footer.quickLinks.opensea')} <ExternalLink className="w-3 h-3 ml-1" />
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-xl text-offwhite mb-4">
              {t('footer.trust.title')}
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Shield className="w-5 h-5 mr-2 text-gold flex-shrink-0 mt-0.5" />
                <span>{t('footer.trust.audit')}</span>
              </li>
              <li className="flex items-start">
                <Shield className="w-5 h-5 mr-2 text-gold flex-shrink-0 mt-0.5" />
                <span>{t('footer.trust.storage')}</span>
              </li>
              <li className="flex items-start">
                <Shield className="w-5 h-5 mr-2 text-gold flex-shrink-0 mt-0.5" />
                <span>{t('footer.trust.blockchain')}</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-xl text-offwhite mb-4">
              {t('footer.contact.title')}
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:contact@digitgold.io"
                  className="hover:text-gold transition-colors inline-flex items-center"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  {t('footer.contact.email')}
                </a>
              </li>
              <li>
                <div className="flex space-x-3 mt-4">
                  {/* Twitter */}
                  <a
                    href="https://x.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-midnight hover:bg-midnight-light flex items-center justify-center transition-colors"
                  >
                    <svg viewBox="0 0 24 24" className="w-5 h-5 text-gold fill-current">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </a>
                  {/* Discord */}
                  <a
                    href="https://discord.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-midnight hover:bg-midnight-light flex items-center justify-center transition-colors"
                  >
                    <svg viewBox="0 0 24 24" className="w-5 h-5 text-gold fill-current">
                      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z" />
                    </svg>
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-midnight-light pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-offwhite/60 mb-4 md:mb-0">
              {t('footer.legal.copyright').replace('{{year}}', new Date().getFullYear().toString())}
            </p>
            <div className="flex space-x-4 text-sm text-offwhite/60">
              <a href="#" className="hover:text-gold transition-colors">{t('footer.legal.terms')}</a>
              <a href="#" className="hover:text-gold transition-colors">{t('footer.legal.privacy')}</a>
              <a href="#" className="hover:text-gold transition-colors">{t('footer.legal.conditions')}</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
