import React from 'react'


const SECURITY_CODE = 'paradigma'

function UseState({ name }) {
  const [state, setState] = React.useState({
    value: '',
    error: false,
    loading: false,
    deleted: false,
    confirmed: false,
  })

  const onConfirm = () => {
    setState({
      ...state,
      error: false,
      loading: false,
      confirmed: true,
    })
  }

  const onError = () => {
    setState({
      ...state,
      error: true,
      loading: false
    })
  }

  const handleChange = (event) => {
    setState({
      ...state,
      value: event.target.value
    })
  };

  const onCheck = () => {
    setState({
      ...state,
      loading: true,
      error: false
    })
  }

  const onDelete = () => {
    setState({
      ...state,
      deleted: true
    })
  }

  const onReset = () => {
    setState({
      ...state,
      confirmed: false,
      deleted: false,
      value: '',
    })
  }

  React.useEffect(() => {

    if (state.loading) {
      setTimeout(() => {
        if (state.value === SECURITY_CODE) {
          onConfirm();
        } else {
          onError();
        }
      }, 3000);
    }

  }, [state.loading])

  if (!state.deleted && !state.confirmed) {
    return (
      <div>
        <h2>Eliminar {name}</h2>
        <p>Por favor, escribe el codigo de seguridad.</p>
        {
          (state.error && !state.loading) && (
            <p>Error: el codigo es incorrecto</p>
          )
        }
        {
          state.loading && (
            <p>Cargando...</p>
          )
        }
        <input
          type="text"
          placeholder='Codigo de seguridad'
          value={state.value}
          onChange={handleChange}
        />
        <button onClick={() => {
          onCheck();
        }}>Compobar</button>
      </div>
    );
  } else if (!!state.confirmed && !state.deleted) {
    return (
      <React.Fragment>
        <p>Pedimos Confirmación ¿Seguro?</p>
        <button onClick={() => {
          onDelete();
        }}>Si, Eliminar</button>
        <button onClick={() => {
          onReset();
        }}>No</button>
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <p>Eliminada con exito</p>
        <button onClick={() => {
          onReset();
        }}>Listo</button>
      </React.Fragment>
    );
  }
}

export { UseState }