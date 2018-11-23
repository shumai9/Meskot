export function PostData(type, userData) {
    let BaseURL = 'https://shumai.co.uk/home/';
    //let BaseURL = 'http://localhost/socialapi/';
    
    return new Promise((resolve, reject) =>{
    fetch(BaseURL+type, {
        method: 'POST',
        body: JSON.stringify(userData),
        headers: { 'Content-Type': 'application/json; charset=UTF-8', mode: 'cors' }
    })
    .then((response) => response.json())
    .then((res) => {
        resolve(res);
    })
    .catch((error) => {
       reject(error);
    });
    
    });
    }