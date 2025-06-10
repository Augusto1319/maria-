   function abrirTampa() {
    const container = document.getElementById('container');
    const mensagem = document.getElementById('mensagem');
    const coracoesContainer = document.getElementById('coracoes-container');
    const fotos = document.querySelectorAll('.foto');

    const aberta = container.classList.toggle('aberta');

    if (aberta) {
      mensagem.classList.add('visivel');

      const emojis = ['💖','💘','💝','💗','💓','💞','💕','💌','🎉','🎊','🎈','🌟','✨','🥳','🎁','🎂'];
      for (let i = 0; i < 20; i++) {
        const emoji = document.createElement('div');
        emoji.classList.add('coracao');
        emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
        emoji.style.left = `${Math.random() * 90 + 5}%`;
        emoji.style.bottom = '0';
        emoji.style.fontSize = `${Math.random() * 1.5 + 1.5}rem`;
        coracoesContainer.appendChild(emoji);
        setTimeout(() => emoji.remove(), 2000);
      }
    } else {
      mensagem.classList.remove('visivel');
    }
  }

  // Fotos expandem ao clique
  document.querySelectorAll('.foto').forEach(foto => {
    foto.addEventListener('click', () => {
      document.querySelectorAll('.foto').forEach(f => f.classList.remove('expandida'));
      foto.classList.add('expandida');
    });
  });