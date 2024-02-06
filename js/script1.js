import { conversor2000 } from "./conversor.js";
import { calcularFibo } from "./fibo.js";
import { delta } from "./bask.js";
import { raizQuadrada } from "./bask.js";
import { verifcParenteses } from "./calc.js";
document.addEventListener("DOMContentLoaded", function () {
    let inicio = document.querySelector(".content");
    let fibonacciSection = document.querySelector(".contentFibo");
    let baskSection = document.querySelector(".contentBask");
    let conSection = document.querySelector(".contentConvers");
    let menuItem = document.querySelectorAll("nav ul li span");

    menuItem.forEach((item) => {
        item.addEventListener("click", () => {
            inicio.classList.toggle("op");
            fibonacciSection.classList.toggle("op");
            baskSection.classList.toggle("op");
            conSection.classList.toggle("op");
        });
    });
    //Calculadora
    let btnNums = document.querySelectorAll(".num");
    let btnOper = document.querySelectorAll(".opert");
    let resultCalc = document.querySelector(".resultado");
    let botaoIgual = document.querySelector(".igual")
    let clear = document.querySelector(".clear")
    clear.addEventListener("click",()=>{
        resultCalc.innerHTML = "0"
    })
    resultCalc.innerHTML = "0"
    btnOper.forEach((btnOpers) => {
        btnOpers.addEventListener("click", () => {
                if (resultCalc.innerHTML === "0") {
                    resultCalc.innerHTML = btnOpers.textContent;
                }else{
                    if(btnOpers.textContent == "x"){
                        resultCalc.innerHTML += "*"
                    }else{
                    resultCalc.innerHTML += btnOpers.textContent;
                }
            }
            
        });
    });
    btnNums.forEach((btnNum) => {
        btnNum.addEventListener("click", () => {
            if (resultCalc.innerHTML === "0") {
                resultCalc.innerHTML = btnNum.textContent;
            }else{
                resultCalc.innerHTML += btnNum.textContent;
            }
           
        });
    });
    botaoIgual.addEventListener("click",()=>{
        if(verifcParenteses(resultCalc.innerHTML)){
            try{
                const resultado = eval(resultCalc.innerHTML)
                resultCalc.innerHTML = resultado
            } catch(error){
                alert("Erro: Expressão errada")
            }
        }else{
            alert("Erro de parenteses")
        }
    })
    //Sequência de fibonnaci
    let fibo = document.querySelector("#quantity")
    let botaoFibo = document.getElementById("calcularFibo")
    let resultFibo = document.getElementById("resultFibo")
    botaoFibo.addEventListener("click",(e)=>{
        e.preventDefault()
        let pegaFibo = fibo.value
        let resultado = calcularFibo(pegaFibo)
        resultFibo.innerHTML = resultado
    })
    // Baskhara
    let variavelA = document.getElementById("variavelA")
    let variavelB = document.getElementById("variavelB")
    let variavelC = document.getElementById("variavelC")
    let btnRaiz = document.getElementById("resultRaiz")
    let btnDelta =  document.getElementById("resultDelta")
    let resultBask = document.getElementById("resultBask")
    let variavelARaiz = variavelA.value
    let variavelBRaiz = variavelB.value
    let variavelCRaiz = variavelC.value
    btnRaiz.addEventListener("click", (e)=>{
        e.preventDefault()
        let resultadoRaiz = raizQuadrada(variavelARaiz, variavelBRaiz, variavelCRaiz)
        resultBask.innerHTML = resultadoRaiz
    })  
    btnDelta.addEventListener("click",(e)=>{
        e.preventDefault()
        let rersultadoDelta = delta(variavelARaiz,variavelBRaiz,variavelCRaiz)
        resultBask.innerHTML = rersultadoDelta
    })

    // Conversão de medida
    let medida = document.querySelectorAll(".see");
    let ativa = document.querySelector(".converte");
    let select = document.querySelector("select");
    let valor = document.querySelector("#valorMedida");
    let resultadoConversao = document.querySelector(".resultadoConversao")
    ativa.addEventListener("click", (e) => {
        e.preventDefault();
        let medidaSelecionada = "";
        medida.forEach((item) => {
            if (item.classList.contains("active")) {
                medidaSelecionada = item.innerHTML;
            }
        });

        let valorMedida = parseFloat(valor.value);
        let unidadeSelecionada = select.options[select.selectedIndex].value;
        let resultado = conversor2000(unidadeSelecionada,medidaSelecionada,valorMedida)
        resultadoConversao.innerHTML = resultado
        
    });

    medida.forEach((item) => {
        item.addEventListener("click", () => {
            medida.forEach((btn) => {
                btn.classList.remove("active");
            });
            item.classList.add("active");
        });
    });

    window.addEventListener("wheel", function (event) {
        let deltaY = event.deltaY;
        if (deltaY > 0) {
            inicio.classList.add("visible");
            fibonacciSection.classList.add("visible");
            baskSection.classList.add("visible");
            conSection.classList.add("visible");
        } else {
            inicio.classList.remove("visible");
            fibonacciSection.classList.remove("visible");
            baskSection.classList.remove("visible");
            conSection.classList.remove("visible");
        }
    });
});