import { ApiRequests } from "./api.js";

const token = localStorage.getItem("@kenzieCompanies:token")
        const admin = localStorage.getItem("@kenzieCompanies:is_admin")

        if(!token){
          window.location.assign("../pages/login.html")
        }

        if(admin === "false"){
          window.location.assign("../pages/dashbord.html")
        }

class renderDashbordAdimin{
    static renderEmpresas(companies){
        const ancora = document.getElementById("ancora")
        ancora.innerHTML = ""

        companies.forEach(empresa => {
            const cardEmpresa = renderDashbordAdimin.criaCard(empresa)

            ancora.appendChild(cardEmpresa)
        });
        
    }

    static criaCard(empresa){
        const tagLi = document.createElement("li")
        const Div1 = document.createElement("div")
        const div2 = document.createElement("div")
        const tagH3 = document.createElement("h3")
        const tagp = document.createElement("p")
        const span1 = document.createElement("span")
        const span2 = document.createElement("span")

        tagH3.innerText = `Nome: ${empresa.name}`
        tagp.innerText  = `Descrição: ${empresa.description}`
        span1.innerText = `Abre as: ${empresa.opening_hours}`
        span2.innerText = empresa.sectors.description
        span2.classList.add("setor")

        tagLi.append(Div1,div2)
        Div1.append(tagH3,tagp,span1)
        div2.appendChild(span2)

        return tagLi
    }

    static async pegaOpçao(){
        const select = document.getElementById("opcoesDeBusca")
        let value = select.options[select.selectedIndex].value

        if(value === "Lista de empresas"){
            renderDashbordAdimin.renderEmpresas(companies)
        }else if(value === "Cadastrar Empresa"){
            renderDashbordAdimin.NewEmpresa ()
        }else if(value === "Criar departamento"){
            renderDashbordAdimin.criarDepartamento(companies)
        }else if(value === "Listar todos os departamentos"){
            renderDashbordAdimin.RenderizaDepartamentos(listaDP)
        }else if(value === "listar todos os usuários"){
            renderDashbordAdimin.mostrarUsuarios(Usuarios)
        }else if(value === "Usuários sem contratos"){
            renderDashbordAdimin.essaVai(userList)
        }
    }

    static NewEmpresa(){
        const ancora = document.getElementById("ancora")
        ancora.innerHTML = ""
        
        const div     = document.createElement("form")
        const h1      = document.createElement("h1")
        const input1  = document.createElement("input")
        const input2  = document.createElement("input")
        const input3  = document.createElement("input")
        const select  = document.createElement("select")
        const option1 = document.createElement("option")
        const option2 = document.createElement("option")
        const option3 = document.createElement("option")
        const option4 = document.createElement("option")
        const option5 = document.createElement("option")
        const option6 = document.createElement("option")
        const option7 = document.createElement("option")
        const option8 = document.createElement("option")
        const button  = document.createElement("button")

        div.classList.add("div-cadastro-empresa")
        h1.innerText = "Cadastre sua Empresa"
        input1.placeholder = "Nome da Empresa"
        input2.placeholder = "Abre as? Ex: 09:00"
        input3.placeholder = "Descrição"
        option1.innerText  = "Alimenticio"
        option2.innerText  = "Varejo"
        option3.innerText  = "Textil"
        option4.innerText  = "Manufatura"
        option5.innerText  = "Aeroespacial"
        option6.innerText  = "Automotiva"
        option7.innerText  = "TI"
        option8.innerText  = "Atacado"
        option1.value      = "cbb5b34a-6f5e-4eb2-8d1c-ad20993710f2"
        option2.value      = "99a0282f-ead0-42d5-bda2-5f3b9e373b4b"
        option3.value      = "164a2dbf-87ab-4109-be30-73165a717e04"
        option4.value      = "047f6741-39e9-47eb-bee4-b236f8df18ee"
        option5.value      = "a2c45909-0e46-4c60-9b63-21f65616566c"
        option6.value      = "e76cc30a-96eb-45c2-93b2-a15ef7aab2b2"
        option7.value      = "17247c6b-5205-4067-9695-278fcb97d592"
        option8.value      = "ee99c41f-14bc-47e3-891b-9ccd9c799d1a"
        button.innerText   = "Cadastrar"

        div.append(h1,input1,input2,input3,select,button)
        select.append(option1,option2,option3,option4,option5,option6,option7,option8)
        ancora.appendChild(div)

        let value = select.options[select.selectedIndex].value

        button.addEventListener("click", async (event) => {
            event.preventDefault()
            const data = {
                name: input1.value,
                opening_hours: input2.value,
                description: input3.value,
                sector_uuid: value
            }
            await ApiRequests.CadastraEmpresa(data)
        })



    }

    static RenderizaDepartamentos(listaDP){
        console.log(listaDP)
        const ancora = document.getElementById("ancora")
        ancora.innerHTML = ""

        if(listaDP === undefined){
            const tagH1 = document.createElement("h1")
            tagH1.innerText = "Não á departamentos no momento  😞"
            ancora.appendChild(tagH1)
        }


        

    }

    static criarDepartamento(companies){
        const ancora = document.getElementById("ancora")
        ancora.innerHTML = ""

        const div     = document.createElement("form")
        const h1      = document.createElement("h1")
        const input1  = document.createElement("input")
        const input2  = document.createElement("input")
        const select = document.createElement("select")
        const button = document.createElement("button")

        companies.forEach(empresa => {
            const opçao = renderDashbordAdimin.criaOpçao(empresa)

            select.appendChild(opçao)
        })

        h1.innerText = "Crie seu departamento"
        input1.placeholder = "Nome do departamento"
        input2.placeholder = "Descrição"
        button.innerText = "Criar departamento"

        div.append(h1,input1,input2,select,button)
        ancora.appendChild(div)

        let value = select.options[select.selectedIndex].value

        button.addEventListener("click", async (event) => {
            event.preventDefault()
            const data = {
                name: input1.value,
                description: input2.value,
                company_uuid: value
            }
            await ApiRequests.criaDepartamento(data)
        })
    }

    static criaOpçao(empresa){
        const option = document.createElement("option")
        option.innerText = empresa.name
        option.value = empresa.uuid

        return option
    }

    static mostrarUsuarios(Usuarios){
        const ancora = document.getElementById("ancora")
        ancora.innerHTML = ""

        if(Usuarios === undefined){
            const tagH1 = document.createElement("h1")
            tagH1.innerText = "Não á usuarios empregados  😞"
            ancora.appendChild(tagH1)
        }
    }

    static essaVai(userList){
        const ancora = document.getElementById("ancora")
        ancora.innerHTML = ""
        console.log(userList)
    }

}

const userList = await ApiRequests.UsuariosDesempregados()

const listaDP = await ApiRequests.ListarDepartamentos()

const Usuarios = await ApiRequests.ListarUsuarios()

const companies = await ApiRequests.listarCompanies()
renderDashbordAdimin.renderEmpresas(companies)

const btnBusca = document.getElementById("btnBusca")
btnBusca.addEventListener("click", () => {
    renderDashbordAdimin.pegaOpçao()
})



