import React from 'react';
import { Title } from './TitleComponent/TitleComponent'
import './App.css'
class App extends React.Component {

    state = {
        content : '',
        name: '',
        number: '',
    }

    handleChange = (event) => {
        event.persist();
        this.setState((previousState)=>{
            let newState = {...previousState};
            newState.content = event.target.value;
            return newState;
        });
    }

    handleClick = (event) => {
        event.persist();
        this.setState((previousState)=>{
            let newState = {...previousState};
            newState.name = previousState.content;
            return newState;
        });
    }

    showMessage = (content) => {
        return `Hello ${content}!!! This is just an experiment on Webpack.`;
    }


    render() {
        return(
        <div>
            <Title/>
            <p className={this.state.name ? 'hide': 'show' }>Please enter your name!!!</p>
            <input className={this.state.name ? 'hide': 'show' } type="text" value={this.state.content} onChange={this.handleChange}></input>
            <button className={this.state.name ? 'hide': 'show' } onClick={this.handleClick}>Submit</button>
            <h2 className={this.state.name ? 'show': 'hide' }>{this.showMessage(this.state.content)}</h2>
        </div>
        );
    }
}

export { App };