let arr = ["a", "b"];

arr.push(function () {
  alert(this);
}); // arr = [a,b,function()alert this]

arr[2](); // alert array[2] : function
