import React from 'react';
import PureReactComponent from '../PureReactComponent/PureReactComponent';
import './PureComponentContainer.css'

export default class PureComponentContainer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            content : ''
        }
    }

    inputHandler(event) {
        event.persist()
        this.setState((previousState)=>{
            let newState = {...previousState};
            newState.content = event.target.value;
            return newState;
        });
    }

    render() {
        return (
            <div className="container-background">
                <p>Text entered in the below input is displayed in the pure react component. Give it a try.</p>
                <input type="text" value={this.state.content} onChange={this.inputHandler.bind(this)}></input>
                <PureReactComponent content={this.state.content}></PureReactComponent>
            </div>
        )
    }
}