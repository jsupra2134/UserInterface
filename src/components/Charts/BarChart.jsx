import React from 'react'
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, DataLabel, ColumnSeries, Category, Legend, Tooltip} from '@syncfusion/ej2-react-charts' // Importing the necessary classes for the charts
import { barCustomSeries, barPrimaryXAxis, barPrimaryYAxis} from '../dummy' // Import Data from Js file 'dummy' 

const BarChart = () => {
  return (
    <ChartComponent id = "chart" primaryXAxis = {barPrimaryXAxis} primaryYAxis = {barPrimaryYAxis} tooltip = {{enable: true}}>
        <Inject services = {[Category, DataLabel, Legend, Tooltip, ColumnSeries]}/>
        <SeriesCollectionDirective>
            {barCustomSeries.map((item, index) => <SeriesDirective key={index}{...item}/>)}
        </SeriesCollectionDirective>
    </ChartComponent>
  )
}

export default BarChart