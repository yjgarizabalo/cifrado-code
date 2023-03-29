import React from "react";

function UseContador({ name }) {
  const [contador, setContador] = React.useState(0)
  return (
    <>
      <h1>{name}</h1>
      <p>{contador}</p>
      <button onClick={() => setContador(contador + 1)}>Incrementar</button>
    </>
  )
}

export { UseContador }