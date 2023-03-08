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


