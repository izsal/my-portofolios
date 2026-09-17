// components/Education.jsx

const Education = () => {
  return (
    <section className="education-brief-section" aria-label="Education">
      <div className="section-header">
        <h2>Education</h2>
      </div>

      <div className="edu-card">
        <div className="edu-degree-line">
          <span className="edu-degree">Diploma in Teknik Elektronika (D3)</span>
          <span className="edu-sep">&middot;</span>
          <span className="edu-org">Universitas Negeri Padang</span>
        </div>
        <div className="edu-period">2016 &ndash; 2018 &middot; GPA 3.30 / 4.00</div>
        <p className="edu-notes">
          Core Focus: Web Programming, Java Programming, and Native Android App Development.
        </p>
      </div>
    </section>
  );
};

export default Education;
