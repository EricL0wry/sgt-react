import React from 'react';

class GradeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      course: '',
      grade: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.resetState = this.resetState.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const newGrade = {
      name: this.state.name,
      course: this.state.course,
      grade: this.state.grade
    };
    this.props.submitNewGrade(newGrade);
    this.resetState();
  }

  resetState() {
    this.setState({
      name: '',
      course: '',
      grade: ''
    });
  }

  render() {
    return (
      <div className="form-container col-xl-4 mt-4">
        <form className="col px-0" onSubmit={this.handleSubmit} onReset={this.resetState}>
          <h3>Add Grade</h3>
          <div className="input-group form-group mt-4">
            <div className="input-group-prepend">
              <div className="input-group-text">
                <i className="fas fa-user"></i>
              </div>
            </div>
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Student Name"
              onChange={this.handleChange}
              value={this.state.name}
            />
          </div>
          <div className="input-group form-group">
            <div className="input-group-prepend">
              <div className="input-group-text">
                <i className="far fa-list-alt"></i>
              </div>
            </div>
            <input
              type="text"
              name="course"
              className="form-control"
              placeholder="Student Course"
              onChange={this.handleChange}
              value={this.state.course}
            />
          </div>
          <div className="input-group form-group">
            <div className="input-group-prepend">
              <div className="input-group-text">
                <i className="fas fa-graduation-cap"></i>
              </div>
            </div>
            <input
              type="number"
              name="grade"
              className="form-control"
              placeholder="Student Grade"
              onChange={this.handleChange}
              value={this.state.grade}
            />
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
