export function rotateArrayClockwise(array: any[]){
  return array[0].map((_, colIndex) => array.map(row => row[colIndex]));
}
