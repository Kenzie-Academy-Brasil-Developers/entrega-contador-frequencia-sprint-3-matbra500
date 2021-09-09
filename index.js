const button = document.getElementById("countButton");
button.addEventListener("click", function() {  
   
   let typedText = document.getElementById('textInput').value
   
   const letterCounts = {}
   typedText = typedText.toLowerCase()
   typedText = typedText.replace(/[^a-z'\s]+/g, "")
   for (let i = 0; i < typedText.length; i++) {
      let currentLetter = typedText[i];
      if (letterCounts[currentLetter] === undefined) {
         letterCounts[currentLetter] = 1; 
      } else { 
         letterCounts[currentLetter]++; 
      }
      
   }
   for (let letter in letterCounts) { 
      const span = document.createElement("span"); 
      const textContent = `"${letter}": ${letterCounts[letter]}, `;
      span.innerText = textContent; 
      const letters = document.getElementById("lettersDiv");
      letters.appendChild(span); 
   }
   let words = typedText.split(/\s/);
   const wordCounts = {}
   for (let j = 0; j < words.length; j++) {
      let currentWord = words[j];
      if (wordCounts[currentWord] === undefined) {
         wordCounts[currentWord] = 1; 
      } else { 
         wordCounts[currentWord]++; 
      }
   }
   
      for (let word in wordCounts) { 
         const span2 = document.createElement("span"); 
         const textContent2 = `"${word}": ${wordCounts[word]}, `;
         span2.innerText = textContent2; 
         const words = document.getElementById("wordsDiv");
         words.appendChild(span2); 
      }
   





}
)
   
   
   
   

 


