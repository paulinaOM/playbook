class Issue{
    constructor(title, repositoryNameAssociated, status, numberOfComments, labels, author, dateCreated, lastUpdated){
        this.title = title;
        this.repositoryNameAssociated = repositoryNameAssociated;
        this.status = status;
        this.numberOfComments = numberOfComments;
        this.labels = labels;
        this.author = author;
        this.dateCreated = dateCreated;
        this.lastUpdated = lastUpdated;
    }
    getTitleAndAuthor(){
        return `This issue ${this.title} was created by ${this.author}`;
    }
    getGeneralInfo(){
        return `${this.getTitleAndAuthor()} on ${this.dateCreated}, last updated on ${this.lastUpdated}.`
    }
}

const issue = new Issue("Semana 2 live 3", "semana2", "Succedded", 100, [], "Carlo Gilmar", "2022-04-10", "2022-04-17");
console.log(issue)
console.log(issue.getTitleAndAuthor())
console.log(issue.getGeneralInfo())