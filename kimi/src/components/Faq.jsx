import './Faq.css'

const Faq = () =>{
    return(
        <div className="parent-faq">

            <div className="faq-leftside">
                <h1>FAQ</h1>
                <p>Frequently asked questions about us. You can
                    find the answers to these common questions in
                    the list of answers on the right side by hovering on the question.
                </p>
            </div>

            <div className="faq-rightside">
                
                <div className='faq-rightside-div1'>

                    <p className='faq-rightside-div1-p1'><b>Who are we?</b></p>
                    <p className='faq-rightside-div1-p2'>Kimi is a comprehensive automobile and accessories hub providing
                                                        premium new and used tyres, car accessories, oil change and wheel alignment services
                                                        in one location.</p>

                </div>
                <div className='faq-rightside-div2'>
                    
                    <p className='faq-rightside-div2-p1'><b>Do we provide guarantee on used tyres?</b></p>
                    <p className='faq-rightside-div2-p2'>We provide a 1-month guarantee on all used tyres purchased from us.
                                                        <br />And by saying this we mean when a tyre develops a problem caused by 
                                                        manufacturing defects or issues related to our inspection and installation, 
                                                        we will replace it free of charge within 1 month of purchase. But this guarantee 
                                                        does not cover damages caused by the driver, including but not limited to: <b>Punctures from rocks, 
                                                        nails, or sharp objects, Road accidents or impacts, Improper use, High pressure, or poor tyre maintenance. </b>
                                                        Our goal is to ensure quality, safety, and customer satisfaction, while maintaining fair use of the guarantee.</p>
                    
                </div>
                <div className='faq-rightside-div3'>
                    
                    <p className='faq-rightside-div3-p1'><b>Do we give our clients an EBM receipt?</b></p>
                    <p className='faq-rightside-div3-p2'>All services and purchases are accompanied by a 
                                                        valid EBM receipt for transparency and compliance.</p>
                    
                </div>

            </div>

        </div>
    )
}

export default Faq;

