function formatNames(arr) {
    let formattedNames = [];
    
    for (let i = 0; i < arr.length; i++) {
        let name = arr[i];
        let capitalized = name.charAt(0).toUpperCase() + name.slice(1);
        formattedNames.push(capitalized);
    }
    
    return formattedNames.join(", ");
}

console.log(formatNames(["alice", "bob", "charlie"])); 
// Output: "Alice, Bob, Charlie"