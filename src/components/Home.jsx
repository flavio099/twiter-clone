import { Link } from "react-router-dom"
import TweetEditorButtons from "./TweetEditorButtons"
import Tweets from "./Tweets"

function Home(){
    return(
        <>
       
        <div className='header'>
             <span className='header_title'>HOME</span>
                <button> <img src="src/pictures/Timeline.png" alt="lumière"/></button>
          </div>
          <div className='tweet-editor'>
                <div className='avatar'>
                  <div className='avatar-picture'><img className='profil' src="src/pictures/WhatsApp Image 2023-11-24 at 09.11.35.jpeg" alt="profil" /></div>
                </div>
                <div className='tweet-editor-form'>
                  <div className='tweet-editor-input'>
                    <textarea name="" id="" cols="30" rows="10" placeholder="What's happening ?"></textarea>
                  </div>
                   <TweetEditorButtons/>
                </div>
          </div>
          <div className='tweets'>
            <Tweets/> 
            <Tweets/> 
            <Tweets/> 
            <Tweets/> 
            <Tweets/> 
          </div>
     
        
        </>
    )
}

export default Home