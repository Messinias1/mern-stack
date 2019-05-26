function handleClick() {
    console.log("button click successful!")

    const input = document.getElementById("input").value;

    const url = './data?input=' + input;

    axios.get(url)
        .then (res => {
            console.log(res)
                if (res.data.length > 0) {
                    const returnedData = res.data[0].word.toUpperCase()
                    document.getElementById('results').innerHTML = "<h2 id='goodResult'>" + returnedData +  " exists</h2>"
                } else {
                    document.getElementById('results').innerHTML = "<h2 id='badResult'>Does not exist</h2>"
                }
        })
}