import { Avatar, Button } from '@material-ui/core'
import { MusicNote } from '@mui/icons-material'
import React from 'react'
import Ticker from 'react-ticker'
import './VideoFooter.css'
import FavoriteIcon from '@mui/icons-material/Favorite';
import ModeCommentIcon from '@mui/icons-material/ModeComment';
import SendIcon from '@mui/icons-material/Send';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

function VideoFooter({ channel, avatarSrc, song, shares, likes, }) {
  return (
    <div className='video_footer'>
     <div className="video_footer_text">
      <Avatar src={avatarSrc} />
     <h3>
      {channel} . <Button>Follow</Button>
     </h3>
     </div>
     <div className="video_footer_ticker">
      <MusicNote
      className='video_footer_icon'/>
      <Ticker mode='smooth'>
        {({ index }) => (
          <>
          <h1>{song}</h1>
          </>
        )}
      </Ticker>
     </div>
     <div className="video_footer_action">
      <div className="videoFooter_actionsLeft">
      <FavoriteIcon fontSize='large'/>
      <ModeCommentIcon fontSize='large'/>
      <SendIcon fontSize='large'/>
      <MoreHorizIcon fontSize='large'/>
      </div>
      <div className="videoFooter_actionsRight">
        <div className="videoFooter_stat">
          <FavoriteIcon/>
          <p>{likes}</p>
        </div>
        <div className="videoFooter_stat">
          <ModeCommentIcon/>
          <p>{shares}</p>
        </div>
      </div>
     </div>
     
    </div>
  )
}

export default VideoFooter