import React, { useEffect, useRef } from "react";
import {
    select,
    scaleBand,
    axisBottom,
    stack,
    scan,
    max,
    scaleLinear,
    axisLeft,
    stackOrderAscending
  } from "d3";
  import useResizeObserver from "./useResizeObserver";
  import { useTranslation } from "react-i18next";

const FootHorizonBarChart = () => {
    const { t } = useTranslation();
    const yAxisRef = useRef();
    const barsRef = useRef();
    const wrapperRef = useRef();
    const dimensions = useResizeObserver(wrapperRef);
    const data = [
        {  key:t("locations.university"), value: 9247 },
        { key: t("locations.trainStation"), value: 19432 },
        { key: t("locations.downtown"), value: 14170},
        { key: t("locations.cityMarket"), value: 8582},
        { key: t("locations.beach"), value: 3120},
        { key: t("locations.artsDistrict"), value: 7091},
      ]
    useEffect(()=>{
        const yAxisSvg = select(yAxisRef.current);
        const barsSvg = select(barsRef.current);
        const { width, height } =
          dimensions || wrapperRef.current.getBoundingClientRect();
        const extent = [20000, 0];
        const yScale = scaleBand()
        .domain(data.map((d) => d.key))
        .range([0, data.length * 40])
        .padding(0.9);
        const yAxis = axisLeft(yScale);
    
    yAxisSvg.select(".y-axis")
            .attr("transform", 'translate(10, 0)')
            .attr("height", height).call(yAxis);
    
        // scales
        const xScale = scaleLinear()
        .domain(extent)
        .range([width-100, 0]);
        // axes
        const xAxis = axisBottom(xScale)
        .ticks(5)
        .tickFormat(d => (d/1000 +"k"));
        yAxisSvg
        .select(".x-axis")
        .attr("transform", `translate(10, ${data.length * 40})`)
        .call(xAxis)
        .selectAll("text")
        .style("text-anchor", "end")
        .attr("dx", ".8em")
        // .attr("dy", ".100em")
        // .attr("transform", "rotate(-65)");

        barsSvg
        .attr("height", data.length * 40)
        .attr("transform", 'translate(10, 0)')
        .attr("width", width)
        .selectAll("react")
        .data(data)
        .enter()
        .append("rect")
        .attr("class", "data-bar")
        .attr("y", (d)=>yScale(d.key))
        .attr("x", 0)
        .attr("height", 30)
        .attr("width", d=>xScale(d.value))
        .attr("fill","#3277B3");

        })
    return (
        <div ref={wrapperRef} className="subway-traffic-chart chart">
            <svg viewBox="0 0 487 301" preserveAspectRatio="xMinYMin" ref={yAxisRef} className="contour-chart">
                <g transform="translate(70,0)">
                    <g className="x-axis axis" />
                    <g className="y-axis axis" />
                    <g ref={barsRef} />
                </g>
            </svg>
        </div>
    )
}
export default FootHorizonBarChart;