// This file demonstrates creating and handling promises in JavaScript.

function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = { message: "Data fetched successfully!" };
            resolve(data);
        }, 2000);
    });
}

fetchData()
    .then(response => {
        console.log(response.message);
    })
    .catch(error => {
        console.error("Error fetching data:", error);
    });