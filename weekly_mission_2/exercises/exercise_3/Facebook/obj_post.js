class Post {
    constructor(username, target, content, date, like, love, wow, sad, haha, angry, peopleWhoReacted, comments){
        this.username = username;
        this.target = target;
        this.content = content;
        this.date = date;
        this.like = like;
        this.love = love;
        this.wow = wow;
        this.sad = sad;
        this.haha = haha;
        this.angry = angry;
        this.peopleWhoReacted = peopleWhoReacted;
        this.comments = comments;    
    }
    getGeneralInfo(){
        let date = new Date(this.date);
        return `${this.username} has posted "${this.content}" on ${date.toDateString()}`;
    }
}

const post = new Post("Paulina Otero", "frieds", "Hi! I'm watching a movie.", "2021-04-21T17:30:00.000Z",1,0,0,0,0,0,[],[]);
console.log(post.getGeneralInfo());