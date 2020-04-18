import React from 'react';

function Header(props) {

  return (
    <h1>Student Grade Table</h1>
  );
}

function Grade(props) {

  return (
    <tr></tr>
  );
}

function GradeTable(props) {

  return (
    <table>
      <thead></thead>
      <tbody>
        <Grade />
      </tbody>
    </table>
  );
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grades: []
    };
  }

  componentDidMount() {

    fetch('./api/grades')
      .then(response => response.json())
      .then(grades => this.setState({ grades }))
      .catch(error => console.error('Unable to retrieve grades:', error));
  }

  render() {
    return (
      <div className="container">
        <Header />
        <GradeTable grades={this.state.grades}/>
      </div>
    );
  }
}

export default App;
