const addMessage = async () => {
    var name = document.getElementById("name").value
    var email = document.getElementById("email").value
    var subject = document.getElementById("subject").value
    var message = document.getElementById("message").value

    try {
        const response = await fetch('http://127.0.0.1:5000/insert_message/'
            + name + '/' + email + '/' + subject + '/' + message, {method: 'POST',});
        const data = await response.json();

        //	enter you logic when the fetch is successful
        console.log(data);
    }
    catch(error) {
        // enter your logic for when there is an error (ex. error toast)
        console.log(error)
    }
}