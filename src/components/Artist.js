const Artist = ({age, name, image, bestLine: {quote = "", song = '-'}}) => {
    return (
      <div className='artist-card'>
        <div className='artist-image'>
          <img src={image} alt={name} width='100%' />
        </div>

        <div className='px-3 py-4 d-flex justify-content-between'>
          <h3 style={{ color: 'black' }}>{name}</h3>
          <h6 style={{ color: 'black' }}>{age}+</h6>
        </div>

        <p className='px-3 py-4'>
          <figure>
            <blockquote className='blockquote' style={{ color: 'black' }}>
              {quote}
            </blockquote>
            <figcaption class='blockquote-footer'>
              {name} <cite title='Song Title'>{song}</cite>
            </figcaption>
          </figure>
        </p>
      </div>
    );
}

export default Artist;