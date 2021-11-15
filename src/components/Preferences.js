import React, {useState} from 'react'
import "../style/preferences.css"

function Preferences() {
    const [shadeSelect, setShadeSelect] = useState();

    return (
        <div style={{textAlign: "center", backgroundColor: "#E8CBC9", minHeight: "100vh"}}>
            <svg width="100" height="100" viewBox="0 0 320 320" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="160.094" cy="160.094" r="159.906" fill="#C4C4C4"/>
                <rect x="127.191" y="138.825" width="71" height="123" transform="rotate(41.1078 127.191 138.825)"
                      fill="#3A3737"/>
                <rect x="180.749" y="92.6561" width="51" height="97" transform="rotate(41.1078 180.749 92.6561)"
                      fill="#3A3737"/>
                <path d="M228.895 58.9741L259.61 65.3487L214.315 117.256L190.958 96.8743L228.895 58.9741Z"
                      fill="#F88080"/>
            </svg>
            <h1><i>Select Preferences</i></h1>
            <form>
                <select id="dropdown" className="preferences-dropdown">
                    <option value={shadeSelect}>shade 1</option>
                    <option value={shadeSelect}>shade 2</option>
                    <option value={shadeSelect}>shade 3</option>
                </select>
            </form>
        </div>
    )
}

export default Preferences;