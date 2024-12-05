import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import emailjs from 'emailjs-com';
import '../styles/components/_contactForm.scss';

const ContactForm = () => {
  const { t } = useTranslation('contact'); // Namespace 'contact'

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceID = 'service_3gqn4om';
    const templateID = 'template_vkmcdcn';
    const publicKey = '4uvcdvs7_83AcevC4';

    emailjs
      .send(serviceID, templateID, formData, publicKey)
      .then(() => {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      })
      .catch(() => {
        setStatus('error');
      });
  };

  return (
    <div className="contact-form">
      <h2>{t('title')}</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">{t('name')}</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder={t('name')}
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">{t('email')}</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder={t('email')}
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">{t('message')}</label>
          <textarea
            id="message"
            name="message"
            placeholder={t('message')}
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="contact-form__submit">
          {t('sendButton')}
        </button>
      </form>
      {status === 'success' && (
        <p className="contact-form__status success">{t('successMessage')}</p>
      )}
      {status === 'error' && (
        <p className="contact-form__status error">{t('errorMessage')}</p>
      )}
    </div>
  );
};

export default ContactForm;