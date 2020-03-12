const cadastrar = user => {
    
    const requestInfo = {
        method: 'POST',
        body: JSON.stringify(user),
        headers: new Headers({
            'Content-type': 'application/json',
        }),
    };

    fetch('http://localhost:8080', requestInfo)
    .then(response => {
        response.json().then(data => alert(data.msg));
    })

};
export default cadastrar;
