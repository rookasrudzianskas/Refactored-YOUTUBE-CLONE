import React from "react";
import "./styles/ChannelRow.css";
import Avatar from "@material-ui/core/Avatar";
import VerifiedIcon from "@material-ui/icons/CheckCircleOutline";


const ChannelRow = ({ image, channel, description, noOfVideos, subs, verified }) => {
    return (
        <div className="channelRow">
            <Avatar className="channelRow__logo" alt={channel} src={image} />
            <div className="channelRow__text">
                <h4>
                    {/* show the channel, and check if it has verified prop, if yes, show the icon*/}
                    {channel} {verified && <VerifiedIcon />}
                </h4>
                <p>
                    {subs} subscribers • {noOfVideos} videos
                </p>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default ChannelRow;