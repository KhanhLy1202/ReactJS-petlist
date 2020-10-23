import React, { Component } from 'react'

export class TaskItem extends Component {
  render() {
    let { task, index } = this.props;
    return (
      <tr>
        <th scope="row">{index + 1}</th>
        <td>{task.name}</td>
        <td className="text-center">{task.status === true ? <span className="badge badge-success">Open</span> : <span className="badge badge-danger">Close</span>}</td>
        <td>
          <button type="submit" className="btn btn-warning mr-1">Edit</button>
          <button type="button" className="btn btn-danger">Delete</button>
        </td>
      </tr>
    )
  }
}

export default TaskItem
