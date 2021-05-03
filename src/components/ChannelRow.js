import React from "react";
import "./styles/ChannelRow.css";
import Avatar from "@material-ui/core/Avatar";
import {CheckCircleOutlineOutlined} from "@material-ui/icons";

const ChannelRow = ({ image, channel, description, noOfVideos, subs, verified }) => {
    return (
        <div className="channelRow">
            <Avatar className="channelRow__logo" alt={channel} src={image} />
            <div className="channelRow__text">
                <h4>{channel} {verified && <CheckCircleOutlineOutlined />}</h4>
            </div>
        </div>
    )
}

export default ChannelRow;