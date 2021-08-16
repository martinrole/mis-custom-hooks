import { useState } from "react"

export const useCounter = (valorInicial = 0) => {

    const [contador, setContador] = useState(valorInicial)

    //const suma = () => setContador( contador + 1)
    const suma = () => setContador( contador => contador + 1)      //Es mejor esta que tiene callback y siempre espera el valor anterior si se llamò dos veces

    const resta = () => {
        contador !== valorInicial && setContador( contador => contador - 1 )  
    }
    
    
    const incrementador = (factor = 1) => {
        setContador( contador => contador + factor )
    }

    const reductor = (factor = 1) => {
    
        //El reductor se desea que no muestre valores negativos:
        if (contador - factor === 0 ) {
            setContador( () => 0 )
        } else if ( contador - factor > 0) {
            setContador( contador => contador - factor )
        } else {
            //Si el valor en menor a cero devuelve el mismo valor porque no se puede descontar
            setContador( contador => contador )
        }
    }

    const reset = () => setContador (valorInicial)

    return {
        contador,
        suma,
        resta,
        incrementador,
        reductor,
        reset
    }
}
