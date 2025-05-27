 const btnPreview = document.getElementById("btn-preview");
  const cssOutput = document.getElementById("css-output");

  const inputs = {
    bg: document.getElementById("input-bg"),
    padding: document.getElementById("input-padding"),
    fontSize: document.getElementById("input-fontsize"),
    radius: document.getElementById("input-radius")
  };

  function actualizarEstilos() {
    const bg = inputs.bg.value;
    const padding = inputs.padding.value;
    const fontSize = inputs.fontSize.value;
    const radius = inputs.radius.value;

    btnPreview.style.backgroundColor = bg;
    btnPreview.style.padding = padding;
    btnPreview.style.fontSize = fontSize;
    btnPreview.style.borderRadius = radius;

    const css = `#btn-chuck {
background-color: ${bg};
padding: ${padding};
font-size: ${fontSize};
border-radius: ${radius};
}`;
    cssOutput.value = css;
  }

  Object.values(inputs).forEach(input => {
    input.addEventListener("input", actualizarEstilos);
  });

  document.getElementById("btn-copy").addEventListener("click", function () {
    cssOutput.select();
    document.execCommand("copy");
    alert("¡CSS copiado!");
  });

  actualizarEstilos(); // inicializa con valores por defecto