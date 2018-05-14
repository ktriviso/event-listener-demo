/*
 * DOTS: Level One
 *
 */
let score = document.querySelector('.js-score')
let math = 0;
document.querySelector('.js-ball').addEventListener('click', function(e){
    math += 10
    score.innerHTML = `00${math}`
    if(math === 100){
        score.innerHTML = math
        document.querySelector('.level-winner').style.opacity = 1
    }
})
