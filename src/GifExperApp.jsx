import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GifExperApp = () => {
  const [categories, setCategories] = useState(['One Punch', 'Dragon Ball']);

  // no es recomendable colocar un hook dentro de un if, esto va contra los principios de un hook
  // console.log(categories);

  const onAddCategory = () => {
    setCategories([...categories,'Valorant']);
  }

  return (
    <>
      <h1>GifExperApp</h1>

      <AddCategory setCategories={ setCategories } categories={categories}/>


      <ol>
        {/* El método map nos ayuda a recorrer todos los elementos de una lista  */}
        {categories.map( category => {
          return <li key={category}> {category}</li>
        })}
      </ol>
    </>


  )
}

