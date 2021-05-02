import React from "react";
import "./styles/Header.css";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Avatar from "@material-ui/core/Avatar";

const Header = () => {
    return (
        <div className="header">
            <MenuIcon />

            <img
                className="header__logo"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/400px-YouTube_Logo_2017.svg.png"
                alt="Youtube Logo"
            />

            <input type="text"/>
            <SearchIcon />

            <VideoCallIcon />
            <AppsIcon />
            <NotificationsIcon />
            <Avatar
                alt="Rokas"
                src="https://avatars.githubusercontent.com/u/38469892?v=4"
            />
        </div>
    );
}

export default Header;