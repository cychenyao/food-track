import React, { useEffect, useRef } from "react";
import {
  select,
  scaleBand,
  axisBottom,
  stack,
  max,
  scaleLinear,
  axisLeft,
  stackOrderAscending
} from "d3";
import useResizeObserver from "./useResizeObserver";
import DataTable from "./DataTable";
import DataNotes from "./DataNotes";
import { useTranslation } from "react-i18next";

/**
 * Component that renders a StackedBarChart
 * Horizontal Stacked Bar: https://codepen.io/goodforenergy/pen/PNPxxv
 * D3-React Stacked Barchart:https://codesandbox.io/s/hnyre?file=/src/StackedBarChart.js
 */

function StackedBarChart({ data, keys, colors }) {
  const { t } = useTranslation();
  const yAxisRef = useRef();
  const barsRef = useRef();
  const wrapperRef = useRef();
  const dimensions = useResizeObserver(wrapperRef);
  const demograHeaders = [{
    title: t("makeDecisions.location"),
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
      title: t('locations.artsDistrict'),
      id:1
    },
    {
      title:'30%',
      id:2
    },
    {
      title:'17%',
      id:3
    },
    {
      title:'21%',
      id:4
    },
    {
      title:'32%',
      id:5
    },
  ], [{
    title:t('locations.beach'),
    id:6
  },
  {
    title:'33%',
    id:7
  },
  {
    title:'26%',
    id:8
  },
  {
    title:'18%',
    id:9
  },
  {
    title:'23%',
    id:10
  },
], [{
  title:t('locations.cityMarket'),
  id:11
},
{
  title:'9%',
  id:12
},
{
  title:'28%',
  id:13
},
{
  title:'26%',
  id:14
},
{
  title:'37%',
  id:15
},
], [{
  title:t('locations.downtown'),
  id:16
},
{
  title:'6%',
  id:17
},
{
  title:'35%',
  id:18
},
{
  title:'43%',
  id:19
},
{
  title:'16%',
  id:20
},
], [{
  title:t('locations.trainStation'),
  id:21
},
{
  title:'12%',
  id:22
},
{
  title:'41%',
  id:23
},
{
  title:'30%',
  id:24
},
{
  title:'17%',
  id:25
},
], [{
  title:t('locations.university'),
  id:26
},
{
  title:'6%',
  id:27
},
{
  title:'62%',
  id:28
},
{
  title:'19%',
  id:29
},
{
  title:'13%',
  id:30
},
],
  ]
  const demograNotes = [
    {
      title: t('demograNotes.d1'),
      id:1
    },
    {
      title: t('demograNotes.d2'),
      id:2
    },
    {
      title: t('demograNotes.d3'),
      id:3
    },
    {
      title: t('demograNotes.d4'),
      id:4
    },
  ];
  const demograCite = t('demograNotes.demograCite');
  // will be called initially and on every data change
  useEffect(() => {
    const yAxisSvg = select(yAxisRef.current);
    const barsSvg = select(barsRef.current);
    const { width, height } =
      dimensions || wrapperRef.current.getBoundingClientRect();

    // stacks / layers
    // Create the stack and group it so that the smallest values are on the bottom
    const stackGenerator = stack().keys(keys);
    const layers = stackGenerator(data);


    // This is our min/max values
    const extent = [
      max(layers, (layer) => max(layer, (sequence) => sequence[1])),
      0
    ];
    // scales
    const xScale = scaleLinear()
    .domain(extent)
    .range([width-100, 0]);

    const yScale = scaleBand()
      .domain(data.map((d) => d.key))
      .range([0, data.length * 40])
      .padding(0.9);

      barsSvg
      .attr("height", data.length * 40)
      .attr("transform", 'translate(10, 0)')
      .attr("width", width)
      .selectAll(".layer")
      .data(layers)
      .join("g")
      .attr("class", "layer")
      .attr("fill", (layer) => colors[layer.key])
      .selectAll("rect")
      .data((layer) => layer)
      .join("rect")
      .attr("class", "data-bar")
      .attr("y", (sequence) => yScale(sequence.data.key))
      .attr("x", (sequence) => xScale(sequence[0]))
      .attr("height", 30)
      .attr("width", (sequence) => {
        if (!isNaN(sequence[0]) && !isNaN(sequence[1])) {
          return xScale(sequence[1]) - xScale(sequence[0]);
        } else {
          return 0;
        }
      });

    // axes
    const xAxis = axisBottom(xScale)
                  .ticks(5)
                  .tickFormat(d => (d +"%"));;
    yAxisSvg
      .select(".x-axis")
      .attr("transform", `translate(10, ${data.length * 40})`)
      .call(xAxis)
      .selectAll("text")
      .style("text-anchor", "end")
      .attr("dx", ".8em")
      // .attr("dy", ".100em")
      // .attr("transform", "rotate(-65)");

    const yAxis = axisLeft(yScale);
    
    yAxisSvg.select(".y-axis")
            .attr("transform", 'translate(10, 0)')
            .attr("height", height).call(yAxis);
    
  }, [colors, data, dimensions, keys]);

  return (
    <React.Fragment>
      <div ref={wrapperRef} className="demographics-chart" >
          <svg viewBox="0 0 487 301" preserveAspectRatio="xMinYMin" ref={yAxisRef} className="contour-chart">
            <g transform="translate(70,0)">
              <g className="x-axis axis" />
              <g className="y-axis axis" />
              <g ref={barsRef}/>
            </g>
          </svg>
      </div>
      <h5 data-reactid=".0.3.2.0.2.0.2.0.0:$0.1.0.2">{t('reports.demoPerAreaAge')}</h5>
      <DataTable headers={demograHeaders} bodys={demograBodys}/>
      <DataNotes title={t('others.summaryNotes')} notesDetail={demograNotes} cite={demograCite}/>
    </React.Fragment>
  );
}

export default StackedBarChart;
