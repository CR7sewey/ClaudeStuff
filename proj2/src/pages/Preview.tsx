import { useState } from 'react'
import Button, { type ButtonSize, type ButtonVariant } from '../components/Button'
import Modal, { type ModalSize, type ModalVariant } from '../components/Modal'
import './Preview.css'

const variants: ButtonVariant[] = ['light', 'dark']
const sizes: ButtonSize[] = ['sm', 'md', 'lg']
const modalVariants: ModalVariant[] = ['light', 'dark']
const modalSizes: ModalSize[] = ['sm', 'md', 'lg']

interface OpenModal {
  variant: ModalVariant
  size?: ModalSize
  disabled?: boolean
}

function Preview() {
  const [openModal, setOpenModal] = useState<OpenModal | null>(null)
  const close = () => setOpenModal(null)

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

      <h3>Modal</h3>
      {modalVariants.map((variant) => (
        <div key={variant} className="preview-row">
          <span className="preview-label">{variant}</span>
          {modalSizes.map((size) => (
            <Button
              key={size}
              variant={variant}
              size="sm"
              onClick={() => setOpenModal({ variant, size })}
            >
              {size}
            </Button>
          ))}
          <Button
            variant={variant}
            size="sm"
            onClick={() => setOpenModal({ variant })}
          >
            default
          </Button>
          <Button
            variant={variant}
            size="sm"
            onClick={() => setOpenModal({ variant, disabled: true })}
          >
            disabled
          </Button>
        </div>
      ))}

      <Modal
        open={openModal !== null}
        onClose={close}
        title="Modal title"
        variant={openModal?.variant}
        size={openModal?.size}
        disabled={openModal?.disabled}
        footer={
          <>
            <Button
              variant={openModal?.variant}
              className="modal-secondary"
              onClick={close}
            >
              Cancel
            </Button>
            <Button
              variant={openModal?.variant === 'dark' ? 'light' : 'dark'}
              disabled={openModal?.disabled}
              onClick={close}
            >
              Confirm
            </Button>
          </>
        }
      >
        <p>
          A clean, modern modal with a semi-transparent backdrop. Press Escape,
          click the backdrop, or use the buttons to close it.
        </p>
      </Modal>
    </section>
  )
}

export default Preview
