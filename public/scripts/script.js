document.querySelector('.header__dropdown').addEventListener('click', () => {
    document.querySelector('.navigation').classList.toggle('navigation--hidden');
});

document.querySelectorAll('.navigation__link').forEach(link => {
    link.addEventListener('click', () => {
        sendAsset(link.dataset.path, link.dataset.file);
    })
})

async function sendAsset(path, fileName) {
    let query = await fetch(path, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({fileName})
    })

    let res = await query.text();
    document.getElementById('container').innerHTML = res;
}

sendAsset('/');