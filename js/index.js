const apiUrl = "https://api.github.com/users/"
const form = document.querySelector("#github-form")


form.addEventListener("submit", function (e) {
    e.preventDefault()
    const search = document.querySelector("#search").value
    
    const originalName = search.split(" ").join("")
    document.getElementById("result").innerHTML = ""

fetch(apiUrl + originalName)
.then(resp => resp.json())
.then((user) => {
    console.log(user)
    const result = document.getElementById("result").innerHTML =`
    <a target ="_blank" href="https://www.github.com/${originalName}"><img src="${user.avatar_url}"/></a>
    `
    })
})