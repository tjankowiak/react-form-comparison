import React from 'react';
import { Field, Form, Formik } from 'formik';
import { email, required } from 'utils/validators';
import { composeValidators } from 'utils/composeValidators';
import { sleep } from 'utils/sleep';
import RenderCounter from 'components/RenderCounter/RenderCounter';
import DisplayFormState from 'components/DisplayFormState/DisplayFormState';

let counter = 0;

const FormikForm = () => {
  const onSubmit = async (values, { setSubmitting, setErrors }) => {
    await sleep(500);

    if (values.firstName === 'Larry') {
      setErrors({ submitError: 'Sorry, that name is taken' });

      return;
    }
    const mes = `Formik
            ${JSON.stringify(values)}
      `;

    alert(mes);
    setSubmitting(false);
  };

  return (
    <Formik
      initialValues={{
        firstName: '',
        middleName: 'Paul',
        lastName: '',
        email: '',
        description: '',
        gender: 'male',
        processing: false,
      }}
      onSubmit={onSubmit}
    >
      {({
        errors,
        touched,
        handleSubmit,
        isSubmitting,
        values,
        resetForm,
        dirty,
      }) => (
        <Form onSubmit={handleSubmit}>
          <div className="info">
                Try entering a first name
            {' '}
            <code> Larry </code>
            {' '}
                to see the validation on submit.
          </div>
          <div className="input-group">
            <label htmlFor="firstName">First name</label>
            <Field
              placeholder="First name"
              name="firstName"
              type="text"
              validate={required}
            />
          </div>
          {touched.firstName && errors.firstName && (<div className="error">{errors.firstName}</div>)}
          <div className="input-group">
            <label htmlFor="middleName">Middle name</label>
            <Field
              type="text"
              placeholder="Middle name"
              name="middleName"
            />

          </div>
          <div className="input-group">
            <label htmlFor="lastName">Last name</label>
            <Field
              type="text"
              placeholder="Last name"
              name="lastName"
              validate={required}
            />
          </div>
          {touched.lastName && errors.lastName && (<div className="error">{errors.lastName}</div>)}
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <Field
              placeholder="Email"
              name="email"
              validate={composeValidators(required, email)}
            />
          </div>
          {touched.email && errors.email && (<div className="error">{errors.email}</div>)}

          <div className="input-group">
            <label htmlFor="gender">
                Gender
            </label>
            <div className="input-group-radio">
              <div>
                <Field
                  type="radio"
                  name="gender"
                  value="male"
                  id="formikGenderMale"
                />
                <label htmlFor="formikGenderMale">Male</label>
              </div>
              <div>
                <Field
                  type="radio"
                  name="gender"
                  value="female"
                  id="formikGenderFemale"
                />
                <label htmlFor="formikGenderFemale">Female</label>
              </div>
              <div>
                <Field
                  type="radio"
                  name="gender"
                  value="other"
                  id="formikGenderOther"
                />
                <label htmlFor="formikGenderOther">Other</label>
              </div>
            </div>
          </div>
          <div className="input-group">
            <label htmlFor="description">Describe yourself</label>
            <Field
              placeholder="Describe yourself in a few words"
              name="description"
              component="textarea"
            />
          </div>
          <div className="input-group">
            <label htmlFor="formikProcessing">
                        I hereby give consent for my personal data
                        to be processed for the purposes of creating an account.
            </label>
            <Field
              id="formikProcessing"
              type="checkbox"
              name="processing"
              validate={required}
            />
          </div>
          {touched.processing && errors.processing && (<div className="error">{errors.processing}</div>)}

          <div className="input-group">
            <button
              type="submit"
              disabled={isSubmitting}
            >
                        Submit
            </button>
            <button
              type="button"
              onClick={resetForm}
              disabled={isSubmitting || !dirty}
            >
                        Reset
            </button>
          </div>
          {errors.submitError && <div className="error">{errors.submitError}</div>}
          <DisplayFormState values={values} />
          <RenderCounter counter={++counter} />
        </Form>

      )}
    </Formik>
  );
};

export default FormikForm;
