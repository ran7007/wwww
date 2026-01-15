let isStart = false;
let roll = null;
let hasCelebrated = false;

function makeLotto() {
    const selected = [];
    while (selected.length < 6) {
        const num = Math.floor(Math.random() * 45) + 1;
        if (selected.indexOf(num) === -1) selected.push(num);
    }
    selected.sort((a, b) => a - b);
    return selected;
}

function time() {
    const selected = makeLotto();
    document.getElementById("ran").innerHTML = selected.join(", ");
}

function start() {
    if (isStart) return;

    isStart = true;
    hasCelebrated = false;

    time();
    roll = setInterval(time, 10);
}

function stop() {
    if (roll == null) return;

    // ✅ 먼저 멈추고
    clearInterval(roll);
    roll = null;
    isStart = false;

    // ✅ 멈춘 순간의 글(결과)을 확실히 고정 (안 사라지게)
    const fixedText = document.getElementById("ran").innerHTML;
    document.getElementById("ran").innerHTML = fixedText;

    // ✅ 꽃가루
    if (!hasCelebrated) {
        hasCelebrated = true;
        celebrate();
    }
}

function celebrate() {
    confetti({
        particleCount: 180,
        spread: 90,
        origin: { y: 0.6 },
    });

    setTimeout(() => {
        confetti({
            particleCount: 120,
            spread: 70,
            origin: { y: 0.6 },
        });
    }, 250);
}
