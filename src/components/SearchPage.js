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

            <VideoRow
                views="85M"
                subs="46.5M"
                description="The official music video for Ed Sheeran - Take Me Back To London (Sir Spyro Remix) [feat. @Stormzy, @Jaykae & @Aitch]"
                timestamp="1 years ago"
                channel="Ed Sheeran"
                title="Ed Sheeran - Take Me Back To London (Sir Spyro Remix) [feat. Stormzy, Jaykae & Aitch]"
                image="https://i.ytimg.com/an_webp/XJQy_R9CYR4/mqdefault_6s.webp?du=3000&sqp=CJ7G4v8F&rs=AOn4CLB85YCEsYr4P4iIYJU90m2wlxEo2w"
            />

            <VideoRow
                views="279M"
                subs="46.5M"
                description="The official music video for Ed Sheeran - Beautiful People (feat. @Khalid)"
                timestamp="1 years ago"
                channel="Ed Sheeran"
                title="Ed Sheeran - Beautiful People (feat. Khalid) [Official Music Video]"
                image="https://img.youtube.com/vi/KPUEvRo5xtY/maxresdefault.jpg"
            />

            <VideoRow
                views="2.7B"
                subs="46.5M"
                description="The official music video for Ed Sheeran - Perfect "
                timestamp="3 years ago"
                channel="Ed Sheeran"
                title="Ed Sheeran - Perfect (Official Music Video)"
                image="https://img.youtube.com/vi/KPUEvRo5xtY/maxresdefault.jpg"
            />

            <VideoRow
                views="5.1B"
                subs="46.5M"
                description="The official music video for Ed Sheeran - Shape Of You"
                timestamp="3 years ago"
                channel="Ed Sheeran"
                title="Ed Sheeran - Shape of You (Official Music Video)"
                image="https://img.youtube.com/vi/KPUEvRo5xtY/maxresdefault.jpg"
            />

            <VideoRow
                views="1B"
                subs="46.5M"
                description="The official music video for Ed Sheeran - Photograph"
                timestamp="5 years ago"
                channel="Ed Sheeran"
                title="Ed Sheeran - Photograph (Official Music Video)"
                image="https://img.youtube.com/vi/KPUEvRo5xtY/maxresdefault.jpg"
            />
        </div>
    );
}

export default SearchPage;