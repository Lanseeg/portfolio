import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import emailjs from 'emailjs-com';
import '../styles/components/_contactForm.scss';

const ContactForm = () => {
  const { t } = useTranslation('contact');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: '' });
    setStatus('');
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'All fields required';
    if (!formData.email.trim()) {
      newErrors.email = 'All fields required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Check email format';
    }
    if (!formData.message.trim()) newErrors.message = 'All fields required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      setStatus('info'); // Status set to 'info' if form is invalid
      return;
    }

    const serviceID = 'service_3gqn4om';
    const templateID = 'template_vkmcdcn';
    const publicKey = '4uvcdvs7_83AcevC4';

    emailjs
      .send(serviceID, templateID, formData, publicKey)
      .then(() => {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setErrors({});
      })
      .catch(() => {
        setStatus('error');
      });
  };

  const isFormValid = () => {
    return (
      formData.name.trim() &&
      formData.email.trim() &&
      /\S+@\S+\.\S+/.test(formData.email) &&
      formData.message.trim()
    );
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
            className={errors.name ? 'input-error' : ''}
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
            className={errors.email ? 'input-error' : ''}
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
            className={errors.message ? 'input-error' : ''}
          />
        </div>
        <button
          type="submit"
          className={`contact-form__submit ${!isFormValid() ? 'btn-disabled' : ''}`}
        >
          {t('sendButton')}
        </button>
      </form>

      {/* Display info message */}
      {status === 'info' && (
        <p className="contact-form__status info">{t('infoMessage')}</p>
      )}

      {/* Display success or error message */}
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
