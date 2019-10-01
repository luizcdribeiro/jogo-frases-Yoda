$("#botao-frase").click(fraseALeatoria);

function fraseALeatoria() {
  $("#spinner").toggle();
  $.get("http://localhost:3000/frases", trocaFrase)
  .fail(function(){
    $("#erro").show();
    setTimeout(function(){
      $("#erro").toggle();
    }, 2000)
  })
  .always(function(){
    $("#spinner").toggle();
  })

};

function trocaFrase(data){
  var frase = $(".frase");
  var numeroAleatorio = Math.floor(Math.random() * data.length);

  frase.text(data[numeroAleatorio].texto);

  atualizaTamanhoFrase();
  atualizaTempoInicial(data[numeroAleatorio].tempo);
}