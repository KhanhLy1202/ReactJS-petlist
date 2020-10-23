import React, { Component } from 'react';
import TaskItem from '../components/TaskItem';

export class TaskList extends Component {
  render() {
    let task = this.props.tasks.map((task, index) => {
      return <TaskItem task={task} index={index} key={task.id} />
    })
    return (
      <div className="card-body">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Status</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row"></th>
              <td>
                <input type="text" className="form-control" placeholder="Search name" />
              </td>
              <td>
                <select className="form-control">
                  <option>All</option>
                  <option>Open</option>
                  <option>Close</option>
                </select></td>
              <td></td>
            </tr>
            {/* Task Items */}
            {task}
          </tbody>
        </table>
      </div>
    )
  }
}

export default TaskList
