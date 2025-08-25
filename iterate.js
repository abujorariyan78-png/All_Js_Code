var obj={
    x:40,
    y:50,
    z:60,
}

// console.log('x' in obj)
// console.log('a ' in obj)

// for(var i in obj){
//     console.log(i)
//     console.log( i+ ':' + obj[i])
// }


var obj2=obj
obj2.x=50,
obj2.y=200

console.log(obj)
console.log(obj2)