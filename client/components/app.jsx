import React from 'react';

function Header(props) {
  const { avg } = props;
  return (
    <header className="header row justify-content-between align-items-center mt-4 px-3">
      <h1>Student Grade Table</h1>
      <h2>
        Average Grade
        <span className="badge badge-secondary ml-2">{avg}</span>
      </h2>
    </header>

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
    <div className="table-container mt-4 col-xl-8">
      <table className="table table-striped">
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
    </div>
  );
}

class GradeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      course: '',
      grade: ''
    };
  }

  render() {
    return (
      <div className="form-container col-xl-4 mt-4">
        <form className="col px-0">
          <h3>Add Grade</h3>
          <div className="input-group form-group mt-4">
            <div className="input-group-prepend">
              <div className="input-group-text">
                <i className="fas fa-user"></i>
              </div>
            </div>
            <input type="text" className="form-control" placeholder="Student Name"/>
          </div>
          <div className="input-group form-group">
            <div className="input-group-prepend">
              <div className="input-group-text">
                <i className="far fa-list-alt"></i>
              </div>
            </div>
            <input type="text" className="form-control" placeholder="Student Course"/>
          </div>
          <div className="input-group form-group">
            <div className="input-group-prepend">
              <div className="input-group-text">
                <i className="fas fa-graduation-cap"></i>
              </div>
            </div>
            <input type="number" className="form-control" placeholder="Student Grade"/>
          </div>
          <div className="form-group d-flex justify-content-end">
            <button type="submit" className="btn btn-success">Add</button>
            <button type="reset" className="btn btn-outline-secondary ml-2">Cancel</button>
          </div>
        </form>
      </div>
    );
  }
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
        <main className="row">
          <GradeTable grades={ this.state.grades }/>
          <GradeForm />
        </main>
      </div>
    );
  }
}

export default App;
