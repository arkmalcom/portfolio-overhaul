const topSide = document.getElementById("top-side");
let animationComplete = false;

const handleOnMove = (e, animationComplete) => {
    if (!animationComplete) {
        return;
    }
    
    const pos = e.clientX / window.innerWidth * 100;

    topSide.style.width = `${pos}%`;
}

addEventListener("load", async (e) => { 
    await new Promise(r => setTimeout(r, 3000));
    animationComplete = true;
})


document.onmousemove = e => handleOnMove(e, animationComplete);
document.ontouchmove = e => handleOnMove(e.touches[0], animationComplete);

