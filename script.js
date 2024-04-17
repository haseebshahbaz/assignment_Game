// Question # 12

function capitalizeEachWord(str) {
    // Split the string into an array of words
    let words = str.split(' ');
  
    // Capitalize the first letter of each word
    let capitalizedWords = words.map(word => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    });
  
    // Join the capitalized words back into a string
    let capitalizedStr = capitalizedWords.join(' ');
  
    return capitalizedStr;
  }
  
  // Example usage
  let inputString = "my name is haseeb" ;
  let capitalizedString = capitalizeEachWord(inputString);
  console.log(capitalizedString); // Output: "Hello World"
  