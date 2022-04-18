const user = {
    name: "Paulina Otero",
    age: 23,
    birthdate: {
        day: 21,
        month: 1,
        month_full: "January",
        year: 1999
    },
    registrationDate: {
        day: 17,
        month: 4,
        month_full: "April",
        year: 2021
    },
    cellphone: 4611082620,
    email: "otero.martinez.paulina.1f@gmail.com",
    password: "mypass",
    gender: "woman",
    getGeneralInfo: function(){
        return `${this.name} member since ${this.registrationDate.month_full} ${this.registrationDate.day} ${this.registrationDate.year}. Your email is ${this.email}`;
    },
    getBirthday: function(){
        return `${this.name}'s birthday is ${this.birthdate.month_full} ${this.birthdate.day}`
    }
}

console.log("Nombre: " + user.name)
console.log(user.getGeneralInfo())
console.log(user.getBirthday())