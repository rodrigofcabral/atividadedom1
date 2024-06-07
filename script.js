function BemVindo() {

    var nome = document.getElementById("nome").value
    var senha = document.getElementById("senha").value
    
     if (senha == "dt187187") {
     document.write("Olá " + nome + " , seja bem vindo !")
     } else {
     document.write("Senha incorreta !")
     }

}
