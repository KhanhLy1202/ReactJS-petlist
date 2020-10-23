import React, { Component } from 'react';
import Search from '../components/Search';
import Sort from '../components/Sort';

export class Control extends Component {

  handleForm = () => {
    this.props.handleForm();
  }

  render() {
    return (
      <div className="card-header">
        <button type="button" className="btn btn-primary mb-3" onClick={this.handleForm}><i className="fas fa-plus"></i> Add Job</button>
        <div className="row">
          {/* Search */}
          <Search />
          {/* Sort */}
          <Sort />
        </div>
      </div>
    )
  }
}

export default Control
