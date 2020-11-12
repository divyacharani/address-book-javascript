const prompt = require('prompt-sync')();
const Contact = require('./Contact.js')

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

let countContacts = (contactsArray) => contactsArray.reduce((total, contact) => total + 1, 0);

let viewContacts = () => {
    console.log("Number of contacts in this addressbook : " + countContacts(addressBookArr));
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

let searchByCityState = (item) => {
    let contactsByItemArr = new Array();
    let itemName = prompt("Enter the " + item + " name ");
    if (item == "City")
        contactsByItemArr = addressBookArr.filter(contact => contact.city == itemName);
    else if (item == "State")
        contactsByItemArr = addressBookArr.filter(contact => contact.state == itemName);
    console.log("Number of contacts " + countContacts(contactsByItemArr));
    contactsByItemArr.forEach(contact => console.log(contact.toString()))

}

console.log("Welcome to AddressBook Program!!");
let choice = 0;
do {
    console.log("Choose\n1. View Contacts\n2. Add Contact\n3. Edit Contact By name\n4. Delete Contact\n5. Search Contacts By City\n6. Search Contacts By State\n7. Exit");
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
        case "5": searchByCityState("City");
            break;
        case "6": searchByCityState("State");
            break;
        case "7": console.log("Bye!!");
            break;
        default: console.log("Invalid Choice !!");
    }

} while (choice != 7)