import React from 'react';

function Grade(props) {
  const { name, course, grade } = props.grade;
  return (
    <tr>
      <td>{name}</td>
      <td>{course}</td>
      <td>{grade}</td>
      <td>
        <button className="btn btn-danger" type="button">Delete</button>
      </td>
    </tr>
  );
}

export default Grade;
