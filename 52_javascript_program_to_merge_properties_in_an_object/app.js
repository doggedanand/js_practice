var obj1 = {
    name: "Anand Vishwakarma",
    age: 21,
    address: "Jalalabad",
};

var obj2 = {
    phone: "+91-9512682354",
    email: "rd.anandv@gmail.com",
    address: {
        location: 'dullahapur'
    }
};
let resul = {...obj1, ...obj2};


console.log(resul);
