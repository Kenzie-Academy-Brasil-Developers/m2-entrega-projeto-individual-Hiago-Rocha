import { ApiRequests } from "./api.js"

class dashbord {
    static verificaUser(){
        const token = localStorage.getItem("@kenzieCompanies:token")
        const admin = localStorage.getItem("@kenzieCompanies:is_admin")

        if(!token){
          window.location.assign("../pages/login.html")
        }

        if(admin === "true"){
          window.location.assign("../pages/dashbordAdimin.html")
        }
    }

    static renderMyInfos(UserInfo){
      console.log(UserInfo)
      const userName = document.getElementById("userName")
      const nivelProfissional = document.getElementById("nivelProfissional")

      userName.innerText = `Nome:${UserInfo.username}`
      nivelProfissional.innerText = `Nivel:${UserInfo.professional_level}`
    }

    static renderFuncionarios(setorFuncionarios){
      const ancora = document.getElementById("ancora")
      
      if(setorFuncionarios === undefined){
        const tagH1 = document.createElement("h1")
        tagH1.innerText = "Você não esta em uma empresa ou em um departamento  😞"
        ancora.appendChild(tagH1)
      }
      //const funcionarios = setorFuncionarios.users
      
    }

    static Sair(){
      const btnSair = document.getElementById("btnSair")
      btnSair.addEventListener("click", () => {
        localStorage.clear()
        window.location.assign("../../index.html")
      })
    }
}

dashbord.Sair()

dashbord.verificaUser()

const UserInfo = await ApiRequests.InformaçoesUser()
dashbord.renderMyInfos(UserInfo)

const setorFuncionarios = await ApiRequests.BuscaFuncionarios()
dashbord.renderFuncionarios(setorFuncionarios)