/*
 * DOTS: Level Two
 *
 */
let score = document.querySelector('.js-score')
let math = 0;
let balls = document.querySelectorAll('.js-ball')

for(let i = 0; i < balls.length; i ++){
    balls[i].addEventListener('click', function(e){
        math += 10
        score.innerHTML = `00${math}`
        if(math === 100){
            score.innerHTML = math
            document.querySelector('.level-winner').style.opacity = 1
        }
    })
}
