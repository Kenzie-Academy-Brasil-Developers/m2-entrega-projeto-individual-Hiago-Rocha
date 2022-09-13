export class ApiRequests {
    static baseUrl = "http://localhost:6278/"
    static token = localStorage.getItem("@kenzieRedeSocial:token") || ""
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
        const newUser = await fetch(`${this.baseUrl}auth/register/user`, {
            method: "POST",
            headers: this.headers,
            body: JSON.stringify(body)
        })
        .then(res => res.json())
        .then(res => {
            window.location.assign("../pages/login.html")
            return res
        })
        .catch(err => console.log(err)) 
    }
}
