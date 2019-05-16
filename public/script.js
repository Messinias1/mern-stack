function handleClick() {
    console.log("button click successful!")

    const input = document.getElementById("input").value;

    const url = './data?input=' + input;

    axios.get(url)
        .then (res => {
            console.log(res)
                if (res.data.length > 0) {
                    const returnedData = res.data[0].word
                    document.getElementById('results').innerHTML = "<h2 id='goodResult'>The word " + returnedData +  " exists</h2>"
                } else {
                    document.getElementById('results').innerHTML = "<h2 id='badResult'>The word does not exist</h2>"
                }
        })
}