import React, { Component } from 'react'

class UserDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            employee: {
                Id: '',
                Name: '',
                Location: '',
                Salary: ''
            }
        }
    }

    changeHandler = e => {
        this.setState({
            employee:{
              ...this.state.employee,
              [e.target.name]: e.target.value
            }
          });
    }

    render() {
        return (<>
            <p>
                <label>Employee ID : <input type="text" name="Id" value={this.state.employee.Id}
                    onChange={this.changeHandler} ></input>
                </label>
            </p>
            <p>
                <label>Employee Name : <input type="text" name="Name"
                    value={this.state.employee.Name}
                    onChange={this.changeHandler}></input>
                </label>
            </p>
            <p>
                <label>Employee Location : <input type="text" name="Location"
                    value={this.state.employee.Location}
                    onChange={this.changeHandler}></input>
                </label>
            </p>
            <p>
                <label>Employee Salary : <input type="text" name="Salary"
                    value={this.state.employee.Salary}
                    onChange={this.changeHandler}></input>
                </label>
            </p>
            <p> {JSON.stringify(this.state.employee) }</p>
        </>);
    }
}

export default UserDetails;