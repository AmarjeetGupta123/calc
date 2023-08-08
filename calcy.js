var result = document.getElementById("result");
function numeric(number){
    result.value += number;
}

function calculation(){
    var final_number = result.value;
    var final_result = eval(final_number);
    result.value=final_result;
}
function clearc(){
    result.value="";
}
function dele(){
    result.value=result.value.slice(0,-1);
}