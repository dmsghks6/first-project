
// 1. 랜덤번호 지정 x
// 2. 유저가 번호를 입력한다 그리고 go 라는 버튼을 누름x
// 3. 만약에 유저가 랜덤번호를 맞추면, 맞췄습니다. x
// 4. 랜덤번ㄴ호 < 유저번호 downx
// 5. 랜던번호 > 유저번호 Up x
// 6. reset 버튼을 누르면 게임이 리셋 x
// 7. 5번의 기회를 다쓰면 게임이 끝남 버튼 disabled x 
// 8. 유저가 1~100 범위 밖에 숫자를 입력하면 알려준다. 기회를 깍지 않는다 x
// 유저가 이미 입력한 숫자를 또 입력하면 , 알려준다  기회를 깍지 않는다 .x


let computerNum = 0
// let computerNum = Math.floor(Math.random() * 100)+1
// console.log("정답", computerNum)
let userInput = document.getElementById('user-input')
let playButton = document.getElementById('play-button')
let resultArea = document.getElementById('result-area')
let resetButton = document.getElementById('reset-button')
let btn3d = document.getElementById('btn')
let chances = 5
let chanceArea = document.getElementById('chance-area')
let sameNum = []






playButton.addEventListener('click',play)
resetButton.addEventListener('click',reset)
userInput.addEventListener('focus',function(){
    userInput.value= "";
})




function pickRandomNum(){
    computerNum = Math.floor(Math.random() * 100)+1
    console.log("정답", computerNum)

}
pickRandomNum()



function play(){
    let userValue = userInput.value
    
    

    if(userValue > 100 || userValue <= 0 || userValue == ""){
        resultArea.textContent = '1 ~ 100 사이 숫자를 입력하세요'   
        resultArea.style.color = "black"
        
        return;
    }



    if(sameNum.includes(userValue)){
        console.log(sameNum)
        resultArea.textContent = '값이 중복 됐습니다.'
        resultArea.style.color = "black"

        return;
    }



 




    chances --
    chanceArea.textContent = `남은 기회는 ${chances} 입니다.`
    


    if(userValue < computerNum){
        
        resultArea.textContent = 'Up !'
        resultArea.style.color = "#ff5590"

    }else if(userValue > computerNum){
        resultArea.textContent = 'Down !'
        resultArea.style.color = "#2aaaff"
    }else if(userValue = computerNum){
        resultArea.textContent = '정답 !'
        resultArea.style.color = "#ff9955"
        playButton.disabled = true
        btn3d.style.backgroundColor = 'gray' 
        
    }

    sameNum.push(userValue)
    console.log(sameNum)


    console.log(chances)
    if(chances < 1){
        playButton.disabled = true
        btn3d.style.backgroundColor = 'gray' 
        alert("game over 입니다 reset을 누르고 새로 시작하세요");
    }


}

function reset(){
    pickRandomNum()
    chances = 5
    playButton.disabled = false
    btn3d.style.backgroundColor = '#55ff93' 
    resultArea.textContent="결과값"
    resultArea.style.color = "black"    
    chanceArea.textContent= '남은찬스'
    sameNum = []
    userInput.value= "";

}