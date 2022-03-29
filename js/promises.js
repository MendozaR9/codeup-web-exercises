getuserData()
function getuserData() {
    fetch(`https://api.github.com/users/MendozaR9/events`, {headers: {'Authorization': git_key}})
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