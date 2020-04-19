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

export default Header;
