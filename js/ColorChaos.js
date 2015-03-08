function invertColor(hexTripletColor) {
    var color = hexTripletColor;
    color = color.substring(1);           // remove #
    color = parseInt(color, 16);          // convert to integer
    color = 0xFFFFFF ^ color;             // invert three bytes
    color = color.toString(16);           // convert to hex
    color = ("000000" + color).slice(-6); // pad with leading zeros
    color = "#" + color;                  // prepend #
    return color;
}    
        
function randomColor() {
    var randomNumber = Math.floor(Math.random() * Math.pow(2, 24));
    var color = randomNumber.toString(16);
    color = ("000000" + color).slice(-6); 
    color = "#" + color;                  
    return color;
}