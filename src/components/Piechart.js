import React from 'react'
import Arc from './Arc'
import * as d3 from "d3";
import {LabeledArc} from './LabeledArc'
 
class Piechart extends React.Component {
    
   constructor(props) {
            super(props);     
            this.pie = d3.pie()
                         .value((d) => d.value);
            this.colors = d3.scaleOrdinal(d3.schemeCategory10);
    }
 
    arcGenerator=(d, i)=>{
        return (
            <LabeledArc key={`arc-${i}`}
                        data={d}
                        innerRadius={this.props.innerRadius}
                        outerRadius={this.props.outerRadius}
                        color={this.colors(i)} />
        )
    }
 
    render() {
        let pie = this.pie(this.props.data),
            translate = `translate(${this.props.x}, ${this.props.y})`;
 
        return (
            <g transform={translate}>
                {pie.map((d, i) => this.arcGenerator(d, i))}
            </g>
        )
    }
}
 
export default Piechart;

// // import {PieChart} from 'react-d3-components'

// class Piechart extends React.Component
// {
//    constructor(props)
//    {
//     super(props)
//     this.pie = d3.pie()
//                  .value((d)=>d.value);
//     this.colors = d3.scaleOrdinal(d3.schemeCategory10);
//    }
//    arcGenerator= (d, i)=>{
//     return (
//         <g>
//         <Arc key ={i} data={d} innerRadius={this.props.innerRadius} outerRadius={this.props.outerRadius} color={this.colors(i)} />
//         </g>
//     )
//     }
//     render() {
//         console.log(this.props.data)
//         let pie = this.pie(this.props.data),
//             translate = `translate(${this.props.x}, ${this.props.y})`;
//         return (
//             <svg  transform={translate}>
//                 {pie.map((d, i) => this.arcGenerator(d, i))}
//             </svg>  
//        )
//     }
// }
// export default Piechart