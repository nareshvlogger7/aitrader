document.addEventListener("DOMContentLoaded", function () {
    const menuForm = document.getElementById("menuForm");
    if (menuForm) {
        menuForm.addEventListener("submit", function (event) {
            event.preventDefault();
            const stopLoss = document.getElementById("stopLoss").value;
            const profitTarget = document.getElementById("profitTarget").value;
            // Send stopLoss and profitTarget to server
            axios.post('/connect', { stopLoss, profitTarget })
                .then(response => {
                    const { success, accessToken } = response.data;
                    if (success) {
                        // Redirect to ema_strategy.html with accessToken
                        window.location.href = `ema_strategy.html?accessToken=${accessToken}`;
                    } else {
                        // Handle error
                    }
                })
                .catch(error => {
                    console.error('Error connecting to server:', error);
                });
        });
    }
});
