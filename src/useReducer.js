import React from 'react'
import './App.css'

const SECURITY_CODE = 'paradigma'

const initalState = {
  value: '',
  error: false,
  loading: false,
  deleted: false,
  confirmed: false,
};

function UseReducer({ name }) {
  const [state, dispatch] = React.useReducer(reducer, initalState);

  const onConfirm = () => {
    dispatch({ type: actionTypes.confirm })
  }

  const onError = () => {
    dispatch({ type: actionTypes.error });
  }

  const onWrite = ({ target: { value } }) => {
    dispatch({ type: actionTypes.write, payload: value })
  }

  const onCheck = () => {
    dispatch({ type: actionTypes.check });
  }

  const onDelete = () => {
    dispatch({ type: actionTypes.delete });
  }

  const onReset = () => {
    dispatch({ type: actionTypes.reset });
  }

  React.useEffect(() => {
    console.log('Empezando el efecto');
    if (state.loading) {
      setTimeout(() => {
        console.log("Haciendo la validación xd");
        if (state.value === SECURITY_CODE) {
          onConfirm()
        } else {
          onError()
        }
        console.log("Terminando la validación");
      }, 1500);
    }
    console.log('Terminando el efecto');
  }, [state.loading]);


  if (!state.deleted && !state.confirmed) {
    return (
      <div className='useReducer'>
        <h2>{name}</h2>
        <p>Por favor, escriba el código de seguridad.</p>

        {(state.error && !state.loading) && (
          <p className='text-error'>El código es es incorrecto</p>
        )}

        {state.loading && (
          <p>Cargando ...</p>
        )}

        <input
          type='text'
          placeholder='código de seguridad'
          value={state.value}
          onChange={onWrite}
        />
        <button
          onClick={onCheck}
        >Comprobar</button>
      </div>
    );
  } else if (state.confirmed && !state.deleted) {
    return (
      <React.Fragment>
        <div className='useReducer'>
          <p>¿Seguro que quieres eliminar UseState?</p>

          <button onClick={onDelete}
          >Si, eliminar</button>

          <button onClick={onReset}
          >No, volver</button>
        </div>

      </React.Fragment>
    )
  } else {
    return (
      <React.Fragment>
        <div className='useReducer'>
          <p>Eliminado con exito</p>
          <button onClick={onReset}
          >Recuperar UseState</button>
        </div>
      </React.Fragment>
    )
  }
}

// const reducerIf = (state, action) => {
// 	if (action.type === 'ERROR') {
// 		return {
// 			...state,
// 			error: true,
// 			loading: false
// 		}
// 	} else if (action.type === 'CHECK') {
// 		return {
// 			...state,
// 			loading: true
// 		}
// 	} else {
// 		return {
// 			...state
// 		}
// 	}
// };


// const reducerSwitch = (state, action) => {
// 	switch (action.type) {
// 		case 'ERROR':
// 			return {
// 				...state,
// 				error: true,
// 				loading: false
// 			};
// 		case 'CONFIRM':
// 			return {
// 				...state,
// 				loading: false,
// 				error: true,
// 				confirm: true
// 			};
// 		case 'WRITE':
// 			return {
// 				...state,
// 				value: action.payload,
// 			};
// 		case 'CHECK':
// 			return {
// 				...state,
// 				loading: true
// 			};
// 		case 'DELETE':
// 			return {
// 				...state,
// 				deleted: true,
// 			}
// 		case 'RESET':
// 			return {
// 				...state,
// 				value: '',
// 				confirmed: false,
// 				deleted: false,
// 			}
// 		default:
// 			return {
// 				...state
// 			}
// 	}
// }

const reducerObject = (state, payload) => ({
  [actionTypes.confirm]: {
    ...state,
    error: true,
    loading: false,
    confirmed: true
  },
  [actionTypes.error]: {
    ...state,
    error: true,
    loading: false
  },
  [actionTypes.write]: {
    ...state,
    value: payload,
  },
  [actionTypes.check]: {
    ...state,
    loading: true
  },
  [actionTypes.delete]: {
    ...state,
    deleted: true,
  },
  [actionTypes.reset]: {
    ...state,
    confirmed: false,
    deleted: false,
    error: false,
    value: '',
  }
});

const actionTypes = {
  confirm: 'CONFIRM',
  error: 'ERROR',
  write: 'WRITE',
  check: 'CHECK',
  delete: 'DELETE',
  reset: 'RESET'
}

const reducer = (state, action) => {
  return (reducerObject(state, action.payload)[action.type] || state)
};

export { UseReducer }