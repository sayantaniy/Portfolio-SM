import { useState } from 'react';
import { Mail, Copy, Check, Send, ArrowUpRight } from 'lucide-react';

const EMAIL_ADDRESS = 'sayantanimanna139@gmail.com';

export const Contact = () => {
  const [copied, setCopied] = useState(false);
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleCopy = () => {
    navigator.clipboard.writeText(EMAIL_ADDRESS);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanSubject = subject.trim() || 'Inquiry / Project Discussion';
    const cleanBody = message.trim();
    const mailtoUrl = `mailto:${EMAIL_ADDRESS}?subject=${encodeURIComponent(
      cleanSubject
    )}&body=${encodeURIComponent(cleanBody)}`;
    window.location.href = mailtoUrl;
  };

  return (
    <section className="contact-section glass contact-form-card">
      {/* Section Header */}
      <div className="section-header">
        <h1 className="section-title">
          <span>Connect</span>
        </h1>
        <span className="section-tag">Direct</span>
      </div>

      <p className="about-text mb-6">
        Feel free to reach out directly. Whether you have an opportunity, a project proposal, or a question, my inbox is always open.
      </p>

      {/* 1. Direct Email Container (Simplified: Email + Secondary Copy Action) */}
      <div className="contact-email-card flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 rounded-xl bg-[var(--pill-bg)] border border-[var(--pill-border)] mb-6 transition-colors hover:border-[var(--border-color-hover)]">
        <div className="flex items-center gap-3.5 min-w-0">
          <div className="w-9 h-9 rounded-lg bg-[var(--accent-pink-soft)] border border-[rgba(244,114,182,0.2)] flex items-center justify-center text-[var(--accent-pink)] shrink-0">
            <Mail size={16} />
          </div>
          <div className="min-w-0">
            <span className="block text-[11px] font-mono text-[var(--text-muted)] uppercase tracking-wider">
              Direct Email
            </span>
            <span className="block text-sm font-medium text-[var(--text-color)] truncate">
              {EMAIL_ADDRESS}
            </span>
          </div>
        </div>

        {/* Secondary Action: Copy Email Only */}
        <button
          onClick={handleCopy}
          className="action-btn action-btn-secondary text-xs py-2 px-3.5 shrink-0 self-stretch sm:self-auto justify-center"
          type="button"
          title="Copy email to clipboard"
        >
          {copied ? (
            <>
              <Check size={13} className="text-emerald-400"
               />
              <span className="text-emerald-400 font-medium"></span>
            </>
          ) : (
            <>
              <Copy size={13} />
            </>
          )}
        </button>
      </div>

      {/* 2. Structured Form (Aligned, Clear Labels, Pink Accent Focus) */}
      <form onSubmit={handleSendMessage} className="contact-form space-y-5">
        {/* Subject Field */}
        <div>
          <label 
            htmlFor="subject" 
            className="block text-xs font-mono font-medium text-[var(--text-secondary)] mb-2 uppercase tracking-wider"
          >
            Subject
          </label>
          <input
            id="subject"
            type="text"
            placeholder="What would you like to discuss?"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="w-full px-4 py-2.5 rounded-xl bg-[var(--pill-bg)] border border-[var(--pill-border)] text-sm text-[var(--text-color)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--accent-pink)] focus:ring-1 focus:ring-[var(--accent-pink)]/40 hover:border-[var(--border-color-hover)] transition-all"
          />
        </div>

        {/* Message Field */}
        <div>
          <label 
            htmlFor="message" 
            className="block text-xs font-mono font-medium text-[var(--text-secondary)] mb-2 uppercase tracking-wider"
          >
            Message
          </label>
          <textarea
            id="message"
            rows={4}
            placeholder="Write your message here..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full px-4 py-3 rounded-xl bg-[var(--pill-bg)] border border-[var(--pill-border)] text-sm text-[var(--text-color)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--accent-pink)] focus:ring-1 focus:ring-[var(--accent-pink)]/40 hover:border-[var(--border-color-hover)] transition-all min-h-[120px] resize-y"
          />
        </div>

        {/* Primary Action Button (Single Clear Dispatch Action) */}
        <button
          type="submit"
          className="action-btn action-btn-primary py-2.5 px-6 text-xs font-medium w-full sm:w-auto flex items-center justify-center gap-2 cursor-pointer"
        >
          <Send size={13} />
          <span>Send Message</span>
        </button>
      </form>

      {/* 3. External Profiles */}
      <div className="contact-profiles mt-8 pt-6 border-t border-[var(--border-color)]">
        <p className="text-xs font-mono text-[var(--text-muted)] mb-3 uppercase tracking-wider">
          Other Profiles
        </p>
        <div className="flex flex-wrap gap-2.5">
          <a
            href="https://github.com/sayantaniy"
            target="_blank"
            rel="noopener noreferrer"
            className="project-link-btn"
          >
            <span>GitHub</span>
            <ArrowUpRight size={13} />
          </a>
          <a
            href="https://linkedin.com/in/sayantani-manna-32852a"
            target="_blank"
            rel="noopener noreferrer"
            className="project-link-btn"
          >
            <span>LinkedIn</span>
            <ArrowUpRight size={13} />
          </a>
          <a
            href="https://leetcode.com/u/sayantaniy/"
            target="_blank"
            rel="noopener noreferrer"
            className="project-link-btn"
          >
            <span>LeetCode</span>
            <ArrowUpRight size={13} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
