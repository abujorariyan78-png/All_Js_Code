function test (n){
    function a(){
        return n%3===0
    }

    function b(){
        return n%3===0
    }

    if(a() && b()){
        console.log( 'n' + ' is Division number of 3 and 5')
    }

    else{
        console.log('Not a valid number')
    }
}

test(60)