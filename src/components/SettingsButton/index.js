import React from 'react';
import {FaCog as SettingsIcon} from 'react-icons/fa';
import './settingsButton.css';

const SettingsButton = (props) => {
  return (
    <div className="settings-button absolute m-4">
      <SettingsIcon className="settings-icon nav-link" onClick={props.toggle}/>
    </div>
  );
};

export default SettingsButton;