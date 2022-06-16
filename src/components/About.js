import Toggle from './common/toggle';
import map2x from '../img/map-2x.png';
import spinner from '../img/spinner-empty-2x.png';
import { useTranslation } from "react-i18next";

const About = ()=> {
    const { t } = useTranslation();
    const subheading = '';
    const content =
    (<div>
    <p>{t("about.p1")}</p>
    <p>{t("about.p2")}</p>
    <p>{t("about.p3")}</p>
    <p>
    {t("about.p4")}
    </p>
    </div>);
    return <section role="tab-panel" data-reactid=".0.3.2.0.2">
    <div className="col-md-8 col-md-offset-2" data-reactid=".0.3.2.0.2.0">
        <h2 tabIndex="-1" className="accessibility-text" data-reactid=".0.3.2.0.2.0.0">Map</h2>
        <div className="map" data-reactid=".0.3.2.0.2.0.1">
            <img src={map2x} aria-hidden="true" alt="" data-reactid=".0.3.2.0.2.0.1.0" />
            <img className="spinner" src={spinner} alt="Location: unselected" data-reactid=".0.3.2.0.2.0.1.1" />
            <img className="method" src="data:image/svg+xml;charset=utf8,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%3E%3C/svg%3E" alt="Method: unselected" data-reactid=".0.3.2.0.2.0.1.2" />
            <img className="menu" src="data:image/svg+xml;charset=utf8,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%3E%3C/svg%3E" alt="Menu: unselected" data-reactid=".0.3.2.0.2.0.1.3" />
        </div>
        <Toggle heading={t("about.title")} subheading={subheading} purchasedReport={false} isTutorial={false}>
          {content}
        </Toggle>
    </div>
</section>
}
export default About;