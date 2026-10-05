import { useEffect, useRef } from "react";
export default function Modal({ title, children, onClose }) {
  const ref = useRef(null);
  const closeRef = useRef(onClose);
  closeRef.current = onClose;
  useEffect(() => {
    const dialog = ref.current,
      previous = document.activeElement;
    dialog.showModal();
    return () => {
      dialog.close();
      previous?.focus();
    };
  }, []);
  return (
    <dialog
      ref={ref}
      className="admin-dialog"
      aria-labelledby="editor-title"
      onCancel={(e) => {
        e.preventDefault();
        closeRef.current();
      }}
    >
      <header>
        <h2 id="editor-title">{title}</h2>
        <button
          type="button"
          className="quiet-button"
          onClick={onClose}
          aria-label="Tutup editor"
        >
          ✕
        </button>
      </header>
      {children}
    </dialog>
  );
}
