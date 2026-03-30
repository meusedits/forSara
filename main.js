window.addEventListener("DOMContentLoaded", () => {
    document.body.classList.remove("container");

    const mensagem = document.getElementById("mensagem");
    const nome = "Sara";

    mensagem.innerText = `Essas flores são para você, ${nome} 💜
    Só que perto de alguém tão linda, elas viram detalhe. Sábado eu compenso isso direito, gatinha.`;

    const audio = new Audio("music.mpeg");
    audio.loop = true;
    audio.volume = 0.5;

    // Requer interação do usuário em alguns navegadores, por isso é ativado ao clicar
    document.body.addEventListener("click", () => {
        if (audio.paused) {
            audio.play().catch(() => {});
        }
    });

    // Se o navegador permitir autoplay, tenta já iniciar.
    audio.play().catch(() => {
        // Autoplay bloqueado, aguardando clique.
    });

    document.querySelectorAll(".flower").forEach(flor => {
          flor.addEventListener("click", () => {

              // efeito de escala (pulso)
              flor.classList.add("ativa");

              // cria mensagem flutuante
              const msg = document.createElement("div");
              msg.className = "msg-flor";
              msg.innerText = "💜";

              document.body.appendChild(msg);

              // posição aleatória perto da flor
              const rect = flor.getBoundingClientRect();
              msg.style.left = rect.left + rect.width / 2 + "px";
              msg.style.top = rect.top + "px";

              // remove depois
              setTimeout(() => {
                  msg.remove();
              }, 1500);

              // remove efeito da flor
              setTimeout(() => {
                  flor.classList.remove("ativa");
              }, 300);
          });
      });

});