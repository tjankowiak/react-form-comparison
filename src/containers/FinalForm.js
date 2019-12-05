import React from 'react';
import { FORM_ERROR } from 'final-form';
import { Field, Form } from 'react-final-form';
import { composeValidators } from 'utils/composeValidators';
import { email, required } from 'utils/validators';
import { sleep } from 'utils/sleep';
import RenderCounter from 'components/RenderCounter/RenderCounter';
import DisplayFormState from 'components/DisplayFormState/DisplayFormState';

let counter = 0;

const FinalForm = () => {
  const onSubmit = async (values) => {
    await sleep(500);

    if (values.firstName === 'Larry') {
      return { [FORM_ERROR]: 'Sorry, that name is taken.' };
    }
    const mes = `React Final Form
            ${JSON.stringify(values)}
      `;

    alert(mes);
  };

  return (
    <Form
      onSubmit={onSubmit}
      initialValues={{
        middleName: 'Paul',
        gender: 'male',
      }}
    >
      {({
        handleSubmit,
        submitting,
        pristine,
        form,
        values,
        submitError,
      }) => (

        <form onSubmit={handleSubmit}>
          <div className="info">
                Try entering a first name
            {' '}
            <code> Larry </code>
            {' '}
                to see the validation on submit
          </div>
          <Field
            name="firstName"
            validate={required}
          >
            {({ input, meta }) => (
              <>
                <div className="input-group">
                  <label htmlFor="firstName">First name</label>
                  <input
                    name={input.name}
                    onBlur={input.onBlur}
                    onChange={input.onChange}
                    value={input.value}
                    type="text"
                    placeholder="First name"
                  />
                </div>
                {meta.error && meta.touched && (<div className="error">{meta.error}</div>)}
              </>
            )}
          </Field>
          <Field
            name="middleName"
          >
            {({ input }) => (
              <div className="input-group">
                <label htmlFor="middleName">Middle name</label>
                <input
                  name={input.name}
                  onBlur={input.onBlur}
                  onChange={input.onChange}
                  value={input.value}
                  type="text"
                  placeholder="Middle name"
                />
              </div>
            )}
          </Field>
          <Field
            name="lastName"
            validate={required}
          >
            {({ input, meta }) => (
              <>
                <div className="input-group">
                  <label htmlFor="lastName">Last name</label>
                  <input
                    name={input.name}
                    onBlur={input.onBlur}
                    onChange={input.onChange}
                    value={input.value}
                    type="text"
                    placeholder="Last name"
                  />
                </div>
                {meta.error && meta.touched && (<div className="error">{meta.error}</div>)}
              </>
            )}
          </Field>

          <Field
            name="email"
            validate={composeValidators(required, email)}
          >
            {({ input, meta }) => (
              <>
                <div className="input-group">
                  <label htmlFor="email">Email</label>
                  <input
                    name={input.name}
                    onBlur={input.onBlur}
                    onChange={input.onChange}
                    value={input.value}
                    type="text"
                    placeholder="Email"
                  />
                </div>
                {meta.error && meta.touched && (<div className="error">{meta.error}</div>)}
              </>
            )}
          </Field>
          <div className="input-group">
            <label htmlFor="gender">Gender</label>
            <div className="input-group-radio">
              <Field
                name="gender"
                value="male"
                type="radio"
              >
                {({ input }) => (
                  <div>
                    <input
                      name={input.name}
                      onBlur={input.onBlur}
                      onChange={input.onChange}
                      type={input.type}
                      value={input.value}
                      id="finalGenderMale"
                    />
                    <label htmlFor="finalGenderMale">Male</label>
                  </div>
                )}
              </Field>
              <Field
                name="gender"
                value="female"
                type="radio"
              >
                {({ input }) => (
                  <div>

                    <input
                      name={input.name}
                      onBlur={input.onBlur}
                      onChange={input.onChange}
                      type={input.type}
                      value={input.value}
                      id="finalGenderFemale"
                    />
                    <label htmlFor="finalGenderFemale">Female</label>
                  </div>
                )}
              </Field>
              <Field
                name="gender"
                value="other"
                type="radio"
              >
                {({ input }) => (
                  <div>
                    <input
                      name={input.name}
                      onBlur={input.onBlur}
                      onChange={input.onChange}
                      type={input.type}
                      value={input.value}
                      id="finalGenderOther"
                    />
                    <label htmlFor="finalGenderOther">Other</label>
                  </div>
                )}
              </Field>
            </div>
          </div>
          <Field
            name="description"
          >
            {({ input }) => (
              <div className="input-group">
                <label htmlFor="description">Describe yourself</label>
                <textarea
                  name={input.name}
                  onBlur={input.onBlur}
                  onChange={input.onChange}
                  value={input.value}
                  placeholder="Describe yourself in a few words"
                />
              </div>
            )}
          </Field>

          <Field
            name="processing"
            type="checkbox"
            validate={required}
          >
            {({ input, meta }) => (
              <>
                <div className="input-group">
                  <label htmlFor="finalProcessing">
                        I hereby give consent for my personal data
                        to be processed for the purposes of creating an account.
                  </label>
                  <input
                    id="finalProcessing"
                    name={input.name}
                    onBlur={input.onBlur}
                    onChange={input.onChange}
                    value={input.value}
                    type={input.type}
                  />
                </div>
                {meta.error && meta.touched && (<div className="error">{meta.error}</div>)}
              </>
            )}
          </Field>
          <div className="input-group">
            <button
              type="submit"
              disabled={submitting}
            >
              Submit
            </button>
            <button
              type="button"
              onClick={form.reset}
              disabled={submitting || pristine}
            >
              Reset
            </button>
          </div>
          {submitError && (<div className="error">{submitError}</div>)}
          <DisplayFormState values={values} />
          <RenderCounter counter={++counter} />
        </form>
      )}
    </Form>
  );
};

export default FinalForm;
