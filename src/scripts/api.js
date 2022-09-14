export class ApiRequests {
    static baseUrl = "http://localhost:6278/"
    static token = localStorage.getItem("@kenzieCompanies:token") || ""
    static headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.token}`
    }

    static async listarCompanies(){
        const companies = await fetch(`${this.baseUrl}companies`, {
            method: "GET" ,
            headers: this.headers
        })
        .then(res => res.json())

        .catch(err => console.log(err))

        return companies
    }

    static async cadastrarUsuario(body){
        console.log(body)
        const newUser = await fetch(`${this.baseUrl}auth/register/user`, {
            method: "POST",
            headers: this.headers,
            body: JSON.stringify(body)
        })
        .then(res => {
            window.location.assign("../pages/login.html")
            return res
        })
        .catch(err => console.log(err)) 
    }

    static async fazLogin(body){
        const userLogin = await fetch(`${this.baseUrl}auth/login`,{
            method: "POST",
            headers: this.headers,
            body: JSON.stringify(body)
        })
        .then(res => res.json())
        .then(res => {
            if(res.token != undefined){
                localStorage.setItem("@kenzieCompanies:token", res.token)
                localStorage.setItem("@kenzieCompanies:is_admin", res.is_admin)
                localStorage.setItem("@kenzieCompanies:user_id", res.uuid)
                window.location.assign("../pages/dashbord.html")
            }else{
                const modal = document.querySelector(".modal-wrapper")
                modal.classList.toggle("show-modal")
            }
            return res  
        })
        .catch(err => console.log(err))
    }

    static async InformaçoesUser(){
        const UserInfo = await fetch(`${this.baseUrl}users/profile`, {
            method: "GET",
            headers: this.headers
        })
        .then(res => res.json())

        .catch(err => console.log(err))

        return UserInfo
    }

    static async BuscaFuncionarios(){
        const funcionarios = await fetch(`${this.baseUrl}users/departments/coworkers`,{
            method: "GET",
            headers: this.headers
        })
        .then(res => res.json)

        .catch(err => console.log(err))

        return funcionarios.results
    }

    
}
