import React, {Component} from 'react';
import {Formik, Form, Field} from "formik";
import FormInput from "./FormInput";
import FormCheckbox from "./FormCheckbox";
import FormNumber from "./FormNumber";
import FormDate from "./FormDate";
import * as Yup from 'yup';

const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

const nowDate = new Date(Date.now());
const pastDate = new Date(Date.now() - 86400000);
const futureDate = new Date(Date.now() + 86400000 * 30);


class FormFormik extends Component {
  render() {
    return (
      <Formik
        initialValues={{
          username: '',
          email: '',
          numberOfPerson: '',
          numberOfChildren: '',
          arriveDate: '',
          departureDate: '',
          smoke: 'no',
          breakfast: false,
          termsAndConditions: false
        }}
        onSubmit={(formValues) => alert(JSON.stringify(formValues))}
        validationSchema={Yup.object().shape({
          username: Yup.string().required('Name is required').max(20, 'Name should be less then 20 characters'),
          email: Yup.string().email('Email should be un correct form').required('Email is required'),
          password: Yup.string().matches(passwordRegex, 'Password should be more then 8 characters and contain at least one number and one latter').required('Password is required'),
          numberOfPerson: Yup.number().required('Number of person is required').min(1, 'More than one person needed').max(100, "Too much persons"),
          arriveDate: Yup.date().required('Date is required').min(pastDate, "Date cannot be in the past"),
          departureDate: Yup.date().required('Date is required').max(futureDate, "Date cannot be more than one month").min(nowDate, "Date cannot be today or less"),
          termsAndConditions: Yup.boolean().isTrue('Ypu should accept out terms and conditions')
        })}
      >
        {({isValid}) => (
          <Form>
            <Field name="username"
                   component={FormInput}
                   label="Name"/>
            <Field name="email"
                   component={FormInput}
                   label="Email"/>
            <Field name="password"
                   component={FormInput}
                   label="password"
                   type="password"/>

            <fieldset>

              <Field
                name="numberOfPerson"
                component={FormNumber}
                label="Number of person"
                type="number"
              />

                <label>Of them children</label>
                <Field
                  type="number"
                  name="numberOfChildren"
                  min="0"
                  max="100"
                />
            </fieldset>

            <fieldset>
              <Field
                name="arriveDate"
                component={FormDate}
                label="Arrive date"
                type="date"
              />
              <Field
                name="departureDate"
                component={FormDate}
                label="Departure date"
                type="date"/>
            </fieldset>

            <fieldset>
              <legend>Smoking room</legend>

              < Field
                type="radio"
                name="smoke"
                value="yes"
                id="yes"
              />
              <label for="yes">Yes</label>

              < Field
                type="radio"
                name="smoke"
                value="no"
                id="no"
              />
              <label for="no">No</label>
            </fieldset>

            <Field
              type="checkbox"
              name="breakfast"
              id="breakfast"
            />
            <label htmlFor="breakfast">
              Add breakfast
            </label>

            <Field
              name="termsAndConditions"
              component={FormCheckbox}
              label="I agree with Terms and Conditions"/>

            <button type="submit"
                    disabled={!isValid}>Submit
            </button>
          </Form>
        )}
      </Formik>
    );
  }
}

export default FormFormik;