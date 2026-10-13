import React, { useState } from 'react';
import {
  Mail,
  MapPin,
  Send,
  ShieldCheck,
  CheckCircle,
  AlertCircle,
  ExternalLink,
  Loader2,
  Sparkles,
  Lock
} from 'lucide-react';
import { ContactFormData } from '../types';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    email: '',
    subject: '',
    message: '',
    consent: false,
    honeypot: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'fallback'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  // Field validation
  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof ContactFormData, string>> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please provide a valid email format (e.g. name@example.com).';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message text is required.';
    } else if (formData.message.trim().length < 15) {
      newErrors.message = 'Please provide at least 15 characters to describe your inquiry.';
    }

    if (!formData.consent) {
      newErrors.consent = 'You must give consent to transmit this message.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Check honeypot for bot prevention
    if (formData.honeypot && formData.honeypot.trim() !== '') {
      console.warn('Bot detected via honeypot.');
      return;
    }

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);
    setErrorMessage('');

    try {
      // Attempt backend proxy route if available
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
      } else {
        // Transparent fallback to functional mailto protocol as instructed
        setSubmitStatus('fallback');
      }
    } catch {
      // Backend not running / offline - fallback to mailto without discarding input
      setSubmitStatus('fallback');
    } finally {
      setIsSubmitting(false);
    }
  };

  const generateMailtoUrl = () => {
    const subject = encodeURIComponent(`[Portfolio Inquiry] ${formData.subject}`);
    const body = encodeURIComponent(
      `From: ${formData.fullName} (${formData.email})\n\nMessage:\n${formData.message}`
    );
    return `mailto:cosmiqakok@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      {/* =========================================================================
          PAGE HEADER
          ========================================================================= */}
      <section className="pt-6 sm:pt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#1769FF] dark:text-[#35B6FF]">
            Get In Touch
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1F3A] dark:text-white tracking-tight">
            Let's Connect.
          </h1>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
            Have a question, project idea, learning opportunity, or cybersecurity discussion? I'd be happy to hear from you.
          </p>
        </div>
      </section>

      {/* =========================================================================
          CONTACT INFO & FORM GRID
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Contact Information Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-xl bg-white dark:bg-[#0B1F3A]/70 border border-slate-200 dark:border-slate-800 p-6 space-y-4 shadow-xs">
              <h2 className="text-lg font-bold text-[#0B1F3A] dark:text-white">
                Contact Channels
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                Feel free to reach out directly via email or by completing the structured inquiry form.
              </p>

              <div className="space-y-4 pt-2">
                {/* Email Card */}
                <div className="flex items-start gap-3.5 p-3.5 rounded-lg bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800">
                  <div className="p-2 rounded-md bg-[#E8F1FF] dark:bg-slate-800 text-[#1769FF] dark:text-[#35B6FF] shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                      Direct Email
                    </h3>
                    <a
                      href="mailto:cosmiqakok@gmail.com"
                      className="text-sm font-semibold text-[#1769FF] dark:text-[#35B6FF] hover:underline break-all"
                    >
                      cosmiqakok@gmail.com
                    </a>
                  </div>
                </div>

                {/* Location Card */}
                <div className="flex items-start gap-3.5 p-3.5 rounded-lg bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800">
                  <div className="p-2 rounded-md bg-[#E8F1FF] dark:bg-slate-800 text-[#1769FF] dark:text-[#35B6FF] shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                      Academic Location
                    </h3>
                    <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                      Juba, South Sudan
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                      University of Juba Campus
                    </p>
                  </div>
                </div>

                {/* Focus Areas Card */}
                <div className="flex items-start gap-3.5 p-3.5 rounded-lg bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800">
                  <div className="p-2 rounded-md bg-[#E8F1FF] dark:bg-slate-800 text-[#1769FF] dark:text-[#35B6FF] shrink-0">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                      Areas of Interest
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-300 mt-0.5 leading-relaxed">
                      Defensive cybersecurity, Python automation, networking fundamentals, student research collaborations, and internships.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Privacy & Anti-Spam Notice */}
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 text-xs text-slate-500 dark:text-slate-400 space-y-1.5">
              <div className="flex items-center gap-1.5 font-semibold text-slate-700 dark:text-slate-300">
                <Lock className="w-3.5 h-3.5 text-[#1769FF]" />
                <span>Privacy & Communication Notice</span>
              </div>
              <p className="leading-relaxed">
                Contact information is used exclusively to respond to academic and professional correspondence. No unsolicited marketing or external data sharing occurs.
              </p>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-white dark:bg-[#0B1F3A]/70 border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-xs">
              <h2 className="text-xl font-bold text-[#0B1F3A] dark:text-white mb-1">
                Send a Message
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-6">
                Fill out the fields below. Inquiries are reviewed and answered promptly.
              </p>

              {/* Success Notification */}
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-200 flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-bold">Message sent successfully!</h3>
                    <p className="text-xs mt-1">
                      Thank you for reaching out, Akok Mayol will review your inquiry shortly.
                    </p>
                  </div>
                </div>
              )}

              {/* Fallback Notification (Transparent Email Service Protocol) */}
              {submitStatus === 'fallback' && (
                <div className="mb-6 p-4 rounded-xl bg-blue-50 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-800 text-blue-900 dark:text-blue-200 space-y-3">
                  <div className="flex items-start gap-3">
                    <Sparkles className="w-5 h-5 text-[#1769FF] dark:text-[#35B6FF] shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-sm font-bold">Ready to dispatch via your email client</h3>
                      <p className="text-xs mt-1 text-slate-600 dark:text-slate-300 leading-relaxed">
                        Your message has been validated and pre-formatted. Click below to send directly to <strong>cosmiqakok@gmail.com</strong> using your default email client.
                      </p>
                    </div>
                  </div>
                  <div className="pt-1">
                    <a
                      href={generateMailtoUrl()}
                      className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-[#1769FF] hover:bg-[#1357db] rounded-lg transition-colors shadow-xs"
                    >
                      <span>Open Pre-filled Email</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                {/* Honeypot field for anti-spam (invisible to legitimate users) */}
                <div className="hidden" aria-hidden="true">
                  <label htmlFor="hp_field">Do not fill this</label>
                  <input
                    type="text"
                    id="hp_field"
                    tabIndex={-1}
                    value={formData.honeypot}
                    onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                    autoComplete="off"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Full Name */}
                  <div>
                    <label
                      htmlFor="fullName"
                      className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1"
                    >
                      Full Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Alex Deng"
                      className={`w-full px-3.5 py-2.5 text-sm rounded-lg border bg-white dark:bg-slate-900 text-slate-900 dark:text-white transition-colors focus:outline-hidden focus:ring-2 focus:ring-[#1769FF] ${
                        errors.fullName
                          ? 'border-rose-400 dark:border-rose-600'
                          : 'border-slate-200 dark:border-slate-700'
                      }`}
                      aria-invalid={!!errors.fullName}
                      aria-describedby={errors.fullName ? 'fullName-error' : undefined}
                    />
                    {errors.fullName && (
                      <p id="fullName-error" className="text-xs text-rose-500 mt-1">
                        {errors.fullName}
                      </p>
                    )}
                  </div>

                  {/* Email Address */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1"
                    >
                      Email Address <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@example.com"
                      className={`w-full px-3.5 py-2.5 text-sm rounded-lg border bg-white dark:bg-slate-900 text-slate-900 dark:text-white transition-colors focus:outline-hidden focus:ring-2 focus:ring-[#1769FF] ${
                        errors.email
                          ? 'border-rose-400 dark:border-rose-600'
                          : 'border-slate-200 dark:border-slate-700'
                      }`}
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? 'email-error' : undefined}
                    />
                    {errors.email && (
                      <p id="email-error" className="text-xs text-rose-500 mt-1">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1"
                  >
                    Subject <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. Cybersecurity Project Collaboration / Internship Inquiry"
                    className={`w-full px-3.5 py-2.5 text-sm rounded-lg border bg-white dark:bg-slate-900 text-slate-900 dark:text-white transition-colors focus:outline-hidden focus:ring-2 focus:ring-[#1769FF] ${
                      errors.subject
                        ? 'border-rose-400 dark:border-rose-600'
                        : 'border-slate-200 dark:border-slate-700'
                    }`}
                    aria-invalid={!!errors.subject}
                    aria-describedby={errors.subject ? 'subject-error' : undefined}
                  />
                  {errors.subject && (
                    <p id="subject-error" className="text-xs text-rose-500 mt-1">
                      {errors.subject}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1"
                  >
                    Message <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Write your message or inquiry here..."
                    className={`w-full px-3.5 py-2.5 text-sm rounded-lg border bg-white dark:bg-slate-900 text-slate-900 dark:text-white transition-colors focus:outline-hidden focus:ring-2 focus:ring-[#1769FF] ${
                      errors.message
                        ? 'border-rose-400 dark:border-rose-600'
                        : 'border-slate-200 dark:border-slate-700'
                    }`}
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? 'message-error' : undefined}
                  />
                  {errors.message && (
                    <p id="message-error" className="text-xs text-rose-500 mt-1">
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Consent Checkbox */}
                <div className="pt-1">
                  <label className="flex items-start gap-2.5 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.consent}
                      onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                      className="mt-1 h-4 w-4 rounded-sm border-slate-300 dark:border-slate-700 text-[#1769FF] focus:ring-[#1769FF]"
                    />
                    <span className="text-xs text-slate-600 dark:text-slate-300 leading-snug">
                      I agree to send this inquiry directly to Akok Mayol Akok for academic or professional communication.
                    </span>
                  </label>
                  {errors.consent && (
                    <p className="text-xs text-rose-500 mt-1 pl-6">
                      {errors.consent}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-6 py-3 text-sm font-semibold text-white bg-[#1769FF] hover:bg-[#1357db] active:bg-[#0f46b2] disabled:opacity-60 rounded-lg shadow-sm hover:shadow-[#1769FF]/25 transition-all inline-flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          CALL TO ACTION BANNER
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-[#0B1F3A] text-white p-8 sm:p-12 text-center border border-slate-800 shadow-xl space-y-4">
          <blockquote className="text-xl sm:text-2xl font-bold tracking-tight">
            “Good things happen when curious minds connect.”
          </blockquote>
          <p className="text-xs sm:text-sm text-slate-300 max-w-lg mx-auto leading-relaxed">
            Whether for research discussions, student projects, or mentoring opportunities, my inbox is always open.
          </p>
          <div className="pt-2">
            <a
              href="mailto:cosmiqakok@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-[#1769FF] hover:bg-[#1357db] rounded-lg shadow-sm transition-all"
            >
              <Mail className="w-4 h-4" />
              <span>Send Me an Email</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
