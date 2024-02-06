const conversor2000 = (unidadeSelecionada, medidaSelecionada, valor)=>{
    if(unidadeSelecionada == medidaSelecionada){
        return valor
    }
    if(isNaN(valor)){
        return `Isso não é um número`
    }
    switch (`${unidadeSelecionada}-${medidaSelecionada}`) {
        case "km-hm":
            return valor * 10;
        case "km-dam":
            return valor * 100;
        case "km-m":
            return valor * 1000;
        case "km-dm":
            return valor * 10000;
        case "km-cm":
            return valor * 100000;
        case "km-mm":
            return valor * 1000000;
        case "hm-km":
            return valor/10
        case "hm-dam":
            return valor * 10;
        case "hm-m":
            return valor * 100;
        case "hm-dm":
            return valor * 1000;
        case "hm-cm":
            return valor * 10000;
        case "hm-mm":
            return valor * 100000;
        case "dam-km":
            return valor / 100;
        case "dam-hm":
            return valor / 10;
        case "dam-m":
            return valor * 10;
        case "dam-dm":
            return valor * 100;
        case "dam-cm":
            return valor * 1000;
        case "dam-mm":
            return valor * 10000;
        case "m-km":
            return valor / 1000;
        case "m-hm":
            return valor / 100;
        case "m-dam":
            return valor / 10;
        case "m-dm":
            return valor * 10;
        case "m-cm":
            return valor * 100;
        case "m-mm":
            return valor * 1000;
        case "dm-km":
            return valor / 10000;
        case "dm-hm":
            return valor / 1000;
        case "dm-dam":
            return valor / 100;
        case "dm-m":
            return valor / 10;
        case "dm-cm":
            return valor * 10;
        case "dm-mm":
            return valor * 100;
        case "cm-km":
            return valor / 100000;
        case "cm-hm":
            return valor / 10000;
        case "cm-dam":
            return valor / 1000;
        case "cm-m":
            return valor / 100;
        case "cm-dm":
            return valor / 10;
        case "cm-mm":
            return valor * 10;
        case "mm-km":
            return valor / 1000000;
        case "mm-hm":
            return valor / 100000;
        case "mm-dam":
            return valor / 10000;
        case "mm-m":
            return valor / 1000;
        case "mm-dm":
            return valor / 100;
        case "mm-cm":
            return valor / 10;
    }
}
export {conversor2000}