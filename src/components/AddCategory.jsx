import { useState } from "react";

export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('One Punch');

    // se desestructura el target del event
    const onInputChange = ({ target }) => {
        // console.log(event.target.value);
        setInputValue(target.value);
        console.log(inputValue);
    }

    const onSumit = (event) => {
        event.preventDefault();
        if(inputValue.trim().length <= 1) return;
        // setCategories( categories => [inputValue ,...categories]);
        onNewCategory(inputValue)
        setInputValue('');
    }

    return (
        <form onSubmit={ onSumit }>
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
