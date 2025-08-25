var a = 50
var b = 60
var c = 50
var d = 40

if(a > b &&  c > d){
    console.log('a is greate than b and c is greaater than d')
}

else{
    console.log('At last one condtion is false')
}

if(a > b || c > d){
    console.log('a is greater than b and c is greater than d')
}

else{
    console.log('At last one condtion is false')
}

var  check= !(a > b)

console.log(check)