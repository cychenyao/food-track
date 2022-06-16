//bar chart tooltip: http://bl.ocks.org/caged/6476579
import React, { useEffect, useRef } from "react";
import {event as currentEvent} from 'd3-selection';
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

const RevenueChart = (props) => {
    const { t } = useTranslation();
    const yAxisRef = useRef();
    const barsRef = useRef();
    const wrapperRef = useRef();
    const dimensions = useResizeObserver(wrapperRef);
    useEffect(() => {
        const data = props.dailyValues;
        const graphSvg = select(yAxisRef.current);
        const barsSvg = select(barsRef.current);
        barsSvg.selectAll("*").remove();
        const { width, height } =
        dimensions || wrapperRef.current.getBoundingClientRect();
         // scales
         console.log('max:'+max(data,d => d.value));
         const maxValue = max(data,d => d.value) === 0 ? 1000 : max(data,d => d.value);
        const yScale = scaleLinear()
                        .domain([maxValue,0])
                        .range([0,height-100]);
        const yAxis = axisLeft(yScale)
                     .ticks(5)
                     .tickFormat(d => (d/1000 +"k"));

        graphSvg.select(".y-axis")
        .attr("height", height-100)
        .call(yAxis);

        var xScale = scaleLinear()
                .range([0, width-10])
                .domain([0, 25]);
        const xAxis = axisBottom(xScale).tickSizeOuter(0);
        graphSvg
        .select(".x-axis")
        .attr("transform", `translate(0, ${height-100})`)
        .call(xAxis)
        .selectAll("text")
        .style("text-anchor", "end");

        var tooltip = graphSvg.select(".series").append("div").attr("class", "toolTip");

        barsSvg
        .attr("height", height-100)
        // .attr("transform", 'translate(0, 0)')
        .attr("width", width-10)
        .selectAll("react")
        .data(data)
        .enter()
        .append("rect")
        .attr("class", "data-bar")
        .attr("fill",(d)=>{
            switch(d.menu){
                case 'iceCream':
                    return '#C91E02';
                case 'frozenYogurt':
                    return '#4A90E2';
                case 'smoothies':
                    return '#3277B3';
                default:
                    return 'purple';
            }
        })
        .attr("x", d=>xScale(d.id))
        .attr("width", 15)
        .attr("y", d=>yScale(d.value))
        .attr("height", d=>{
            return height -  100 - yScale(d.value)
        })
        .on("mousemove", d=>{
            tooltip
              .style("display", "inline-block")
              .html('aa');
        })
        .on("mouseout", function(d){ tooltip.style("display", "none");});

    })
    return (

        <div>
            <div className="revenue-title" data-reactid=".0.3.2.0.2.0.2.0.0.1.0.0">{t('reports.daily')}</div>
            <div className="revenue-by-day-chart" aria-hidden="true"  ref={wrapperRef}>
                <svg viewBox="0 0 487 301" preserveAspectRatio="xMinYMin" ref={yAxisRef} className="contour-chart">
                    <g transform="translate(30,10)">
                        <g className="x-axis axis" />
                        <g className="y-axis axis"  />
                        <g ref={barsRef} className="series"/>
                    </g>  
                </svg>
            </div>
        </div>
    )
}
export default RevenueChart;