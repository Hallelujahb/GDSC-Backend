//async/await fetch

async function fetchData(){
    let data= await fetch('https://jsonplaceholder.typicode.com/todos/1')
    let dataJSON= await data.json()
    console.log(dataJSON)
}
fetchData()

//callback hell

function do1(callback){
    console.log("do1 completed.")
    callback()
}
function do2(callback){
    console.log("do2 completed.")
    callback()
}
function do3(callback){
    console.log("do3 completed.")
    callback()
}
function do4(callback){
    console.log("do4 completed.")
    callback()
}
function do5(callback){
    console.log("do5 completed.")
    callback()
}
do1(() => {
    do2(() => {
        do3(() => {
            do4(() => {
                do5(() => {
                    console.log("All done!");
                });
            });
        });
    });
});


//async/await fetch with error handling

async function fetchData1(){
    try{
    let data= await fetch('https://jsonplaceholder.typicode.com/todos/1')
    let dataJSON= await data.json()
        console.log(dataJSON)
    }catch{
        console.error(error)}
}
fetchData1()

//fetching
fetch('https://jsonplaceholder.typicode.com/todos/1')
.then (response=> response.json())
.then(data=> console.log(data))
.catch(error=> console.error(error))
