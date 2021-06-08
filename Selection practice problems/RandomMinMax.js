let maxNo = Math.floor(100 +(Math.random() * 10) % 900);
let minNo = maxNo;
 
i = 0;
while( i <= 5){
randomNo = Math.floor(100 +(Math.random() * 10) % 900);
if( maxNo < randomNo){
    maxNo = randomNo;
}
if( minNo > randomNo){
    minNo = randomNo;
}
i++;
}
console.log("Maximum number "+ maxNo);
console.log("Minimum number "+ minNo);