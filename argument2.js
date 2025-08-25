// function add(a,b){
//     result=a+b
//     console.log(result)
// }

// add(10,10,)
// add(100,100)
// add(500,500)




// var arr1=[20,50,30]
// var arr2=[50,60,70]
// var arr3=[100,50,70]

  
// function Sumarray(arr){
//   var  sum=0
//     for(var i=0;i<arr.length; i++){
//         sum+=arr[i]
//     }

// }console.log(sum)

// Sumarray(arr1)

function addAll(){
    var sum=0
    for(var i=0; i<arguments.length;i++){
        sum+=arguments[i]
    }console.log(sum)
}

addAll(1,2,3)

addAll(1,2,3,4,5,6,7,8,9,10)

