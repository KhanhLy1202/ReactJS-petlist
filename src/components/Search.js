import React, { Component } from 'react'

export class Search extends Component {
  render() {
    return (
      <div className="col-8">
        <div className="input-group mb-3">
          <input type="text" className="form-control" placeholder="Find job" />
          <div className="input-group-append">
            <button className="btn btn-outline-secondary" type="button"><i className="fas fa-search"></i>&nbsp;Search</button>
          </div>
        </div>
      </div>
    )
  }
}

export default Search
