// components/Contact.jsx

const Contact = () => {
  return (
    <section className="cta-close-section" id="contact" aria-label="Contact Callout">
      <h3 className="cta-line">Have something worth building, beautifully?</h3>
      <p className="cta-subtitle">
        Whether you need high-performance web applications, resilient backend architectures,
        or scalable database solutions &mdash; I&apos;m open for collaborations and engineering roles.
      </p>

      <a
        href="mailto:izsalafandi@gmail.com"
        className="cta-primary"
        title="Reach out directly via email"
      >
        <span>Reach out</span>
        <svg
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M7 7h10v10" />
          <path d="M7 17 17 7" />
        </svg>
      </a>
    </section>
  );
};

export default Contact;
