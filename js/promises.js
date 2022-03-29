

fetch(`https://api.github.com/users/MendozaR9/events`, {headers: { 'Authorization': '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'}})
    .then(response => response.json())
    .then(data => {
        console.log(data)
        console.log(data[0].payload.commits[0].message)
    })
    .catch(error => function (error){
        console.log(error)
    })