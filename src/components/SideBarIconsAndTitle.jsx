function SideBarIconsAndTitle(props){
    return(
        <div className= {props.className1}>
        <div className={props.className2}> <img src={props.src} alt={props.alt}/>  </div>
        <div className={props.className3}><span>{props.Titleicon}</span></div>
  </div>
    )
}

export default SideBarIconsAndTitle