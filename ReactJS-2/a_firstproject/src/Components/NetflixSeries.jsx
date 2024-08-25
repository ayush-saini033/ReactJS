const NetflixSeries = () => {
    // Dynamic values
    const name = "Queen of Tears"
    const rating = 8.3
    const summary = "Queen of Tears is a 2024 Korean drama series about a married couple, Hong Hae-in and Baek Hyun-woo, who are on the verge of divorce but rediscover their love for each other after Hae-in is diagnosed with brain cancer. The show follows their three-year marriage and the challenges they face, including Hyun-woo's feelings of being emasculated by his in-laws and their lack of interaction.The series stars Kim Ji-won as Hae-in and Kim Soo-hyun as Hyun-woo, and was written by Park Ji-eun (of Crash Landing on You) and directed by Jang Young-woo and Kim Hee-won. Some say the show has a great cast and chemistry, and teaches lessons about marriage, while others say the finale loses the show's emotional core and becomes more rote" 
  
    const returnGener = () => {
      const gener = "RomCom"
      return gener
    }
  
    let age = 16;
    // Bad way :- Do not repaet yourself`
  
    // if(age >= 18){
    //   return (
    //     <div>
    //       <img src="a_qot.jpg" alt="poster"width="40%" height="40%"/>
    //       <h2>Name: {name}</h2>
    //       <h3>Reviews: {1+3.7 + "/"+5}</h3>
    //       <h3>Rating: {rating}</h3>
    //       <p>Summary: {summary} </p>
    //       <h3>Genere: {returnGener()}</h3>
    //       <button>Watch Now</button>
    //     </div>
    //   )
    // }
    // if(age < 18 && age > 1){
    //   return (
    //     <div>
    //       <img src="a_qot.jpg" alt="poster"width="40%" height="40%"/>
    //       <h2>Name: {name}</h2>
    //       <h3>Reviews: {1+3.7 + "/"+5}</h3>
    //       <h3>Rating: {rating}</h3>
    //       <p>Summary: {summary} </p>
    //       <h3>Genere: {returnGener()}</h3>
    //       <button>Not Available</button>
    //     </div>
    //   )
    // }
  
    // Simple method
    let canWatch = "Not Available"
    if(age >= 18) canWatch = "Watch Now"
    
    // function method
    const WatchIt = () => {
      if(age >= 18) return "Watch Now"
      else return "Not Available"
    }
  
    // other method :- ternary operator
    return (
      <div>
        <img src="a_qot.jpg" alt="poster"width="40%" height="40%"/>
        <h2>Name: {name}</h2>
        <h3>Reviews: {1+3.7 + "/"+5}</h3>
        <h3>Rating: {rating}</h3>
        <p>Summary: {summary} </p>
        <h3>Genere: {returnGener()}</h3>
        <button>{age >= 18 ? "Wathc Now": "Not avilable"}</button>
        <button>{canWatch}</button>
        <button>{WatchIt()}</button>
      </div>
    )
  }

export default NetflixSeries;

export const Footer = () => {
    return <p>copyright @ayushsaini</p>
}

export const Header = () => {
    return <p>copyright @ayush</p>
}