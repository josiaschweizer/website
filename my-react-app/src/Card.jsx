import profilePic from './assets/josia.jpg';

function Card(){
    return(
        <div className="card">
            <img className='card-image' src={profilePic} alt="Profile Image"></img>
            <h2 className='card-title'>Josia Schweizer</h2>
            <p className='card-text'>I'm a software developer and play football</p>
        </div>
    );
}

export default Card