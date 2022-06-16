import Toggle from "../common/toggle";
import RevenueChart from "./RevenueChart";
import DecisionHistoryChart from './DecisionHistoryChart';
import Breakings from "./Breakings";
import { useTranslation } from "react-i18next";

const Observations = (props) => {
    const { t } = useTranslation();
    return <div className="reports-content observations" role="tab-panel">
        <div id="left-content" className="observations">
            <Toggle  heading={t('map.revenue')} subheading=""  purchasedReport={false} isTutorial={true}>
                <RevenueChart dailyValues={props.dailyValues}  />
            </Toggle>
            <Toggle  heading={t('map.decisionHistory')} subheading=""  purchasedReport={false} isTutorial={true}>
                <DecisionHistoryChart dailyValues={props.dailyValues}/>
            </Toggle>
        </div>
        <div id="right-content">
            <Toggle   heading={t('map.breakingField')} subheading=""  purchasedReport={false} isTutorial={true}>
               <Breakings dailyValues={props.dailyValues} />
            </Toggle>
        </div>
    </div>
}
export default Observations;