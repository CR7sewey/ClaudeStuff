import { useEffect, useId, useRef, type ReactNode } from 'react'
import './Modal.css'

export type ModalVariant = 'light' | 'dark'
export type ModalSize = 'sm' | 'md' | 'lg'

interface ModalProps {
  open: boolean
  onClose: () => void
  title: string
  children?: ReactNode
  footer?: ReactNode
  variant?: ModalVariant
  size?: ModalSize
  disabled?: boolean
}

// Built on the native <dialog>: showModal() gives a focus trap, Escape to
// close, and a ::backdrop for the semi-transparent overlay. `disabled` only
// dims the body and footer; the modal always stays dismissible.
function Modal({
  open,
  onClose,
  title,
  children,
  footer,
  variant = 'light',
  size = 'md',
  disabled = false,
}: ModalProps) {
  const ref = useRef<HTMLDialogElement>(null)
  const titleId = useId()

  useEffect(() => {
    const dialog = ref.current
    if (!dialog) return
    if (open && !dialog.open) dialog.showModal()
    if (!open && dialog.open) dialog.close()
  }, [open])

  const classes = ['modal', `modal-${variant}`, `modal-${size}`]
    .filter(Boolean)
    .join(' ')

  return (
    <dialog
      ref={ref}
      className={classes}
      aria-labelledby={titleId}
      data-disabled={disabled || undefined}
      onClose={onClose}
      onClick={(e) => {
        // A click on the dialog element itself (not its content) is a backdrop click.
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <div className="modal-content">
        <header className="modal-header">
          <h2 id={titleId}>{title}</h2>
          <button
            type="button"
            className="modal-close"
            aria-label="Close"
            onClick={onClose}
          >
            ×
          </button>
        </header>
        <div className="modal-body">{children}</div>
        {footer && <footer className="modal-footer">{footer}</footer>}
      </div>
    </dialog>
  )
}

export default Modal
