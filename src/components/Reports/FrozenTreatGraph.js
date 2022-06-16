import React, { useEffect, useRef } from "react";
import DataTable from "./DataTable";
import Ptab from "./Ptab";
import {
  select,
  scaleBand,
  axisBottom,
  scale,
  stack,
  max,
  map,
  scaleLinear,
  axisLeft,
  stackOrderAscending,
  csv
} from "d3";
import useResizeObserver from "./useResizeObserver";
import { useTranslation } from "react-i18next";

//grouped bar charts: https://d3-graph-gallery.com/graph/barplot_grouped_basicWide.html
//https://vaibhavkumar-19430.medium.com/how-to-create-a-grouped-bar-chart-in-d3-js-232c54f85894
//这个有动画：https://bl.ocks.org/bricedev/0d95074b6d83a77dc3ad
const FronzenTreatGraph = () => {
  const { t } = useTranslation();
  const yAxisRef = useRef();
  const barsRef = useRef();
  const wrapperRef = useRef();
  const dimensions = useResizeObserver(wrapperRef);
    const demograHeaders = [{
        title: t("others.product"),
        id: 1
      },
      {
        title: t("people.children"),
        id: 2
      },
      {
        title: t("people.young"),
        id: 3
      },
      {
        title: t("people.adults"),
        id: 4
      },
      {
        title: t("people.seniors"),
        id: 5
      },
    ]
      const demograBodys = [
        [{
          title:t("reports.iceCream"),
          id:1
        },
        {
          title:'470',
          id:2
        },
        {
          title:'362',
          id:3
        },
        {
          title:'278',
          id:4
        },
        {
          title:'346',
          id:5
        },
      ], [{
        title:t("reports.frozenYogurt"),
        id:6
      },
      {
        title:'194',
        id:7
      },
      {
        title:'387',
        id:8
      },
      {
        title:'306',
        id:9
      },
      {
        title:'154',
        id:10
      },
    ], [{
      title:t("reports.smoothies"),
      id:11
    },
    {
      title:'135',
      id:12
    },
    {
      title:'221',
      id:13
    },
    {
      title:'243',
      id:14
    },
    {
      title:'132',
      id:15
    },
    ]]
    const tabs = [
        {
            title: t('people.children')+':',
            value: t('people.childrenValue'),
            id: 1
        },
        {
            title: t('people.young')+':',
            value: t('people.youngValue'),
            id: 2
        },
        {
            title: t('people.adults')+':',
            value: t('people.adultsValue')+':',
            id: 3
        },
        {
            title: t('people.seniors')+':',
            value: t('people.seniorsValue')+':',
            id: 4
        },
    ]
    const data = [{
      key: t('people.children'),
      'Ice Cream':470,
      'Frozen Yogurt':194,
      'Smoothies':135
    },
    {
      key: t('people.young'),
      'Ice Cream':362,
      'Frozen Yogurt':387,
      'Smoothies':221
    },
    {
      key: t('people.adults'),
      'Ice Cream':278,
      'Frozen Yogurt':306,
      'Smoothies':243
    },
    {
      key: t('people.seniors'),
      'Ice Cream':346,
      'Frozen Yogurt':154,
      'Smoothies':132
    },
  ]
  const color = {
    'Ice Cream': "#C91E02",
    'Frozen Yogurt': "#4A90E2",
    'Smoothies': "#3277B3",
    };
    useEffect(() => {
      const graphSvg = select(yAxisRef.current);
      const barsSvg = select(barsRef.current);
      const { width, height } =
      dimensions || wrapperRef.current.getBoundingClientRect();
      // scales
      const yScale = scaleLinear()
      .domain([500, 0])
      .range([0,height-100]);

      const yAxis = axisLeft(yScale)
                    .ticks(5);

      graphSvg.select(".y-axis")
      .attr("height", height)
      .call(yAxis);

      const barPadding = .2;

      var x0 = scaleBand()
               .range([0, data.length * 60]).padding(barPadding);
      var x1 = scaleBand();
      const  categoriesNames = data.map(function(d) { return d.key; });
      const rateNames = [t('reports.iceCream'), t('reports.frozenYogurt'),  t('reports.smoothies')];
      x0.domain(categoriesNames);
      x1.domain(rateNames).range([0,x0.bandwidth()]);

      const xAxis = axisBottom(x0).tickSizeOuter(0);
      graphSvg
      .select(".x-axis")
      .attr("transform", `translate(0, ${height-100})`)
      .call(xAxis)
      .selectAll("text")
      .style("text-anchor", "end")
      .attr("transform", "rotate(-65)");

      var model_name = barsSvg.selectAll(".model_name")
                      .data(data)
                      .enter().append("g")
                      .attr("class", "model_name")
                      .attr("transform", d => `translate(${x0(d.key)},0)`);

        model_name.selectAll(".bar .type1")
                  .data(d=>[d])
                  .enter()
                  .append("rect")
                  .attr("class", ".series .type1")
                  .style("fill","#C91E02")
                  .attr("x", d => x1('Ice Cream'))
                  .attr("y", d => yScale(d['Ice Cream']))
                  .attr("width", x1.bandwidth())
                  .attr("height", d => {
                    return height - 100 - yScale(d['Ice Cream'])
              });

              model_name.selectAll(".bar .type2")
              .data(d=>[d])
              .enter()
              .append("rect")
              .attr("class", ".series .type2")
              .style("fill","#4A90E2")
              .attr("x", d => x1('Frozen Yogurt'))
              .attr("y", d => yScale(d['Frozen Yogurt']))
              .attr("width", x1.bandwidth())
              .attr("height", d => {
                return height - 100 - yScale(d['Frozen Yogurt'])
          });

          model_name.selectAll(".bar .type3")
          .data(d=>[d])
          .enter()
          .append("rect")
          .attr("class", ".series .type3")
          .style("fill","#3277B3")
          .attr("x", d => x1('Smoothies'))
          .attr("y", d => yScale(d['Smoothies']))
          .attr("width", x1.bandwidth())
          .attr("height", d => {
            return height - 100 - yScale(d['Smoothies'])
      });
   
    })
    return (
        <div className="frozen-treat-sales-report chart">
            <div className="frozen-treats-chart" ref={wrapperRef} >
              <svg viewBox="0 0 487 301" preserveAspectRatio="xMinYMin" ref={yAxisRef} className="contour-chart">
                <g transform="translate(70,10)">
                  <g className="x-axis axis" />
                  <g className="y-axis axis" />
                  <g ref={barsRef}/>
                </g>
            </svg>
            </div>
            <h5 data-reactid=".0.3.2.0.2.0.2.1.0:$3.1.0.1">{t("others.foodService")}</h5>
            <DataTable headers={demograHeaders} bodys={demograBodys}/>
            <div>
                <h5 data-reactid=".0.3.2.0.2.0.2.1.0:$3.1.0.3.0">{t("others.trendsDemo")}</h5>
                {tabs.map(t=>{
                    return <Ptab title={t.title} value={t.value} id={t.id}/>
                })}
            </div>
            <cite data-reactid=".0.3.2.0.2.0.2.1.0:$3.1.0.4">
                <span data-reactid=".0.3.2.0.2.0.2.1.0:$3.1.0.4.1">{t("others.sources")}</span>
            </cite>
        </div>
    )
}
export default FronzenTreatGraph;