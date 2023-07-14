import { useEffect, useState } from 'react';
import './App.css';
import VideoCard from './VideoCard';
import { db } from './firebase'
import { collection, getDocs, onSnapshot} from 'firebase/firestore'

function App() {
  const [reels, setReels] = useState([])


  useEffect(
    () => 
    onSnapshot(collection(db, 'reels'), 
    (snapshot) => 
    setReels(snapshot.docs.map((doc) => 
    ({...doc.data(), id: doc.id})))
    ),
    []
    );

  return (
    <div className="app">
     <div className='app_top'>
     <img className='app_logo'
     src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/768px-Instagram_logo_2016.svg.png' 
     alt=''
     />
     <h1>Reels</h1>
     </div>
      <div className="app_videos">
    
        {
          reels.map(({
           channel, avatarSrc, song, url,likes, shares }) => (
            <VideoCard 
            channel={channel}
            avatarSrc={avatarSrc}
            song={song}
            url={url}
            likes={likes}
            shares={shares} 
            />
          ))
      }
      </div>
    </div>
  );
}

export default App;
