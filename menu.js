

let pedido = prompt("ESCOLHA A SUA OPÇÃO \n 1- X-Burguer \n X-Salada \n 3-Lanchinho")

    switch (pedido) {
    case "1":
        alert(" X-Burguer (Descrição: hamburguer, alface e tomate)")
        break
   
        case "2":
        alert("Descrição: bife de franco, cebola e molho especial")
        break
    case "3":
        alert("Descrição: pão integral, queijo prato e alface americano")
    break

    default: alert("PEDIDO INDEFINIDO")
        break;
}
