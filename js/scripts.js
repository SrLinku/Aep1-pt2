function CarregarConteudoPagina(NomeHTML) {
  let contentDiv = document.getElementById('content')

  $.get(
    `pages/${NomeHTML}`,
    function (html_string) {
      if (contentDiv != null) {
        contentDiv.innerHTML = html_string
      }
    },
    'html'
  )
}

window.addEventListener('DOMContentLoaded', (event) => {
  CarregarConteudoPagina('hub.html')
})



/* Ver mais */
function toggleContent(moreContentId, button) {
  var moreContent = document.getElementById(moreContentId);

  if (moreContent.style.display === "none") {
      moreContent.style.display = "inline";
      button.textContent = "Ver Menos";
  } else {
      moreContent.style.display = "none";
      button.textContent = "Ver Mais";
  }
}

