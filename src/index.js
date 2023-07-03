/* 
DESCRIPTION

Write a function `collectByLetter` which takes an input array of lowercase words and which 
should return an object which has the alphabet letters as keys and arrays of the words from 
the input array which start with each letter.

It should only contain keys for starting letters which occurred at least once.

FUNCTION SIGNATURE

NAME: collectByLetter
INPUT: inputArr - array of lowercase words
OUTPUT: object with alphabet letters as keys and arrays of words as values

pesudocode: 
create new empty object called collectedWords 

for each word in inputArr
    define firstLetter to be equal to word[0]
    IF firstLetter is not an existing key in collectedWords
        THEN create a key:value pair as follows - {firstLetter: empty array}  

    collectedWords[firstLetter].push(word)

    return collectedWords

*/

//Version 1: Words which occur repeatedly should be repeated in the listing.

function collectByLetter(inputArr){
    const collectedWords = {}
    for (const word of inputArr) {
        const firstLetter = word[0];
        if (collectedWords[firstLetter] == undefined) {
            collectedWords[firstLetter] = [];
        }
        
        collectedWords[firstLetter].push(word);
    }
    return collectedWords;
}

// Version 2: Don’t allow duplicates in the returned object.
// A word which occurs repeatedly should occur only once in the returned object’s values.

function collectByLetterNoDuplicates(inputArr){
    const collectedWords = {}
    for (const word of inputArr) {
        const firstLetter = word[0];
        if (collectedWords[firstLetter] == undefined) {
            collectedWords[firstLetter] = [];
        }
        
        const isWordInCollectedWords = collectedWords[firstLetter].includes(word);

        if (!isWordInCollectedWords) {
            collectedWords[firstLetter].push(word);
        }
        
    }
    return collectedWords;
}

export {collectByLetter, collectByLetterNoDuplicates};