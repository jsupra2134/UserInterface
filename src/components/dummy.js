import React from 'react'
import { FiBarChart,} from 'react-icons/fi';

export const lineChartData = [
    [
      { x: new Date(2013, 0, 1), y: 21 },
      { x: new Date(2014, 0, 1), y: 24 },
      { x: new Date(2015, 0, 1), y: 36 },
      { x: new Date(2016, 0, 1), y: 38 },
      { x: new Date(2017, 0, 1), y: 54 },
      { x: new Date(2018, 0, 1), y: 57 },
      { x: new Date(2019, 0, 1), y: 70 },
    ],
    [
      { x: new Date(2013, 0, 1), y: 28 },
      { x: new Date(2014, 0, 1), y: 44 },
      { x: new Date(2015, 0, 1), y: 48 },
      { x: new Date(2016, 0, 1), y: 50 },
      { x: new Date(2017, 0, 1), y: 66 },
      { x: new Date(2018, 0, 1), y: 78 },
      { x: new Date(2019, 0, 1), y: 84 },
    ],
  
    [
      { x: new Date(2013, 0, 1), y: 10 },
      { x: new Date(2014, 0, 1), y: 20 },
      { x: new Date(2015, 0, 1), y: 30 },
      { x: new Date(2016, 0, 1), y: 39 },
      { x: new Date(2017, 0, 1), y: 50 },
      { x: new Date(2018, 0, 1), y: 70 },
      { x: new Date(2019, 0, 1), y: 100 },
    ],
  ];
export const lineCustomSeries = [
    { dataSource: lineChartData[0],
      xName: 'x',
      yName: 'y',
      name: 'TA-60',
      width: '2',
      marker: { visible: true, width: 10, height: 10 },
      type: 'Line' },
  
    { dataSource: lineChartData[1],
      xName: 'x',
      yName: 'y',
      name: 'TA-59',
      width: '2',
      marker: { visible: true, width: 10, height: 10 },
      type: 'Line' },
  
    { dataSource: lineChartData[2],
      xName: 'x',
      yName: 'y',
      name: 'TA-30',
      width: '2',
      marker: { visible: true, width: 10, height: 10 },
      type: 'Line' },
  
  ];
  export const LinePrimaryXAxis = {
    valueType: 'DateTime',
    labelFormat: 'y',
    intervalType: 'Years',
    edgeLabelPlacement: 'Shift',
    majorGridLines: { width: 0 },
    background: 'white',
  };
  
  export const LinePrimaryYAxis = {
    labelFormat: '{value}',
    rangePadding: 'None',
    minimum: 0,
    maximum: 100,
    interval: 20,
    lineStyle: { width: 0 },
    majorTickLines: { width: 0 },
    minorTickLines: { width: 0 },
  };  
  export const barPrimaryXAxis = {
    valueType: 'Category',
    interval: 1,
    majorGridLines: { width: 0 },
  };
  export const barPrimaryYAxis = {
    majorGridLines: { width: 0 },
    majorTickLines: { width: 0 },
    lineStyle: { width: 0 },
    labelStyle: { color: 'transparent' },
  };
  export const barChartData = [
    [
      { x: 'USA', y: 46 },
      { x: 'GBR', y: 27 },
      { x: 'CHN', y: 26 },
    ],
    [
      { x: 'USA', y: 37 },
      { x: 'GBR', y: 23 },
      { x: 'CHN', y: 18 },
    ],
    [
      { x: 'USA', y: 38 },
      { x: 'GBR', y: 17 },
      { x: 'CHN', y: 26 },
    ],
  ];

  export const barCustomSeries = [
    {
      dataSource: barChartData[0],
      xName: 'x',
      yName: 'y',
      name: 'Gold',
      type: 'Column',
      marker: {
        dataLabel: {
          visible: true,
          position: 'Top',
          font: { fontWeight: '600', color: '#ffffff' },
        },
      },
    },
    {
      dataSource: barChartData[1],
      xName: 'x',
      yName: 'y',
      name: 'Silver',
      type: 'Column',
      marker: {
        dataLabel: {
          visible: true,
          position: 'Top',
          font: { fontWeight: '600', color: '#ffffff' },
        },
      },
    },
    {
      dataSource: barChartData[2],
      xName: 'x',
      yName: 'y',
      name: 'Bronze',
      type: 'Column',
      marker: {
        dataLabel: {
          visible: true,
          position: 'Top',
          font: { fontWeight: '600', color: '#ffffff' },
        },
      },
    },
  ];