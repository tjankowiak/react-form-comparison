import React from 'react';

const DisplayFormState = ({ values }) => (
    <pre>{JSON.stringify(values, 0, 2)}</pre>
)
export default DisplayFormState;


