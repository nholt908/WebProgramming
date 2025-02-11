function vowelCount(text){
    let count = 0;
    let vowels = "aeiouAEIOU";

    for (let char of text){
        if (vowels.includes(char))
            count++;
    }

    return count;
}

console.log(vowelCount("Hello"));
console.log(vowelCount("Tacocat"));