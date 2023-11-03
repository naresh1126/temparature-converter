document.getElementById("convert").addEventListener("click", function () {
    var celsius = parseFloat(document.getElementById("celsius").value);
    if (!isNaN(celsius)) {
        var fahrenheit = (celsius * 9 / 5) + 32;
        document.getElementById("fahrenheit").textContent = fahrenheit.toFixed(2);
    } else {
        alert("Please enter a valid number for Celsius.");
    }
});
