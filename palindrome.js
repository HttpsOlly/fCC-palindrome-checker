function palindrome (phrase) {
    const alphanumeric = phrase.toLowerCase().match(/[a-z0-9]/g);

    return alphanumeric.join("") === alphanumeric.reverse().join("");
}

console.log(palindrome("_e ye"))
