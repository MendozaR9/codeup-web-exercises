getuserData()
function getuserData() {
    fetch(`https://api.github.com/users/MendozaR9/events`, {headers: {'Authorization': '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'}})
        .then(response => response.json())
        .then(data => {
            console.log(data)
            console.log(data[0].created_at)
            console.log(data[0].payload.commits[0].message)
        })
        .catch(error => function (error) {
            console.log("u get error")
        })
}