import React from 'react'
import './styles.css'

function App() {
  return (
    <>
      <header>
        <nav>
          <div className="logo">EduHub</div>
          <ul className="nav-links">
            <li><a href="/">Головна</a></li>
            <li><a href="/about">Про нас</a></li>
            <li><a href="/blog">Блог</a></li>
            <li><button className="contact-btn">Зв'язатися</button></li>
          </ul>
        </nav>
      </header>

      <main>
        <section className="hero">
          <div className="hero-content">
            <h1>Розвивайся разом з нами</h1>
            <p>Онлайн-курси від провідних експертів для вашого професійного зростання</p>
            <div className="cta-buttons">
              <button className="primary-btn">Почати навчання</button>
            </div>
          </div>
        </section>
        {/* Інший контент */}
      </main>
    </>
  )
}

export default App 