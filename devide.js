/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
function devide(dividend, divisor) {
  let times = 0;
  let negative = false;

  // if(dividend === divisor){
  //     return 1
  // }

  if (dividend < 0 || divisor < 0) {
    negative = true;
  }
  if (dividend < 0 && divisor < 0) {
    negative = false;
  }

  if (Math.abs(divisor) === 1) {
    times = Math.abs(dividend);
  } else {
    while (Math.abs(dividend) >= Math.abs(divisor)) {
      dividend = Math.abs(dividend) - Math.abs(divisor);
      times++;
    }
  }

  if (negative) {
    times = -Math.abs(times);
  }

  if (times < -2147483648) {
    return -2147483648;
  }

  if (times > 2147483647) {
    return 2147483647;
  }
  return times;
}

let dividend = 10;
let divisor = 3;

console.log(devide(dividend, divisor));
