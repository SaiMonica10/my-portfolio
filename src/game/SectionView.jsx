import { useEffect, useRef } from 'react';
import LinkList from '../components/LinkList';
import PixelIcon from '../components/PixelIcon';
import { certifications, education, experience, profile, projects, sections, skills } from '../data/content';

function PlayerStats() {
  return (
    <>
      <dl className="stat-row">
        {profile.stats.map((stat) => (
          <div key={stat.label} className="stat">
            <dt>{stat.label}</dt>
            <dd>{stat.value}</dd>
          </div>
        ))}
      </dl>
      <p className="lead">{profile.tagline}</p>
      <p>{profile.summary}</p>
      <p className="muted">{profile.location}</p>
    </>
  );
}

function Inventory() {
  return skills.map((group) => (
    <section key={group.group} className="inv-group">
      <h2>{group.group}</h2>
      <ul className="inv-items">
        {group.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  ));
}

function Levels() {
  return projects.map((project) => (
    <article key={project.id} className="card level">
      <header className="card__head">
        <p className="card__kicker">Level {project.level}</p>
        <h2>{project.title}</h2>
        <p className="muted">{project.dates}</p>
      </header>
      <dl className="level__steps">
        <div>
          <dt>Problem</dt>
          <dd>{project.problem}</dd>
        </div>
        <div>
          <dt>Data / Input</dt>
          <dd>{project.input}</dd>
        </div>
        <div>
          <dt>Approach</dt>
          <dd>
            <ul>
              {project.approach.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ul>
          </dd>
        </div>
        <div className={project.badge ? 'level__result level__result--highlight' : 'level__result'}>
          <dt>
            Result
            {project.badge && <span className="level__badge">{project.badge}</span>}
          </dt>
          <dd>{project.result}</dd>
        </div>
        <div>
          <dt>Stack</dt>
          <dd>
            <ul className="chips">
              {project.stack.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
          </dd>
        </div>
      </dl>
      <LinkList links={project.links} />
    </article>
  ));
}

function QuestLog() {
  return experience.map((job) => (
    <article key={job.company} className="card">
      <header className="card__head">
        <p className="card__kicker">{job.dates}</p>
        <h2>{job.company}</h2>
        <p className="muted">
          {job.role} · {job.place}
        </p>
      </header>
      <ul className="quest-list">
        {job.points.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
    </article>
  ));
}

function Achievements() {
  return (
    <ul className="trophies">
      <li className="card trophy">
        <PixelIcon name="achievements" size={40} />
        <div>
          <p className="card__kicker">Unlocked · {education.dates}</p>
          <h2>{education.degree}</h2>
          <p className="muted">
            {education.school} · {education.detail}
          </p>
        </div>
      </li>
      {certifications.map((cert) => (
        <li key={cert.name} className="card trophy">
          <PixelIcon name="achievements" size={40} />
          <div>
            <p className="card__kicker">Unlocked · Certification</p>
            <h2>{cert.name}</h2>
            <p className="muted">{cert.issuer}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}

function SavePoint() {
  return (
    <>
      <dl className="contact">
        <div>
          <dt>Email</dt>
          <dd>
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
          </dd>
        </div>
        <div>
          <dt>LinkedIn</dt>
          <dd>
            <a href={profile.linkedin.url} target="_blank" rel="noopener noreferrer">
              {profile.linkedin.label}
            </a>
          </dd>
        </div>
        <div>
          <dt>GitHub</dt>
          <dd>
            <a href={profile.github.url} target="_blank" rel="noopener noreferrer">
              {profile.github.label}
            </a>
          </dd>
        </div>
      </dl>
      <a className="btn btn--big" href={profile.resume} download>
        Download Resume
      </a>
    </>
  );
}

const CONTENT = {
  stats: PlayerStats,
  inventory: Inventory,
  levels: Levels,
  quests: QuestLog,
  achievements: Achievements,
  save: SavePoint,
};

export default function SectionView({ id, onBack }) {
  const section = sections.find((s) => s.id === id);
  const Content = CONTENT[id];
  const headingRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    headingRef.current?.focus({ preventScroll: true });
  }, [id]);

  return (
    <main className="panel" id="main">
      <button type="button" className="btn panel__back" onClick={onBack}>
        ← Map <span className="panel__esc">(Esc)</span>
      </button>
      <header className="panel__head">
        <PixelIcon name={id} size={40} />
        <div>
          <h1 ref={headingRef} tabIndex={-1}>
            {section.title}
          </h1>
          <p className="muted">{section.subtitle}</p>
        </div>
      </header>
      <div className="panel__body">
        <Content />
      </div>
    </main>
  );
}
