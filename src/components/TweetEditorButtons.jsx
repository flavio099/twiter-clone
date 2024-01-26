
function TweetEditorButtons (){
    return(
      <div className='tweet-editor-buttons'>
      <div className='tweet-editor-actions'>
      <button> <label htmlFor="type" ><img src='src/pictures/Top-Tweets1.png' alt="image" /> </label><input  type="file"  id="type"/></button>  
      <button><img src='src/pictures/Top-Tweets.png' alt="GIF" /></button>  
      <button><img src='src/pictures/Top-Tweets2.png' alt="stat" /></button> 
      <button><img src='src/pictures/Top-Tweets3.png' alt="emoji" /></button>  
      <button><img src='src/pictures/Top-Tweets4.png' alt="schedule"/></button> 
      </div>
      <button className='button'>Tweet</button>
    </div>
    )
  }
 export default TweetEditorButtons  