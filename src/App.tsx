import { useEffect, useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowDown, ArrowUpRight, Download, Mail, Menu, Phone, X } from 'lucide-react'
import { education, experience, interests, languages, miscellaneous, otherSkills, profile, projects, softwareSkills, type Project } from './data/portfolio'

type Section = 'home' | 'about' | 'work' | 'skills' | 'contact'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeProject, setActiveProject] = useState<Project | null>(null)
  const [activeSection, setActiveSection] = useState<Section>('home')

  useEffect(() => {
    const ids: Section[] = ['home', 'about', 'work', 'skills', 'contact']
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
      if (visible) setActiveSection(visible.target.id as Section)
    }, { rootMargin: '-35% 0px -55% 0px', threshold: [0.1, 0.25, 0.5] })
    ids.forEach((id) => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    document.body.style.overflow = activeProject ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [activeProject])

  const navItems = useMemo(() => [
    ['home', 'Home'], ['about', 'About'], ['work', 'Selected Work'], ['skills', 'Profile'], ['contact', 'Contact'],
  ] as const, [])

  const scrollTo = (id: string) => {
    setMenuOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="site-shell">
      <header className="topbar">
        <button className="wordmark" onClick={() => scrollTo('home')} aria-label="Back to home">ANUSRI<span>.</span></button>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map(([id, label]) => <button key={id} className={activeSection === id ? 'active' : ''} onClick={() => scrollTo(id)}>{label}</button>)}
        </nav>
        <div className="top-actions">
          <a className="resume-btn" href="/assets/portfolio-source.pdf" download>Resume / Portfolio <Download size={15} /></a>
          <button className="menu-btn" onClick={() => setMenuOpen((v) => !v)} aria-label="Toggle menu">{menuOpen ? <X /> : <Menu />}</button>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && <motion.div className="mobile-menu" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
          {navItems.map(([id, label]) => <button key={id} onClick={() => scrollTo(id)}>{label}</button>)}
          <a href="/assets/portfolio-source.pdf" download onClick={() => setMenuOpen(false)}>Download portfolio <Download size={16} /></a>
        </motion.div>}
      </AnimatePresence>

      <main>
        <section id="home" className="hero section-pad">
          <div className="hero-copy">
            <p className="eyebrow">Architectural Portfolio / 2021—2026</p>
            <h1>Pasikanti<br /><em>Anusri</em></h1>
            <p className="hero-role">Fresher Architect</p>
            <p className="hero-intro">Exploring how simple ideas, materials, light and nature can come together to create comfortable and meaningful spaces.</p>
            <div className="hero-actions">
              <button className="primary-btn" onClick={() => scrollTo('work')}>Explore selected work <ArrowDown size={16} /></button>
              <button className="text-btn" onClick={() => scrollTo('contact')}>Get in touch <ArrowUpRight size={16} /></button>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-frame">
              <img src={profile.profileImage} alt="Pasikanti Anusri in a green outdoor setting" />
              <div className="frame-note">01 / 05<br /><span>PORTRAIT</span></div>
            </div>
            <div className="hero-side-label">ARCHITECTURE<br />DESIGN<br />VISUALIZATION</div>
          </div>
          <div className="hero-footer"><span>Hyderabad / Telangana</span><span>Scroll to explore</span></div>
        </section>

        <section id="about" className="about section-pad section-light">
          <div className="section-heading"><span>01</span><h2>About</h2></div>
          <div className="about-grid">
            <div className="about-photo"><img src={profile.portraitImage} alt="Portrait of Pasikanti Anusri" /></div>
            <div className="about-copy">
              <p className="large-copy">A fresher in architecture, ready to begin a professional journey through real projects, collaboration and continuous learning.</p>
              <p>{profile.intro}</p><p>{profile.background}</p><p>{profile.outlook}</p>
              <div className="mini-facts"><div><span>Born</span><strong>{profile.birthDate}</strong></div><div><span>From</span><strong>{profile.birthplace}</strong></div><div><span>Focus</span><strong>Architecture + Interiors</strong></div></div>
            </div>
          </div>
        </section>

        <section id="work" className="work section-pad">
          <div className="section-heading"><span>02</span><h2>Selected work</h2><p>Academic studies, technical drawings and internship work.</p></div>
          <div className="project-list">
            {projects.map((project, index) => <ProjectCard key={project.id} project={project} index={index} onOpen={() => setActiveProject(project)} />)}
          </div>
        </section>

        <section id="skills" className="profile section-pad section-dark">
          <div className="section-heading"><span>03</span><h2>Profile</h2></div>
          <div className="profile-grid">
            <div><p className="kicker">Education</p><div className="timeline">{education.map((item) => <div className="timeline-item" key={item.qualification}><span>{item.period}</span><div><h3>{item.qualification}</h3><p>{item.institution}</p></div></div>)}</div></div>
            <div><p className="kicker">Experience</p><div className="timeline">{experience.map((item) => <div className="timeline-item" key={`${item.company}-${item.date}`}><span>{item.date}</span><div><h3>{item.role}</h3><p>{item.company}</p></div></div>)}</div></div>
          </div>
          <div className="skill-columns">
            <SkillGroup title="Software" items={softwareSkills} />
            <SkillGroup title="Other skills" items={otherSkills} />
            <SkillGroup title="Languages" items={languages.map((l) => l.note ? `${l.name} — ${l.note}` : l.name)} />
            <SkillGroup title="Interests" items={interests} />
          </div>
        </section>

        <section className="archive section-pad section-light">
          <div className="section-heading"><span>04</span><h2>Beyond the drawing board</h2><p>Travel photographs and architectural models included in the original portfolio.</p></div>
          <div className="archive-grid">
            {miscellaneous.travel.map((src, i) => <figure key={src}><img loading="lazy" src={src} alt={`Travel photograph ${i + 1}`} /></figure>)}
          </div>
          <div className="archive-split">
            <div><p className="kicker">Architectural models</p><div className="model-grid">{miscellaneous.models.map((src, i) => <img loading="lazy" key={src} src={src} alt={`Architectural model ${i + 1}`} />)}</div></div>
            <div className="archive-note"><p className="large-copy">“Models and photographs that reflect who I am outside the drawing board.”</p><p>Selected directly from the portfolio's miscellaneous section.</p></div>
          </div>
        </section>

        <section id="contact" className="contact section-pad section-dark">
          <div className="contact-grid">
            <div><p className="eyebrow">05 / Contact</p><h2>Let’s build<br /><em>something meaningful.</em></h2><p className="contact-copy">Available to begin a professional journey, learn through real projects and contribute to thoughtful architectural work.</p></div>
            <div className="contact-card">
              <a href={`mailto:${profile.email}`}><Mail size={18} /><span>{profile.email}</span></a>
              <a href={`tel:${profile.phone}`}><Phone size={18} /><span>{profile.phone}</span></a>
              <div className="contact-meta"><span>Based in</span><strong>Hyderabad, Telangana</strong></div>
              <a className="primary-btn full" href="/assets/portfolio-source.pdf" download>Download full portfolio <Download size={16} /></a>
            </div>
          </div>
          <footer><span>© {new Date().getFullYear()} Pasikanti Anusri</span><span>Architectural Portfolio / 2021—2026</span></footer>
        </section>
      </main>

      <AnimatePresence>
        {activeProject && <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />}
      </AnimatePresence>
    </div>
  )
}

