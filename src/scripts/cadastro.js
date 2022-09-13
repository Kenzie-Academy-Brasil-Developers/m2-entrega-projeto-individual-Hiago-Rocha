import { ApiRequests } from "./api.js"

class signup {
    static createNewUser(){
        const nome = document.getElementById("nome")
        const email = document.getElementById("email")
        const password = document.getElementById("password")
        const nivelTrabalho = document.getElementById("nivelTrabalho")
        const btnRegister = document.getElementById("btn-register")

        btnRegister.addEventListener("click", async (event) => {
            event.preventDefault()

            const data = {
                username: nome.value,
                email: email.value,
                password: password.value,
                professional_level: nivelTrabalho.value
            }

            await ApiRequests.cadastrarUsuario(data)
        })
    }
}
signup.createNewUser()