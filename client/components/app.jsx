import React from 'react';

function Header(props) {

  return (
    <h1>Student Grade Table</h1>
  );
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grades: []
    };
  }

  render() {
    return (
      <div className="container">
        <Header />
      </div>
    );
  }
}

export default App;
