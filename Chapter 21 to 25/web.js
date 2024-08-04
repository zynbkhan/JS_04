//Question 1
var firstName = prompt("Please enter your first name:");
var lastName = prompt("Please enter your last name:");
var fullName = firstName + " " + lastName;
document.write("Hello, " + fullName + "!<br>");


//Question 2
var mobileModel = prompt("Please enter your favorite mobile phone model:");
var inputLength = mobileModel.length;
document.write("Your favorite mobile phone model is: " + mobileModel + "<br>");
document.write("The length of your input is: " + inputLength + " characters." + "<br>");


//Question 3
var word = "Pakistani";
var indexOfN = word.indexOf("n");
document.write("The index of the letter 'n' in the word 'Pakistani' is: " + indexOfN + "<br>");

//Question 4 
var phrase = "Hello World";
var lastIndexOfL = phrase.lastIndexOf("l");
document.write("The last index of the letter 'l' in the phrase 'Hello World' is: " + lastIndexOfL + "<br>");


//Question 5 
var word = "Pakistani";
var characterAtIndex3 = word.charAt(3);
document.write("The character at the 3rd index in the word 'Pakistani' is: " + characterAtIndex3 + "<br>");


//Question 6 
var firstName = prompt("Please enter your first name:");
var lastName = prompt("Please enter your last name:");
var fullName = firstName.concat(" ", lastName);
document.write("Hello, " + fullName + "!" + "<br>");


//Question 7
var city = "Hyderabad";
var newCity = city.replace("Hyder", "Islam");
document.write("City: Hyderabad" + "<br>")
document.write("After replacement word is: " + newCity + "<br>");


//Question 8
var message = "Ali and Sami are best friends. They play cricket and football together.";
var updatedMessage = message.replace(/and/g, "&");
document.write("Original Message: " + message + "<br>");
document.write("Updated Message: " + updatedMessage + "<br>");


//Question 9
var str = "472";
var num = Number(str);
document.write("String Value: " + str + "<br>");
document.write("Type of String Value: " + typeof str + "<br>");
document.write("Number Value: " + num + "<br>");
document.write("Type: " + typeof num + "<br>");


//Question 10
 var userInput = prompt("Enter your favourite fruit:");
 var uppercaseInput = userInput.toUpperCase();
 document.write("Original Input: " + userInput + "<br>");
 document.write("Uppercase Result: " + uppercaseInput + "<br>");


 //Question 11
var userInput = prompt("Enter text:");
var titleCaseInput = userInput
    .toLowerCase()
    .split(' ')
    .map(function(word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(' ');
document.write("Original Input: " + userInput + "<br>");
document.write("Title Case Result: " + titleCaseInput + "<br>");


//Question 12
var num = 35.36;
var numStr = num.toString();
var resultStr = numStr.replace('.', '');
document.write("Original Number: " + num + "<br>");
document.write("Result: " + resultStr + "<br>");


//Question 13
function isValidUsername(username) {
 var invalidSymbols = ['@', '.', ',', '!'];
for (var i = 0; i < invalidSymbols.length; i++) {
        if (username.indexOf(invalidSymbols[i]) !== -1) {
            return false;
        }
    }
    return true;
}
var username = prompt("Enter your username:");
if (isValidUsername(username)) {
    document.write("Username is valid: " + username + "<br>");
} else {
    alert("Username contains invalid characters. Please enter a valid username.");
}


//Question 14
var items = ["cake", "apple pie", "cookie", "chips", "patties"];
var searchItem = prompt("Welcome sir/mam! What would you like from our bakery?");
var searchItemLower = searchItem.toLowerCase();
function searchInArray(arr, item) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].toLowerCase() === item) {
            return i;  
        }
    }
    return -1; 
}
var index = searchInArray(items, searchItemLower);
if (index !== -1) {
document.write("The item '" + searchItem + "' is available in our bakery at index " + index + ".<br>");
} else {
    alert("Sorry, we don't have '" + searchItem + "' in our bakery.");
}


//Question 15
 function validatePassword(password) {
    if (password.length < 6) {
        return false;
    }
    if (/^\d/.test(password)) {
        return false;
    }
    var hasLetter = /[a-zA-Z]/.test(password);
    var hasNumber = /\d/.test(password);

    return hasLetter && hasNumber;
}
var password = prompt("Enter your password:");
if (validatePassword(password)) {
    document.write("Password is valid.<br>");
} else {
    alert("Invalid password. Please make sure your password meets the following requirements:\n" +
          "- Contains both alphabets and numbers\n" +
          "- Does not start with a number\n" +
          "- Is at least 6 characters long");
}


//Question 16
var university = "University of Karachi";
var universityArray = university.split('');
document.write("Array elements:<br>");
for (var i = 0; i < universityArray.length; i++) {
    document.write(universityArray[i] + "<br>");
}


//Question 17
var userInput = prompt("Enter a string:");
 if (userInput.length > 0) {
     var lastCharacter = userInput.charAt(userInput.length - 1);
     document.write("User Input:" + userInput + "<br>")
     document.write("The last character of your input is: " + lastCharacter + "<br>");
 } else {
     document.write("No input provided.<br>");
 }


 //Question 18
 var text = "The quick brown fox jumps over the lazy dog";
 var lowerText = text.toLowerCase();
 var words = lowerText.split(' ');
 var count = 0;
  for (var i = 0; i < words.length; i++) {
      if (words[i] === "the") {
          count++;
      }
  }
  document.write("Text: The quick brown fox jumps over the lazy dog" + "<br>");
  document.write("The word 'the' occurs " + count + " times in the given string.<br>");