import { useState } from "react";

const Artist = ({age, name, image, bestLine}) => {
    const [likes, setLikes] = useState(0);
    const [hates, setHates] = useState(0);

    return <div className="artist-card">
        <div className="artist-image">
            <img src={image} width="100%"/>
        </div>
        <div className="artist-name-age">
            <h3>{name}</h3>
            <h6>{age}</h6>
        </div>
        <p className="artist-best-line">
            <div className="artist-reviews">
                <button 
                    onClick={(event) => setLikes(likes+1)} 
                    style={{color: '#F5F5F5', backgroundColor: 'red', border: 0, width: 24, height: 24, borderRadius: '50%'}}>
                    {likes}
                </button> 

                <button 
                    onClick={(event) => setHates(hates+1)} 
                    style={{color: '#F5F5F5', backgroundColor: 'slategray', border: 0, width: 24, height: 24, borderRadius: '50%'}}>
                    {hates}
                </button> 
            </div>

            <br />

            <span>{bestLine}</span>
        </p>
    </div>;
}

export default Artist;