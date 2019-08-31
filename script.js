//factiry 1


function dressFactory(dName, dDesigner, dCompaney, dColor) {
    let obj = {
        name: dName,
        designer: dDesigner,
        compney: dCompaney,
        colour: dColor,
        about: function() {
            console.log(`This dress is made up of cloth ${this.name} and designed by ${this.designer} and it's color is  ${this.colour}.`)
        },
        greet: function() {
            console.log(`Hi, I have got this precious clothes' dress ${this.name}!`);
        }
    };
    return obj;
}

let dressCloth = dressFactory("lown", "sana fafiNaz", "taxtile", "red");

//factory 2


function deviceFactory(dName, dDesigne, dCompaney, dColor) {
    let obj = {
        name: dName,
        design: dDesigne,
        compney: dCompaney,
        colour: dColor,
        about: function() {
            console.log(`${this.name} is ${this.age} years old. They like ${this.interests}`)
        },
        greet: function() {
            console.log(`Hi, I have ${this.name}!`);
        }
    };
    return obj;
}

let deviceCode = deviceFactory("Qmobile", "Lt 680", "Q", "black");


//factotry 3

function woodFactory(wName, wUses, mType, num) {
    let obj = {
        name: wName,
        usage: wUses,
        type: mType,
        quentity: num,
        about: function() {
            console.log(`This is a ${this.name}. It is used in  ${this.usage} and this  ${this.type} type of wooden ${this.wName} are about  ${this.quentity} in my house.`)
        }

    };
    return obj;
}

let woodChair = woodFactory("chair", "guestroom", "round", 6);