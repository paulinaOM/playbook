const issue = {
    title: "Mi primer PR",
    author: "Paulina Otero",
    branchName: "main",
    dateCreated: "2022-04-10",
    status: "Succeeded",
    repositoryNameAssociated: "semana2",
    getTitleAndAuthor: function(){
        return `This pull request ${this.title} was created by ${this.author}`;
    },
    getStatus: function(){
        return `This pull request ${this.title} has a status ${this.status}`
    }
}

console.log("Nombre del issue: " + issue.title)
console.log(issue.getTitleAndAuthor())
console.log(issue.getStatus())