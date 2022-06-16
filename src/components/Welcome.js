import downtown from '../img/downtown.png';
function Welcome(props) {

    return (
        <div className="main-row" data-reactid=".0.3">
            <section className="tutorial mobile-hidden" data-reactid=".0.3.0">
                <div className="tutorial-backdrop en opaque" data-reactid=".0.3.0.0"></div>
                <section className="tutorial-content welcome" data-reactid=".0.3.0.1">
                    <div className="row" data-reactid=".0.3.0.1.0">
                        <div className="col-md-4 col-md-offset-0 col-sm-4 col-sm-offset-0 col-xs-6 col-xs-offset-3" data-reactid=".0.3.0.1.0.0">
                            <img src={downtown}
                                aria-hidden="true"
                                alt=""
                                data-reactid=".0.3.0.1.0.0.0"/>
                        </div>
                        <div className="col-md-7 col-sm-7 col-xs-12" data-reactid=".0.3.0.1.0.1">
                        <h1 tabIndex="-1" data-reactid=".0.3.0.1.0.1.0">
                            Welcome to the Food Truck Challenge!
                        </h1>
                        </div>
                    </div>
                    <div className="row" data-reactid=".0.3.0.1.1">
                        <p data-reactid=".0.3.0.1.1.0">
                        The year is 2018 and the Food Truck Challenge is about to begin! You
                        have long dreamed of starting your own business—a food truck serving
                        frozen treats seemed like the perfect mix of growth potential,
                        personal flexibility, and fun. The Food Truck Challenge is a great
                        opportunity for exposure and potential prize money.
                        </p>
                        <p data-reactid=".0.3.0.1.1.1">
                        In this challenge you will compete against other food truck teams
                        across the country for the highest cumulative sales over five weeks.
                        You have chosen Boomtown, a small city with a diverse urban landscape,
                        to kick off your frozen treat venture. Throughout the challenge
                        you&amp;apos;ll be learning more about Boomtown and the frozen treat
                        market. Put all these pieces together carefully to craft the best menu
                        and location combination for your venture.
                        </p>
                        <p data-reactid=".0.3.0.1.1.2">
                        Remember, you only have five weeks to beat the competition. Good luck!
                        </p>
                    </div>
                    <div className="row" data-reactid=".0.3.0.1.2">
                        <button onClick={()=>props.handlePageChange('Reports')} className="btn btn-primary col-md-4 col-md-offset-4 col-sm-8 col-sm-offset-2 active mobile-hidden" data-reactid=".0.3.0.1.2.0">
                        Get Started
                        </button>
                    </div>
                </section>
            </section>
        </div>
        )
}
export default Welcome;