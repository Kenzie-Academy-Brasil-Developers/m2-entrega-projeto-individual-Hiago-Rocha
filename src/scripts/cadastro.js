import { ApiRequests } from "./api.js"

class signup {
    static createNewUser(){
        const nome = document.getElementById("nome")
        const email = document.getElementById("email")
        const password = document.getElementById("password")
        const select = document.getElementById("nivelTrabalho")
        const btnRegister = document.getElementById("btn-register")

        let value = select.options[select.selectedIndex].value
        btnRegister.addEventListener("click", async (event) => {
            event.preventDefault()

            const data = {
                password: password.value,
                email: email.value,
                professional_level: value,
                username: nome.value
            }
            await ApiRequests.cadastrarUsuario(data)
        })
    }
}
signup.createNewUser()