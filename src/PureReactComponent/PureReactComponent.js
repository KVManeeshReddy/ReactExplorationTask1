import React , { PureComponent } from 'react';
import './PureReactComponent.css'

export default class PureReactComponent extends PureComponent {
    render() {
        return (
        <div className="component-background">
            <h3 className="component-color">This is pure react component. {this.props.content}</h3>
        </div>
        )
    }
}