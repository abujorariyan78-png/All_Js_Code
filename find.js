var arr=[4,7,9,10,20,30,60,50]
var find= 50
var isFound = false
for(var i=0; i<arr.length; i++){
    if (arr[i]==find){
        console.log(' fount at index ' +  i)
        isFound = true
        break;
    }
}

if(!isFound){
    console.log(' not fouud data')
}

