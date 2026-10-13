import './LinkCard.css'

type LinkIconProps =
  | { img: string; className?: string }
  | { sprite: string; className?: string }

export interface CardLink {
  href: string
  label: string
  icon: LinkIconProps
}

interface LinkCardProps {
  icon: string
  title: string
  description: string
  links: CardLink[]
}

function LinkIcon(props: LinkIconProps) {
  const className = props.className ?? 'button-icon'

  if ('img' in props) {
    return <img className={className} src={props.img} alt="" />
  }

  return (
    <svg className={className} role="presentation" aria-hidden="true">
      <use href={`/icons.svg#${props.sprite}`}></use>
    </svg>
  )
}

function LinkCard({ icon, title, description, links }: LinkCardProps) {
  return (
    <div className="link-card">
      <svg className="icon" role="presentation" aria-hidden="true">
        <use href={`/icons.svg#${icon}`}></use>
      </svg>
      <h2>{title}</h2>
      <p>{description}</p>
      <ul>
        {links.map(({ href, label, icon }) => (
          <li key={href}>
            <a href={href} target="_blank" rel="noreferrer">
              <LinkIcon {...icon} />
              {label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default LinkCard
