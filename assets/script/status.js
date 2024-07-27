function statusreload() {
    const interval = setInterval(
        function actualreload() {
            document.getElementById('status').src = document.getElementById('status').src;
            clearInterval(interval);
        }, 5000
    );
}