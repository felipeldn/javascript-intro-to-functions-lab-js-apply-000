function shout(string) {return string.toUpperCase()}
function whisper(string) {return string.toLowerCase()}
function logShout(string) {console.log (string.toUpperCase())}
function logWhisper(string) {console.log (string.toLowerCase())}

<<<<<<< HEAD
function sayHiToGrandma(string) {
  if(string.toLowerCase()==string) {
    return "I can't hear you!";
  }
else if(string.toUpperCase()==string) {
  return "YES INDEED!";
}

else if("I love you, Grandma."==string) {
  return "I love you, too.";
  
}
=======
function sayHiToGrandma(string) 
{if(string.toLowerCase()==string) return "I can't hear you!"
else if(string.toUpperCase()==string) return "YES INDEED!"
else if("I love you, Grandma"==string) return "I love you, too."
>>>>>>> 803d443a6af98fd8e3151d33bf3c704d0ef065e8
  
}
