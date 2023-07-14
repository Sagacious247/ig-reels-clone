import React, { useRef, useState } from 'react'
import './VideoCard.css'
import VideoHeader from './VideoHeader'
import VideoFooter from './VideoFooter'

function VideoCard({ url, avatarSrc, shares, likes, song, channel}) {
  const videoRef = useRef(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)

  const onVideoPress = () => {
    if(isVideoPlaying) {
      // stop
      videoRef.current.pause();
      setIsVideoPlaying(false)
    } else {
      //play 
      videoRef.current.play()
      setIsVideoPlaying(true)
    }
  };

  return (
    <div className='videoCard'>
      <VideoHeader />
      <video
      ref={videoRef}
      onClick={onVideoPress}
      className="videoCard_player"
      src={url}
      alt='IG reel video'
      loop
      />
      <VideoFooter
      channel={channel}
       song={song}
       avatarSrc={avatarSrc}
       shares={shares}
       likes={likes}
      />
    </div>
  )
}

export default VideoCard