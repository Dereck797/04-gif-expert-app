import { useState } from "react";

export const AddCategory = () => {

    const [inputValue, setInputValue] = useState('One Punch');

    // se desestructura el target del event
    const onInputChange = ({ target }) => {
        // console.log(event.target.value);
        setInputValue(target.value);
        // console.log(inputValue);
    }

    const onSumit = (event) => {
        event.preventDefault();
        console.log(inputValue);
    }

    return (
        <form onSubmit={ (event) => onSumit(event)}>
            <input
                type="text"
                placeholder="Buscar gifs"
                value={inputValue}
                // onChange={ (event) =>  onInputChange(event) }
                // en el onchange siempre estoy recibiendo un evento, por ende se puede eliminar, el set del event
                onChange={onInputChange}

            />
        </form>

    )
}
