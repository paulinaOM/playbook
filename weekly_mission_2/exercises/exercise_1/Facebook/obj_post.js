const post = {
    username: "Paulina Otero",
    target: "frieds",
    content: "Hi! I'm watching a movie.",
    date: {
        day: 17,
        month: 4,
        month_full: "April",
        year: 2022,
        time: "17:30:00"
    },
    reactions:{
        like: 1,
        love: 0,
        wow: 0,
        sad: 0,
        haha: 0,
        angry: 0
    },
    peopleWhoReacted:[
        {
            user: "Jesus Otero",
            reaction: 'like'
        }
    ],
    comments: [],
    getGeneralInfo: function (){
        return `${this.username} has posted "${this.content}" on ${this.date.month_full} ${this.date.day} at ${this.date.time} `;
    }
}

console.log(post.getGeneralInfo());