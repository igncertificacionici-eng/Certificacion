document.getElementById("btnEnviar").addEventListener("click", async () => {
  const codigo = document.getElementById("codigo").value.trim();
  const tipo = document.getElementById("tipo").value;
  const archivo = document.getElementById("archivo").files[0];

  if (!codigo || !archivo) {
    alert("Debe ingresar el código y seleccionar un archivo.");
    return;
  }

  const formData = new FormData();
  formData.append("codigo", codigo);
  formData.append("tipo", tipo);
  formData.append("archivo", archivo);

  try {
    const response = await fetch("https://script.google.com/macros/s/AKfycbzCOkTdnTfA4GIQvmjrzJ2OLRPFjVeiz5ECqEHd6kPXhmqHRQjdXP9tQ7M6rrcT5TZlFw/exec", {
      method: "POST",
      body: formData
    });
    const result = await response.json();
    alert("Evidencia subida correctamente: " + result.url);
  } catch (error) {
    console.error(error);
    alert("Error al subir la evidencia.");
  }
});
