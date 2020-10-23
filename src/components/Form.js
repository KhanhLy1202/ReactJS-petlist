import React, { Component } from 'react'

export class Form extends Component {

  constructor(props) {
    super(props);
    this.state = {
      task: [
        {
          id: '',
          name: '',
          status: false
        }
      ]
    }
  }

  closeForm = () => {
    this.props.closeForm();
  }

  handleSubmit = (e) => {
    let target = e.target;
    let name = target.name;
    let value = target.value;
    console.log(value);
    e.preventDefault();
  }

  render() {
    return (
      <div className="col-12 col-md-3">
        <div className="card">
          <div className="card-header d-flex justify-content-between">
            Add Job
            <button className="btn p-0" onClick={this.closeForm}><i className="far fa-times-circle"></i></button>
          </div>
          <div className="card-body">
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" className="form-control" id="name" placeholder="Enter name" name="name" />
              </div>
              <div className="form-group">
                <label htmlFor="status">Status</label>
                <select className="form-control" id="status">
                  <option value={1}>Open</option>
                  <option value={0}>Close</option>
                </select>
              </div>
              <div className="btnGroup text-center">
                <button type="submit" className="btn btn-warning mr-1"><i className="fas fa-plus"></i> Save</button>
                <button type="button" className="btn btn-success"><i className="fas fa-times"></i> Cancel</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Form
