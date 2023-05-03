const React = require('react')
const Default = require('./layouts/default')

function New() {
    return (
      <Default>
        <h2>Add a new bread</h2>
        <div className='newButton'>
          <a href='/breads/'><button>Go home</button></a>
        </div>
        <form action='/breads' method='POST'>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
          />
          <label htmlFor="image">Image</label>
          <input
            type="text"
            name="image"
            id="image"/>
          <label htmlFor="hasGluten">Has Gluten?</label>
          <input
            type="checkbox"
            name="hasGluten"
            id="hasGluten"
            defaultChecked
          />
          <br />
          <input type="submit"/>
        </form>
      </Default>
    )
}

module.exports = New