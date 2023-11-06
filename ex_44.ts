function sandwich_items(...items : string[]): any{

    for(var i=0; i<items.length;i++){

        console.log("You have ordered to make sandwitch with items "+items[i]);
    }
}

sandwich_items("Salad", "cacumber", "egg"); console.log("\n");
sandwich_items("Healthy Salad", "cacumber", "Tomato"); console.log("\n");
sandwich_items("Avacado" , "Tomato" , "Cucumber");