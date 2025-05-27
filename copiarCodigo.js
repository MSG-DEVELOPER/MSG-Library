// copiarCodigo.js
function copiarCodigo() {
        const textarea = document.querySelector("textarea");
        textarea.select();
        document.execCommand("copy");
        alert("¡Código copiado!");
      }