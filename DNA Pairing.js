//DNA Pairing
//Pairs of DNA strands consist of nucleobase pairs. 
//Base pairs are represented by the characters AT and CG, 
//which form building blocks of the DNA double helix.

//The DNA strand is missing the pairing element. 
//Write a function to match the missing base pairs for the provided DNA strand. 
//For each character in the provided string, find the base pair character. 
//Return the results as a 2d array.

function pairElement(str) {
  let couples= {
    A:"T",
    T:"A",
    G:"C",
    C:"G"
  };
 // let arr=str.split("");
//  return arr.map(a=>[a,couples.a]);
  return str.split("").map(a=>[a,couples[a]]);

}