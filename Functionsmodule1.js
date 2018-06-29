var shoppingCart = [20, 15];

function getTotalCost(prices){
  let total = 0;
  for (var i = 0; i < prices.length; i++) {
    total = total + (prices[i]);
  }
  return total;
}

getTotalCost(shoppingCart);
