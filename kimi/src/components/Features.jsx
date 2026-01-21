import './Features.css'

const Feature = () => {
    return(
        <div className="feature-parent">

                <div className="feature-words">
                    <p className='feature-words-p1'>TAKING CARE OF EVERY CLIENT</p>
                    <h1>Key Features</h1>
                    <h2 className='feature-words-p2'>We are all about our client's comfort and safety. That's <br />
                        why we provide the best service you can imagine.
                    </h2>
                </div>

                <div className="feature-cards">

                    <div className="card">
                        <div className="card-icons">
                            <p><i class="fa-regular fa-7"></i></p>
                        </div>
                        <div className="descri">
                            <h2>7/7 days technical support</h2>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-icons">
                            <p><i class="fa-solid fa-award"></i></p>
                        </div>
                        <div className="descri">
                            <h2>We provide you a <br />1-month guarantee</h2>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-icons">
                            <p><i class="fa-solid fa-bolt"></i></p>
                        </div>
                        <div className="descri">
                            <h2>Complete premium car services for all models</h2>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-icons">
                            <p><i class="fa-regular fa-circle-check"></i></p>
                        </div>
                        <div className="descri">
                            <h2>Absolute confidentiality and professionalism</h2>
                        </div>
                    </div>

                </div>
        </div>
    )
}

export default Feature;