let conditions=true;


const proms= new Promise((resolve, reject) => {
    setTimeout(() => {
        if (conditions) {
            resolve ("Hello")
        } else {
            reject ("This condition faild")
        }
    }, 2000);
});