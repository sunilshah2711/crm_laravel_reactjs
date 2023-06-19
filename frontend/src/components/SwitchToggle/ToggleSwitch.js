import React, { useState } from 'react';
import ReactSwitch from 'react-switch';

function ToggleSwitch() {
  const [checked, setChecked] = useState(true);

  const handleChange = val => {
    setChecked(val)
  }

  return (
      <ReactSwitch
        className='show-readcheckbox'
        checked={checked}
        onChange={handleChange}
      />
  );
}

export default ToggleSwitch;