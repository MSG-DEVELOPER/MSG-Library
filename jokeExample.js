// jokeExample.js
document.getElementById("getJoke").addEventListener("click", function () {
  APIUtils.llamada_API_chuck()
    .then(function (joke) {
      document.getElementById("joke").innerText = joke;
    })
    .catch(function () {
      document.getElementById("joke").innerText =
        "Error al obtener el chiste.";
    });
});
