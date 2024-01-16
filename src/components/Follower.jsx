function Follower(props){
    return(
      <div className= {props.className1}>
      <img src={props.src1}alt={props.alt1}/>
      <div className={props.className2}>
        <div><p className={props.className3}> {props.namefollower} <img src= {props.src2} alt={props.alt2} /> </p><p className={props.className4}>{props.emailfollower}</p></div>
        <button className={props.className5}>Follow </button> 
      </div>
      </div>
    )
  }

  export default Follower