import {EChartsOption} from "echarts";
import {configureEChartLine} from "./template-obj/echart-config";
import * as date from 'date-fns';

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

  bicep: RightLeftEChartOption
  forearm: RightLeftEChartOption
  leg: RightLeftEChartOption
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
  ['breast', 'Brust'],
  ['hip', 'Hüfte'],
  ['waist', 'Taille'],
  ['shoulders', 'Schultern'],
  ['forearm', 'Unterarm'],
  ['leg', 'Bein'],
])

export function bodyDataToEChartOptions(data: BodyData, name = '', options: any = {...data}){

  Object.keys(data).forEach(key => {
    if (data.hasOwnProperty(key)) {
      const sourceValue = data[key];
      // console.log(sourceValue)

      if (typeof sourceValue === 'object' && !Array.isArray(sourceValue)) {
        bodyDataToEChartOptions(sourceValue, key, options[key]);
      } else {
        let title = name ? translationMap.get(name) + ' ' + translationMap.get(key) : translationMap.get(key);
        let chartTitle = sourceValue.length > 0 && title ? title : 'Oops, das hat nicht funktioniert';
        options[key] = configureEChartLine(chartTitle,
          sourceValue,
          ['timestamp', title ?? 'Error']);
      }
    }
  });

  return options;
}

export function rawBodyDataToBodyData(data, bodyData?){
  if(!bodyData){
    bodyData = structuredClone(data);
  }

  Object.keys(data).forEach(key => {
    if (data.hasOwnProperty(key)) {
      const sourceValue = data[key];
      // console.log(sourceValue)

      if (typeof sourceValue === 'object' && !Array.isArray(sourceValue)) {
        rawBodyDataToBodyData(sourceValue, bodyData[key]);
      } else {
        if(!sourceValue || sourceValue < 0 || typeof sourceValue != 'string'){
          console.log('inside error')
          throw new Error()
        }

        bodyData[key] = [parseFloat(sourceValue)];
      }
    }
  });

  return bodyData;
}





