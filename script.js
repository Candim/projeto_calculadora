let numero1 = null;
let numero2 = null;
let operacaoVariavel = null;
let total = null;


function LimparCampo(){
    $("#campo-digitacao").val("");
    
}
function AdicionarNumero(numero) {
    let numeroAnterior = $("#campo-digitacao").val();
    $("#campo-digitacao").val(numeroAnterior + numero);
}
function EscolherOperacao(operacao){
    console .log (operacaoVariavel)
    switch(operacao){
        case "adicao":
            if(numero1==operacaoVariavel){
                numero2 = $("#campo-digitacao").val();
            }else{
                numero1 = $("#campo-digitacao").val();
            }
            operacaoVariavel = "adicao";
            LimparCampo()
            
        break;
        case "divisao":
            if(numero1==operacaoVariavel){
                numero2 = $("#campo-digitacao").val();
            }else{
                numero1 = $("#campo-digitacao").val();
            }
            operacaoVariavel = "divisao";
            LimparCampo()
        break;
        case "multiplicacao":
            if(numero1==operacaoVariavel){
                numero2 = $("#campo-digitacao").val();
            }else{
                numero1 = $("#campo-digitacao").val();
            }
            operacaoVariavel = "multiplicacao";
            LimparCampo()
        break;
        case "subtracao":
            if(numero1==operacaoVariavel){
                numero2 = $("#campo-digitacao").val();
            }else{
                numero1 = $("#campo-digitacao").val();
            }
            operacaoVariavel ="subtracao";
            LimparCampo()
        break;
        case "igual":
            if(numero1){
                numero2 = $("#campo-digitacao").val();
            }else{
               numero1 = $("#campo-digitacao").val();
            }
           
            ExecutarOperacao();
            break;
            default:
            break;
                
            }    
    }
function ExecutarOperacao(){
    switch (operacaoVariavel) {
        case "adicao":
            total = parseFloat(numero1) + parseFloat(numero2);
            $("#campo-digitacao").val(numero1+'+'+numero2+'='+total);
            break;
        case "divisao":
            total = parseFloat(numero1) / parseFloat(numero2);
            $("#campo-digitacao").val(numero1+'÷'+numero2+'='+total);
            break;
        case "multiplicacao":
            total = parseFloat(numero1) * parseFloat(numero2);
            $("#campo-digitacao").val(numero1+'x'+numero2+'='+total);
            break;
        case "subtracao":
            total = parseFloat(numero1) - parseFloat(numero2);
            $("#campo-digitacao").val(numero1+'-'+numero2+'='+total);
            break;
            default:
            break;
    
        
        
    }
}