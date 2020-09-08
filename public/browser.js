document.addEventListener("click", function(e) {
    if (e.target.classList.contains("edit-me")) {
        let userInput = prompt("Enter new text")
        axios.post('/update-item', {text: userInput}).then(function() {
            // TODO: Something
        }).catch(function() {
            console.log("Please try again later")
        })
    }
})