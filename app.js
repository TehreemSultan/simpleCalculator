function calculate(x) {
  var display = document.getElementById("display");
  display.value += x;
}
function result_cal() {
  var display = document.getElementById("display");
  display.value = eval(display.value);
}
function clear_display() {
  var display = document.getElementById("display");
  var n = display.value;
  display.value = "";
}
