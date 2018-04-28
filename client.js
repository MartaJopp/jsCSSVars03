console.log('sourced');

const inputs = document.querySelectorAll('.controls input');
//querySelector returns a NodeList which looks like an array but 
//does not have all the methods it has. It has keys and entries.

function handleUpdate() {
    //dataset is an object that is all ready you don't have to use an attribute
    //selector
    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value)
}

inputs.forEach(input => input.addEventListener('change', handleUpdate))
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate))

//data attribute is an attribute you make up