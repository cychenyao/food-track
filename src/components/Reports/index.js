var data=[{data:[{target:{id:'MED_SURG',name:'Med/Surg'},count:6},{target:{id:'ICU',name:'ICU'},count:5},{target:{id:'SPI_INICU',name:'Spine/INICU'},count:1},{target:{id:'INT',name:'Intermediate'},count:3},{target:{id:'TELE',name:'Tele'},count:1},{target:{id:'SPEC',name:'Specialty'},count:0}],source:'ED'},{data:[{target:{id:'MED_SURG',name:'Med/Surg'},count:5},{target:{id:'ICU',name:'ICU'},count:2},{target:{id:'SPI_INICU',name:'Spine/INICU'},count:4},{target:{id:'INT',name:'Intermediate'},count:0},{target:{id:'TELE',name:'Tele'},count:1},{target:{id:'SPEC',name:'Specialty'},count:0}],source:'PACU'}];

var UNIT_LABEL_WIDTH = 100;
var UNIT_LABEL_HEIGHT = 25;
var GUTTER_WIDTH = 25;

var chartContainer = '.chart-container';
var chartLegendContainer = '.chart-legend-container';

var margins = {
    left: UNIT_LABEL_WIDTH,
    bottom: UNIT_LABEL_HEIGHT,
    right: GUTTER_WIDTH
};

var sizes = {
    width: 500,
    height: 200
};
    
var width = sizes.width - margins.left - margins.right;
var height = sizes.height - margins.bottom;

var series = data.map(function (d) {
        return d.source;
    });

var dataset = data.map(function (d) {
        return d.data.map(function (o, i) {
            // Structure it so that your numeric axis (the stacked amount) is y
            return {
                y: o.count,
                x: o.target.name
            };
        });
    });

d3.layout.stack()(dataset);

var dataset = dataset.map(function (group) {
    return group.map(function (d) {
        // Invert the x and y values, and y0 becomes x0
        return {
            x: d.y,
            y: d.x,
            x0: d.y0
        };
    });
});

var svg = d3.select(chartContainer)
        .append('svg')
        .attr('width', width + margins.left + margins.right)
        .attr('height', height + margins.bottom)
        .append('g')
        .attr('transform', 'translate(' + margins.left + ', 0)');

var units = dataset[0].map(function (d) {
        return d.y;
    });

var yScale = d3.scale.ordinal()
        .domain(units)
        .rangeRoundBands([0, height], .1);

var yAxis = d3.svg.axis()
        .scale(yScale)
        .orient('left');

var xMax = d3.max(dataset, function (group) { 
        var groupMax = d3.max(group, function (d) {
            return d.x + d.x0;
        });
        return groupMax;
    });

var xScale = d3.scale.linear()
        .domain([0, xMax])
        .range([0, width]);

var xAxis = d3.svg.axis()
        .scale(xScale)
        .orient('bottom'); 

var colors = function(i) {
    return i ? '#30A7D6' : '#16557F';
};

var groups = svg.selectAll('g')
        .data(dataset)
        .enter()
        .append('g')
        .style('fill', function (d, i) {
        return colors(i);
    });

groups.selectAll('rect')
        .data(function (d) {return d;})
        .enter()
        .append('rect')
        .attr('x', function (d) {
            return xScale(d.x0);
        })
        .attr('y', function (d, i) {return yScale(d.y);})
        .attr('height', function (d) {return yScale.rangeBand();})
        .attr('width', function (d) {return xScale(d.x);})
        .on('mouseover', function (d) {
            var xPos = parseFloat(d3.select(this).attr('x')) / 2 + width / 2;
            var yPos = parseFloat(d3.select(this).attr('y')) + yScale.rangeBand() / 2;
            d3.select('#tooltip')
                .style('left', xPos + 'px')
                .style('top', yPos + 'px')
                .select('#value')
                .text(d.x);
            d3.select('#tooltip').classed('hidden', false);
        })
        .on('mouseout', function () {
            d3.select('#tooltip').classed('hidden', true);
        });

svg.append('g')
    .attr('class', 'bc-x-axis bc-axis')
    .attr('transform', 'translate(0,' + height + ')')
    .call(xAxis);

svg.append('g')
    .attr('class', 'bc-y-axis bc-axis')
    .call(yAxis);

// Legend
var legendContainer = d3.select(chartLegendContainer)
    .append('div')
    .attr('class', 'bc-legend');

legendContainer
    .append('span')
    .attr('class', 'bc-legend-label')
    .html(series[0]);

series.forEach(function (s, i) {
    legendContainer.append('span')
        .attr('class', 'bc-legend-color')
        .style('background-color', colors(i));
});

legendContainer
    .append('span')
    .attr('class', 'bc-legend-label')
    .html(series[1]);





