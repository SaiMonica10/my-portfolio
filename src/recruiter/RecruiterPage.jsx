import LinkList from '../components/LinkList';
import { certifications, education, experience, profile, projects, skills } from '../data/content';

function ContactLinks() {
  return (
    <ul className="r-contact">
      <li>
        <a href={`mailto:${profile.email}`}>{profile.email}</a>
      </li>
      <li>
        <a href={profile.linkedin.url} target="_blank" rel="noopener noreferrer">
          {profile.linkedin.label}
        </a>
      </li>
      <li>
        <a href={profile.github.url} target="_blank" rel="noopener noreferrer">
          {profile.github.label}
        </a>
      </li>
    </ul>
  );
}

export default function RecruiterPage() {
  return (
    <main className="recruiter" id="main">
      <header className="r-header">
        <h1>{profile.name}</h1>
        <p className="r-title">{profile.title}</p>
        <p className="r-tagline">{profile.tagline}</p>
        <p className="r-meta">
          {profile.location} <span className="r-badge">Open to work</span>
        </p>
        <ContactLinks />
      </header>

      <section aria-labelledby="r-summary">
        <h2 id="r-summary">Summary</h2>
        <p>{profile.summary}</p>
      </section>

      <section aria-labelledby="r-projects">
        <h2 id="r-projects">Projects</h2>
        {projects.map((project) => (
          <article key={project.id} className="r-item">
            <header className="r-item__head">
              <h3>{project.title}</h3>
              <p className="r-dates">{project.dates}</p>
            </header>
            <dl className="r-facts">
              <dt>Problem</dt>
              <dd>{project.problem}</dd>
              <dt>Data / Input</dt>
              <dd>{project.input}</dd>
              <dt>Approach</dt>
              <dd>
                <ul>
                  {project.approach.map((step) => (
                    <li key={step}>{step}</li>
                  ))}
                </ul>
              </dd>
              <dt>Result</dt>
              <dd className={project.badge ? 'r-highlight' : undefined}>
                {project.badge && <strong>{project.badge}: </strong>}
                {project.result}
              </dd>
              <dt>Stack</dt>
              <dd>{project.stack.join(', ')}</dd>
            </dl>
            <LinkList links={project.links} />
          </article>
        ))}
      </section>

      <section aria-labelledby="r-experience">
        <h2 id="r-experience">Experience</h2>
        {experience.map((job) => (
          <article key={job.company} className="r-item">
            <header className="r-item__head">
              <h3>
                {job.role}, {job.company}
              </h3>
              <p className="r-dates">
                {job.place} · {job.dates}
              </p>
            </header>
            <ul>
              {job.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <section aria-labelledby="r-skills">
        <h2 id="r-skills">Skills</h2>
        <dl className="r-facts">
          {skills.map((group) => (
            <div key={group.group} className="r-facts__row">
              <dt>{group.group}</dt>
              <dd>{group.items.join(', ')}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section aria-labelledby="r-education">
        <h2 id="r-education">Education &amp; Certifications</h2>
        <article className="r-item">
          <header className="r-item__head">
            <h3>{education.degree}</h3>
            <p className="r-dates">{education.dates}</p>
          </header>
          <p>
            {education.school} · {education.detail}
          </p>
        </article>
        <ul>
          {certifications.map((cert) => (
            <li key={cert.name}>
              {cert.name} — {cert.issuer}
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="r-contact">
        <h2 id="r-contact">Contact</h2>
        <ContactLinks />
        <p>
          <a className="r-download" href={profile.resume} download>
            Download Resume (PDF)
          </a>
        </p>
      </section>
    </main>
  );
}
