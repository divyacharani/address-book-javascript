const prompt = require('prompt-sync')();
let nameRegex = RegExp("^[A-Z][Aa-zZ]{2,}$");
let addressRegex = RegExp("^[A-Za-z0-9,/]{4,}$");
let cityStateRegex = RegExp("^[A-Za-z]{4,}$");
let zipRegex = RegExp("^[1-9]{1}[0-9]{2}[\\s]?[0-9]{3}$");
let phoneNumberRegex = RegExp("^[1-9]{1}[0-9]{9}$");
let emailRegex = RegExp("[\\w+_-]+(?:\\.[\\w_-]+)*@(?:[\\w]+\\.){1,2}[a-zA-Z]{2,}");
class Contact {
    constructor(...params) {
        if (nameRegex.test(params[0]))
            this.firstName = params[0];
        else throw "Invalid First Name!!";
        if (nameRegex.test(params[1]))
            this.lastName = params[1];
        else throw "Invalid Last Name!!";
        if (addressRegex.test(params[2]))
            this.address = params[2];
        else throw "Invalid Address!!";
        if (cityStateRegex.test(params[3]))
            this.city = params[3];
        else throw "Invalid City!!";
        if (cityStateRegex.test(params[4]))
            this.state = params[4];
        else throw "Invalid State!!";
        if (zipRegex.test(params[5]))
            this.zip = params[5];
        else throw "Invalid Zip!!";
        if (phoneNumberRegex.test(params[6]))
            this.phoneNumber = params[6];
        else throw "Invalid Phone Number!!";
        if (emailRegex.test(params[7]))
            this.email = params[7];
        else throw "Invalid Email!!";
    }

    toString() {
        return "First Name : " + this.firstName + ", Last Name : " + this.lastName + ", Address : " + this.address + ", City : " + this.city + ", State : " + this.state + ", Zip : " + this.zip + ", Phone Number : " + this.phoneNumber + ", Email : " + this.email;
    }
}

let addressBookArr = new Array();

let getContact = () => {
    let firstNameIp = prompt("Enter First Name ");
    let lastNameIp = prompt("Enter Last Name ");
    let addressIp = prompt("Enter Address ");
    let cityIp = prompt("Enter City ");
    let stateIp = prompt("Enter State ");
    let zipIp = prompt("Enter Zip ");
    let phoneNumberIp = prompt("Enter Phone Number ");
    let emailIp = prompt("Enter Email ");
    let contactIp = null;
    try {
        contactIp = new Contact(firstNameIp, lastNameIp, addressIp, cityIp, stateIp, zipIp, phoneNumberIp, emailIp);
    } catch (error) {
        console.error(error);
    }
    return contactIp;
}

let countContacts = () => addressBookArr.reduce((total, contact) => total + 1, 0);

let viewContacts = () => {
    console.log("Number of contacts in this addressbook : " + countContacts());
    addressBookArr.forEach(contact => console.log(contact.toString()));
}

let addContact = (contact) => {
    let index = getindexByName(contact.firstName, contact.lastName);
    if (index == -1) {
        addressBookArr.push(contact);
        console.log("Contact Added Successfully!!");
    }
    else
        console.log("Could not add contact as Name already exists!!");
}

let getindexByName = (frstName, lstName) => {
    return addressBookArr.findIndex(contact => contact.firstName == frstName && contact.lastName == lstName);
}

let editContact = () => {
    let frstName = prompt("Enter First Name : ");
    let lstName = prompt("Enter Lastt Name : ");
    let index = getindexByName(frstName, lstName);
    if (index == -1)
        console.log("Could not find the contact!!")
    else {
        addressBookArr[index] = getContact();
        console.log("Contact edited successfully!!");
    }
}

let deleteContact = () => {
    let frstName = prompt("Enter First Name : ");
    let lstName = prompt("Enter Lastt Name : ");
    let index = getindexByName(frstName, lstName);
    if (index == -1)
        console.log("Could not find the contact!!")
    else {
        console.log("Contact deleted successfully!!");
        return addressBookArr.splice(index, 1);

    }
}

console.log("Welcome to AddressBook Program!!");
let choice = 0;
do {
    console.log("Choose\n1. View Contacts\n2. Add Contact\n3. Edit Contact By name\n4. Delete Contact\n5. Exit");
    choice = prompt("Enter Your Choice ");
    switch (choice) {
        case "1": viewContacts();
            break;
        case "2": addContact(getContact());
            break;
        case "3": editContact();
            break;
        case "4": console.log(deleteContact().toString());
            break;
        case "5": console.log("Bye!!");
            break;
        default: console.log("Invalid Choice !!");
    }

} while (choice != 5)