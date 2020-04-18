import React from 'react';
import Grade from './grade';

function GradeTable(props) {
  const grades = props.grades;
  const gradeRows = grades.map(grade => <Grade key={grade.id} grade={grade} />);
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
          {gradeRows}
        </tbody>
      </table>
    </div>
  );
}

export default GradeTable;
