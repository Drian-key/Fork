function pilihanBot(){
    const Bot = Math.round(Math.random() * 3);

    if(Bot == 1) return 'gajah';
    if(Bot == 2) return 'orang';
    return 'semut';
}

function rules(Bot, player){
    if(player == Bot) return 'Seri';
    if(player == "gajah") return (Bot == 'orang') ? 'Menang' : 'kalah';
    if(player == "orang") return (Bot == 'gajah') ? 'kalah' : 'menang';
    if(player == "semut") return (Bot == 'orang') ? 'kalah' : 'menang';
}

function acak(){
    const imgCOM = document.querySelector('.img-komputer');
    const gambar = ['gajah', 'semut', 'orang'];
    let i = 0;
    const waktuM = new Date().getTime();
    setInterval(function(){
        if(new Date().getTime() - waktuM > 1000){
            clearInterval;
            return;
        }
        imgCOM.setAttribute('src', 'img/' + gambar[i++] + '.png');
        if(i == gambar.length) i = 0;
    }, 100);
}


const pilihan = document.querySelectorAll('li img');

pilihan.forEach(function(pil){
    pil.addEventListener('click', function(){
        const pilihanCOM = pilihanBot();
        const pilihanP = pil.className;
        const hasill = rules(pilihanCOM, pilihanP);
        acak();
        
        setTimeout(function(){
            const imgCOM = document.querySelector('.img-komputer');
            imgCOM.setAttribute('src', 'img/' + pilihanCOM + '.png');

            const info = document.querySelector('.info');
            info.innerHTML = '<h2>' + hasill + '</h2>';
        }, 1000);
        
    });
}); 


playerGajah.addEventListener('click', function(){
    const pilihanCOM = pilihanBot();
    const pilihanP = playerGajah.className;
    const hasill = rules(pilihanCOM, pilihanP);

    // console.log('comp : ' + pilihanCOM);
    // console.log('player : ' + pilihanP);
    // console.log('hasil : ' + hasill);

    const imgCOM = document.querySelector('.img-komputer');
    imgCOM.setAttribute('src', 'img/' + pilihanCOM + '.png');

    const info = document.querySelector('.info');
    info.innerHTML = '<h2>' + hasill + '</h2>';
});
playerOrang.addEventListener('click', function(){
    const pilihanCOM = pilihanBot();
    const pilihanP = playerOrang.className;
    const hasill = rules(pilihanCOM, pilihanP);

    // console.log('comp : ' + pilihanCOM);
    // console.log('player : ' + pilihanP);
    // console.log('hasil : ' + hasill);

    const imgCOM = document.querySelector('.img-komputer');
    imgCOM.setAttribute('src', 'img/' + pilihanCOM + '.png');

    const info = document.querySelector('.info');
    info.innerHTML = '<h2>' + hasill + '</h2>';
});
playerSemut.addEventListener('click', function(){
    const pilihanCOM = pilihanBot();
    const pilihanP = playerSemut.className;
    const hasill = rules(pilihanCOM, pilihanP);

    // console.log('comp : ' + pilihanCOM);
    // console.log('player : ' + pilihanP);
    // console.log('hasil : ' + hasill);

    const imgCOM = document.querySelector('.img-komputer');
    imgCOM.setAttribute('src', 'img/' + pilihanCOM + '.png');

    const info = document.querySelector('.info');
    info.innerHTML = '<h2>' + hasill + '</h2>';
});


