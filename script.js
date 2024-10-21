function radiusOfCircle(){
    let radius = document.getElementById("user").value;
    
    if (radius > 0) {
        const pi = 3.142;

        // Calculate circumference and area
        let circumference = 2 * pi * radius;
        let area = pi * radius * radius;

        // Display the results
        document.getElementById('generate').innerHTML = `
           ♦ The circumference is: ${circumference.toFixed(2)}<br>
           ♦ The area is:${area.toFixed(2)}
        `;
    } else {
        document.getElementById('generate').innerHTML = "Please enter a valid radius!";
    }
}
