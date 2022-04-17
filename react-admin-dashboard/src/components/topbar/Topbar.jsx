import React from 'react'
import "./topbar.css"
import {NotificationsNone, Language, Settings, Public} from '@material-ui/icons';

function Topbar() {
  return (
    <div className='topbar'>
        <div className="topbarWrapper">
            <div className="topLeft"><span className="logo">lamaadmin</span></div>
            <div className="topRight">
              <div className="topbarIconContainer">
                <Public />
                <span className="topIconBadge">8</span>
              </div>
              <div className="topbarIconContainer">
                <NotificationsNone />
                <span className="topIconBadge">2</span>
              </div>
              <div className="topbarIconContainer">
                <Language />
                <span className="topIconBadge">2</span>
              </div>
              <div className="topbarIconContainer">
                <Settings />
              </div>
              <img src="https://randomuser.me/api/portraits/men/66.jpg" alt="" className="topAvatar" />
            </div>
        </div>
    </div>
  )
}

export default Topbar
