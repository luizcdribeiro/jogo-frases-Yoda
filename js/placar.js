function inserePlacar () {
  var tabela = $(".placar").find("tbody");
  var usuario = "Luiz";
  var numPalavras = $("#contador-palavras").text();
  var linha = insereLinha(usuario, numPalavras);

  linha.find(".botao-remover").click(removeLinha);

  tabela.prepend(linha)
}


function insereLinha(usuario, numPalavras){
  var linha = $("<tr>");
  var colunaUsuario = $('<td>').text(usuario);
  var colunaPalavras = $('<td>').text(numPalavras);
  var colunaRemover = $("<td>");
  var link = $("<a>").addClass("botao-remover").attr("href", "#");
  var icone = $("<i>").addClass("small").addClass("material-icons").text("delete");

  link.append(icone);
  colunaRemover.append(link);

  linha.append(colunaUsuario);
  linha.append(colunaPalavras);
  linha.append(colunaRemover);

  return linha;
}

function removeLinha(event) {
      {event.preventDefault();
      $(this).parent().parent().remove();}
}