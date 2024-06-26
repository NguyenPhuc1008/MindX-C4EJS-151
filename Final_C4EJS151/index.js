const images = ['img/bau.png', 'img/ca.png', 'img/cua.png', 'img/ga.png', 'img/huou.png', 'img/tom.png'];
let betPoints = {
    'bau.png': 0,
    'ca.png': 0
}
const message = document.getElementById('result');
let spinning = false;
//Quay random 3 hinh 
function spinWheel() {
    if (spinning) return;
    spinning = true;
    document.getElementById('spinButton').disabled = true;
    document.getElementById('resetButton').disabled = true;

    let spins = 0;
    const maxSpins = 100;
    const spinInterval = setInterval(() => {
        document.getElementById('resultImg1').src = images[Math.floor(Math.random() * images.length)];
        document.getElementById('resultImg2').src = images[Math.floor(Math.random() * images.length)];
        document.getElementById('resultImg3').src = images[Math.floor(Math.random() * images.length)];
        spins++;
        if (spins >= maxSpins) {
            clearInterval(spinInterval);
            spinning = false;
             document.getElementById('spinButton').disabled = false;
             document.getElementById('resetButton').disabled = false;
             checkResult();
        }
    }, 50);

}
let bets = [0, 0, 0, 0, 0, 0];
const MAX_BET = 3;
//Diem dat cuoc
function placeBet(index) {
    if (spinning) return;

    // Kiểm tra xem đã đạt giới hạn cược chưa
    if (bets.reduce((a, b) => a + b, 0) >= 3) {
        alert('Đã đạt giới hạn tối đa 3 điểm cược cho mỗi hình.');
        return;
    }
    let currentBet = bets[index - 1];
    if (currentBet < MAX_BET) {
        bets[index - 1] = currentBet + 1;
        updateBetDisplay(index);
    }
}
function updateBetDisplay(index) {
    let betElement = document.getElementById(`betPoints-img${index}`);
    betElement.innerText = bets[index - 1];
}
//Reset tat ca ve khong
function resetBet() {
    if (spinning) return;
    bets = [0, 0, 0, 0, 0, 0];
    document.querySelectorAll('.betOption span').forEach((span, index) => {
        span.innerText = '0';
    });
}
function checkResult() {
    const result = [
        document.getElementById('resultImg1').src.split('/').pop(),
        document.getElementById('resultImg2').src.split('/').pop(),
        document.getElementById('resultImg3').src.split('/').pop()
    ];

    let correctBets = 0;
    result.forEach(image => {
        const index = images.map(img => img.split('/').pop()).indexOf(image);
        if (bets[index] > 3) {
            correctBets++;
        }
    });

    if (correctBets > 0) {
        message.textContent = `Bạn đã đoán đúng với kết quả: ${result.join(', ')}`;
    } else {
        message.textContent = `Bạn đã đoán sai với kết quả: ${result.join(', ')}`;
    }
}
