import React from 'react';

function Header(props) {

  return (
    <h1>Student Grade Table</h1>
  );
}

function Grade(props) {
  const grade = props.grade;

  return (
    <tr></tr>
  );
}

function GradeTable(props) {
  const grades = props.grades;
  const gradeRows = grades.map(grade => <Grade key={grade.id} grade={grade}/>);

  return (
    <table className="table table-striped">
      <thead className="thead-light">
        <tr>
          <th scope="col">Student Name</th>
          <th scope="col">Course</th>
          <th scope="col">Grade</th>
        </tr>
      </thead>
      <tbody>
        {gradeRows}
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
