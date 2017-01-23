import React, { PropTypes } from 'react';

const SyncCounter = (props) => {
  const { value, onIncrement, onDecrement } = props;
  return (
    <div>
      <h3>Redux syncronized actions</h3>
      <div>
        Value : {value}
      </div>
      <div>
        <button type="button" onClick={onIncrement}>+1</button>
        <button type="button" onClick={onDecrement}>-1</button>
      </div>
    </div>
  );
};

SyncCounter.propTypes = {
  value: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
};

export default SyncCounter;
