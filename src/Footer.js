import React from 'react';

function Footer() {
  return (
    <>
      <section id='footer'>
        <div className='title-text'>
          <p>CONTACT</p>
          <h1>Visit Shop Today</h1>
        </div>
        <div className='footer-row'>
          <div className='footer-left'>
            <h1>Communities</h1>
            <p>
              <i className='fa fa-clock-o'></i>Artists
            </p>
            <p>
              <i className='fa fa-clock-o'></i>Entertainers
            </p>
          </div>
          <div className='footer-right'>
            <h1>Get In Touch</h1>
            <p>
              Nairobi, Kenya<i className='fa-solid fa-location-dot'></i>
            </p>
            <p>
              purity@ourpets.com<i className='fa-solid fa-envelope'></i>
            </p>
            <p>
              +254712345467<i className='fa-solid fa-phone'></i>
            </p>
          </div>
        </div>
        <div className='social-links'>
          <i className='fa-brands fa-facebook-f'></i>
          <i className='fa-brands fa-instagram'></i>
          <i className='fa-brands fa-twitter'></i>
          <i className='fa-brands fa-youtube'></i>
          <p className='copyright'>copright@2022-purity</p>
        </div>
      </section>
    </>
  );
}

export default Footer;
