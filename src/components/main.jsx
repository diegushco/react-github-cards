import React from 'react';
import Form from './Form';
import CardList from './CardList';

class Main extends React.Component {

    

    constructor(props){
        super(props);
        this.state = {
            profiles: []
        }
    }

    addNewProfile = (profileData)=> {
        console.log('App', profileData);
        this.setState(prevState => ({
            profiles: [...prevState.profiles, profileData]
        }))
    }

    render() {


        return <div>
                <div className="header">
                    {this.props.title}
                </div>
                <Form onSubmit={this.addNewProfile} />
                <CardList profile={this.state.profiles}/>
            </div>
    }
}

export default Main;