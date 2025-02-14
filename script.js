document.addEventListener("DOMContentLoaded", function() {
    const logs = JSON.parse(localStorage.getItem("dailyLogs")) || [];
    const logContainer = document.getElementById("log-container");

    if (logContainer) {
        logs.forEach(log => {
            const logEntry = document.createElement("div");
            logEntry.classList.add("log-entry");
            logEntry.innerHTML = `<h3>${log.date}</h3><p>${log.content}</p>`;
            logContainer.appendChild(logEntry);
        });
    }

    const logForm = document.getElementById("log-form");
    if (logForm) {
        logForm.addEventListener("submit", function(event) {
            event.preventDefault();
            const date = new Date().toLocaleDateString();
            const content = document.getElementById("log-text").value;

            logs.unshift({ date, content });
            localStorage.setItem("dailyLogs", JSON.stringify(logs));

            document.getElementById("log-text").value = "";
            location.reload();
        });
    }
});
