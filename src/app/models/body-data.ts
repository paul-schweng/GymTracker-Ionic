export interface BodyData {
  height: number
  weight: number
  bicep: RightLeft
  forearm: RightLeft
  breast: number
  hip: number
  waist: number
  shoulders: number
  leg: RightLeft
}

interface RightLeft {
  right: number
  left: number
}
