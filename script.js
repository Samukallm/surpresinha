let flipState = 0;

function Cantada() {
    document.body.classList.add('flip');
    setTimeout(() => {
        if (flipState === 0) {
            document.getElementById('img1').innerHTML = '<img src="imgs/emoji vergonha.jpeg" alt="Emoji Vergonha" class="img-fluid">';
            document.getElementById('img2').innerHTML = '<img src="imgs/emoji jóia.jpg" alt="Emoji Jóia" class="img-fluid">';
            document.getElementById('main-title').innerHTML = '1. Eu vou ficar muito feliz!';
            flipState = 1;
        } else if (flipState === 1) {
            document.getElementById('img1').innerHTML = '<img src="imgs/emoji jóia.jpg" alt="Emoji Jóia" class="img-fluid">';
            document.getElementById('img2').innerHTML = '<img src="imgs/emoji flornaboca.jpg" alt="Emoji Flor na Boca" class="img-fluid">';
            document.getElementById('main-title').innerHTML = '2. Sou Romântico, as vezes!';
            flipState = 2;
        } else if (flipState === 2) {
            document.getElementById('img1').innerHTML = '<img src="imgs/emoji choro.jpg" alt="Emoji Choro" class="img-fluid">';
            document.getElementById('img2').innerHTML = '<img src="imgs/emoji triste.jpg" alt="Emoji Triste" class="img-fluid">';
            document.getElementById('main-title').innerHTML = '3. Eu ficaria triste se você não quiser :('; 
            flipState = 3;
        } else if (flipState === 3) {
            document.getElementById('img1').innerHTML = '<img src="imgs/emoji vergonha.jpeg" alt="Emoji Vergonha" class="img-fluid">';
            document.getElementById('img2').innerHTML = '<img src="imgs/WhatsApp Image 2025-07-21 at 22.53.06.jpeg" alt="WhatsApp Image" class="img-fluid">';
            document.getElementById('main-title').innerHTML = '4. Eu passei a noite fazendo o site pra você!';
            flipState = 4;
        } else if (flipState === 4) {
            document.getElementById('img1').innerHTML = '<img src="imgs/emoji nervoso.png" alt="Emoji Jóia" class="img-fluid">';
            document.getElementById('img2').innerHTML = '<img src="imgs/emoji flornaboca.jpg" alt="Emoji Coração" class="img-fluid">';
            document.getElementById('main-title').innerHTML = '5. Já chegou até aqui... Por que não me dá uma chance? ❤️✨';
            // Remove o botão ao chegar na última etapa
            var btn = document.getElementById('btn-cantada');
            if (btn) btn.parentNode.removeChild(btn);
            flipState = 5;
        }
    }, 350);
    setTimeout(() => {
        document.body.classList.remove('flip');
    }, 700);
}