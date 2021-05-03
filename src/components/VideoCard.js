import React from "react";
import "./styles/VideoCard.css";
import Avatar from "@material-ui/core/Avatar";

const VideoCard = ({ image, title, channel, channelImage, views, timestamp}) => {
    return (
        <div className="videoCard">
            <img src={image} alt={title}/>
            <div className="video__info">
                <Avatar className="videoCard__avatar" alt={channel} src={channelImage} />
                <div className="video__text">
                    <h4>{title}</h4>
                    <p>{channel}</p>

                    <p>
                        {views} • {timestamp}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default VideoCard;