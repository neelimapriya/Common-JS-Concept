function greeting(greetingHandler, name){
    greetingHandler(name);
}

function greetingHandler(name){
    console.log('Good Morning', name)
}

function greetEvening(name){
    console.log('Good Evening', name)
}

function greetNight(name){
    console.log('Good Night', name)
}
greeting(greetingHandler, 'Tom Hanks');
greeting(greetingHandler, 'Tom Brady');
greeting(greetEvening, 'Tom cruise');
greeting(greetNight, 'Tom solaiman');
// greeting(greetingHandler, 'Tom Brady');

function submitHandler(){
    console.log('submit button clicked')
}
document.getElementById('btn-submit').addEventListener('click',submitHandler)

