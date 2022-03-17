import React from 'react'
import Card from '../../../components/card'
import style from './procedureCard.module.css'

const ProcedureCard = ({ procedureId, procedureInfo }) => {
  const { procedure, code, claim, difference, authorized } = procedureInfo
  return (
    <Card>
      <table className={style['table']}>
        <thead>
          <tr className={style['table-head']}>
            <th
              className={style['table-header']}
            >{`Procedimiento 0${procedureId}`}</th>
            <th className={style['table-header']}>Código</th>
            <th className={style['table-header']}>Reclamo</th>
            <th className={style['table-header']}>Diferencia RD$</th>
            <th className={style['table-header']}>Autorizado RD$</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className={style['table-body-data']}>{procedure}</td>
            <td className={style['table-body-data']}>{code}</td>
            <td className={style['table-body-data']}>{`RD$ ${claim}`}</td>
            <td className={style['table-body-data']}>{`RD$ ${difference}`}</td>
            <td className={style['table-body-data']}>{`RD$ ${authorized}`}</td>
          </tr>
        </tbody>
      </table>
    </Card>
  )
}

export default ProcedureCard
