var a='abc'
// if(true){
//     if(true ){
//         var b='iam b'
//     }
// }

// console.log(b)

function x(){
    var a=20
    function y(){
        var a=10
        console.log(a)
    }
    console.log(a)
    y()
}

x()




