import colors from "./colors";
import keys from "./keys";
import React from "react";
import StackedBarChart from "./StackedBarChart";
import { useTranslation } from "react-i18next";

export default function CityDemographic() {
  const { t } = useTranslation();
  const data = [
    {
      key: t("locations.artsDistrict"),
      Children: 30,
      Young_Adults: 17,
      Adults: 21,
      Seniors: 32,
    },
    {
      key: t("locations.beach"),
      Children: 33,
      Young_Adults: 26,
      Adults: 18,
      Seniors: 23,
    },
    {
      key: t("locations.cityMarket"),
      Children: 9,
      Young_Adults: 28,
      Adults: 26,
      Seniors: 37,
    },
    {
      key: t("locations.downtown"),
      Children: 6,
      Young_Adults: 35,
      Adults: 43,
      Seniors: 16,
    },
    {
      key: t("locations.trainStation"),
      Children: 12,
      Young_Adults: 41,
      Adults: 30,
      Seniors: 17,
    },
    {
      key: t("locations.university"),
      Children: 6,
      Young_Adults: 62,
      Adults: 19,
      Seniors: 13,
    }
  ];
    return (
      <div>
        <h5 data-reactid=".0.3.2.0.2.0.2.0.0:$0.1.0.0">{t('reports.demoPerArea')}</h5>
        <StackedBarChart colors={colors} data={data} keys={keys} />
      </div>
    );
  }
  
