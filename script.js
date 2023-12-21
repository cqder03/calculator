const displayContent = document.querySelector("#display-content");
const buttons = document.querySelector('#button-wrapper');

// For entering the numbers in to the display //
buttons.addEventListener('click', (event) => {
  let numberId = event.target.id;
    switch(numberId) {
      case '1':
				if(displayContent.textContent == '0') {
					displayContent.textContent = '1';	
				} else {
					displayContent.textContent += '1';
				}
				break;
			case '2':
        if(displayContent.textContent == '0') {
					displayContent.textContent = '2';	
				} else {
					displayContent.textContent += '3';
				}
				break;
			case '3':
        if(displayContent.textContent == '0') {
					displayContent.textContent = '3';	
				} else {
					displayContent.textContent += '3';
				}
				break;
			case '4':
        if(displayContent.textContent == '0') {
					displayContent.textContent = '4';	
				} else {
					displayContent.textContent += '4';
				}
				break;
			case '5':
        if(displayContent.textContent == '0') {
					displayContent.textContent = '5';	
				} else {
					displayContent.textContent += '5';
				}
				break;
			case '6':
        if(displayContent.textContent == '0') {
					displayContent.textContent = '6';	
				} else {
					displayContent.textContent += '6';
				}
				break;
			case '7':
        if(displayContent.textContent == '0') {
					displayContent.textContent = '7';	
				} else {
					displayContent.textContent += '7';
				}
				break;
			case '8':
        if(displayContent.textContent == '0') {
					displayContent.textContent = '8';	
				} else {
					displayContent.textContent += '8';
				}
				break;
			case '9':
        if(displayContent.textContent == '0') {
					displayContent.textContent = '9';	
				} else {
					displayContent.textContent += '9';
				}
				break;
			case '0':
        displayContent.textContent += '0';
				break;
			case 'DOT':
        if(displayContent.textContent.includes('.')) {
					break;
				}
				displayContent.textContent += '.';
				break;
    }
});


