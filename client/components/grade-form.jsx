import React from 'react';

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
            <input type="text" name="name" className="form-control" placeholder="Student Name" />
          </div>
          <div className="input-group form-group">
            <div className="input-group-prepend">
              <div className="input-group-text">
                <i className="far fa-list-alt"></i>
              </div>
            </div>
            <input type="text" name="course" className="form-control" placeholder="Student Course" />
          </div>
          <div className="input-group form-group">
            <div className="input-group-prepend">
              <div className="input-group-text">
                <i className="fas fa-graduation-cap"></i>
              </div>
            </div>
            <input type="number" name="grade" className="form-control" placeholder="Student Grade" />
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

export default GradeForm;
