let nameRegex = RegExp("^[A-Z][Aa-zZ]{2,}$");
let addressRegex = RegExp("^[A-Za-z0-9,/]{4,}$");
let cityStateRegex = RegExp("^[A-Za-z]{4,}$");
let zipRegex = RegExp("^[1-9]{1}[0-9]{2}[\\s]?[0-9]{3}$");
let phoneNumberRegex = RegExp("^[1-9]{1}[0-9]{9}$");
let emailRegex = RegExp("[\\w+_-]+(?:\\.[\\w_-]+)*@(?:[\\w]+\\.){1,2}[a-zA-Z]{2,}");
class AddressBook {
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

try {
    let addressBook = new AddressBook("Chandler", "Bing", "Begumpet", "Hyderabad", "Telangana", "567894", "9876543210", "chandler@gmail.com");
    console.log(addressBook.toString());
} catch (error) {
    console.error(error);
}