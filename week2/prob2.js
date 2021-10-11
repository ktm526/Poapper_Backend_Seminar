var fs = require('fs');

const textbook = {
    title: "C Primer Plus (6th edition)",
    author: "Stephen Prata",
    year: 2011,
    ISBN: "0321776402",
    Class: "CSED232"
}

const textbookJSON = JSON.stringify(textbook)
fs.writeFileSync( './textbook.json', textbookJSON);