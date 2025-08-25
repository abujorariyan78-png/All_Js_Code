// var i =0
// while (i < 10){
//     console.log( i + ' Ariyan ')
//     i++
    
// }

var isRunnning = true
while (isRunnning){
    var rand= Math.floor(Math.random() * 10 + 1)
    if(rand ==9){
        console.log('winner winner chicken dinner')
    isRunnning = false

    } else{
        console.log('you have got' + rand)
    }
}

