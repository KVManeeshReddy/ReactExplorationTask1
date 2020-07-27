import React from 'react';
import FunctionComponent from './FunctionalComponent/FunctionalComponent';
import ReactComponent from './ReactComponent/ReactComponent';
import CreateElement from './CreateElement/CreateElement';
import PureComponentContainer from './PureComponentContainer/PureComponentContainer';
import './App.css';

function App() {
  return (
    <div className="container">
      <div className="wrapper">
      <FunctionComponent/>
      <ReactComponent/>
      <CreateElement/>
      <PureComponentContainer/>
      </div>
    </div>
  );
}

export default App;
