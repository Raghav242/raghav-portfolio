export default function Section({ id, eyebrow, title, lede, alt = false, children }) {
  return (
    <section id={id} className={`section ${alt ? 'section--alt' : ''}`}>
      <div className="container">
        <header className="section__head reveal">
          {eyebrow && <p className="section__eyebrow">{eyebrow}</p>}
          <h2 className="section__title">{title}</h2>
          {lede && <p className="section__lede">{lede}</p>}
        </header>
        {children}
      </div>
    </section>
  )
}
