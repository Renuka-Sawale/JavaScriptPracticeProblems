var sum = 0;
for(i=1; i<5;i++) {
	var v = Math.floor(((Math.random() * 100)/2) + 10);
	sum = sum + v;
}
console.log("The sum of 5 random no's are: " + sum);  
console.log("Average of 5 random no's are: " + sum/5);
