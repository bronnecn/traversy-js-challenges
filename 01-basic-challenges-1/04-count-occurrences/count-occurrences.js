function countOccurrences(str, char) {

    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            count++;
        }
    }
    return count;

}


function countOccurrences2(str, char) {
    
    let tokens = str.split(char);
    console.log(tokens);

    return tokens.length -1 ;
}
module.exports = countOccurrences;
