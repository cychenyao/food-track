import { t } from "i18next";
import Ptab from "./Ptab";
import { useTranslation } from "react-i18next";

const LocDemographic = () =>{
    const { t } = useTranslation();
    const tabs = [
        {
            title: t("locations.beach")+":",
            value: t("locations.beachValue"),
            id: 1
        },
        {
            title: t("locations.artsDistrict")+":",
            value: t("locations.artsDistrictValue"),
            id: 2
        },
        {
            title: t("locations.trainStation")+":",
            value: t("locations.trainStationValue"),
            id: 3
        },
        {
            title: t("locations.university")+":",
            value: t("locations.universityValue"),
            id: 4
        },
        {
            title:  t("locations.downtown")+":",
            value: t("locations.downtownValue"),
            id: 4
        },
        {
            title: t("locations.cityMarket")+":",
            value: t("locations.cityMarketValue"),
            id: 4
        },
    ]
    return (
        <div>
            <h5 data-reactid=".0.3.2.0.2.0.2.1.0:$4.1.0.1:$0.$h0">{t("others.demoMix")}</h5>
            {
                tabs.map(t=>{
                    return <Ptab title={t.title} value={t.value} id={t.id}/>
                })
            }
        </div>
    )
}
export default LocDemographic;