import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import * as actions from '../../actions';

class Signup extends Component {
  static propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    signupUser: PropTypes.func.isRequired,
    fields: PropTypes.object.isRequired,
    submitting: PropTypes.bool.isRequired,
    errorMessage: PropTypes.string
  };

  handleFormSubmit = ({ email, password }) => {
    this.props.signupUser({ email, password });
  }

  renderError(field) {
    const { touched, error } = field;

    if (touched && error) {
      return <div className="error">{error}</div>;
    }

    return null;
  }

  render() {
    const { fields: { email, password, passwordConfirm }, handleSubmit, submitting, errorMessage } = this.props;

    return (
      <form onSubmit={handleSubmit(this.handleFormSubmit)}>
        <fieldset className="form-group">
          <label>Email</label>
          <input placeholder="Email" className="form-control" {...email} />
          {this.renderError(email)}
        </fieldset>
        <fieldset className="form-group">
          <label>Password:</label>
          <input placeholder="Password" type="password" className="form-control" {...password} />
          {this.renderError(password)}
        </fieldset>
        <fieldset className="form-group">
          <label>Confirm Password:</label>
          <input placeholder="Passsword (Again)" type="password" className="form-control" {...passwordConfirm} />
          {this.renderError(passwordConfirm)}
        </fieldset>
        {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
        <button action="submit" disabled={submitting} className="btn btn-primary">Sign Up</button>
      </form>
    );
  }
}

function mapStateToProps(state) {
  return { errorMessage: state.auth.error };
}

function validate(formProps) {
  const errors = {};
  const { email, password, passwordConfirm } = formProps;

  if (!email) {
    errors.email = 'Required';
  }

  if (!password) {
    errors.password = 'Required';
  }

  if (!passwordConfirm) {
    errors.passwordConfirm = 'Required';
  } else if (password !== passwordConfirm) {
    errors.passwordConfirm = 'Passwords must match';
  }

  return errors;
}

export default reduxForm({
  validate,
  form: 'signup',
  fields: ['email', 'password', 'passwordConfirm']
}, mapStateToProps, actions)(Signup);
