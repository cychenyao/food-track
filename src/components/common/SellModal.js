import arts from '../../img/arts.png';
import beach from '../../img/beach.png';
import data from '../../img/data.png';
import downtown from '../../img/downtown.png';
import froyo from '../../img/froyo.png';
import icecream from '../../img/icecream.png';
import market from '../../img/market.png';
import pushcart from '../../img/pushcart.png';
import smoothie from '../../img/smoothie.png';
import trainstation from '../../img/trainstation.png';
import truck from '../../img/truck.png';
import university from '../../img/university.png';

const SellModal = (props)=>{
    if(props.showSellModal)
    {return <section className="tutorial mobile-hidden">
        <div className="tutorial-backdrop en" data-reactid=".0.3.0.0"></div>
        <section className="tutorial-content reports-default">

            <div className="modal-central">
                <h3>
                <span data-reactid=".0.3.0.1.0.1">Currently Selling...</span>
                </h3>
            </div>
            <div className='img-container modal-central'>
                    <img className='modal-img' src={arts} alt="menu"/>
                    <img className='modal-img' src={icecream} alt="location"/>
            </div>
            <div className='img-container modal-central'>
                    <span >Ice Cream-</span>
                    <span >City Market</span>
            </div>
            <div className='img-container modal-central'>
                    Week {Math.ceil(props.currentDay/5)}, Day {props.currentDay%5  !== 0 ? props.currentDay%5 : 5}
            </div>
        </section>
    </section>}
    else{
        return <div></div>
    }
}
export default SellModal;