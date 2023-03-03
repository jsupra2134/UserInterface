import React from 'react' // Import react extension
import './LineChart.css'

import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, LineSeries, DateTime, Legend, Tooltip} from '@syncfusion/ej2-react-charts' // Importing the necessary classes for the charts
import { lineCustomSeries, LinePrimaryXAxis, LinePrimaryYAxis} from '../dummy' // Import Data from Js file 'dummy' 

const LineChart = () => {
  return (
    
    <ChartComponent id="line-chart"  width = "500 px" 
    primaryXAxis = {LinePrimaryXAxis} primaryYAxis = {LinePrimaryYAxis} tooltip={{enable: true}}>
      {/* Above this comment is the layout for the charts themselves. X and Y axis labeling as well as tooltip showing some data when
      hovering over datapoints */}

        <Inject services = {[DateTime, LineSeries, Legend, Tooltip]}/>
        {/* Above is how we get the data points from the js file, as well as other things such as legend, tooltip,
        LineSeries (shows the graph lines and points), and DateTime (Specifies the X and Y axis of the graph and prevents crashes) */}
        <SeriesCollectionDirective>
          {/* Now in this section, is how we get the arrays for the data points for the graph */}
            {lineCustomSeries.map((item, index) => <SeriesDirective key={index} {...item}/> )}
        </SeriesCollectionDirective>

    </ChartComponent>


  )
}

export default LineChart