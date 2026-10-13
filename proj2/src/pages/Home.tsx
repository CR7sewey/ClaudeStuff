import { useState } from 'react'
import heroImg from '../assets/hero.png'
import reactLogo from '../assets/react.svg'
import viteLogo from '../assets/vite.svg'
import LinkCard, { type CardLink } from '../components/LinkCard'
import './Home.css'

const docsLinks: CardLink[] = [
  {
    href: 'https://vite.dev/',
    label: 'Explore Vite',
    icon: { img: viteLogo, className: 'logo' },
  },
  {
    href: 'https://react.dev/',
    label: 'Learn more',
    icon: { img: reactLogo },
  },
]

const socialLinks: CardLink[] = [
  {
    href: 'https://github.com/vitejs/vite',
    label: 'GitHub',
    icon: { sprite: 'github-icon' },
  },
  {
    href: 'https://chat.vite.dev/',
    label: 'Discord',
    icon: { sprite: 'discord-icon' },
  },
  {
    href: 'https://x.com/vite_js',
    label: 'X.com',
    icon: { sprite: 'x-icon' },
  },
  {
    href: 'https://bsky.app/profile/vite.dev',
    label: 'Bluesky',
    icon: { sprite: 'bluesky-icon' },
  },
]

function Home() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Get started</h1>
          <p>
            Edit <code>src/pages/Home.tsx</code> and save to test <code>HMR</code>
          </p>
        </div>
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <LinkCard
          icon="documentation-icon"
          title="Documentation"
          description="Your questions, answered"
          links={docsLinks}
        />
        <LinkCard
          icon="social-icon"
          title="Connect with us"
          description="Join the Vite community"
          links={socialLinks}
        />
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default Home
