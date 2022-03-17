import React, { Fragment, useState, useContext } from 'react'
import Modal from '../../components/modal'
import ProcedureCard from './components/ProcedureCard'
import ProcedureInput from './components/ProcedureInput'
import style from './procedure.module.css'
import trashcan from '../../assets/trash3.svg'
import pencil from '../../assets/pencil.svg'
import AppContext from '../../store/app-context'

const ProcedureList = () => {
  const app = useContext(AppContext)
  const { procedures, setProcedures } = app
  const [openModal, setOpenModal] = useState(false)
  const initialProcedureInputs = {
    id: procedures.length + 1,
    procedure: 'Procedimiento',
    code: '3425',
    claim: 500,
    difference: 500,
    authorized: 500,
  }
  const [procedureInputs, setProcedureInputs] = useState(procedures)

  const handleChange = (event, id) => {
    let { name, value } = event.target
    setProcedureInputs(
      procedureInputs.map((p) => (p.id === id ? { ...p, [name]: value } : p))
    )
  }

  const handleEdit = () => {
    setOpenModal(true)
    setProcedureInputs(procedures)
  }

  const handleCancel = () => {
    setOpenModal(false)
    setProcedureInputs(procedures)
  }

  const handleSave = () => {
    setProcedures([...procedureInputs])
    setProcedureInputs(procedures)
    setOpenModal(false)
  }

  const handleAdd = () => {
    setProcedureInputs((prev) => [
      ...prev,
      {
        ...initialProcedureInputs,
        id: prev.length + 1,
      },
    ])
  }

  const handleRemove = (id) => {
    setProcedureInputs((prev) => prev.filter((pro) => pro.id !== id))
  }

  return (
    <Fragment>
      <h1 className={style['title']}>Procedimientos</h1>
      {procedures.map((proc, index) => (
        <ProcedureCard
          key={index}
          procedureId={index + 1}
          procedureInfo={proc}
        />
      ))}
      <button className={style['button']} onClick={handleEdit}>
        <img src={pencil} alt='pencil' className={style['delete']} />
        Editar procedimientos
      </button>
      {openModal && (
        <Modal
          title='Procedimientos'
          open={openModal}
          btnTxt='Añadir procedimiento'
          onCancelHandler={handleCancel}
          onAddHandler={handleAdd}
          handleClose={handleCancel}
          saveTxt='Guardar cambios'
          onSaveHandler={handleSave}
        >
          {procedureInputs.map((p, index) => (
            <div key={index} className={style['input-section']}>
              <img
                src={trashcan}
                alt='plus-btn'
                className={style['delete']}
                onClick={() => handleRemove(p.id)}
              />
              <ProcedureInput
                index={index + 1}
                handleChange={(e) => handleChange(e, p.id)}
                procedureInfo={p}
              />
            </div>
          ))}
        </Modal>
      )}
    </Fragment>
  )
}

export default ProcedureList
