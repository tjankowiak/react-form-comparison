import React from 'react';

const RenderCounter = ({ counter }) => (
  <>
    <p> How many times did the form render: </p>
    <div className="counter">
      <p>{ counter }</p>
    </div>
  </>
);

export default RenderCounter;
