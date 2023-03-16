import React from 'react'


const SECURITY_CODE = 'paradigma'

function UseState({ name }) {
  const [value, setValue] = React.useState('')
  const [error, setError] = React.useState(false)
  const [loading, setLoading] = React.useState(false)
  console.log(value);

  React.useEffect(() => {

    if (!!loading) {
      setTimeout(() => {
        if(value === SECURITY_CODE) {
          setLoading(false);
          
        }else {
          setError(true)
          setLoading(false);
        }
      }, 3000);
    }

  }, [loading])

  return (
    <div>
      <h2>Eliminar {name}</h2>
      <p>Por favor, escribe el codigo de seguridad.</p>
      {
        (error && !loading) && (
          <p>Error: el codigo es incorrecto</p>
        )
      }
      {
        loading && (
          <p>Cargando...</p>
        )
      }
      <input
        type="text"
        placeholder='Codigo de seguridad'
        value={value}
        onChange={(e) => {
          setValue(e.target.value)
          // setError(error)
        }}
      />
      <button onClick={() => {
        setLoading(true)
        setError(false)
        }}>Compobar</button>
    </div>
  )
}

export { UseState }