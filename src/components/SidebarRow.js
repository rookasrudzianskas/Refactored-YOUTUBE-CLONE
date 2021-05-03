import React from "react";
import "./styles/SidebarRow.css";
import HomeIcon from "@material-ui/icons/Home";

const SidebarRow = ({ selected, Icon, title }) => {
    return (
        // if the sidebarRow has the class selected, so apply it to the first one
        <div className={`sidebarRow ${selected && "selected"}`}>
            <Icon className="sidebarRow__icon" />
            <h2 className="sidebarRow__title">{title }</h2>
        </div>
    )
}

export default SidebarRow;