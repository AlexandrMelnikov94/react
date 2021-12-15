import React, {Component} from 'react';
import {Formik, Form, Field} from "formik";

class FormFormik extends Component {
  render() {
    return (
      <Formik initialValues={{
        username: '',
        email: '',
      }} onSubmit={(formValues) => alert(JSON.stringify(formValues))}
      >
        <Form>
          <div>
            <label>Name</label>
            <Field name="username"/>
          </div>

          <div>
            <label>Email</label>
            <Field name="email"/>
          </div>

          <fieldset>
          <div>
            <label>Number of person</label>
            <Field type="number" name="numberOfPerson" min="1" max="100"/>
          </div>
            <div>
              <label>Of them children</label>
              <Field type="number" name="numberOfChildren" min="1" max="100"/>
            </div>
          </fieldset>

          <fieldset>
            <div>
              <label>Arrival date</label>
              <Field type="date" name="arriveDate"/>
            </div>
            <div>
              <label>Departure date</label>
              <Field type="date" name="departureDate"/>
            </div>
          </fieldset>

          <fieldset>
            <legend>Smoking room</legend>

            <div>
              < Field
                type = "radio"
                name = "gender"
                value = "yes"
                id = "yes"
              />
              <label for="yes">Yes</label>
            </div>

            <div>
              < Field
                type="radio"
                name="gender"
                value="no"
                id="no"
              />
              <label for="no">No</label>
            </div>
          </fieldset>

          <div>
            <Field
              type="checkbox"
              name="breakfast"
              id="breakfast"
            />
            <label htmlFor="breakfast">
              Add breakfast
            </label>
          </div>

          <div>
            <Field
              type="checkbox"
              name="termsAndConditions"
              id="termsAndConditions"
            />
            <label htmlFor="termsAndConditions">
              I Agree with Terms and Conditions
            </label>
          </div>

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    );
  }
}

export default FormFormik;