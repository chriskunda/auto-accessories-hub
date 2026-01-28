import './Contact.css'

const Contact = () => {
    return(
        <div className="parent-contact">

            <h1>You've seen Enough. Now let's get to work.</h1>
            <p className='p2'>Contact us by clicking on that WhatsApp button or the Phone number below.</p>

            <div className='call-links'>
            <button><i class="fa-brands fa-whatsapp"></i> Whatsapp</button>
            <i className="fa-solid fa-phone call"> <a href="tel:+250798697759">+250 783 169 582</a> </i>
            </div>

        </div>
    )
}

export default Contact;