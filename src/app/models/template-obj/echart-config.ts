import {EChartsOption, graphic} from "echarts";
import {TimeSeriesData} from "../body-data";

export const EChartsLineConfig = {
  title: {
    text: '',
  },
  legend: {
    show: false
  },
  backgroundColor: 'rgba(0,0,0,0)',
  tooltip: {
    trigger: 'axis',
  },
  grid: {
    left: '30px',
    right: '15px',
    bottom: '20px',
    top: '35px'
    // containLabel: false
  },
  dataset: {
    source: [],
    dimensions: [],
  },

  xAxis: {
    type: 'time',
    axisLabel: {
      hideOverlap: true
    }
  },
  yAxis: { min: ''},
  series: [
    {
      //labelLayout: { hideOverlap: true },
      type: 'line',
      smooth: true,
      encode: {
        x: '',
        y: ''
      },
      lineStyle: {
        width: 0
      },
      itemStyle: {
        borderWidth: 0,
        color: '#00ff00'
      },
      areaStyle: {
        opacity: 0.8,
        color: new graphic.LinearGradient(0, 0, 0.8, 1, [
          {
            offset: 1,
            color: '#f82'
          },
          {
            offset: 0.3,
            color: '#93d'
          }
        ])
      },
    }]
} as const;


export function configureEChartLine(title: string, data: TimeSeriesData, dimensions: string[]): EChartsOption{
  let config = JSON.parse(JSON.stringify(EChartsLineConfig)) as EChartsOption;
  config.title!['text'] = title;
  config.yAxis!['min'] = (val) => val.min - Math.floor((val.max - val.min)*0.15);
  config.series!['encode'] = {x: dimensions[0], y: dimensions[1]};
  config.dataset = {source: data as any, dimensions: dimensions};

  return config;
}
