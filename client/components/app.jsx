import React from 'react';

function Header(props) {
  const { avg } = props;
  return (
    <div className="header d-flex justify-content-between align-items-center mt-4">
      <h1>Student Grade Table</h1>
      <h2>
        Average Grade
        <span className="badge badge-secondary ml-2">{avg}</span>
      </h2>
    </div>

  );
}

function Grade(props) {
  const { name, course, grade } = props.grade;
  return (
    <tr>
      <td>{ name }</td>
      <td>{ course }</td>
      <td>{ grade }</td>
    </tr>
  );
}

function GradeTable(props) {
  const grades = props.grades;
  const gradeRows = grades.map(grade => <Grade key={grade.id} grade={grade}/>);
  return (
    <table className="table table-striped mt-4">
      <thead className="thead-light">
        <tr>
          <th scope="col">Student Name</th>
          <th scope="col">Course</th>
          <th scope="col">Grade</th>
        </tr>
      </thead>
      <tbody>
        { gradeRows }
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

  calculateAvg() {
    const { grades } = this.state;
    let avg;
    if (grades.length) {
      avg = Math.ceil((grades.reduce((acc, curr) => acc + curr.grade, 0)) / grades.length);
    } else {
      avg = '--';
    }
    return avg;
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
        <Header avg={this.calculateAvg()}/>
        <GradeTable grades={ this.state.grades }/>
      </div>
    );
  }
}

export default App;
