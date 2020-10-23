import React, { Component } from 'react';
import './App.css';
import Form from './components/Form';
import Control from './components/Control';
import TaskList from './components/TaskList';


export class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      tasks: [
        {
          id: 1,
          name: "eat",
          status: true
        },
        {
          id: 2,
          name: "sleep",
          status: false
        },
        {
          id: 3,
          name: "work",
          status: true
        }
      ],
      form: false
    }
  }

  handleForm = () => {
    this.setState({
      form: !this.state.form
    })
  }

  closeForm = () => {
    this.setState({
      form: false
    })
  }

  render() {
    let { tasks } = this.state;
    let showForm = (this.state.form === true ? <Form closeForm={this.closeForm} /> : "");
    return (
      <main>
        <div className="container-fluid">
          <div className="content">
            <section className="mt-5">
              <h2 className="text-center pb-3 border-bottom mb-5">Todo List</h2>
              <div className="row">
                {/* Form */}
                {showForm}
                <div className={this.state.form === true ? "col-12 col-md-9 mt-3 mt-md-0" : "col-12 col-md-12 mt-3 mt-md-0"}>
                  <div className="card">
                    {/* Control */}
                    <Control handleForm={this.handleForm} />
                    {/* Task List */}
                    <TaskList tasks={tasks} />
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    )
  }
}

export default App
