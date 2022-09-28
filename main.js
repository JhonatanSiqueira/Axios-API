const url = "http://localhost:5500/api"


function getUsers(){
    axios.get(url)
    .then(response => {
        apiResult.textContent = JSON.stringify(response.data)
    })
    .catch(error => console.error(error))
}

function addNewUser(){
    axios.post(url, newUser)
    .then(response => {
         console.log(response)
    })
    .catch(error => console.error(error))
}

const newUser = {
    name: "Olivia",
    avatar: "https://loremflickr.com/320/240",
    city: "RJ"
}

function getUser(id) {
    axios.get(`${url}/${id}`)
    .then(response => {
        const data = response.data
        userName.textContent = data.name
        userCity.textContent = data.city
        userId.textContent = data.id
        userAvatar.src = data.avatar
    })
    .catch(error => console.error(error))

}

function updateUser(id, userUpdated){

    axios.put(`${url}/${id}`, userUpdated)
    .then(response =>console.log(response))
    .catch(error => console.error(error))
}

const userUpdated = {
    name: "Marcelo",
    avatar: "https://loremflickr.com/320/240",
    city: "Recife"
}

function deleteUser(id) {
    axios.delete(`${url}/${id}`)
    .then(response => console.log(response))
    .catch(error => console.error(error))
}

deleteUser(3)


//addNewUser(newUser)
getUsers()
getUser(2)
//updateUser(2, userUpdated)