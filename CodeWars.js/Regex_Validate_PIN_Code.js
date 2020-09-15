/*
ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything 
but exactly 4 digits or exactly 6 digits.

If the function is passed a valid PIN string, return true, else return false.

*/



//Function to validate pin number 
function validatePIN(pin) {
    //Return false if pin length isn't 4 or 6
    if (pin.length === 4 || pin.length == 6) {
        //Loop through each pin and validate each value is an int 0 - 9
        for (let x = 0; x < pin.length; x++) {
            let currentPinNumber = parseInt(pin[x])
            //Return false is current value is NaN
            if (Number.isNaN(currentPinNumber)) {
                return false
            }
        }
        //Return true if value is an int between 0 -9
        return true
    }
    return false
}