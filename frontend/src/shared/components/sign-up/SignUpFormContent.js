import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FormDebugger } from "../../../utils/FormDebugger";
import React from "react";

export const SignUpFormContent = (props) => {
  const {
    status,
    values,
    errors,
    touched,
    dirty,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
    handleReset
  } = props;
  return (
    <>
      <form onSubmit={handleSubmit}>
        {/*controlId must match what is passed to the initialValues prop*/}
        <div className="form-group">
          <label htmlFor="profileEmail">Email Address</label>
          <div className="input-group">
            <div className="input-group-prepend">
              <div className="input-group-text">
                <FontAwesomeIcon icon="envelope"/>
              </div>
            </div>
            <input
              className="form-control"
              name="profileEmail"
              type="email"
              value={values.profileEmail}
              placeholder="Enter email"
              onChange={handleChange}
              onBlur={handleBlur}

            />
          </div>
          {
            errors.profileEmail && touched.profileEmail && (
              <div className="alert alert-danger">
                {errors.profileEmail}
              </div>
            )

          }
        </div>
        {/*controlId must match what is defined by the initialValues object*/}
        <div className="form-group">
          <label htmlFor="profilePassword">Password</label>
          <div className="input-group">
            <div className="input-group-prepend">
              <div className="input-group-text">
                <FontAwesomeIcon icon="key"/>
              </div>
            </div>
            <input
              name="profilePassword"
              className="form-control"
              type="password"
              placeholder="Password"
              value={values.profilePassword}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          {errors.profilePassword && touched.profilePassword && (
            <div className="alert alert-danger">{errors.profilePassword}</div>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="profilePasswordConfirm">Confirm Your Password</label>
          <div className="input-group">
            <div className="input-group-prepend">
              <div className="input-group-text">
                <FontAwesomeIcon icon="key"/>
              </div>
            </div>
            <input

              className="form-control"
              type="password"
              name="profilePasswordConfirm"
              placeholder="Password Confirm"
              value={values.profilePasswordConfirm}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          {errors.profilePasswordConfirm && touched.profilePasswordConfirm && (
            <div className="alert alert-danger">{errors.profilePasswordConfirm}</div>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="profileUserName">Profile User Name</label>
          <div className="input-group">
            <div className="input-group-prepend">
              <div className="input-group-text">
                <FontAwesomeIcon icon="dove"/>
              </div>
            </div>
            <input
              className="form-control"
              name="profileUserName"
              type="text"
              value={values.profileUserName}
              placeholder="profileUserName"
              onChange={handleChange}
              onBlur={handleBlur}

            />
          </div>
          {
            errors.profileUserName && touched.profileUserName && (
              <div className="alert alert-danger">
                {errors.profileUserName}
              </div>
            )
          }
        </div>
        <div className="form-group">
          <button className="btn btn-primary mb-2" type="submit">Submit</button>
        </div>
      </form>
      {
        status && (<div className={status.type}>{status.message}</div>)
      }
    </>
  )
};