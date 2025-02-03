//Simulate an API call

function fetchData(){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            let success = true;
            if(success){
                resolve("Data has been fetched successfully!")
            } else{
                reject("Error: Failed to fetch data.")
            }
        }, 2000);
    });
}

//Using .then() to handle the resolved value

fetchData()
.then(response => {
    console.log(response);
})
.catch(error => {
    console.error(error);
})