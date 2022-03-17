import React from 'react'
import style from './procedureInput.module.css'

const ProcedureInput = ({ index, procedureInfo, handleChange }) => {
  const { procedure, code, claim, difference, authorized } = procedureInfo
  return (
    <table className={style['table']}>
      <thead>
        <tr className={style['table-head']}>
          <th className={style['table-header']}>{`Procedimiento 0${index}`}</th>
          <th className={style['table-header']}>Código</th>
          <th className={style['table-header']}>Reclamo RD$</th>
          <th className={style['table-header']}>Diferencia RD$</th>
          <th className={style['table-header']}>Autorizado RD$</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className={style['table-body-data']}>
            <input
              type='text'
              name='procedure'
              value={procedure}
              onChange={(e) => handleChange(e)}
            />
          </td>
          <td className={style['table-body-data']}>
            <input
              type='text'
              name='code'
              value={code}
              onChange={(e) => handleChange(e)}
            />
          </td>
          <td className={style['table-body-data']}>
            <input
              type='number'
              name='claim'
              value={claim}
              onChange={(e) => handleChange(e)}
            />
          </td>
          <td className={style['table-body-data']}>
            <input
              type='number'
              name='difference'
              value={difference}
              onChange={(e) => handleChange(e)}
            />
          </td>
          <td className={style['table-body-data']}>
            <input
              type='number'
              name='authorized'
              value={authorized}
              onChange={(e) => handleChange(e)}
            />
          </td>
        </tr>
      </tbody>
    </table>
  )
}

export default ProcedureInput
