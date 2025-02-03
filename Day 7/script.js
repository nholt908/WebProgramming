//Get elements

let output = document.getElementById("output");

//Arrow function

document.getElementById("arrowButton").addEventListener("click", () =>{
    const greet = name => 'Hello, ' + name + '!';
    output.textContent = greet("Student");
});

//Promise Example

document.getElementById("promiseButton").addEventListener("click", () =>{
    function fetchData(){
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                resolve("Data fetched using Promise!")
            }, 2000);
        });
    }

    fetchData().then(response =>{
        output.textContent = response;
    });
});

//Async/Await

document.getElementById("asyncButton").addEventListener("click", async() =>{
    function fetchData(){
        return new Promise((resolve) =>{
            setTimeout(() =>{
                resolve("Data fetched using Async/Await!");
            }, 2000);
        });
    }
    let response = await fetchData();
    output.textContent = response;
})