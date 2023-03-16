import React from 'react'

function UseState({ name }) {
  const [error, setError] = React.useState(false)
  return (
    <div>
      <h2>Eliminar {name}</h2>
      <p>Por favor, escribe el codigo de seguridad.</p>
      {
        error && (
          <p>Error: el codigo es incorrecto</p>
        )
      }
      <input type="text" placeholder='Codigo de seguridad' />
      <button>Compobar</button>
    </div>
  )
}

export { UseState }