var arr = [4,5,70,42,60,30,10,20,15,5]

// for(var i=0;i<arr.length; i++){
//     arr[i]=arr[i] - 2
// }console.log(arr)




// var sum=0

// for(var i=0;i<arr.length;i++){
//     sum+= arr[i]
// }console.log(sum)

// for(var i=0;i<arr.length;i++){
//     if(arr[i]%2===0){
//         console.log(arr[i] +' is even number')
//     }
// }

var sum=0
for(var i=0; i<arr.length;i++){
    if(arr[i]%2!==0){
        console.log(arr[i] + ' is odd number')
    } sum+= arr[i]%2!==0
}console.log(sum)