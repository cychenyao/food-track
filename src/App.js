import Main from './components/Main';
import { useState, useEffect } from 'react';
import Modal from './components/common/Modal';
import SellModal from './components/common/SellModal';
import i18n from './locales/resource';
//国际化：https://segmentfault.com/a/1190000040477248
function App() {
  const [modalTitle, setModalTitle] = useState('');
  const [currentDay, setDay] = useState(1);
  const [dailyValues, setDailyValue] = useState([{
    id: 1,
    value: 0,
    method: null,
    menu: null,
    location: null,
    breaking: null 
},
{
    id: 2,
    value: 0,
    method: null,
    menu: null,
    location: null,
    breaking: null
},
{
    id: 3,
    value: 0,
    method: null,
    menu: null,
    location: null   ,
    breaking: null
},
{
    id: 4,
    value: 0,
    method: null,
    menu: null,
    location: null,
    breaking: null   
},
{
    id: 5,
    value: 0,
    method: null,
    menu: null,
    location: null,
    breaking: null   
},
{
    id: 6,
    value: 0,
    method: null,
    menu: null,
    location: null,
    breaking: null   
},
{
    id: 7,
    value: 0,
    method: null,
    menu: null,
    location: null,
    breaking: null   
},{
    id: 8,
    value: 0,
    method: null,
    menu: null,
    location: null,
    breaking: null   
},{
    id: 9,
    value: 0,
    method: null,
    menu: null,
    location: null,
    breaking: null  
},{
    id: 10,
    value: 0,
    method: null,
    menu: null,
    location: null,
    breaking: null   
},{
    id: 11,
    value: 0,
    method: null,
    menu: null,
    location: null,
    breaking: null  
},{
    id: 12,
    value: 0,
    method: null,
    menu: null,
    location: null,
    breaking: null   
},{
    id: 13,
    value: 0,
    method: null,
    menu: null,
    location: null,
    breaking: null   
},{
    id: 14,
    value: 0,
    method: null,
    menu: null,
    location: null,
    breaking: null   
},{
    id: 15,
    value: 0,
    method: null,
    menu: null,
    location: null,
    breaking: null   
},{
    id: 16,
    value: 0,
    method: null,
    menu: null,
    location: null,
    breaking: null   
},{
    id: 17,
    value: 0,
    method: null,
    menu: null,
    location: null,
    breaking: null   
},{
    id: 18,
    value: 0,
    method: null,
    menu: null,
    location: null,
    breaking: null   
},{
    id: 19,
    value: 0,
    method: null,
    menu: null,
    location: null,
    breaking: null  
},{
    id: 20,
    value: 0,
    method: null,
    menu: null,
    location: null,
    breaking: null   
},{
    id: 21,
    value: 0,
    method: null,
    menu: null,
    location: null,
    breaking: null   
},{
    id: 22,
    value: 0,
    method: null,
    menu: null,
    location: null,
    breaking: null   
},{
    id: 23,
    value: 0,
    method: null,
    menu: null,
    location: null,
    breaking: null   
},{
    id: 24,
    value: 0,
    method: null,
    menu: null,
    location: null,
    breaking: null   
}, {
    id: 25,
    value: 0,
    method: null,
    menu: null,
    location: null,
    breaking: null  
}]);
  const [isShowSellmodal, setSellModal] = useState(false);
  const [language,setLanguage] = useState('zh-CN')
  // const [modalTitle, setModalTitle] = useState('');
  const closeModal = (newDay)=>{
      console.log('closeModal');
    setSellModal(false);
    setDay(newDay);
  }
  const changeLanguage = (e) => {
        setLanguage(e.value);
        // i18n.changeLanguage(e.value)
  }
  const submitResult = (newDay) => {
    console.log("submit result");
    setSellModal(true);
    //计算出来的值，在make decision component中
    //dailyValues[currentDay-1].value = 
    setTimeout(()=>closeModal(newDay),1000);
  }
  useEffect(
    () => {
      console.log("re-render because currentDay changed:", currentDay);
      console.log("re-render because isShowSellmodal changed:", isShowSellmodal);
      console.log("re-render because dailyValues changed:", dailyValues);
    }, 
  [currentDay,isShowSellmodal,dailyValues,language])
  return (
    <div className='sim'>
      <div className='main-row'>
            <Modal showModal={false}/>
            <SellModal showSellModal={isShowSellmodal} currentDay={currentDay} />
            <div>
     <label>语言切换</label>
     <select value={language} onChange={(e)=>changeLanguage(e)}>
        <option value="cn">简</option>
        <option value="en">英</option>
     </select>
 </div>  
            <Main  currentDay={currentDay}  setDay={setDay} submitResult={submitResult} dailyValues={dailyValues} setDailyValue={setDailyValue}/>
      </div>
    </div>
  );
}

export default App;
