import { useState } from "react"

const GifExperApp = () => {
  const [categories, setCategories] = useState(['One Punch', 'Dragon Ball']);

  // no es recomendable colocar un hook dentro de un if, esto va contra los principios de un hook

  console.log(categories);

  return (
    <>
      <h1>GifExperApp</h1>

      <ol>
        {/* El método map nos ayuda a recorrer todos los elementos de una lista  */}
        {categories.map( category => {
          return <li key={category}> {category}</li>
        })}
      </ol>
    </>


  )
}

export default GifExperApp
