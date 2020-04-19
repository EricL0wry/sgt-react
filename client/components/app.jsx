import React from 'react';
import Header from './header';
import GradeTable from './grade-table';
import GradeForm from './grade-form';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grades: []
    };
    this.submitNewGrade = this.submitNewGrade.bind(this);
    this.deleteGrade = this.deleteGrade.bind(this);
  }

  submitNewGrade(grade) {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(grade)
    };
    fetch('./api/grades', options)
      .then(response => response.json())
      .then(newGrade => {
        newGrade.grade = parseInt(newGrade.grade);
        this.setState({
          grades: this.state.grades.concat(newGrade)
        });
      })
      .catch(error => console.error(error));
  }

  deleteGrade(gradeId) {
    const options = {
      method: 'DELETE'
    };
    fetch(`./api/grades/${gradeId}`, options)
      .then(response => response.json())
      .then(() => {
        const newGrades = this.state.grades.slice();
        const gradeIndex = newGrades.findIndex(grade => grade.id === gradeId);
        newGrades.splice(gradeIndex, 1);
        this.setState({ grades: newGrades });

      })
      .catch(error => console.error(error));
  }

  calculateAvg() {
    const { grades } = this.state;
    let avg;
    if (grades.length) {
      avg = Math.ceil((grades.reduce((acc, curr) => acc + parseInt(curr.grade), 0)) / grades.length);
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
          <GradeTable grades={ this.state.grades } deleteGrade={this.deleteGrade}/>
          <GradeForm submitNewGrade ={ this.submitNewGrade }/>
        </main>
      </div>
    );
  }
}

export default App;
