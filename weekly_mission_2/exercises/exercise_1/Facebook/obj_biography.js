const biography = {
    name: "Paulina Otero",
    age: 23,
    birthdate: {
        day: 21,
        month: 1,
        month_full: "January",
        year: 1999
    },
    city: "Celaya",
    workplace: "",
    hobbies:["Programming", "Playing soccer"],
    totalFriends: 100,
    friends: [],
    pictures: [],
    videos: [],
    getGeneralInfo: function(){
        return `${this.name} from ${this.city}, has ${this.age} years old and ${this.totalFriends} friends`;
    },
    getBirthday: function(){
        return `${this.name}'s birthday is ${this.birthdate.month_full} ${this.birthdate.day}`
    },
    getHobbies: function(){
        let hobbiesList = `${this.name}'s hobbies: `;
        (this.hobbies).forEach(hobbie => {hobbiesList += `\n-${hobbie}`}) //console.log(hobbie) 
        return hobbiesList;
    }
}

console.log("Nombre: " + biography.name)
console.log(biography.getGeneralInfo())
console.log(biography.getBirthday())
console.log(biography.getHobbies())
