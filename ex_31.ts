var users : string[] = [];


 if (users.length == 0) {
   console.log("We need to add some users");
 } 
 
 
 else {
       
    for(var i = 0; i < users.length; i++){

        if (users[i]=='admin'){
            console.log('Hello '+users[i]+', would you like to see a status report?');
        }
        
        else {
            console.log("Hello "+users[i]+", thank you for logging in again.");
        }
        
     }


 }