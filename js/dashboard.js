const hamBurger = document.querySelector(".toggle-btn");

hamBurger.addEventListener("click", function () {
  document.querySelector("#sidebar").classList.toggle("expand");
});

/* dashboard botao receita edespesa */

document.addEventListener('DOMContentLoaded', (event) => {
  // Receita modal
  var modalReceita = document.getElementById("modalReceita");
  var btnReceita = document.getElementById("criarReceitaBtn");
  var spanReceita = modalReceita.getElementsByClassName("close")[0];

  btnReceita.onclick = function() {
      modalReceita.style.display = "block";
      setTimeout(() => modalReceita.classList.add('show'), 10); // Adiciona a classe 'show' após um pequeno atraso
  }

  spanReceita.onclick = function() {
      modalReceita.classList.remove('show');
      setTimeout(() => modalReceita.style.display = "none", 300); // Remove o display após a animação
  }

  window.onclick = function(event) {
      if (event.target == modalReceita) {
          modalReceita.classList.remove('show');
          setTimeout(() => modalReceita.style.display = "none", 300); // Remove o display após a animação
      }
  }

  // Despesa modal
  var modalDespesa = document.getElementById("modalDespesa");
  var btnDespesa = document.getElementById("criarDespesaBtn");
  var spanDespesa = modalDespesa.getElementsByClassName("close")[0];

  btnDespesa.onclick = function() {
      modalDespesa.style.display = "block";
      setTimeout(() => modalDespesa.classList.add('show'), 10); // Adiciona a classe 'show' após um pequeno atraso
  }

  spanDespesa.onclick = function() {
      modalDespesa.classList.remove('show');
      setTimeout(() => modalDespesa.style.display = "none", 300); // Remove o display após a animação
  }

  window.onclick = function(event) {
      if (event.target == modalDespesa) {
          modalDespesa.classList.remove('show');
          setTimeout(() => modalDespesa.style.display = "none", 300); // Remove o display após a animação
      }
  }

  
  // Categoria modal
  var modalCategoria = document.getElementById("modalCategoria");
  var btnCategoria = document.getElementById("criarCategoriaBtn");
  var spanCategoria = modalCategoria.getElementsByClassName("close")[0];

  btnCategoria.onclick = function() {
    modalCategoria.style.display = "block";
    setTimeout(() => modalCategoria.classList.add('show'), 10); // Adiciona a classe 'show' após um pequeno atraso
  }

  spanCategoria.onclick = function() {
    modalCategoria.classList.remove('show');
    setTimeout(() => modalCategoria.style.display = "none", 300); // Remove o display após a animação
  }

  window.onclick = function(event) {
    if (event.target == modalCategoria) {
        modalCategoria.classList.remove('show');
        setTimeout(() => modalCategoria.style.display = "none", 300); // Remove o display após a animação
    }
  }
});


