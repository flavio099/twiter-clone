import Follower from "./Follower"
import { useNavigate } from "react-router-dom"


function Page_profile(){
    const navigate = useNavigate()
    return(
        <>
        <div className="IfonUserCount">
        <div className="btnReturn_UserNameAndNumberPost">
            <button onClick={()=>navigate(-1)}><img src="src/pictures/fleche-gauche.png" alt="retour" /></button>
            <div className="UserNameAndNumberPost"> <span className="span-username">Flavio Umberto</span><span className="span-postnumber">0 posts</span></div>
        </div>
        <div className="grise"></div>
        <div className="noire">
            <div className="editprofil"> <button className="btn-editprofil">Edit profile</button></div>
            <div><span className="span-username">Flavio Umberto</span></div>
            <div><span className="span-usermailadress">@flavienumba099</span></div>
            <div className="div-userjoined"><img src="src/pictures/jours-calendaires.png" alt="calender" /><span className="span-userjoined"> joined january 2024</span></div>
            <div className="following_follower"> <div className="following_follower_following"><span>12</span><span className="following">Following</span></div><div className="following_follower_follower"><span>1</span><span className="following">Follower</span></div></div>
            <div className="btn-replies-posts-media-likes"> <button className="btn-posts">Posts</button><button className="btn-Replies">Replies</button> <button className="btn-highlights">Highlights</button> <button className="btn-media">Media</button> <button className="btn-likes">Likes</button></div>
        </div>
        <div className="image-profil"> <img  className="image-profil-imageUser" src="src/pictures/WhatsApp Image 2023-11-24 at 09.11.35.jpeg" alt="" /> </div>
        
        </div>
        <div className="WhoToFollow">
              <div className="whotofollow-title"><h4>Who to follow</h4></div>  
              <Follower className1="follow-body" className2="followme-btn" className3="followerName" namefollower="New York Times" className4="folowerEmail" emailfollower="@nytimes" className5="btn-follow" src1="src/pictures/Newyork-Photo.png" alt1="newyork" src2="src/pictures/verified.png" alt2="verified"/> 
              <Follower className1="follow-body" className2="followme-btn" className3="followerName" namefollower="Twiter" className4="folowerEmail" emailfollower="@twiter" className5="btn-follow" src1="src/pictures/tweter-Photo.png" alt1="twiter" src2="src/pictures/verified.png" alt2="verified"/>
              <Follower className1="follow-body" className2="followme-btn" className3="followerName" namefollower="CNN" className4="folowerEmail" emailfollower="@cnn" className5="btn-follow" src1="src/pictures/Profile-Photo.png" alt1="CNN" src2="src/pictures/verified.png" alt2="verified"/>    
        </div>
        </>
    )
}

export default Page_profile

