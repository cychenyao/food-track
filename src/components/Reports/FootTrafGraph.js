import DataTable from "./DataTable";
import DataNotes from "./DataNotes";
import FootHorizonBarChart from "./FootHorizonBarChart";
import { useTranslation } from "react-i18next";

const FootTrafGraph = () => {
  const { t } = useTranslation();
    const demograHeaders = [];
    const demograBodys = [
        [{
          title:t("locations.artsDistrict"),
          id:1
        },
        {
          title:'5',
          id:2
        },
        {
          title:'7,091',
          id:3
        },
        {
          title:t("footTraf.yellow"),
          id:4
        }
      ], [{
        title:t("locations.beach"),
        id:6
      },
      {
        title:'6',
        id:7
      },
      {
        title:'3,120',
        id:8
      },
      {
        title:t("footTraf.blue"),
        id:9
      }
    ], [{
      title:t("locations.cityMarket"),
      id:11
    },
    {
      title:'4',
      id:12
    },
    {
      title:'8,582',
      id:13
    },
    {
      title:t("footTraf.yellow"),
      id:14
    }
    ], [{
      title:t("locations.downtown"),
      id:16
    },
    {
      title:'2',
      id:17
    },
    {
      title:'14,170',
      id:18
    },
    {
      title:t("footTraf.blue")+', '+t("footTraf.yellow"),
      id:19
    }
    ], [{
      title:t("locations.trainStation"),
      id:21
    },
    {
      title:'1',
      id:22
    },
    {
      title:'19,432',
      id:23
    },
    {
      title:t("footTraf.yellow")+', '+t("footTraf.green"),
      id:24
    }
    ], [{
      title:t("locations.university"),
      id:26
    },
    {
      title:'3',
      id:27
    },
    {
      title:'9,247',
      id:28
    },
    {
      title:t("footTraf.blue"),
      id:29
    }
    ],
      ]
      const demograNotes = [
      ];
      const demograCite = t("footTraf.source");
    return (
        <div className="subway-traffic-report">
            <FootHorizonBarChart />
            <h5 data-reactid=".0.3.2.0.2.0.2.0.1:$2.1.0.1">{t("footTraf.tableTitle")}</h5>
            <DataTable headers={demograHeaders} bodys={demograBodys}/>
            <DataNotes title='' notesDetail={demograNotes} cite={demograCite}/>
        </div>
    )
}
export default FootTrafGraph;