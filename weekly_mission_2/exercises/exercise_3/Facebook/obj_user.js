class User {
    constructor(name, age, birthdate, registrationDate, cellphone, email, password, gender){
        this.name = name;
        this.age = age,
        this.birthdate = birthdate;
        this.registrationDate = registrationDate;
        this.cellphone = cellphone;
        this.email = email;
        this.password = password;
        this.gender = gender;

    }
    getGeneralInfo(){
        let registrationDate = new Date(this.registrationDate);
        return `${this.name} member since ${registrationDate.toDateString()}. Your email is ${this.email}`;
    }
    getBirthday(){
        let birthdate = new Date(this.birthdate);
        return `${this.name}'s birthday is ${birthdate.toDateString()}`
    }
}

const user = new User("Paulina Otero", 23, "1999-01-21", "2014-09-13", "4611082620", "otero.martinez.paulina.1f@gmail.com", "mypass", "woman");
console.log(user)
console.log(user.getGeneralInfo())
console.log(user.getBirthday())