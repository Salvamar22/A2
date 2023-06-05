import React from 'react';
import './usersettings.css';

const UserSettings = () => {
  return (
    <div className="user-settings">
      <h2>User Settings</h2>
      <div className="settings-container">
        <label className="setting-label">Change Username</label>
        <input type="text" id="changeusername" />
        <div className="password-setting">
            <br />
          <div className="setting-label">Set a password for login</div>
          <div className="password-input">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" />
          </div>
          <div className="password-input">
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input type="password" id="confirmPassword" />
          </div>
        </div>
        <button className="save-button">Save</button>
      </div>
    </div>
  );
};

export default UserSettings;
