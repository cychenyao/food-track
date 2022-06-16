
import React, { useState, useEffect } from 'react';
import Welcome from './Welcome';
import Tutorial from './Tutorial';
import LeftPart from './LeftPart';
import Reports from './Reports';
import CityDemographic from './Reports/CityDemographic';
function Main(props){
    const [currentPage, setPage] = useState('Reports');
  // setting y does not trigger the effect
  // the second argument is an array of dependencies
    const handlePageChange = (page) => {
      console.log(page);
      setPage(page);
    }
    if(currentPage === 'Reports')
      return ( <LeftPart dailyValues={props.dailyValues} setDailyValue={props.setDailyValue}  currentDay={props.currentDay} setDay={props.setDay} submitResult={props.submitResult}/>)
    else if (currentPage === 'Welcome')
      return <Welcome handlePageChange={handlePageChange}/>
            /* {currentPage === 'Welcome'  && <Welcome handlePageChange={handlePageChange}/>}
            {currentPage === 'Reports'  && <LeftPart handlePageChange={handlePageChange}/>}
            {currentPage === 'Tutorial' && <Tutorial />}  */
            /* {currentPage === 'Reports' && <Reports />}  */
}
export default Main;