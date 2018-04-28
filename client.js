console.log('sourced');

const inputs = document.querySelectorAll('.controls input');
//querySelector returns a NodeList which looks like an array but 
//does not have all the methods it has. It has keys and entries.

function handleUpdate() {
    console.log(this.value)
}

inputs.forEach(input => input.addEventListener('change', handleUpdate))