function ProjectCard({ project, index, onOpen }: { project: Project; index: number; onOpen: () => void }) {
  return <motion.article className="project-card" initial={{ opacity: 0, y: 35 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: .65, delay: index * .04 }}>
    <button className="project-image" onClick={onOpen} aria-label={`Open ${project.title}`}><img loading={index > 1 ? 'lazy' : 'eager'} src={project.hero} alt={`${project.title} project`} /><span className="project-number">{project.number}</span><span className="open-icon"><ArrowUpRight /></span></button>
    <div className="project-info"><div><p className="kicker">{project.category} / {project.location}</p><h3>{project.title}</h3></div><p>{project.description}</p><button className="text-btn" onClick={onOpen}>View project <ArrowUpRight size={15} /></button></div>
  </motion.article>
}

function SkillGroup({ title, items }: { title: string; items: string[] }) {
  return <div className="skill-group"><p className="kicker">{title}</p><ul>{items.map((item) => <li key={item}>{item}</li>)}</ul></div>
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  return <motion.div className="modal-backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}>
    <motion.div className="project-modal" initial={{ opacity: 0, y: 35 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 35 }} transition={{ duration: .35 }} onClick={(e) => e.stopPropagation()}>
      <button className="modal-close" onClick={onClose} aria-label="Close project"><X /></button>
      <div className="modal-header"><span>{project.number} / {project.category}</span><h2>{project.title}</h2><p>{project.description}</p><div className="modal-meta"><span>{project.location}</span><span>{project.academic}</span><span>{project.software.join(' · ')}</span></div>{project.quote && <blockquote>“{project.quote}”</blockquote>}</div>
      <div className="modal-gallery">{project.gallery.map((src, i) => <img key={`${src}-${i}`} loading={i > 1 ? 'lazy' : 'eager'} src={src} alt={`${project.title} portfolio page ${i + 1}`} />)}</div>
    </motion.div>
  </motion.div>
}

export default App
