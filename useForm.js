import { useState } from "react"

export const useForm = ( estadoInicial = {} ) => {

    const [valores, setValores] = useState(estadoInicial)

    const limpiar = () => setValores( estadoInicial )

    const handleInputChange = (e) => {
        setValores({
            ...valores,
            [e.target.name]: e.target.value
        })
    }

    return [ valores, handleInputChange, limpiar ]

}

