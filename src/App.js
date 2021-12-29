import React from 'react';

import ReactDOM from "react-dom";

function Welcome(props) {
    return <h2>welcome, {props.name}</h2>;
  }
  
  function App() {
    return (
      <div>
        <Welcome name="everyone" />
        <Welcome name="to CGCS" />
        <Welcome name="all" />
      </div>
    );
  }
  
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );
  export default App;