function something (greet,name){
    function getFirstName(){
        if(name){
            return name.split(' ')[0]
        }else{
            return ' '
        }

    }
    var massage= greet+ ' ' + getFirstName()
    console.log(massage)
}


something('Good Morning', 'Ariyan Xhowdhury')