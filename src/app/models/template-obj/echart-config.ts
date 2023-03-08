import {EChartsOption, graphic} from "echarts";

export const EChartsLineConfig = {
  title: {
    text: '',
    textStyle: {
      color: '#ffffff'
    }
  },
  legend: {
    show: false
  },
  backgroundColor: 'rgba(0,0,0,0)',
  color: '#ff0000',
  tooltip: {
    trigger: 'axis',
  },
  grid: {
    left: '40px',
    right: '30px',
    bottom: '40px',
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
      labelLayout: { hideOverlap: true },
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


export function configureEChartLine(title: string, data: any[], dimensions: string[]): EChartsOption{
  let config = JSON.parse(JSON.stringify(EChartsLineConfig)) as EChartsOption;
  config.title!['text'] = title;
  config.yAxis!['min'] = (val) => val.min - (val.max - val.min)*0.15;
  config.series!['encode'] = {x: dimensions[0], y: dimensions[1]};
  config.dataset = {source: data, dimensions: dimensions};

  return config;
}
