/*    1 - Pipoca – 10 segundos (padrão);
      2 - Macarrão – 8 segundos (padrão);
      3 - Carne – 15 segundos (padrão);
      4 - Feijão – 12 segundos (padrão);
      5 - Brigadeiro – 8 segundos (padrão); 
*/
console.log(
        `
          Bem vindo ao menu!!

      1 - Pipoca – 10 segundos (padrão);
      2 - Macarrão – 8 segundos (padrão);
      3 - Carne – 15 segundos (padrão);
      4 - Feijão – 12 segundos (padrão);
      5 - Brigadeiro – 8 segundos (padrão);
        ` 
          )


let menu = 0

  function microondas (menu, tempo) {
    let tinicio = 0
    let prato = ""

    switch(menu) {
      case 1:
        tinicio = 10
        prato = "Pipoca"
          break;
      case 2:
        tinicio = 8
        prato = "Macarrão"
          break;
      case 3:
        tinicio = 15
        prato = "Carne"
          break;
      case 4:
        tinicio= 12
        prato = "Feijão"
          break;
      case 5:
        tinicio = 8
        prato = "Brigadeiro"
          break;
      default:
        return console.log("Prato inexistente");
      
    }
    if(tempo >= 2 * tinicio && tempo < 3 * tinicio) {
      console.log("A comida queimou")
    }
    else if (tempo < tinicio) {
      console.log("O tempo é insuficiente, tente aumentar")
    }
    else if (tempo >= 3* tinicio) {
      console.log("Chama o bombeiro lá meo")
    }
    else if (tempo >= tinicio && tempo < 2* tinicio) {
      console.log("Prato feito, bom apetite!")
    }
  }

microondas(5,100) 

/* Sono.. finalmente*/