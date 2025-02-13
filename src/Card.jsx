import profilePic from './assets/sloth.png'

function Card() {
    return (
        <>
            <div className="card">
                <img className="card-image" src={profilePic} alt="profile picture" />
                <h2 className="card-title">List Title</h2>
                <p className="card-text">List items will go here</p>
            </div>
        </>
    );
}

export default Card;