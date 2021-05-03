import React from "react";
import "./styles/RecommendedVideos.css";
import VideoCard from "./VideoCard";

const RecommendedVideos = () => {
    return (
        <div className="recommendedVideos">
            <h1>Recommended</h1>
            <div className="recommendedVideos__videos">
                {/* videos componenets, passing the title, views, timestamp, channelImmage, channel, image as props*/}
                <VideoCard
                    title="Weird Genius - Sweet Scar (ft. Prince Husein)"
                    views="58.1M Views"
                    timestamp="2 years ago"
                    channelImage="https://yt3.ggpht.com/a/AATXAJyhUWH0wx_MBMaRFYULMyAjwRHgoPiIuCgoiTmT=s88-c-k-c0x00ffffff-no-rj"
                    channel="Weird Genius"
                    image="https://i.ytimg.com/vi/dxIG9JtakBM/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCGeCi6dYpgCdt1gmXJrijVQBxhTg"
                />
            </div>
        </div>
    )
}

export default RecommendedVideos;