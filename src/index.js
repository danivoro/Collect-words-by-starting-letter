/* 
DESCRIPTION

Write a function `collectByLetter` which takes an input array of lowercase words and which 
should return an object which has the alphabet letters as keys and arrays of the words from 
the input array which start with each letter.

It should only contain keys for starting letters which occurred at least once.

Version 1: Words which occur repeatedly should be repeated in the listing.


FUNCTION SIGNATURE

INPUT: array of lowercase words
OUTPUT: object with alphabet letters as keys and arrays of words as values

 pesudocode:
 create new empty object called countOccurrences
 
 for each Word in input array
 
 if (countOccurrences[CHAR.uppercase()])
     THEN occurrences[CHAR.uppercase()] += 1
  else
       occurrences[CHAR.uppercase()] = 1
 return occurrences

*/


function collectByLetter(inputArr){
    for (let word of inputArr)


}