const issue = {
    title: "Semana 2 live 3",
    repositoryNameAssociated: "semana2",
    status: "Succeeded",
    numberOfComments: 100,
    labels:  [],
    author: "Carlo Gilmar",
    dateCreated: "2022-04-10",
    lastUpdated: "2022-04-17",
    getTitleAndAuthor: function(){
        return `This issue ${this.title} was created by ${this.author}`;
    },
    getGeneralInfo: function(){
        return `${this.getTitleAndAuthor()} on ${this.dateCreated}, last updated on ${this.lastUpdated}.`
    }
}

console.log("Nombre del issue: " + issue.title)
console.log(issue.getTitleAndAuthor())
console.log(issue.getGeneralInfo())