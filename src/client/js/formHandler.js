import fetch from "node-fetch";

const postData = async(url = '', data = {}) => {

    const res = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        // Body data type must match "Content-Type" header        
        body: JSON.stringify(data),
    });

    try {
        const newData = await res.json();
        return newData;
    } catch (error) {
        console.log("error", error);
    }
};

const handleSubmit = (event) => {

    event.preventDefault();

    // check what text was put into the form field
    let formText = document.getElementById('name').value;
    Client.checkForName(formText);

    console.log("::: Form Submitted :::");

    if (Client.checkForName(formText)) {

        Client.postData('http://localhost:8081/text', { text: formText })
            // .then(res => res.json())
            .then((res) => {
                console.log(res);
                console.log(res.apiData);
                // document.getElementById('results').innerHTML = res.apiData;
                document.getElementById('agreement').innerHTML = res.apiData.agreement;
                document.getElementById('confidence').innerHTML = res.apiData.confidence;
                document.getElementById('subjectivity').innerHTML = res.apiData.subjectivity;
                document.getElementById('irony').innerHTML = res.apiData.irony;
                document.getElementById('score-tag').innerHTML = res.apiData.score_tag;
            });
    } else {
        alert('Wrong URL!\nPlease, Enter a Valid One');
    }
    // return true;
};

export { handleSubmit, postData };