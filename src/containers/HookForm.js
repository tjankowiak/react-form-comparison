import React from 'react';
import useForm from 'react-hook-form';
import { sleep } from 'utils/sleep';
import { email, required } from 'utils/validators';
import { composeValidators } from 'utils/composeValidators';
import RenderCounter from 'components/RenderCounter/RenderCounter';
import DisplayFormState from 'components/DisplayFormState/DisplayFormState';

let counter = 0;

const HookForm = () => {
  const {
    handleSubmit,
    register,
    errors,
    getValues,
    reset,
    formState,
    setError,
  } = useForm({
    nativeValidation: false,
    defaultValues: {
      middleName: 'Paul',
      gender: 'male',
    },
  });

  const onSubmit = async (values) => {
    await sleep(500);

    if (values.firstName === 'Larry') {
      setError('submitError', 'notMatch', 'Sorry, that name is taken');

      return;
    }
    const mes = `React Hook Form
            ${JSON.stringify(values)}
      `;

    alert(mes);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="info">
            Try entering a first name
        {' '}
        <code> Larry </code>
        {' '}
            to see the validation on submit
      </div>
      <div className="input-group">
        <label htmlFor="firstName">First name</label>
        <input
          type="text"
          placeholder="First name"
          name="firstName"
          ref={register({ validate: required })}
        />
      </div>
      {errors.firstName && errors.firstName.message && <div className="error">{errors.firstName.message}</div>}
      <div className="input-group">
        <label htmlFor="middleName">Middle name</label>
        <input
          type="text"
          placeholder="Middle name"
          name="middleName"
          ref={register}
        />
      </div>
      <div className="input-group">
        <label htmlFor="lastName">Last name</label>
        <input
          type="text"
          placeholder="Last name"
          name="lastName"
          ref={register({ validate: required })}
        />
      </div>
      {errors.lastName && errors.lastName.message && <div className="error">{errors.lastName.message}</div>}
      <div className="input-group">
        <label htmlFor="email">Email</label>
        <input
          type="text"
          placeholder="Email"
          name="email"
          ref={register({ validate: composeValidators(required, email) })}
        />
      </div>
      {errors.email && errors.email.message && <div className="error">{errors.email.message}</div>}
      <div className="input-group">
        <label htmlFor="gender">
                Gender
        </label>
        <div className="input-group-radio">
          <div>
            <input
              type="radio"
              name="gender"
              value="male"
              id="hookGenderMale"
              ref={register({ validate: required })}
            />
            <label htmlFor="hookGenderMale">Male</label>
          </div>
          <div>
            <input
              type="radio"
              name="gender"
              value="female"
              id="hookGenderFemale"
              ref={register({ validate: required })}
            />
            <label htmlFor="hookGenderFemale">Female</label>
          </div>
          <div>
            <input
              type="radio"
              name="gender"
              value="other"
              id="hookGenderOther"
              ref={register({ validate: required })}
            />
            <label htmlFor="hookGenderOther">Other</label>
          </div>
        </div>
      </div>
      <div className="input-group">
        <label htmlFor="description">Describe yourself</label>
        <textarea
          placeholder="Describe yourself in a few words"
          name="description"
          ref={register}
        />
      </div>
      <div className="input-group">
        <label htmlFor="hookProcessing">
                I hereby give consent for my personal data
                to be processed for the purposes of creating an account.
        </label>
        <input
          id="hookProcessing"
          name="processing"
          type="checkbox"
          ref={register({ validate: required })}
        />
      </div>
      {errors.processing && errors.processing.message && <div className="error">{errors.processing.message}</div>}
      <div className="input-group">
        <button
          type="submit"
          disabled={formState.isSubmitting}
        >
                Submit
        </button>
        <button
          type="button"
          onClick={reset}
          disabled={formState.isSubmitting || !formState.dirty}
        >
              Reset
        </button>
      </div>
      {errors.submitError && <div className="error">{ errors.submitError.message }</div> }
      <DisplayFormState values={getValues()} />
      <RenderCounter counter={++counter} />
    </form>
  );
};

export default HookForm;
