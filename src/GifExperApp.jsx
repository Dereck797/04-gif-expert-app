import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GifExperApp = () => {
  const [categories, setCategories] = useState(['One Punch', 'Dragon Ball']);

  // no es recomendable colocar un hook dentro de un if, esto va contra los principios de un hook
  // console.log(categories);

  const onAddCategory = ( newCategory ) => {
    if(categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);

  }

  return (
    <>
      <h1>GifExperApp</h1>


      {/* Existe otra manera de implementar la funcionalidad y es recibiendo la información del componente hijo para que el componente lo renderize  */}
      <AddCategory
        // setCategories={setCategories} categories={categories}
        onNewCategory={ onAddCategory }
      />


      <ol>
        {/* El método map nos ayuda a recorrer todos los elementos de una lista  */}
        {categories.map(category => {
          return <li key={category}> {category}</li>
        })}
      </ol>
    </>


  )
}

