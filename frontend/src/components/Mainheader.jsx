
import './Mainheader.css'

const Mainnav = ({ serviceRef }) => {

    const scrollTo = (ref, e) => {
        if (!ref?.current) return;
        e.preventDefault();
        ref.current.scrollIntoView({ behavior: 'smooth' });
    };

    return(
        <nav>
            <div className='nav-bar-main'>
                <div className='burger-icon-main'>
                    <i className="fa-solid fa-bars burger-icon"></i>
                </div>
                <div className='links-main'>
                    <a href="/">Home</a>
                    <a href="">About</a>
                    <a href="" onClick={(e) => scrollTo(serviceRef, e)}>Services</a>
                    <a href="" onClick={(e) => scrollTo(contactRef, e)}>Contact</a>
                </div>

            </div>

        </nav>
    )
}

export default Mainnav;