let allInputFields = document.querySelectorAll('input');
let image = document.getElementById('background')


console.log(allInputFields)

 function handleChange(){
        let type = this.dataset.type || " ";
        console.log(this.name, this.value, type)
        document.documentElement.style.setProperty(`--${this.name}`, `${this.value}${type}`)
    }


allInputFields.forEach((inputField) =>{
    console.log(inputField.value)

    inputField.addEventListener("change", handleChange);
    inputField.addEventListener("mousemove", handleChange)

   

})

