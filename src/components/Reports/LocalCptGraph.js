import { useTranslation } from "react-i18next";

const LocalCptGraph = () =>  {
    const { t } = useTranslation();
    return (
        <div className="competition-report">
            <div>
                <p>
                {t("localCpt.p1")}
                </p>
                <p>
                {t("localCpt.p2")}
                </p>
                <p>
                    <span className="text-label">
                        <span>{t("locations.downtown")}:</span>
                    </span>
                    <span>{t("localCpt.downtownCpt")}</span>
                </p>
                <p>
                    <span className="text-label">
                        <span>{t("locations.cityMarket")}:</span>
                    </span>
                    <span>{t("locations.cityMarketCpt")}</span>
                </p>
                <p>
                    <span className="text-label">
                        <span>{t("locations.trainStation")}:</span>
                    </span>
                    <span>{t("localCpt.trainStationCpt")}</span>
                </p>
                <p>
                    <span className="text-label">
                        <span>{t("locations.artsDistrict")}:</span>
                    </span>
                    <span>{t("localCpt.artsDistrictCpt")}</span>
                </p>
                <p>
                    <span className="text-label">
                        <span>{t("locations.university")}:</span>
                    </span>
                    <span>{t("localCpt.universityCpt")}</span>
                </p>
                <p>
                    <span className="text-label">
                        <span>{t("locations.beach")}:</span>
                    </span>
                    <span>{t("localCpt.beachCpt")}</span>
                </p>
            </div>
        </div>
    )
}
export default LocalCptGraph;