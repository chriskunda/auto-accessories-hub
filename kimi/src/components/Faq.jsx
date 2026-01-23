import './Faq.css'

const Faq = () =>{
    return(
        <div className="parent-faq">

            <div className="faq-leftside">
                <h1>FAQ</h1>
                <p>Frequently asked questions about us. You can <br />
                    find the answers to these common questions in <br />
                    the list of answers on the right side by hovering on the question.
                </p>
                <button className='faq-leftside-button'>More questions</button>
            </div>

            <div className="faq-rightside">
                
                <div className='faq-rightside-div1'>

                    <p className='faq-rightside-div1-p1'>What is Kimi?</p>
                    <p className='faq-rightside-div1-p2'>Kimi is an automobile and accessories hub that provides <br />
                        cars with Used & new tyres of high quality, car accessories and <br />
                        services of oil changing and wheel alignment under one loof.
                    </p>

                </div>
                <div className='faq-rightside-div2'>
                    
                    <p className='faq-rightside-div2-p1'>What is our guarantee policy?</p>
                    <p className='faq-rightside-div2-p2'>qwertyuikjh</p>
                    
                </div>
                <div className='faq-rightside-div3'>
                    
                    <p className='faq-rightside-div3-p1'>Do we give our clients an EBM receipt?</p>
                    <p className='faq-rightside-div3-p2'>astyuikxc</p>
                    
                </div>

            </div>

        </div>
    )
}

export default Faq;

