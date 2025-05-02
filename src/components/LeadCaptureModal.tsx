import React, { useState } from 'react';
import { X, Send, CheckCircle2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const LeadCaptureModal: React.FC = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');
  const { t } = useTranslation();

  const closeModal = () => {
    const modal = document.getElementById('lead-capture-modal');
    if (modal) modal.classList.add('hidden');

    setTimeout(() => {
      if (!modal?.classList.contains('hidden')) return;
      setIsSubmitted(false);
      setEmail('');
      setName('');
      setError('');
    }, 300);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      setError(t('modal.error.emptyEmail'));
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError(t('modal.error.invalidEmail'));
      return;
    }

    console.log('Form submitted:', { email, name });
    setIsSubmitted(true);
    setError('');
  };

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) closeModal();
  };

  return (
    <div
      id="lead-capture-modal"
      className="hidden fixed inset-0 z-50 flex items-center justify-center p-4 bg-midnight/80 backdrop-blur-sm transition-all duration-300"
      onClick={handleBackdropClick}
    >
      <div className="relative bg-midnight-light border border-gold/20 rounded-xl max-w-md w-full shadow-2xl">
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 text-offwhite/60 hover:text-gold transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        {isSubmitted ? (
          <div className="p-8 text-center">
            <div className="flex justify-center mb-6">
              <CheckCircle2 className="w-16 h-16 text-gold" />
            </div>
            <h3 className="text-2xl font-serif text-gold mb-4">
              {t('modal.success.title')}
            </h3>
            <p className="text-offwhite/80 mb-6">
              {t('modal.success.description')}
            </p>
            <button
              onClick={closeModal}
              className="btn-primary rounded-full w-full"
            >
              {t('modal.success.close')}
            </button>
          </div>
        ) : (
          <div className="p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-serif text-gold mb-4">
                {t('modal.title')}
              </h3>
              <p className="text-offwhite/80">
                {t('modal.subtitle')}
              </p>
            </div>

            <form onSubmit={handleSubmit}>
              {error && (
                <div className="bg-red-900/30 border border-red-500/50 text-red-200 p-3 rounded-lg mb-4 text-sm">
                  {error}
                </div>
              )}

              <div className="mb-4">
                <label htmlFor="email" className="block text-offwhite mb-2 text-sm">
                  {t('modal.fields.email')} <span className="text-gold">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t('modal.placeholders.email')}
                  className="w-full p-3 rounded-lg bg-midnight border border-gold/20 text-offwhite focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                  required
                />
              </div>

              <div className="mb-6">
                <label htmlFor="name" className="block text-offwhite mb-2 text-sm">
                  {t('modal.fields.name')}
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={t('modal.placeholders.name')}
                  className="w-full p-3 rounded-lg bg-midnight border border-gold/20 text-offwhite focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                />
              </div>

              <button
                type="submit"
                className="btn-primary rounded-full w-full flex items-center justify-center"
              >
                <Send className="w-4 h-4 mr-2" />
                {t('modal.submit')}
              </button>

              <p className="text-xs text-offwhite/60 mt-4 text-center">
                {t('modal.disclaimer')}
              </p>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default LeadCaptureModal;
