function even(n) {
  if (n % 2 === 0) {
    console.log("true");
    return "true"
  } else {
    console.log("false");
    return "false";
  }
}

even(6);


function squared(x) {
  console.log(x * x);
  return x * x;
}

squared(3);


function food() {
  let arr = ['Pizza', 'Blueberries', 'Steak'];
  console.log(arr);
  return arr;
}

food();


function menu() {
  var foodPrices = {
      'Pizza': '$10.99',
      'Blueberries': '$2.98',
      'Steak': '$13.99'
    };
   console.log(foodPrices);
  return foodPrices;
}

menu();
