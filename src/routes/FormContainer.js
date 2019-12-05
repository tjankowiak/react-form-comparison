import React from 'react';
import HookForm from 'containers/HookForm';
import FinalForm from 'containers/FinalForm';
import FormikForm from 'containers/FormikForm';

const FormContainer = () => (
  <div className="row">
    <div className="col form-container">
      <h1>React Hook Form</h1>
      <HookForm />
    </div>
    <div className="col form-container">
      <h1> Formik </h1>
      <FormikForm />
    </div>
    <div className="col form-container">
      <h1>React Final Form</h1>
      <FinalForm />
    </div>
  </div>
);

export default FormContainer;
