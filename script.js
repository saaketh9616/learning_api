const jokes = document.querySelector('#saaketh'); 
const funcBtn = document.querySelector('#funcBtn'); 
const generatequotes = () => {
    const func = {
        headers: {
            Accept : "application/json"
        }
    }
    fetch('https://type.fit/api/quotes', func)
    .then((res) => res.json() )
    .then((data) =>{
        var i = Math.floor(Math.random() * (1643 - 0) + 0);
        jokes.innerHTML = data[i].text;

    }).catch((error) =>{
        console.log(error);
    })

    fetch('https://source.unsplash.com/random', func)
    // .then((res) => res.json() )
    .then((data) =>{
        document.querySelector('.a').src = data.url;
    }).catch((error) =>{
        console.log('error');
    })
};

funcBtn.addEventListener('click', generatequotes);
generatequotes();
