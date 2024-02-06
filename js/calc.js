const verifcParenteses = (expressao)=>{
    let cont = 0
    for(let char of expressao){
        if(char == "("){
            cont++
        }else if(char == ")"){
            cont--
        }
        if(cont <0){
            return false
        }
    }
    return cont === 0
}

export {verifcParenteses}