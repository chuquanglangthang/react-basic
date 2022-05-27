import React from 'react'

class MyForm extends React.Component {

    state = {
        position: '',
        salary: ''
    }
    // function
    handleChangeJobPosition = (event) => {
        this.setState({
            position: event.target.value,
        }) 
    }
    handleChangeSalary = (event) => {
        this.setState({
            salary: event.target.value,
        }) 
    }
    // get position and Salary info
    handleSubmit = (event) => {
        event.preventDefault(); // prevent reloading page when click submit button
        console.log('Current state: ',this.state)

        if (!this.state.position || !this.state.salary) {
            alert('Required!')    
            return
        }

        this.props.addNewJob({
            id: Math.floor(Math.random() * 1000),
            position: this.state.position,
            salary: `${this.state.salary}$`
        }) // receive function as props from parent
        // because addNewJob is a function show we can call it through this.props

        this.setState({
            position: '',
            salary: ''
        }) // refresh state
    }

    render() {
        return (
            <>
                <form>
                    <label htmlFor="fname">Job Position:</label><br/> 
                    <input 
                        type="text" 
                        value={this.state.position} 
                        onChange={(event) => this.handleChangeJobPosition(event)}/><br/>
                    <label htmlFor="">Salary:</label><br/> 
                    <input 
                        type="text" 
                        value={this.state.salary} 
                        onChange={(event) => this.handleChangeSalary(event)} /><br/>
                    <input 
                        type="submit" 
                        value="Submit"
                        onClick={(event) => this.handleSubmit(event)} />
                </form>
            </>
        )
    }
}

export default MyForm