// Add your code here
const submitData = (userName, userEmail) => {
 return fetch ('http://localhost:3000/users', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
    body: JSON.stringify({
        name: userName,
        email: userEmail
    })
    })  
    .then(resp => resp.json())
    .then(data => {
        const bodies = document.body
         bodies.append(data.id)
    })
    .catch(chicken => {
    const bodyError = document.body
       bodyError.append(chicken.message)
    })

}
