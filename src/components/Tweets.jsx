
 function Tweets(){
    return(
      
      <div className='tweet'>
          <div className='tweet-avatar'>
                <div className='tweet-avatar-picture'><img  className="tweet-avatar-image" src="src/pictures/Top-Tweets4.png" alt="schedule"/></div>
              </div>
              <div className='tweet-content'>
                <div className='tweet-body'>
                  <div className='tweet-title'> 
                  <div className='verified'>
                    <h5>The new york times</h5> 
                    <img src= "src/pictures/verified.png" alt="" />
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
                    <img src="src/pictures/WhatsApp Image 2023-11-24 at 09.11.35.jpeg" />
                  </div>
                  <div className='tweet-actions'>
                    <div className='tweet-action'>
                      <div className='tweet-action-btn'> <button><img src="src/pictures/comment.png" /> <span className='tweet-action-btn-span'>1</span> </button></div>
                      <div className='tweet-action-btn'> <button><img src="src/pictures/Buton.png" /> <span className='tweet-action-btn-span'>1</span> </button></div>
                      <div className='tweet-action-btn'> <button><img src="src/pictures/react.png" /><span className='tweet-action-btn-span'>1</span> </button></div>
                      <div className='tweet-action-btn'> <button><img src= "src/pictures/download.png" /> <span className='tweet-action-btn-span'>1</span> </button></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
    )
  }

  export default Tweets