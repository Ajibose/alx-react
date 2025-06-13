import React from 'react';
import './Notifications.css';
import closeIcon from './close-icon.png'
import { getLatestNotification } from './utils.js';

function Notificaion() {
  const notificationData = getLatestNotification();
  return (
    <div className='Notifications'>
        <p>Here is the list of notifications</p>
        <ul>
          <li data-priority="default">New course available</li>
          <li data-priority="urgent">New resume available</li>
          <li data-priority="urgent" dangerouslySetInnerHTML={{__html: notificationData}}></li>
        </ul>
        <button
          aria-label='close'
          onClick={() => {
            console.log("Close button has been clicked")
          }} 
          style={{ background: "none", border: "none", fontSize: "10px", position: "absolute", right: "1px", top: "3px", cursor: "pointer" }}
        >
          <img src={closeIcon} alt="close icon" width="20px" height="20px" />
        </button>
    </div>
  );
}

export default Notificaion;