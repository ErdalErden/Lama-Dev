import React from 'react';
import "./widgetSm.css";
import {Visibility} from "@material-ui/icons";

export default function WidgetSm() {
  return (
    <div className='widgetSm'>
        <span className="widgetSmTitle">
            New Join Members
        </span>
        <ul className="widgetSmList">
            <li className="widgetSmListItem">
                <img src="https://randomuser.me/api/portraits/men/92.jpg" alt="" className="widgetSmImg" />
                <div className="widgetSmUser">
                    <span className="widgetSmUsername">Richard Keller</span>
                    <span className="widgetSmUserTitle">Software Engineer</span>
                </div>
                <button className="widgetSmButton">
                <Visibility className='widgetSmIcon'/>
                    Display
                </button>
            </li>
            <li className="widgetSmListItem">
                <img src="https://randomuser.me/api/portraits/women/56.jpg" alt="" className="widgetSmImg" />
                <div className="widgetSmUser">
                    <span className="widgetSmUsername">Jane Widel</span>
                    <span className="widgetSmUserTitle">Graphic Designer</span>
                </div>
                <button className="widgetSmButton">
                <Visibility className='widgetSmIcon'/>
                    Display
                </button>
            </li>
            <li className="widgetSmListItem">
                <img src="https://randomuser.me/api/portraits/men/29.jpg" alt="" className="widgetSmImg" />
                <div className="widgetSmUser">
                    <span className="widgetSmUsername">Salvador Turner</span>
                    <span className="widgetSmUserTitle">Software Engineer</span>
                </div>
                <button className="widgetSmButton">
                <Visibility className='widgetSmIcon'/>
                    Display
                </button>
            </li>
            <li className="widgetSmListItem">
                <img src="https://randomuser.me/api/portraits/men/85.jpg" alt="" className="widgetSmImg" />
                <div className="widgetSmUser">
                    <span className="widgetSmUsername">Jack Rodriquez</span>
                    <span className="widgetSmUserTitle">Network Manager</span>
                </div>
                <button className="widgetSmButton">
                    <Visibility className='widgetSmIcon'/>
                    Display
                </button>
            </li>
        </ul>
        </div>
  )
}
