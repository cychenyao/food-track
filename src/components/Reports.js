import { useState, useEffect } from "react";
import Toggle from "./common/toggle";
import data from '../img/data.png';
import CityDemographic from "./Reports/CityDemographic";
import FrozenIndustryGraph from "./Reports/FrozenIndustryGraph";
import LocalCptGraph from "./Reports/LocalCptGraph";
import FootTrafGraph from "./Reports/FootTrafGraph";
import FronzenTreatGraph from "./Reports/FrozenTreatGraph";
import LocDemographic from "./Reports/LocDemographic";
import LocSalesGraph from "./Reports/LocSalesGraph";
import Observations from "./Reports/Observations";
import { useTranslation } from "react-i18next";

const Reports = (props) =>{
    const { t } = useTranslation();
    console.log('reports+'+props.dailyValues);
    const [currentTab, setTab] = useState('Market Data');
    useEffect(
       ()=> console.log("currentTab changes: " + currentTab)
        ,[currentTab]);
    return (
        <div className="reports" data-reactid=".0.3.2.0.2.0">
            <h2 className="accessibility-text" tabIndex="-1" data-reactid=".0.3.2.0.2.0.0">Reports {t('home.title')}</h2>
            <div  className="reports-nav" role="tablist" aria-label="Reports tabs" data-reactid=".0.3.2.0.2.0.1">
                <button onClick={()=>setTab('Market Data')} role="tab" id="left-button" aria-controls="left-content" className={currentTab==='Market Data' ? "tab active" : "tab"} aria-selected="true" data-reactid=".0.3.2.0.2.0.1.0">
                    {t('map.marketData')}
                </button>
                <button onClick={()=>setTab('Observations')} role="tab" id="right-button" aria-controls="right-content" className={currentTab==='Observations' ? "tab active" : "tab"} aria-selected="false" data-reactid=".0.3.2.0.2.0.1.1">
                      {t('map.observations')}
                </button>
            <div className="tab empty" data-reactid=".0.3.2.0.2.0.1.2">&nbsp;</div>
            </div>
            {currentTab==='Market Data' && <div role="tab-panel" className="reports-content" data-reactid=".0.3.2.0.2.0.2">
                <div className="" id="left-content" data-reactid=".0.3.2.0.2.0.2.0">
                    <Toggle logo={data} heading={t('reports.cityDemographicHeading')} subheading=""  purchasedReport={false} isTutorial={true}>
                     <CityDemographic></CityDemographic>
                    </Toggle>
                    <Toggle heading={t('reports.frozenIndustryGraphHeading')} subheading=""  purchasedReport={false} isTutorial={true}>
                        <FrozenIndustryGraph />
                    </Toggle>
                    <Toggle heading={t('reports.localCptGraphHeading')} subheading=""  purchasedReport={false} isTutorial={true}>
                        <LocalCptGraph />
                    </Toggle>
                    <Toggle heading={t('reports.footTrafGraphHeading')} subheading=""  purchasedReport={false} isTutorial={true}>
                        <FootTrafGraph  />
                    </Toggle>
                </div>
                <div className="" id="right-content" data-reactid=".0.3.2.0.2.0.2.0">
                    <Toggle heading={t('reports.fronzenTreatGraphHeading')} subheading=""  purchasedReport={false} isTutorial={true}>
                        <FronzenTreatGraph />
                    </Toggle>
                    <Toggle heading={t('reports.locDemographicHeading')} subheading=""  purchasedReport={false} isTutorial={true}>
                        <LocDemographic />
                    </Toggle>
                    <Toggle heading={t('reports.locSalesGraphHeading')} subheading=""  purchasedReport={false} isTutorial={true}>
                        <LocSalesGraph />
                    </Toggle>
                </div>
            </div>}
            {
                currentTab==='Observations' && <Observations dailyValues={props.dailyValues}/>
            }
        </div>
    )
}
export default Reports;