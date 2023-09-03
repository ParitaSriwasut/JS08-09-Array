let userDetail = {
  name: "Lily Depp",
  Age: 22,
  country: "Canada",
};

let emptyObj = {};

function checkEmptyObj(obj) {
  for (let prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      return false;
    }
  }
  return true;
}

console.log(checkEmptyObj(userDetail));
console.log(checkEmptyObj(emptyObj));
