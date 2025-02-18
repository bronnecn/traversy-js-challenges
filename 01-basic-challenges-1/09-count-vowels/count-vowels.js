function countVowels(str) {
    console.log(str);
    const lstr = str.toLowerCase();
    let count = 0; 
    for (let i=0; i<lstr.length; i++) {
        switch(lstr[i]) {
            case 'a': 
            case 'e': 
            case 'i': 
            case 'o':
            case 'u':
            case 'y':
                count++ ; 
        }
    }
    return count; 

}

module.exports = countVowels;
