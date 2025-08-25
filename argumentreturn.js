function addAll(){
    var sum=0
    for(var i=0;i<arguments.length;i++){
        sum+=arguments[i]
    }
    return sum
}

var result=addAll(1,2,5,10,50,55)
console.log(result)


function persone(name,email){
  return  {
        name:name,
        email:email
    }
}

var p1=persone('Md Abujor Giari', 'mdabujorgifari046@gmail.com')
console.log(p1)