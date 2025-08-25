// function add( a , b){
//     result= a+b
//     console.log(result)
// }

// add(10,20)
// add(50,50)



// function sub(a, b){
//     result2= a-b
//     console.log(result2)
// }


// sub(50,10)


var arr1=[ 2, 5 , 9]
var arr2=[10, 20, 30]
var arr3=[40 ,50,60,70]
var arr4= [10,50,60,70,]


function sumArray(arr){
    var sum=0
    for(var i=0;i<arr.length; i++){
        sum+=arr[i]

    }console.log(sum)
}

sumArray(arr1)
sumArray(arr2)
sumArray(arr3)
sumArray(arr4)