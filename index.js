'use strict';

function findLongestWord(string) {
 
    const array = string.split(" ");

    

      let longer = array[0];

      

      for(let i =1; i <= array.length-1; i+=1){

        

        if(array[i].length > longer.length){

            console.log(array[i].length)

          longer = array[i]


        }
      }
      console.log(longer)
    return longer
    
      
    }
     findLongestWord('go toh my house')
