import Tweets from "./components/Tweets"
import H4 from "./components/H4"
import TweetEditorButtons from "./components/TweetEditorButtons"
import BtnShowMore from "./components/BtnShowMore"
import Follower from "./components/Follower"
import Trendsforyou_text from "./components/Trendsforyou_text"
import Followsearch from "./components/Followsearch"
import SideBarIconsAndTitle from "./components/SideBarIconsAndTitle"
import SideBar_2_contenu from "./components/SideBar_2_contenu"



function App() {
  return (
      <body>
 <div className='classMain'>
      <div className='sideBar'> 
          <div className='sideBar-1'>

          <SideBarIconsAndTitle className1="one" className2="one-1" src="src/pictures/oiseau.png" alt ="oiseau"/>
          <SideBarIconsAndTitle className1="two" className2="two-1" src="src/pictures/case-oiseau.png" alt ="home" className3="two-2" Titleicon="Home" />
          <SideBarIconsAndTitle className1="three" className2="three-1" src="src/pictures/tag.png" alt ="explore" className3="three-2" Titleicon="Explore" />
          <SideBarIconsAndTitle className1="four" className2="four-1" src="src/pictures/cloche.png" alt ="notification" className3="four-2" Titleicon="Notification" />
          <SideBarIconsAndTitle className1="five" className2="five-1" src="src/pictures/email.png" alt ="messages" className3="five-2" Titleicon="Messages" />
          <SideBarIconsAndTitle className1="six" className2="six-1" src="src/pictures/Vect.png" alt ="Bookmarks" className3="six-2" Titleicon="Bookmarks" />
          <SideBarIconsAndTitle className1="sevenn" className2="sevenn-1" src="src/pictures/Lists.png" alt ="Lists" className3="sevenn-2" Titleicon="Lists" />
          <SideBarIconsAndTitle className1="eightt" className2="eightt-1" src="src/pictures/profile.png" alt ="Profile" className3="eightt-2" Titleicon="Profile" />
          <SideBarIconsAndTitle className1="nine" className2="nine-1" src="src/pictures/More.png" alt ="More" className3="nine-2" Titleicon="More" />

          </div>

        <div className='sideBar-2'>
        <SideBar_2_contenu/>
        </div>
      </div>

    <div className='timeLine'>
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
            <Tweets/>   
          </div>
    </div>
    
    <div>
        <div className='follow'>
               <Followsearch/>
         <div className='follow-div2'>
              <div className='follow-div2-trendsforyou'>
              <H4 h4="Trends for you"/> 
              <button><img src="src/pictures/Settings.svg" alt="seting" /></button>
              </div>
              < Trendsforyou_text/>
              < Trendsforyou_text/>
              < Trendsforyou_text/>
              < Trendsforyou_text/>
              < BtnShowMore className="button-showmore"/>
         </div>
         <div className='follow-List'>
              <H4 h4="Who to follow"/> 
              <Follower className1="follow-body" className2="followme-btn" className3="followerName" namefollower="CNN" className4="folowerEmail" emailfollower="@cnn" className5="btn-follow" src1="src/pictures/Profile-Photo.png" alt1="CNN" src2="src/pictures/verified.png" alt2="verified"/>
              <Follower className1="follow-body" className2="followme-btn" className3="followerName" namefollower="Twiter" className4="folowerEmail" emailfollower="@twiter" className5="btn-follow" src1="src/pictures/tweter-Photo.png" alt1="twiter" src2="src/pictures/verified.png" alt2="verified"/>
              <Follower className1="follow-body" className2="followme-btn" className3="followerName" namefollower="New York Times" className4="folowerEmail" emailfollower="@nytimes" className5="btn-follow" src1="src/pictures/Newyork-Photo.png" alt1="newyork" src2="src/pictures/verified.png" alt2="verified"/>
              <BtnShowMore className="button-showmore"/>
          </div>
          <p className ='copyright'>
           Terms of Service Privacy Policy Cookie Policy <br /> Imprint Ads info More ...© 2024 Twitter, Inc.
          </p>
        </div>
    </div>
    </div>
    </body>
  )
}

export default App
