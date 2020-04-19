import React from 'react';
import Grade from './grade';

function GradeTable(props) {
  const grades = props.grades;
  const gradeRows = grades.map(grade => <Grade key={grade.id} grade={grade} deleteGrade={props.deleteGrade} />);
  return (
    <div className="table-container mt-4 col-xl-8">
      <table className="table table-striped">
        <thead className="thead-light">
          <tr>
            <th scope="col">Student Name</th>
            <th scope="col">Course</th>
            <th scope="col">Grade</th>
            <th scope="col">Operations</th>
          </tr>
        </thead>
        <tbody>
          {gradeRows.length ? gradeRows : <tr className="hidden"></tr>}
        </tbody>
      </table>
      <h4 className={`${!gradeRows.length ? '' : 'hidden'}`}>No Grades Recorded</h4>
    </div>
  );
}

export default GradeTable;
