class Biography {
    constructor(name, age, birthdate, city, workplace, hobbies, totalFriends, friends, pictures, videos){
        this.name = name;
        this.age = age;
        this.birthdate = birthdate;
        this.city = city;
        this.workplace = workplace;
        this.hobbies = hobbies;
        this.totalFriends = totalFriends;
        this.friends = friends;
        this.pictures = pictures;
        this.videos = videos;
    }
    getGeneralInfo(){
        return `${this.name} from ${this.city}, has ${this.age} years old and ${this.totalFriends} friends`;
    }
    getBirthday(){
        let bdate = new Date(this.birthdate);
        bdate.setYear(new Date().getFullYear());
        bdate.setDate(bdate.getDate()+1)
        return `${this.name}'s birthday is ${bdate.toDateString()}`
        
    }
    
}

const biography = new Biography("Paulina Otero", 23, "1999-01-21", "Celaya", "", ["programming", "playing soccer"], 100, [], [], []);
console.log(biography)
console.log(biography.getGeneralInfo())
console.log(biography.getBirthday())

