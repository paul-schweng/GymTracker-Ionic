import {EChartsOption} from "echarts";
import {configureEChartLine} from "./template-obj/echart-config";

export interface BodyData {
  weight: TimeSeriesData
  breast: TimeSeriesData
  hip: TimeSeriesData
  waist: TimeSeriesData
  shoulders: TimeSeriesData

  bicep: RightLeft
  forearm: RightLeft
  leg: RightLeft
}

interface RightLeft {
  right: TimeSeriesData
  left: TimeSeriesData
}

export type TimeSeriesData = [string, number | null][]




export interface BodyDataEChartOption {
  weight?: EChartsOption
  breast?: EChartsOption
  hip?: EChartsOption
  waist?: EChartsOption
  shoulders?: EChartsOption

  bicep?: RightLeftEChartOption
  forearm?: RightLeftEChartOption
  leg?: RightLeftEChartOption
}

interface RightLeftEChartOption {
  right?: EChartsOption
  left?: EChartsOption
}

export const translationMap = new Map<string, string>([
  ['weight', 'Gewicht'],
  ['bicep', 'Bizeps'],
  ['right', 'rechts'],
  ['left', 'links'],
])

export function bodyDataToEChartOptions(data: BodyData){
  let options: BodyDataEChartOption = {
    breast: undefined,
    hip: undefined,
    shoulders: undefined,
    waist: undefined,
    weight: undefined,
    bicep: {right: undefined, left: undefined},
    forearm: {right: undefined, left: undefined},
    leg: {right: undefined, left: undefined}
  }

  Object.keys(options).forEach(key => {
    if (data.hasOwnProperty(key)) {
      const targetValue = options[key];
      const sourceValue = data[key];
      if (typeof targetValue === 'object' && typeof sourceValue === 'object') {
        bodyDataToEChartOptions(sourceValue);
      } else {
        // let name = translationMap.get
        options[key] = configureEChartLine('TEST', sourceValue, ['timestamp', 'my field']);
      }
    }
  });

  debugger
  return options;

}





