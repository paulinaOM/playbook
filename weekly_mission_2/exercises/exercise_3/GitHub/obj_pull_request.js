class PullRequest{
    constructor(title, author, branchName, dateCreated, status, repositoryNameAssociated){
        this.title = title;
        this.author = author;
        this.branchName = branchName;
        this.dateCreated = dateCreated;
        this.status = status;
        this.repositoryNameAssociated = repositoryNameAssociated;
    }
    getTitleAndAuthor(){
        return `This pull request ${this.title} was created by ${this.author}`;
    }
    getStatus(){
        return `This pull request ${this.title} has a status ${this.status}`
    }
}

const pullRequest = new PullRequest("Mi primer PR", "Paulina Otero", "main", "2022-04-10", "Succeeded", "semana2");
console.log(pullRequest);
console.log(pullRequest.getTitleAndAuthor())
console.log(pullRequest.getStatus())