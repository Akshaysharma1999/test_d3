import React, { Component } from 'react'
import * as d3 from 'd3'
class BarChart extends Component {
    componentDidMount() {
        console.log(this.props)
        const data = this.props.data
        this.drawBarChart(data)
    }
    drawBarChart(data) {
        const canvasHeight = this.props.cH
        const canvasWidth = this.props.cW
        const scale = 20
        const svgCanvas = d3.select(this.refs.canvas)
            .append("svg")
            .attr("width", canvasWidth)
            .attr("height", canvasHeight)
            .style("border", "1px solid black")
        svgCanvas.selectAll("rect")
            .data(data).enter()
                .append("rect")
                .attr("width", 40)
                .attr("height", (datapoint) => datapoint * scale)
                .attr("fill", "orange")
                .attr("x", (datapoint, iteration) => iteration * 45)
                .attr("y", (datapoint) => canvasHeight - datapoint * scale)
                svgCanvas.selectAll("text")
                .data(data).enter()
                    .append("text")
                    .attr("x", (dataPoint, i) => i * 45 + 10)
                    .attr("y", (dataPoint, i) => canvasHeight - dataPoint * scale - 10)
                    .text(dataPoint => dataPoint)
        }
    render() { return <div ref="canvas"></div> }
}
export default BarChart