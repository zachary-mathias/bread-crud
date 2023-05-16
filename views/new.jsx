const React = require('react')
const Default = require('./layouts/default')

function New({ bakers }) {
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
          <label htmlFor="baker">Baker</label>
          <select name="baker" id="baker">
          {bakers.map(baker => {
              return <option key={baker.id} value={baker.id}>{baker.name}</option>}
            )}
            <option value="Rachel">Rachel</option>
            <option value="Monica">Monica</option>
            <option value="Joey">Joey</option>
            <option value="Chandler">Chandler</option>
            <option value="Ross">Ross</option>
            <option value="Phoebe">Phoebe</option>
          </select>
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