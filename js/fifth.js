var i = 1;
var sum = 0;

while (i <= 10) {
  sum += i; //sum = sum + 1;
  if (sum > 40) {
    break;
  }
  i++;
}
console.log("sum = ", sum);
