import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const GifGrid = ({ category }) => {

    const [counter, setCounter] = useState(10);

    // El useEffect es un hook de react que sirve para disparar efectos secundarios( Un proceso que se quiera ejecutar cuando algo suceda), por ejemplo
    // cuando counter cambio quiero disparar un efecto. cuando el componente se renderiza la primera vez quiero disparar un efecto.
    useEffect(() => {
        // React cada vez que detecta un cambioen los estados renderiza nuevamente el componente, hay ciertas
        // funciones especiales que pueden mantener el estado o ciertas funciones que se ejecutan solo una vez.
        getGifs(category);
    }, [ ]); // Si se envían las dependencias vacías quiere decir que el hook se ejecuta en el primer render del componente.



    return (
        <>
            <h3> {category} </h3>


            <h5>{counter}</h5>

            <button onClick={() => setCounter(counter + 1)}> +1 </button>
        </>
    )
}