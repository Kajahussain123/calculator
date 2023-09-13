function displayData(data){
    result.value+=data
}
function allClear(){
    result.value=""
}
function findOut(){
    result.value=eval(result.value)
}
function backspace(){
    result.value=result.value.slice(0,-1)
}