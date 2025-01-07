window.onload = function () {
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    var W = window.innerWidth;
    var H = window.innerHeight;
    canvas.width = W;
    canvas.height = H;
    var fontSize = 15;
    var columns = Math.floor(W / fontSize);
    var drops = Array(columns).fill(0);
    var str = "01abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

    function draw() {
        context.fillStyle = "rgba(0,0,0,0.05)";
        context.fillRect(0, 0, W, H);
        context.font = fontSize + 'px arial';
        context.fillStyle = "green";
        for (var i = 0; i < columns; i++) {
            var char = str[Math.floor(Math.random() * str.length)];
            var x = i * fontSize;
            var y = drops[i] * fontSize;
            context.fillText(char, x, y);

            if (y >= canvas.height && Math.random() > 0.92) {
                drops[i] = 0;
            }
            drops[i]++;
        }
    }
    setInterval(draw, 50);
};