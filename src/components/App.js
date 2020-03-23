import React from 'react'
import D3_barchart from './D3_barchart'
import Piechart from './Piechart'

class App extends React.Component {
    render() {
        return (
            <div>
                <D3_barchart data={[2, 4, 2, 6, 10]} cH={300} cW={300} />
                {/* <Piechart x={100} y={100} outerRadius={100} innerRadius={50}
                         data={[{value: 66, label: 'A'},
                                 {value: 34, label: 'B'}]} /> */}
                {/* <Piechart x={100} y={100} outerRadius={100} innerRadius={50} data={[66, 34]} /> */}
                <svg width="200" height="200">
                    <Piechart x={100} y={100} outerRadius={100} innerRadius={0}
                        data={[{ value: 64, label: 'A' },
                        { value: 36, label: 'B' }]} /></svg>
                <svg width="200" height="200">
                    <Piechart x={100} y={100} outerRadius={100} innerRadius={50}
                        data={[{ value: 64, label: 'A' },
                        { value: 36, label: 'B' }]} /></svg>

            </div>
        )
    }
}

export default App