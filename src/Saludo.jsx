import React from 'react'

const Saludo = (props) => {
  return (
    <>
    <div className="saludo-container">
      <span className="saludo-text">{props.children}</span>
      <span className="saludo-nombre">{props.nombre}</span>
    </div>
    </>
  )
}

export default Saludo;