import Tweets from "./components/Tweets"
import H4 from "./components/H4"
import TweetEditorButtons from "./components/TweetEditorButtons"
import BtnShowMore from "./components/BtnShowMore"
import Follower from "./components/Follower"
import Trendsforyou_text from "./components/Trendsforyou_text"
import Followsearch from "./components/Followsearch"
import SideBarIconsAndTitle from "./components/SideBarIconsAndTitle"
import SideBar_2_contenu from "./components/SideBar_2_contenu"
import Page_profile from "./components/Page _profile"
import { Routes,Route } from "react-router-dom"
import Home from "./components/Home"
import { Link } from "react-router-dom"
import { useState } from "react"



function App() {
  const array=[
    {

      "author_avatar": "https://picsum.photos/200?random=1604299903000",

      "source": "Twitter",

      "date": 1604299903000,

      "favorites": "92746",

      "id": "1323155810910982145",

      "isVerified": true,

      "replies": "24785",

      "retweets": "16287",

      "text": "...As I said at the debate – “Will you remember that Texas?Pennsylvania? Ohio? New Mexico?” I will always protect American Energy and American Jobs! Get out and VOTE #MAGA!"

    },

    {

      "author_avatar": "https://picsum.photos/200?random=1609942590000",

      "source": "Apple",

      "date": 1609942590000,

      "favorites": "396603",

      "id": "1346822958006886400",

      "isVerified": false,

      "replies": "896",

      "retweets": "54694",

      "text": "Even Mexico uses Voter I.D.",

      "image": "https://picsum.photos/1024/200?random=1346822958006886400"

    },

    {

      "author_avatar": "https://picsum.photos/200?random=1604231375000",

      "source": "Twitter for iPhone",

      "date": 1604231375000,

      "favorites": "124689",

      "id": "1322868385361891328",

      "isVerified": true,

      "replies": "8",

      "retweets": "22972",

      "text": "When I originally became your all time favorite President, the Great State of Michigan was hemorrhaging car companies and jobs. Plants were closing and moving to Mexico, and other places. No new plants for decades. I stopped the moves, &amp; now many plants are and have been built...",

      "image": "https://picsum.photos/200/800?random=1322868385361891328"

    },

    {

      "author_avatar": "https://picsum.photos/200?random=1604084613000",

      "source": "CNN",

      "date": 1604084613000,

      "favorites": "44842",

      "id": "1322252819299135488",

      "isVerified": false,

      "replies": "1024",

      "retweets": "9563",

      "text": "...a cheerleader for NAFTA – sending your auto Jobs to Mexico. He voted for China’s entry into the World Trade Organization – gutting your industries to finance China’s rise. HALF of all Michigan auto manufacturing jobs were ELIMINATED after the Biden-Backed NAFTA and China...",

      "image": "https://picsum.photos/200?random=1322252819299135488"

    },

    {

      "author_avatar": "https://picsum.photos/200?random=1603037689000",

      "source": "Trump D.",

      "date": 1603037689000,

      "favorites": 62414,

      "id": "1317861704819118080",

      "isVerified": false,

      "replies": "258",

      "retweets": 16811,

      "text": "Not my Wall, which will soon be finished (and Mexico will pay for the Wall!). Totally unrelated, but I think Steve will be just fine. By the way, is this the same job hopping Tim O’Brien that headed Mini Mike Bloomberg’s humiliating 2 Billion Dollar Presidential run? Debate prep! https://t.co/cQfEtszRrB"

    },

    {

      "author_avatar": "https://picsum.photos/200?random=1602377246000",

      "source": "Lauraine L.",

      "date": 1602377246000,

      "favorites": 34952,

      "id": "1315091604496158720",

      "isVerified": true,

      "replies": "85",

      "retweets": 10008,

      "text": "Yvette Herrell (@Yvette4Congress) is a proven fighter for New Mexico! She strongly supports our Brave Law Enforcement, Life and the Second Amendment. Strong on the Border and Trade, Yvette has my Complete and Total Endorsement! #NM02 https://t.co/77hjYfVWAB",

      "image": "https://picsum.photos/200?random=1315091604496158720"

    },

    {

      "author_avatar": "https://picsum.photos/200?random=1601996447000",

      "source": "Mexico City",

      "date": 1601996447000,

      "favorites": 58201,

      "id": "1313494418314457090",

      "isVerified": true,

      "replies": "0",

      "retweets": 14359,

      "text": "NEW MEXICO! Today is the last day you can register to vote online or via mail. Make sure your vote counts! \nhttps://t.co/WwzdPhDkAZ"

    },

    {

      "author_avatar": "https://picsum.photos/200?random=1554075712000",

      "source": "New York Times",

      "date": 1554075712000,

      "favorites": 58201,

      "id": "1313494418314457090",

      "isVerified": true,

      "replies": "0",

      "retweets": 14359,

      "text": "....However, if for any reason Mexico stops apprehending and bringing the illegals back to where they came from, the U.S. will be forced to Tariff at 25% all cars made in Mexico and shipped over the Border to us. If that doesn’t work, which it will, I will close the Border......."

    },

    {

      "author_avatar": "https://picsum.photos/200?random=1604231375000",

      "source": "Twitter for iPhone",

      "date": 1601996447000,

      "favorites": 58201,

      "id": "1313494418314457090",

      "isVerified": true,

      "replies": "0",

      "retweets": 14359,

      "text": "A 9th Circuit Judge just ruled that Mexico is too dangerous for migrants. So unfair to the U.S. OUT OF CONTROL! https://t.co/XF8o3jMDle"

    },

    {

      "author_avatar": "https://picsum.photos/200?random=1548956601000",

      "source": "Samsung",

      "date": 1601996447000,

      "favorites": 58201,

      "id": "1313494418314457090",

      "isVerified": true,

      "replies": "0",
      "retweets": 14359,
      "text": "A 9th Circuit Judge just ruled that Mexico is too dangerous for migrants. So unfair to the U.S. OUT OF CONTROL! https://t.co/XF8o3jMDle",

      "image": "https://picsum.photos/2048/1024?random=1313494418314457090"

    }
  ]
  return (
      <body>
 <div className='classMain'>
      <div className='sideBar'> 
          <div className='sideBar-1'>
          <SideBarIconsAndTitle className1="one" className2="one-1" src="src/pictures/oiseau.png" alt ="oiseau"/>
          <Link className1="two" to="/"><SideBarIconsAndTitle className1="two" className2="two-1" src="src/pictures/case-oiseau.png" alt ="home" className3="two-2" Titleicon="Home" /></Link> 
          <SideBarIconsAndTitle className1="three" className2="three-1" src="src/pictures/tag.png" alt ="explore" className3="three-2" Titleicon="Explore" />
          <SideBarIconsAndTitle className1="four" className2="four-1" src="src/pictures/cloche.png" alt ="notification" className3="four-2" Titleicon="Notification" />
          <SideBarIconsAndTitle className1="five" className2="five-1" src="src/pictures/email.png" alt ="messages" className3="five-2" Titleicon="Messages" />
          <SideBarIconsAndTitle className1="six" className2="six-1" src="src/pictures/Vect.png" alt ="Bookmarks" className3="six-2" Titleicon="Bookmarks" />
          <SideBarIconsAndTitle className1="sevenn" className2="sevenn-1" src="src/pictures/Lists.png" alt ="Lists" className3="sevenn-2" Titleicon="Lists" />
          <Link to="/Page_profile"><SideBarIconsAndTitle className1="eightt" className2="eightt-1" src="src/pictures/profile.png" alt ="Profile" className3="eightt-2" Titleicon="Profile" /></Link> 
          <SideBarIconsAndTitle className1="nine" className2="nine-1" src="src/pictures/More.png" alt ="More" className3="nine-2" Titleicon="More" />

          </div>

        <div className='sideBar-2'>
        <SideBar_2_contenu/>
        </div>
      </div>

    <div className='timeLine'>
     <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/Page_profile" element={<Page_profile/>}></Route>
     </Routes>
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
