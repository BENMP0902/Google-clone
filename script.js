<script>
  // Seleccionamos los elementos necesarios
  const input = document.querySelector('main .main-input input');
  const botones = document.querySelectorAll('main .main-buttons button');

  // Función que redirige según el tipo de búsqueda
  function buscar(tipo) {
    const query = input.value.trim(); // eliminamos espacios al inicio y final
    if (!query) return; // si no hay nada escrito, no hace nada

    if (tipo === 'google') {
      // Redirige a búsqueda normal
      window.location.href = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
    } else if (tipo === 'lucky') {
      // Redirige a "Me siento con suerte"
      window.location.href = `https://www.google.com/search?q=${encodeURIComponent(query)}&btnI=I'm+Feeling+Lucky`;
    }
  }

  // Detecta Enter en el input y hace búsqueda normal
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      buscar('google');
    }
  });

  // Detecta clic en los botones
  botones.forEach((boton, index) => {
    if (index === 0) {
      boton.addEventListener('click', () => buscar('google'));
    } else if (index === 1) {
      boton.addEventListener('click', () => buscar('lucky'));
    }
  });
</script>
