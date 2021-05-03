import React from "react";
import "./styles/VideoRow.css";

const VideoRow = ({  views, subs, description, timestamp, channel, title, image }) => {
    return (
        <div className="videoRow">
            <img src={image} alt="" />
            <div className="videoRow__text">
                <h3>{title}</h3>
                <p>
                    {channel} • {subs} Subscribers {views} • {timestamp}
                </p>

                <p>{description}</p>
            </div>
        </div>
    )
}

export default VideoRow;