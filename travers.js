// var arr=[0,1,2,6,4,8,9]

// for (var i=0; i<arr.length; i++){
//     console.log(arr[i])
//     arr[i]= arr[i] + 1
   

// }
//  console.log(arr)
var arr=[0,1,2,6,4,8,9]

var sum = 0
for(var i=0; i <arr.length; i++){
    sum += arr[i]

   
}
console.log(sum)



 for(var i=0; i<arr.length;i++){
    if(arr[i] % 2==0){
        console.log(arr[i] +' is even number')
    }else{
        console.log(arr [i] + ' is odd number')
    }
 }


