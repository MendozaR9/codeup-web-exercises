const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];
let languageis3 = users.filter(function (n){
  return n.languages.length > 2
})

// console.log(languageis3)

let userEmail = users.map(n => n.email);
// console.log(userEmail)
// userEmail.forEach(function (email){
//     console.log(email)
// });


let totalyear = users.reduce((total, people)=>{
    return total + people.yearsOfExperience
}, 0)
let averageyears = totalyear / users.length
// console.log(averageyears)

let longestemail = users.reduce((longest,user)=>{
    if (user.email.length > longest.length){
        longest = user.email
    }
    return longest
},"")
console.log(longestemail)

let usernames = users.reduce((total, people)=>{
    return (total + people.name +" ");
},"")
// console.log(usernames)
