import { Link } from 'react-router-dom'
import { contact, education, experience, profile, skills } from '../content'
import { ArrowUpRight, Github, Linkedin, Mail, Pin } from '../components/Icons'
import { useReveal } from '../lib/useReveal'

export default function About() {
  useReveal([])

  return (
    <>
      <section className="about-hero">
        <div className="hero-glow" aria-hidden />
        <div className="shell">
          <span className="eyebrow">About</span>

          <div className="about-id" style={{ marginTop: '1.5rem' }}>
            <span className="monogram" aria-hidden>
              {profile.initials}
            </span>
            <div>
              <h1>{profile.name}</h1>
              <p className="role">{profile.title}</p>
            </div>
          </div>

          <p className="about-lede">{profile.lede}</p>

          <div className="contact-row">
            <a className="contact-pill" href={'mailto:' + contact.email}>
              <Mail />
              {contact.email}
            </a>
            <a
              className="contact-pill"
              href={contact.github}
              target="_blank"
              rel="noreferrer noopener"
            >
              <Github />
              GitHub
            </a>
            <a
              className="contact-pill"
              href={contact.linkedin}
              target="_blank"
              rel="noreferrer noopener"
            >
              <Linkedin />
              LinkedIn
            </a>
            <span className="contact-pill" style={{ cursor: 'default' }}>
              <Pin />
              {profile.location}
            </span>
          </div>
        </div>
      </section>

      <div className="shell">
        <section className="block reveal">
          <div className="block-label">
            <span className="eyebrow">Profile</span>
          </div>
          <div className="prose">
            {profile.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </section>

        <section className="block reveal">
          <div className="block-label">
            <span className="eyebrow">Experience</span>
          </div>
          <div className="roles">
            {experience.map((role) => (
              <div className="role-item" key={role.company + role.title}>
                <div className="role-head">
                  <div>
                    <h3>{role.title}</h3>
                    <p className="company">
                      {role.company}
                      {role.location ? ' · ' + role.location : ''}
                    </p>
                  </div>
                  <span className="role-period">{role.period}</span>
                </div>
                <ul className="role-points">
                  {role.points.map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="block reveal">
          <div className="block-label">
            <span className="eyebrow">Skills</span>
          </div>
          <div className="skill-grid">
            {skills.map((group) => (
              <div className="skill-card" key={group.group}>
                <h3>{group.group}</h3>
                <div className="chips">
                  {group.items.map((item) => (
                    <span className="chip" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="block reveal">
          <div className="block-label">
            <span className="eyebrow">Education</span>
          </div>
          <div>
            {education.map((e) => (
              <div className="edu-item" key={e.school}>
                <h3>{e.school}</h3>
                <p className="cred">
                  {e.credential} · {e.period}
                </p>
                {e.detail ? <p className="detail">{e.detail}</p> : null}
              </div>
            ))}
          </div>
        </section>

        <div className="cta reveal">
          <span className="eyebrow" style={{ justifyContent: 'center' }}>
            Contact
          </span>
          <h2 style={{ marginTop: '1rem' }}>
            Let us <span className="serif">talk</span>.
          </h2>
          <p>Open to interesting work, collaborations and a straight conversation about either.</p>
          <div className="hero-actions">
            <a className="btn btn-primary" href={'mailto:' + contact.email}>
              <Mail />
              {contact.email}
            </a>
            <Link className="btn btn-ghost" to="/">
              See the work
              <ArrowUpRight />
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
