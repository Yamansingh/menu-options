const EventEmitter = require("events");
const eventEmitter = new EventEmitter();
//console.log(eventEmitter);
const readline = require("readline")
const r1 = readline.createInterface({
    input:process.stdin,
    output:process.stdout,
})
eventEmitter.on("options",(showOption)=>{
    console.log("select an option : ");
    console.log("press 1 to show all  books :");
    console.log("press 2 to add a new book :");
    console.log("press 3 to  quit :");
})
//eventEmitter.emit("options");
const {book , showAllBooks,addBook} = require("./functions");
//console.log(book[0]);
//showAllBooks();
r1.question("press  any num ",function(i){
    if(i == 1){showAllBooks();
            r1.close()
            eventEmitter.emit("options")
    }
    else if(i==2){
        r1.question("write the name of book",function(name){
            addBook(name);
            r1.close();
            eventEmitter.emit("options")
        })
    }
    else if( i == 3){
        r1.question("are you sure to exit press -y to exit  ",function(x){
            if(x == "y"){
                r1.close();
            }
        })
    }
    else{
        console.log("you have preed the wrong no")
        r1.close();
        eventEmitter.emit("options");
    }

})
r1.on("close",function(){
    console.log("bye bye");3
});

