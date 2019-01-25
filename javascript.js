"use strict";
//do not touch this!!!
class Contact {
    //want it set up to hold the data in the following way:
    constructor(name, email, relation, phone) {
        //has the following properties
        this.name = name;
        this.email = email;
        this.relation = relation;
        this.phone = phone;
    }
}

//this is set up for you, just add the methods
class AddressBook {
    constructor() {
        this.contacts = []; //the list of contacts is your array
    }
    add(info) {
        this.contacts.push(info) //info = new address book contact
        console.log(this.contacts);
        //add name, email, relation, phone, will add a new contact
    }
    deleteAt(index) {
        //you want (number, number)
        //index = prompt answer, 1 is the amount you want to delete
        this.contacts.splice(index, 1) 
    }
    print() {
        //print to the console, will contain a loop through the this.contacts array
        for (let i=0; i < this.contacts.length; i++) {
            console.log(this.contacts[i]);
        }
    } deleteByName(nameKey) {
        //make a loop to search for the name that matches
        for (let i=0; i < this.contacts.length; i++) {
            //this.contacts.name, is searching for the property "name" within the current objects parameters
            if (this.contacts[i].name === nameKey) {
                let name = i;
                //console.log(i); just used this to test
                //delete the current index that it is on, name represents the index number
                this.contacts.splice(name, 1); 
            } else {
                break;
            }
        }
    }
}

let info = new AddressBook(); //info variable will equal the new Addressbook array
//new instance of an Addressbook, which is named info

//while loop to start the prompt
while (true) {
    const choice = prompt("Would you like to Add, Print, Delete Index, Delete Name, or Quit?");
    if (choice === "add") {
        //create the prompt if you select add
        const name = prompt("Enter a name");
        const email = prompt("Enter a email");
        const relation = prompt("Enter a relation");
        const phone = prompt("Enter a phone number");
        //use the push method to add the new Contact info
        info.add(new Contact(name, email, relation, phone));
        //info is the object of Addressbook, then add method, and new Contact would be the clas
    } else if (choice === "print") {
        //print with the addressbook
        info.print();
    } else if (choice === "delete index") {
        let index = prompt("Which index entry do you want to delete?");
        info.deleteAt(index);
    } else if (choice === "quit") {
        //break the loop if they quit
        console.log("See ya!")
        break;
    } else if (choice === "delete name") {
         let nameKey = prompt("Which name do you want to delete?");
         info.deleteByName(nameKey);
    } 
    else {
        //break the loop if they cancel or do anything else
        console.log("Another time!");
        break;
    }
}


