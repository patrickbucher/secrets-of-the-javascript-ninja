const url = "https://xkcd.com/info.0.json";

function getJSON(url) {
    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();
        request.open("GET", url);
        request.onload = function () {
            try {
                if (this.status === 200) {
                    resolve(JSON.parse(this.response));
                } else {
                    reject(this.status + " " + this.statusText);
                }
            } catch(e) {
                reject(e.message);
            }
        };
        request.onerror = function() {
            reject(this.status + " " + this.statusText);
        };
        request.send();
    });
}

getJSON(url).then(data => {
    console.dir(data);
}).catch(e => console.log("error: " + e));
