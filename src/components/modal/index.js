import React, { useRef, useEffect } from 'react'
import style from './modal.module.css'
import plus from '../../assets/plus.svg'
import check from '../../assets/check.svg'

const Modal = ({
  title,
  open,
  handleClose,
  onAddHandler,
  btnTxt,
  onCancelHandler,
  onSaveHandler,
  saveTxt,
  children,
}) => {
  const modalRef = useRef(null)

  useEffect(() => {
    if (open) {
      modalRef.current.style.display = 'block'
    } else {
      modalRef.current.style.display = 'none'
    }
  }, [open])

  return (
    <div className={style['modal']} ref={modalRef}>
      <div className={style['modal-content']}>
        <span className={style['close']} onClick={handleClose}>
          &times;
        </span>
        <div>
          <header className={style['header']}>
            <h2>{title}</h2>
            {btnTxt && (
              <button onClick={onAddHandler} className={style['button']}>
                <img src={plus} alt='plus-btn' />
                {btnTxt}
              </button>
            )}
          </header>
          {children}
          <footer className={style['footer']}>
            <button onClick={onCancelHandler} className={style['cancel']}>
              Cancelar
            </button>
            {saveTxt && (
              <button onClick={onSaveHandler} className={style['save']}>
                <img src={check} alt='check' />
                {saveTxt}
              </button>
            )}
          </footer>
        </div>
      </div>
    </div>
  )
}

export default Modal
