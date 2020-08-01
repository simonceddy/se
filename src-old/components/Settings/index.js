import React from 'react';

const Settings = (props) => {
  if (!props.handlers) /* handle error */;
  console.log(props.handlers);
  return (
    <div className="settings flex flex-col justify-center">
      <h1>Settings</h1>
      <div className="settings-options flex flex-col justify-start">
        <div className="settings-option-row flex justify-between">
          <span>Theme:</span>
          <select onSelect={props.handlers.theme}>
            <option>
              Default
            </option>
            <option>
              Other Default
            </option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Settings;