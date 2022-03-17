import React, { useState } from 'react'

let initialProcedures = [
  {
    id: 1,
    procedure: 'Esclerosis',
    code: '3425',
    claim: 500,
    difference: 500,
    authorized: 500,
  },
  {
    id: 2,
    procedure: 'Esclerosis',
    code: '3425',
    claim: 500,
    difference: 500,
    authorized: 500,
  },
]

const AppContext = React.createContext({
  procedures: initialProcedures,
  setProcedures: () => {},
})

export const AppContextProvider = (props) => {
  const [procedures, setProcedures] = useState(initialProcedures)

  const contextValue = {
    procedures: procedures,
    setProcedures: setProcedures,
  }

  return (
    <AppContext.Provider value={contextValue}>
      {props.children}
    </AppContext.Provider>
  )
}

export default AppContext
