import { useState } from 'react'
import './App.css'
import imagePath from './pictures/Timeline.png';
import imageOiseau from './pictures/oiseau.png';
import imageHome from './pictures/case-oiseau.png';
import imageExplore from './pictures/tag.png';
import imageNotification from './pictures/cloche.png';
import imageMessages from './pictures/email.png';
import imageBookmarks from './pictures/Vect.png';
import imageLists from './pictures/Lists.png';
import imageProfile from './pictures/profile.png';
import imageMore from './pictures/More.png';
import imageMore2 from './pictures/More-2.png';
import imagePrivate from './pictures/Private.png';
import imageTweets1 from './pictures/Top-Tweets1.png';
import imageTweets from './pictures/Top-Tweets.png';
import imageTweets2 from './pictures/Top-Tweets2.png';
import imageTweets3 from './pictures/Top-Tweets3.png';
import imageTweets4 from './pictures/Top-Tweets4.png';
import imageComment from './pictures/comment.png';
import imageButon from './pictures/Buton.png';
import imageReact from './pictures/react.png';
import imageDownlaod from './pictures/download.png';
import imageImage from './pictures/Img.png';
import imageVerified from './pictures/verified.png';
import imageSearch from './pictures/search.png';
import imageSettings from './pictures/Settings.svg';

