const calcularFibo = (fibo)=>{
    let fiboArray = []
    fiboArray[0] = 0
    fiboArray[1] = 1
    fiboArray[2] = 1
    for(let i = 3; i < fibo; i++){
        fiboArray[i] = fiboArray[i - 1] + fiboArray[i - 2]
       
    }
    return fiboArray[fiboArray.length - 1]
  
}
export {calcularFibo}