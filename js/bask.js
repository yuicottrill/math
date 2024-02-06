const delta = (a,b,c)=>{
    return  Math.pow(b,2) - 4*a*c
    
}
const raizQuadrada = (a,b,c)=>{
    let result = delta(a,b,c)
    if(a == 0){
        return `Não existem raízes com o coeficiente A igual a 0`
    }
    if(result < 0){
        return `Não existem raízes quadradas com delta negativo.`
    }
    let x1 = (-b + Math.sqrt(result))/(a*2)
    let x2 = (-b - Math.sqrt(result))/(a*2)
    let resultado = `A raiz x1 do seu número é ${x1} e o x2 ${x2}`
    return resultado
}

export {delta}
export {raizQuadrada}