//trouve les éléments importants
const input = document.getElementById('input');
const messages = document.getElementById('messages');

//Ecoute les évènements de touche enfoncée sur input
input.addEventListener('keypress', (event) => {
    // Checks if the key pressed was ENTER
    if (event.keyCode === 13) {
        // Checks the field is valid
        if (input.validity.valid) {
            // Creates a DOM element using the value
            const message = createMessage(input.value);
            // Appends the new message to the list
            messages.appendChild(message);
            // Clears the field
            input.value = '';
            // Scrolls the messages to the bottom
            messages.parentNode.scrollTop = messages.parentNode.scrollHeight;
        }
    }
});
//Convertit la valeur en chaîne HTML
function createMessage (value){
	//Attention: N'utilisez pas ce code en production sans le nettoyer avant!
	return stringToDom("<li><div class='message'>${value}</div></li>");	
};
//convertit la chaîne en vrai DOM
function stringToDOM (string){
	const template = document.createElement('template');
	template.innerHTML = string.trim();
	return template.content.firstChild;
};

