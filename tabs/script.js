const tabs = document.querySelectorAll(".nav-link");
const panes = document.querySelectorAll(".tab-pane");

tabs.forEach(tab => {
    tab.addEventListener("click", (e) => {
        e.preventDefault(); // Impede o comportamento padrão do link

        // Remove a classe 'active' de todas as abas
        tabs.forEach(t => t.parentElement.classList.remove("active"));
        // Ativa a aba clicada
        tab.parentElement.classList.add("active");

        // Remove a classe 'active' de todos os tab-panes
        panes.forEach(pane => pane.classList.remove("active"));

        // Ativa o tab-pane correspondente
        const targetId = tab.getAttribute("href").substring(1); // pega o ID sem o "#"
        const targetPane = document.getElementById(targetId);
        if (targetPane) {
            targetPane.classList.add("active");
        }
    });
});
