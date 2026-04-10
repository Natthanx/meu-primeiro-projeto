// Mensagem de boas-vindas no console
console.log("Bem-vindo ao seu primeiro projeto Git!");

// Exemplo de interatividade simples: mudar o texto do rodapé ao clicar
document.addEventListener('DOMContentLoaded', () => {
    const footer = document.querySelector('footer p');
    
    footer.addEventListener('click', () => {
        footer.innerHTML = "✨ Você aprendeu a interagir com o DOM!";
        footer.style.color = "#a855f7";
        footer.style.cursor = "pointer";
    });
});
