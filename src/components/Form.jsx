import React from 'react';
import axios from 'axios';

class Form extends React.Component{
    //userNameInput = React.createRef();

    state = {
        userName: ''
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        const resp = await axios.get(`https://api.github.com/users/${this.state.userName}`);

        this.props.onSubmit(resp.data);
        this.setState({userName:''})
    }

    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <input 
                type="text"  
                onChange={event => this.setState({userName: event.target.value})}
                value={this.state.userName} 
                placeholder="Github username" required/>
                <button>Add Card</button>
            </form>
        )
    }
}

export default Form;