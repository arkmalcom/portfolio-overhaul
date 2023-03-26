const topSide = document.getElementById("top-side");

const handleOnMove = e => {
    const pos = e.clientX / window.innerWidth * 100;

    topSide.style.width = `${pos}%`;
}

document.onmousemove = e => handleOnMove(e);
document.ontouchmove = e => handleOnMove(e.touches[0]);
