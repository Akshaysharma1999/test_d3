import React, { Component } from 'react';
import * as d3 from 'd3';
 
class Arc extends Component {
     constructor(props) {
            super(props);
            this.arc = d3.arc();
            this.updateD3(this.props);
        }
 
        // componentWillMount() {
        //     this.updateD3(this.props);
        // }
     
        componentDidUpdate(newProps) {
            this.updateD3(newProps);
        }
     
        updateD3(newProps) {
            this.arc.innerRadius(newProps.innerRadius);
            this.arc.outerRadius(newProps.outerRadius);
        }
 
        render() {
            return (
                <path d={this.arc(this.props.data)}
                      style={{fill: this.props.color}}></path>
            );
        }
}
 
export default Arc;

// class Arc extends Component {
//     constructor(props) {
//         super(props);
//         this.arc = d3.arc();
//     }
//     componentDidMount() {
//         this.updateD3(this.props);
//     }
//     componentDidUpdate(newProps) {
//         this.updateD3(newProps);
//     }
//     updateD3(newProps) {
//         this.arc.innerRadius(newProps.innerRadius);
//         this.arc.outerRadius(newProps.outerRadius);
//     }
//     render() {
//         console.log(this.props)
//         let c1 = this.props.data
//         let fi  = {startAngle:c1.startAngle,endAngle:c1.endAngle,innerRadius:c1.innerRadius,outerRadius:c1.outerRadius}
//         console.log(fi)
//         return (          
//             <path d={this.arc(fi)}
//                   style={{fill: this.props.color}}></path>
//         )
//     }
// }
// export default Arc;