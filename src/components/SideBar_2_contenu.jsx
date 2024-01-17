function SideBar_2_contenu(){
    return(
       <>
        <div className='sidebar2-btn'>
              <button className='btn-tweet-sidebar'>Tweet</button>
        </div>

        <div className='sidebar2-profil'>
              <div className='sidebar2-profil-picture'>
                <img className='sidebar2-profil-picture-image' src="src/pictures/WhatsApp Image 2023-11-24 at 09.11.35.jpeg"  alt="Profile" />
              </div>
              <div className='sidebar2-profil-info'>
                  <span>Flavio umberto <img src="src/pictures/Private.png" alt="Profile" /></span>
                  <span>@flavio_</span>
              </div>
              <div className='sidebar2-profil-icon'>
                  <img src="src/pictures/More-2.png" alt="Profile" />
              </div>
        </div>
       
       </>
        
    )
}
 export default SideBar_2_contenu