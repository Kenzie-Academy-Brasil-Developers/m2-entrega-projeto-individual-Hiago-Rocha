import { ApiRequests } from "./api.js"

const btnEntendi = document.querySelector(".modal-btn")
btnEntendi.addEventListener("click", (event) => {
    event.preventDefault()
    document.querySelector(".modal-wrapper").classList.toggle("show-modal")
})

class LoginPage {
    static renderLoginPage(){
        const token = localStorage.getItem("@kenzieCompanies:token")

        if(token){
            window.location.assign("../pages/dashbord.html")
        }

        const emailInput = document.getElementById("email")
        const senhaInput = document.getElementById("senha")
        const btnLogin = document.getElementById("btn-logar")

        btnLogin.addEventListener("click", (event) => {
            event.preventDefault()

            const data = {
                email: emailInput.value,
                password: senhaInput.value
            }

            ApiRequests.fazLogin(data)
        })
    }
}

LoginPage.renderLoginPage()