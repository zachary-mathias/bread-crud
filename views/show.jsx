const React = require('react')
const Default = require('./layouts/default')

function Show({ bread }) {
  return (
    <Default>
      
      <h3>{bread.name}</h3>
      <p>
        and it 
        {
          bread.hasGluten ? <span> does </span> : <span> does not </span>
        }
        have gluten
      </p>
      <img src={bread.image} alt={bread.name}/>
      <p>{bread.getBakedBy()}</p>
      <a href={`/breads/${bread.id}/edit`}>
        <button> Edit </button>
      </a>
      <li>
        <a href={'/breads'}>Go home</a>
      </li>
      <form id='button' action={`/breads/${bread.id}?_method=DELETE`} method='POST'>
        <input type='submit' value='DELETE'/>
      </form>
    </Default>
  )
}

module.exports = Show