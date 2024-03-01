function solve(area, vol, input) {
  let objects = JSON.parse(input);
  //   console.log(objects);
  function calc(obj) {
    let areaObj = Math.abs(area.call(obj));
    let volumeObj = Math.abs(vol.call(obj));
    return { area: areaObj, volume: volumeObj };
  }
  return objects.map(calc);
}
const obj = `[
{"x":"1","y":"2","z":"10"},
{"x":"7","y":"7","z":"10"},
{"x":"5","y":"2","z":"10"}
]`;
// const obj = `[
// {"x":"10","y":"-22","z":"10"},
// {"x":"47","y":"7","z":"-5"},
// {"x":"55","y":"8","z":"0"},
// {"x":"100","y":"100","z":"100"},
// {"x":"55","y":"80","z":"250"}
// ]`;
const results = solve(area, vol, obj);
// const results = solve(area, vol, obj);
console.log(results);

function area() {
  return Math.abs(this.x * this.y);
}
function vol() {
  return Math.abs(this.x * this.y * this.z);
}
