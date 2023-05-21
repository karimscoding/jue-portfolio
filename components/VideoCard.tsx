"use client";
import videos from "@/constants";

const VideoCard = () => {
  return (
    <div>
      {videos.map((video) => (
        <div key={video.videoId}>{video.videoId}</div>
      ))}
    </div>
  );
};

export default VideoCard;
