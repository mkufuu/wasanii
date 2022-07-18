const Artist = ({age, name, image, bestLine}) => {
    return <div className="artist-card">
        <div className="artist-image">
            <img src={image} alt={name} width="100%"/>
        </div>
        <div className="artist-name-age">
            <h3>{name}</h3>
            <h6>{age}+</h6>
        </div>
        <p className="artist-best-line">
            <blockquote>{bestLine}</blockquote>
        </p>
    </div>;
}

export default Artist;