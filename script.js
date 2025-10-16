document.getElementById("explorar").addEventListener("click", () => {alert("Em breve poderá explorar jogos e mods!");});

function mostrarNotificacao() {
    const notif = document.getElementById('notificacao');
    notif.classList.add('show');

    // Sai depois de 20 segundos
    setTimeout(() => {
        notif.classList.remove('show');
    }, 20000);
}

// Primeira aparição 30 segundos após abrir o site
setTimeout(() => {
    mostrarNotificacao();

    // Depois reaparece a cada 5 minutos
    setInterval(mostrarNotificacao, 5 * 60 * 1000); 
}, 30000);
