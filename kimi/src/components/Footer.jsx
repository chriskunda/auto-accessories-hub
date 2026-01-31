import './Footer.css'

const Footer = () => {
    return(
        <div className='parent-footer'>
            <div className='sub-parent-footer'>

                <div className='footer-links'>

                    <div className='link'>
                        <p>agafoto/icon</p>
                    </div>
                    <div className='link'>
                        <h2>Reach us</h2>
                        <i class="fa-solid fa-phone"><a href="tel:+250798697759">+250 783 169 582</a></i>
                        <i class="fa-solid fa-at"><a href="mailto:christianira2003@gmail.com">ouremail@gmail.com</a></i>
                        <i class="fa-solid fa-location-dot"><a href="https://www.google.com/maps/place/1°56'52.9">KG 40 st, Kigali, Kimironko</a></i>
                        <i class="fa-regular fa-clock"><span className='open'>Open from 8am to 8pm</span></i>
                    </div>
                    <div className='link'>
                        <p>astyuiopjhf</p>
                        <p>WERTYUIOERTY</p>
                        <p>wertyuiortyt</p>
                    </div>
                    <div className='link'>
                        <p>astyuiopjhf</p>
                        <p>WERTYUIOERTY</p>
                        <p>wertyuiortyt</p>
                    </div>
                    <div className='link'>
                        <p>astyuiopjhf</p>
                        <p>WERTYUIOERTY</p>
                        <p>wertyuiortyt</p>
                    </div>

                </div>

                <div className='line'>
                    <hr />
                </div>

                <div className='footer'>
                    <p className="foot-p">Copyright &copy; {new Date().getFullYear()}. All Rights Reserved</p>
                </div>

            </div>
        </div>
    )
}

export default Footer;