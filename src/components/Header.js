import React, {useState} from "react";
import "./styles/Header.css";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Avatar from "@material-ui/core/Avatar";
import {Link} from "react-router-dom";
import {IconButton} from "@material-ui/core";

const Header = () => {

    // keeping track of the info
    const [inputSearch, setInputSearch] = useState('');
    // console.log('👽', inputSearch);

    return (
        <div className="header">
            {/* this is all in the left */}
            <div className="header__left">

                <MenuIcon />
                <Link to="/">
                    <img
                        className="header__logo"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/400px-YouTube_Logo_2017.svg.png"
                        alt="Youtube Logo"
                    />
                </Link>

            </div>
            {/* this is all in middle */}
            <div className="header__input">

                <input value={inputSearch}  onChange={e => setInputSearch(e.target.value)} placeholder="Search" type="text"/>
                {/* this is going to take me to the /search/ and whaever is in the search bat*/}
                <Link to={`/search/${inputSearch}`}>
                    <SearchIcon className="header__inputButton"/>
                </Link>

            </div>
            {/* this is all in right*/}
            <div className="header__icons">

                {/*<IconButton className="IconButton">*/}
                    <VideoCallIcon className="header__icon"/>
                {/*</IconButton>*/}
                <AppsIcon className="header__icon" />
                <NotificationsIcon className="header__icon"/>
                <Avatar
                    alt="Rokas"
                    src="https://avatars.githubusercontent.com/u/38469892?v=4"
                />

            </div>
        </div>
    );
}

export default Header;