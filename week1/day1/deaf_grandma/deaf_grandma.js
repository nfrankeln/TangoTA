var prompt = require('prompt') ;
function deafGrandma( counter = 0 ) {
var output = 'Grandma is listening...'
prompt.start()
prompt.get( 'askGrandma', function(err,result) {
    if (counter < 3){
        var input = result.askGrandma
        if (input === ''){
            output='WHAT?!'
        }
        else if (input === /[a-z]/.test(input)){
            output='SPEAK UP KID'
        }
        else if (input === "GOODBYE"){
            counter ++
            if (counter == 1){ 
            output= "LEAVING SO SOON?"}
            if (counter == 2){
                output = 'LATER, SKATER'
            }
        }

        else if (input === input.toUpperCase()){
            output="NO, NOT SINCE 1946!"
        }
}
console.log(output)
if (counter < 2 ){
    deafGrandma(counter)
}
})
}

deafGrandma();