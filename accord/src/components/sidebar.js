import React from 'react'
import './sidebar.css'
// function Sidebar() {
//     return 
// }

const Sidebar = () => {
    return(
        <div id = 'Sidebar'>
            <p id = 'Title'>
                accord
            </p>

            <p id = 'connectstatment'>
            Connect with others. Experience new cultures.
            </p>

            <button id = 'startBTN'>
            Start
            </button>

            <div>
                <h3 id = 'chatTitle'>
                    Chat Logs
                </h3>

                <div id = "chatLogs">
                <p>hello</p>
                </div>
            </div>
        </div>
    )
}
export default Sidebar