document.addEventListener("DOMContentLoaded", () => {
    const clickableArea = document.getElementById("clickable-area");
    const feedback = document.getElementById("feedback");

    // Randomly generate positions for green circles
    const positions = [
        { x: 100, y: 150 },
        { x: 200, y: 300 },
        { x: 350, y: 250 },
        { x: 450, y: 100 },
        { x: 500, y: 400 }
    ];

    positions.forEach((pos, index) => {
        let circle = document.createElement("div");
        circle.classList.add("green-circle");
        circle.style.left = `${pos.x}px`;
        circle.style.top = `${pos.y}px`;

        circle.addEventListener("click", () => {
            feedback.innerText = `You clicked circle #${index + 1}.`;
        });

        clickableArea.appendChild(circle);
    });
});
