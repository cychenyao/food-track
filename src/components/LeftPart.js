import React, { useState, useEffect } from 'react';
import About from "./About";
import Reports from './Reports';
import MakeDescisions from './Reports/MakeDecisions';
import { useTranslation } from "react-i18next";

function LeftPart(props) {
  const { t } = useTranslation();
  console.log('leftpart+'+props.dailyValues);
  const [currentPage, setPage] = useState('Reports');
  const [isWholeWeekSelected, setWholeWeekSelected]=useState(false);
  const weeks = [
    [1,2,3,4,5],
    [6,7,8,9,10],
    [11,12,13,14,15],
    [16,17,18,19,20],
    [21,22,23,24,25]
  ]
  // useEffect(() => console.log("re-render because currentPage changed:", currentPage), [currentPage])
  const handlePageChange = (page) => {
    console.log(page);
    setPage(page);
  }

  useEffect(
    () => {
      console.log("re-render because currentPage changed:", currentPage);
      console.log("re-render because isWholeWeekSelected changed:", isWholeWeekSelected);
    }, 
  [currentPage,isWholeWeekSelected])
  return (
    <main id="main-content" className="main-container" data-reactid=".0.3.2">
      <div className="left-content" data-reactid=".0.3.2.0">
        <ul
          className="nav-row nav-menu basic-menu disable mobile-hidden"
          data-reactid=".0.3.2.0.0"
        >
          <li className={currentPage==="About"?"active":""} data-reactid=".0.3.2.0.0.0">
            <button
              aria-selected="true"
              role="tab"
              data-reactid=".0.3.2.0.0.0.0"
            >
              <span
                className="ss-globe"
                aria-hidden="true"
                data-reactid=".0.3.2.0.0.0.0.0"
                onClick={()=>handlePageChange('About')} 
              >
                {t('map.map')}
              </span>
            </button>
          </li>
          <li className={currentPage==="Reports"?"active":""} data-reactid=".0.3.2.0.0.1">
            <button
              aria-selected="false"
              role="tab"
              data-reactid=".0.3.2.0.0.1.0"
            >
              <span
                className="ss-barchart "
                aria-hidden="true"
                data-reactid=".0.3.2.0.0.1.0.0"
                onClick={()=>handlePageChange('Reports')} 
              >
                {t('map.reports')}
              </span>
            </button>
          </li>
          <li className="" data-reactid=".0.3.2.0.0.2">
          <button aria-selected="false" role="tab" data-reactid=".0.3.2.0.0.2.0">
          <span className="ss-pika ss-medal" aria-hidden="true" data-reactid=".0.3.2.0.0.2.0.0">
            <span data-reactid=".0.3.2.0.0.2.0.0.0">{t('map.leaderboard')}</span>
            <span data-reactid=".0.3.2.0.0.2.0.0.1"> </span>
          </span>
          <span className="accessibility-text" data-reactid=".0.3.2.0.0.2.0.1">
            <span data-reactid=".0.3.2.0.0.2.0.1.0">{t('map.leaderboard')}</span>
            <span data-reactid=".0.3.2.0.0.2.0.1.1"> </span>
          </span>
          </button>
          </li>    
        </ul>
        <div className="progress-weeks" data-reactid=".0.3.2.0.1">
          <span
            className="current-day"
            aria-live="polite"
            data-reactid=".0.3.2.0.1.0"
          >
            <span data-reactid=".0.3.2.0.1.0.0"> </span>
            <span data-reactid=".0.3.2.0.1.0.1">{t('map.endOfSimulation')}</span>
          </span>
          <div
            className="progress-bars"
            aria-hidden="true"
            data-reactid=".0.3.2.0.1.1"
          >
          {weeks.map((week,index)=>{
            return  <div className={week.indexOf(props.currentDay)>=0 ? "week current":"week past"} data-reactid=".0.3.2.0.1.1.$1">
            {week.map(day=>{
              return <span className={day===props.currentDay || (week.indexOf(props.currentDay)>=0 && isWholeWeekSelected) ? "day current":"day"} data-reactid=".0.3.2.0.1.1.$1.$0"></span>
            })}
            </div>
          })
          }
          </div>
        </div>
       {currentPage === 'About'&& <About />}
       {currentPage === 'Reports'&& <Reports dailyValues={props.dailyValues}/>}
      </div>
      <MakeDescisions setWholeWeekSelected={setWholeWeekSelected} dailyValues={props.dailyValues} setDailyValue={props.setDailyValue} weeks={weeks} currentDay={props.currentDay} submitResult={props.submitResult} />
    </main>
  );
}
export default LeftPart;
