document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    let score = parseInt(urlParams.get('score'));
    
    if (isNaN(score) || score < 0) score = 0;
    if (score > 5) score = 5;
    
    console.log("Final Score:", score);

    const results = [
        { img: 'baby.png', text: 'Oh no she still a baby!!!!??' },
        { img: 'A.png', text: 'Congrats!!! you just raise one brain cell girl' },
        { img: 'B.png', text: 'Congrats!!! the ice-cream girl is here!!!!' },
        { img: 'C.png', text: 'Congrats!!! you just raise grumpy cheerleader girl' },
        { img: 'D.png', text: 'OH... you just raise Grade 7 version' },
        { img: 'E.png', text: 'Congrats!!! you got teenage beam that mean you are bff!!!' }
    ];
    
    const container = document.getElementById('result-image-container');
    const descEl = document.getElementById('personality-description');
    const scoreEl = document.getElementById('score');
    
    scoreEl.textContent = score;
    
    const result = results[score];
    const img = new Image();
    img.src = `images/${result.img}`;
    img.alt = `Result for score ${score}`;
    img.style.cssText = `
        width: 300px;
        display: block;
        margin: 20px auto;
        border-radius: 15px;
    `;

    img.onerror = () => {
        console.error("Image failed to load:", img.src);
        img.src = 'images/baby.png';
        descEl.textContent = "Image missing! Showing baby version";
    };

    container.appendChild(img);
    descEl.textContent = result.text;
});