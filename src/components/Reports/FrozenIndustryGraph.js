import DataTable from "./DataTable";
import DataNotes from "./DataNotes";
import piechart from '../../img/piechart.png';
import { useTranslation } from "react-i18next";


const FrozenIndustryGraph = () => {
  const { t } = useTranslation();
    const demograHeaders = [
      {
        title: '',
        id: 3
      },
      {
        title: t('reports.iceCream'),
        id: 1
      },
      {
        title: t('reports.frozenYogurt'),
        id: 2
      },
      {
        title: t("others.other"),
        id: 4
      }
    ]
      const demograBodys = [
        [{
          title:t("frozenIndustry.industry"),
          id:1
        },
        {
          title:'59%',
          id:2
        },
        {
          title:'22%',
          id:3
        },
        {
          title:'19%',
          id:4
        }
      ], [{
        title:'',
        id:6
      },
      {
        title:'45%',
        id:7
      },
      {
        title:'32%',
        id:8
      },
      {
        title:'23%',
        id:9
      }
    ]]
    const demograNotes = [
        {
          title: t("frozenIndustry.notes1"),
          id:1
        },
        {
          title: t("frozenIndustry.notes2"),
          id:2
        },
        {
          title: t("frozenIndustry.notes3"),
          id:3
        }
      ];
    return (
        <div className="industry-report">
            <div className="industry-snapshot">
                <h5>{t("others.snapshot")}</h5>
                <ul aria-hidden="true">
                    <li>
                        <span className="first-word">
                            <span>1%</span>
                        </span>
                        <span>
                            <span>{t("frozenIndustry.snapshot1")}</span>
                        </span>
                    </li>
                    <li>
                        <span className="first-word">
                            <span>$12B</span>
                        </span>
                        <span>
                            <span>{t("frozenIndustry.snapshot2")}</span>
                        </span>
                    </li>
                    <li>
                        <span className="first-word">
                            <span>$3.2B</span>
                        </span>
                        <span>
                            <span>{t("frozenIndustry.snapshot3")}</span>
                        </span>
                    </li>
                </ul>
            </div>
            <div className="industry-container outer-container" data-reactid=".0.3.2.0.2.0.2.0.1:$0.1.0.1.1">
              <div className="outer-chart" data-reactid=".0.3.2.0.2.0.2.0.1:$0.1.0.1.1.0">
                  <img width='300' src={piechart} alt='piechart'/>
              </div>
            </div>
            <ul className="industry-legend" aria-hidden="true" data-reactid=".0.3.2.0.2.0.2.0.1:$0.1.0.2">
              <li className="cream" data-reactid=".0.3.2.0.2.0.2.0.1:$0.1.0.2.0">{t('reports.iceCream')}</li>
              <li className="yogurt" data-reactid=".0.3.2.0.2.0.2.0.1:$0.1.0.2.1">{t('reports.frozenYogurt')}</li>
              <li className="other" data-reactid=".0.3.2.0.2.0.2.0.1:$0.1.0.2.2">{t('reports.iceCream')}</li>
            </ul>
            <DataTable headers={demograHeaders} bodys={demograBodys}/>
            <DataNotes title={t('others.summaryNotes')} notesDetail={demograNotes} />
        </div>
    )
}
export default FrozenIndustryGraph;