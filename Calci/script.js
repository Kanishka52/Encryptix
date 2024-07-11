function clearDisplay() {
    document.getElementById('display').innerText = '0';
}

function deleteLast() {
    const display = document.getElementById('display');
    display.innerText = display.innerText.slice(0, -1) || '0';
}

function appendCharacter(char) {
    const display = document.getElementById('display');
    if (display.innerText === '0') {
        display.innerText = char;
    } else {
        display.innerText += char;
    }
}

function calculateResult() {
    const display = document.getElementById('display');
    try {
        let num = eval(display.innerText);
        if(num == num.toFixed(13)){
            display.innerText = num;
        }
        else{
            display.innerText = num.toFixed(13);
        }
        
    } catch {
        display.innerText = 'Error';
    }
}