function App() {
  return (
    < body>
    <div className='classMain'>
    <div className='sideBar'> 
      <div className='sideBar-1'>
      <div className='one'>
<div className='one-1'>
  <img src={imageOiseau} alt="oiseau-twiter" /> 
  </div>
</div>
<div className='two'>
<div className='two-1'><img src={imageHome} alt="home" /></div>
<div className='two-2'><span>Home</span></div>
</div>
<div className='three'>
<div className='three-1'><img src={imageExplore} alt="Explore" /></div>
<div className='three-2'> <span>Explore</span></div>
</div>
<div className='four'>
<div className='four-1'><img src={imageNotification} alt="Notification" /></div>
<div className='four-2'><span>Notification</span></div>
</div>
<div className='five'>
<div className='five-1'><img src={imageMessages} alt="Messages" /></div>
<div className='five-2'><span>Messages</span></div>
</div>
<div className='six'>
<div className='six-1'><img src={imageBookmarks} alt="Bookmarks" /></div>
<div className='six-2'><span>Bookmarks</span></div>
</div>
<div className='sevenn'>
<div className='sevenn-1'><img src={imageLists} alt="Lists" /></div>
<div className='sevenn-2'><span>Lists</span></div>
</div>
<div className='eightt'>
<div className='eightt-1'><img src={imageProfile}alt="Profile" /></div>
<div className='eightt-2'><span>Profile</span></div>
</div>
<div className='nine'>
<div className='nine-1'><img src={ imageMore}alt="More" /> </div>
<div className='nine-2'><span>More</span></div>
</div>
      </div>
      <div className='sideBar-2'>
      <div className='sidebar2-btn'>
<button className='btn-tweet-sidebar'>Tweet</button>
</div>

<div className='sidebar2-profil'>
<div className='sidebar2-profil-picture'>
<img src={imageProfile}alt="Profile" />
</div>
<div className='sidebar2-profil-info'>
<span>flavio umberto <img src={imagePrivate}alt="Profile" /></span>
<span>@flavio_</span>
</div>
<div className='sidebar2-profil-icon'>
<img src={imageMore2}alt="Profile" />
</div>
</div>
      </div>
    </div>
    <div className='timeLine'>
    <div className='header'>
    <span className='header_title'>HOME</span>
    <button> <img src={imagePath} alt="lumière"/></button>
    </div>
    <div className='tweet-editor'>
      <div className='avatar'>
        <div className='avatar-picture'><img className='profil' src={imageImage}alt="profil" /></div>
      </div>
      <div className='tweet-editor-form'>
        <div className='tweet-editor-input'>
         <textarea name="" id="" cols="30" rows="10" placeholder="What's happening ?"></textarea>
        </div>
        <div className='tweet-editor-buttons'>
          <div className='tweet-editor-actions'>
           <button><img src={imageTweets1} alt="image" /></button>  
           <button><img src={imageTweets} alt="GIF" /></button>  
           <button><img src={imageTweets2} alt="stat" /></button> 
           <button><img src={imageTweets3} alt="emoji" /></button>  
           <button><img src={imageTweets4} alt="schedule"/></button> 
          </div>
        <button className='button'>Tweet</button>
        </div>
      </div>
    </div>
    <div className='tweets'>
    <div className='tweet'>
    <div className='tweet-avatar'>
          <div className='tweet-avatar-picture'><img  className="tweet-avatar-image" src={imageTweets4} alt="schedule"/></div>
        </div>
        <div className='tweet-content'>
          <div className='tweet-body'>
            <div className='tweet-title'> 
            <div className='verified'>
              <h5>The new york times</h5> 
              <img src= {imageVerified} alt="" />
              </div>
              <div className='user'>
                <p>@nytimes</p>
                <p>.</p>
                <p>7m</p>
              </div>
            </div>
            <div className='tweet-text'>
              <p>Gardening boomed during the pandemic. Six Black writers share how it has helped them re-establish, and reimagine, a connection to cultivation and the land.</p>
            </div>
            <div className='tweet-image'>
              <img src={imageImage} />
            </div>
            <div className='tweet-actions'>
              <div className='tweet-action'>
                <div className='tweet-action-btn'> <button><img src={imageComment} /> <span className='tweet-action-btn-span'>1</span> </button></div>
                <div className='tweet-action-btn'> <button><img src={imageButon} /> <span className='tweet-action-btn-span'>1</span> </button></div>
                <div className='tweet-action-btn'> <button><img src={imageReact} /><span className='tweet-action-btn-span'>1</span> </button></div>
                <div className='tweet-action-btn'> <button><img src= {imageDownlaod} /> <span className='tweet-action-btn-span'>1</span> </button></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className='tweets'>
    <div className='tweet'>
    <div className='tweet-avatar'>
          <div className='tweet-avatar-picture'><img  className="tweet-avatar-image" src={imageTweets4} alt="schedule"/></div>
        </div>
        <div className='tweet-content'>
          <div className='tweet-body'>
            <div className='tweet-title'> 
            <div className='verified'>
              <h5>The new york times</h5> 
              <img src= {imageVerified} alt="" />
              </div>
              <div className='user'>
                <p>@nytimes</p>
                <p>.</p>
                <p>7m</p>
              </div>
            </div>
            <div className='tweet-text'>
              <p>Gardening boomed during the pandemic. Six Black writers share how it has helped them re-establish, and reimagine, a connection to cultivation and the land.</p>
            </div>
            <div className='tweet-image'>
              <img src={imageImage} />
            </div>
            <div className='tweet-actions'>
              <div className='tweet-action'>
                <div className='tweet-action-btn'> <button><img src={imageComment} /> <span className='tweet-action-btn-span'>1</span> </button></div>
                <div className='tweet-action-btn'> <button><img src={imageButon} /> <span className='tweet-action-btn-span'>1</span> </button></div>
                <div className='tweet-action-btn'> <button><img src={imageReact} /><span className='tweet-action-btn-span'>1</span> </button></div>
                <div className='tweet-action-btn'> <button><img src= {imageDownlaod} /> <span className='tweet-action-btn-span'>1</span> </button></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    
    <div className='follow'>
         <div className='follow-div1'> 
         <div className='follow-div1-icon'><img src= {imageSearch} alt="" /></div>
         <div className='follow-div1-input'><input className='follow-div1-input-input' type="text" placeholder='Search Twiter' /></div>
         </div>
         <div className='follow-div2'>
          <div className='follow-div2-trendsforyou'>
           <h4>Trends for you</h4> 
            <button><img src={imageSettings } alt="" /></button>
          </div>
          <div className='follow-div2-trendsforyou-text'>
           <div className='trendsforyou-text'>
            <span>Treding in DRC</span>
            <span>#SQUID</span>
            <span>3,000 Tweets</span>
           </div>
           <div>
            <button> <img src= {imageMore2 } alt=""/></button>
           </div>
          </div>
         </div>
         <div className='follow-div3'><span>1</span> </div>
    </div>
    </div>
    </body>
  )
}

export default App
