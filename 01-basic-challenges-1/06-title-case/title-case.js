function titleCase(str) {
    /*
    let words = str.split(" ");
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].slice(1).toLowerCase();
    }
    return words.join(" ");
    */
   return str.replace(/\b\w/g, (match) => match.toUpperCase());
}

module.exports = titleCase;
