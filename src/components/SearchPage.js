import React from "react";
import "./styles/SearchPage.css";
import TuneOutlinedIcon from "@material-ui/icons/Tune";
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";


const SearchPage = () => {
    return (
        <div className="searchPage">
            <div className="searchPage__filter">
                <TuneOutlinedIcon />
                <h2>FILTER</h2>
            </div>
            <hr />

            <ChannelRow
                image="https://pbs.twimg.com/profile_images/1350895249678348292/RS1Aa0iK.jpg"
                channel="Rokas Rudzianskas"
                verified
                subs="46.5M"
                noOfVideos={111}
                description="Coding is magic 🚀"
            />
            <hr />

            <VideoRow
                views="33M"
                subs="46.5M"
                description="The official performance video for Ed Sheeran - Afterglow "
                timestamp="2 weeks ago"
                channel="Ed Sheeran"
                title="Ed Sheeran - Afterglow [Official Performance Video]
        "
                image="https://img.youtube.com/vi/xP3cxbDUtrc/maxresdefault.jpg"
            />


        </div>
    );
}

export default SearchPage;