import Button, { type ButtonSize, type ButtonVariant } from '../components/Button'
import './Preview.css'

const variants: ButtonVariant[] = ['light', 'dark']
const sizes: ButtonSize[] = ['sm', 'md', 'lg']

function Preview() {
  return (
    <section id="preview">
      <h2>Preview</h2>
      <p>Components under test. Add new ones here.</p>

      <h3>Button</h3>
      {variants.map((variant) => (
        <div key={variant} className="preview-row">
          <span className="preview-label">{variant}</span>
          {sizes.map((size) => (
            <Button key={size} variant={variant} size={size}>
              {size}
            </Button>
          ))}
          <Button variant={variant}>default</Button>
          <Button variant={variant} disabled>
            disabled
          </Button>
        </div>
      ))}
    </section>
  )
}

export default Preview
