import { ApiRequests } from "./api.js";

class homePage {
    static renderCompanies(companies){
        const tagUl = document.getElementById("tagUL")
        const select = document.getElementById("filtro-home")
        tagUl.innerHTML = ""
        let newArr = []

        companies.forEach(companie => {
            const empresa = homePage.criaEmpresa(companie)
            const opçao = homePage.criaOpçoes(companie)
            if(!newArr.includes(opçao.value)){
                newArr.push(opçao.value)
                select.appendChild(opçao)
            }

            const setor = companie.sectors.description
            let value = select.options[select.selectedIndex].value
            if(value === "escolha um setor"){
                tagUl.appendChild(empresa)
            }else(setor === value)
                tagUl.appendChild(empresa)
        });
    }

    static criaEmpresa(companie){
        const tagLi = document.createElement("li")
        const Div1 = document.createElement("div")
        const div2 = document.createElement("div")
        const tagH3 = document.createElement("h3")
        const tagp = document.createElement("p")
        const span1 = document.createElement("span")
        const span2 = document.createElement("span")

        tagH3.innerText = `Nome: ${companie.name}`
        tagp.innerText  = `Descrição: ${companie.description}`
        span1.innerText = `Abre as: ${companie.opening_hours}`
        span2.innerText = companie.sectors.description
        span2.classList.add("setor")

        tagLi.append(Div1,div2)
        Div1.append(tagH3,tagp,span1)
        div2.appendChild(span2)

        return tagLi
    }

    static criaOpçoes(companie){
        const opçao = document.createElement("option")
        opçao.innerText = companie.sectors.description
        opçao.value = companie.sectors.description
        return opçao
    }

    static rendeFiltro(companies){
        const select = document.getElementById("filtro-home")
        const tagUl = document.getElementById("tagUL")
        tagUl.innerHTML = ""

        companies.forEach(companie => {
            const empresa = homePage.criaEmpresa(companie)
            const setor = companie.sectors.description
            let value = select.options[select.selectedIndex].value
            console.log(value)
            if(value === "escolha um setor"){
                tagUl.appendChild(empresa)
            }else if(setor === value){
                tagUl.appendChild(empresa)
            }
                
        })
    }
}

const companies = await ApiRequests.listarCompanies()
homePage.renderCompanies(companies)

const btnFiltrar = document.getElementById("btn-filtrar")
btnFiltrar.addEventListener("click", () => {
    homePage.rendeFiltro(companies)
})