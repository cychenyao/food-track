const Modal = (props)=>{
    if(props.showModal)
   { return (
        <section className="tutorial mobile-hidden">
        <div className="tutorial-backdrop en" data-reactid=".0.3.0.0"></div>
        <section className="tutorial-content reports-default">
            <h3 tabIndex="-1" data-reactid=".0.3.0.1.0">
                <span className="accessibility-text" data-reactid=".0.3.0.1.0.0">
                    <span data-reactid=".0.3.0.1.0.0.0">Tutorial 1:</span>
                    <span data-reactid=".0.3.0.1.0.0.1"> </span>
                </span>
                <span data-reactid=".0.3.0.1.0.1">Viewing Reports</span>
            </h3>
            <div className="row">
                <p>
                You'll begin the challenge with access to some historical market data about Boomtown and the broader frozen treat industry.
                </p>
            </div>
            <div className="tutorial-progress">
                <div className="row tutorial-progress-buttons">
                    <button className="icon-navigation col-md-6 ss-navigateright right pull-right">
                        Next
                    </button>
                    <button className="icon-navigation col-md-6 ss-navigateleft left pull-left ">
                        Back
                    </button>
                </div>
            </div>
            <div className="skip-button-wrapper">
                <button className="menu-button focusTrapExempt">
                    <span className="ss-icon ss-skipforward"></span>
                    <span className="text">
                        <span>Skip Tutorial</span>
                    </span>
                </button>
            </div>
        </section>
        </section>
   )}
        else {
            return <div></div>
        }
}
export default Modal;