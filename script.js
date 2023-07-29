function calculateMinCost() {
  //your code here
  let ropes = document.getElementById("rope-lengths").value;
    let totalCost = 0;

  // Continue the loop until only one rope remains
  while (ropes.length > 1) {
    ropes.sort((a, b) => a - b); // Sort the ropes in ascending order
    const firstRope = ropes.shift(); // Remove the smallest rope from the front
    const secondRope = ropes.shift(); // Remove the second smallest rope from the front
    const sum = firstRope + secondRope;
    totalCost += sum;
    ropes.push(sum); 

	  
  
}  
	console.log(alert(totalCost);)
}
	
