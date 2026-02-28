import { useSelector } from 'react-redux'
import { SquareMousePointer } from 'lucide-react'

const Experience = () => {
  const { data } = useSelector((state) => state.root)
  const experiences = data.experiences

  const stats = [
    { number: "1000+", label: "Classes Conducted", sublabel: "At Cult.fit with exceptional ratings" },
    { number: "95%", label: "Positive Rating", sublabel: "Consistently high client satisfaction" },
    { number: "8", label: "Years of Practice", sublabel: "Deep immersion in yoga philosophies" }
  ];



  return (
    <section className="experience-section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Credentials</span>
          <h2 className="section-title">My Experience</h2>
        </div>

        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
              <div className="stat-sublabel">{stat.sublabel}</div>
            </div>
          ))}
        </div>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className='flex items-center gap-3'>
                  <h3>{exp.title} </h3>
                  {exp.certificate && (
                    <a className='cursor-pointer active:scale-93 transition-all' href={exp.certificate}><SquareMousePointer size={17} /></a>
                  )}
                </div>
                <span className="timeline-period">{exp.period}</span>
                <p>{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience