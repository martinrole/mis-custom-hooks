import { useRef } from "react"
import { useEffect, useState } from "react"

export const useFetch = ( url ) => {

    //La idea de este useRef es que mantenga la referencia, cuando este hook esté activo o montado en el componente.
    //Cuando cambie el valor de este useRef, yo no quisiera lanzar una renderización nuevamente del componente
    const isMounted = useRef(true)
    
    const [state, setState] = useState({datos:null, cargando: true, error: null})

    useEffect(() => {
        return () => {
            //Cuando el componente se desmonte la propiedad current de la referencia se coloque en false para ya no ejecutarlo
            isMounted.current = false
        }
    }, [])
    
    
    useEffect(() => {

        setState({ datos:null, cargando:true, error:null })
        
        fetch( url )
            .then( resp => resp.json())
            .then(datos => {

                setTimeout(() =>{

                    if (isMounted.current) {
                        setState ({
                            cargando: false,
                            error: null,
                            datos
                        })
                    } else {
                        console.log('useFetcf Hook: setState no se llamó')
                    }

                },3000)
            })
            .catch( () => {
                setState ({
                    datos: null,
                    cargando: false,
                    error: 'No se pudo cargar la info'
                })
            })

    }, [url])

    return state

}
