/**
 *  버튼0 누르면 
 *  1. 모든 버튼에 붙은 orange 클래스 제거
 *  2. 버튼0에 orange 클래스 명 추가
 *  3. 모든 div 붙은 show 클래스 제거
 *  4. div0에 show 클래스 추가
 */

// 자주쓰는 셀렉턴느 변수에 담는 것이 성능적으로 좋다.
const tabButton = document.querySelectorAll('.tab-button');
const tabContent = document.querySelectorAll('.tab-content');

// dataset : HTML에 자료 저장하고 출력하는 방법
const dataset = document.querySelector('.tab-button').dataset.id;

// 이벤트 리스터를 추가할 때 마다 Rem 용량을 차지한다. (이벤트 리스너는 적을 수록 성능이 좋다)
document.querySelector('.list').addEventListener('click', (e)=>{
    tabClick(e.target.dataset.id, tabButton.length);
})

const tabClick = (i, num) => {
    for(let j=0; j<num; j++){
        tabButton[j].classList.remove('orange')
        tabContent[j].classList.remove('show');
    }
    tabButton[i].classList.add('orange');
    tabContent[i].classList.add('show');
}


// 반복문 : 코드를 반복 실행해준다.
// 반복문에서 var가 아닌 let을 써야하는 이유
// var : 범위는 function
// let : 범위는 {}
// for(let i=0; i<tabButton.length; i++){
//     tabButton[i].addEventListener('click', ()=>{
//         for(let j=0; j<tabButton.length; j++){
//             tabButton[j].classList.remove('orange')
//             tabContent[j].classList.remove('show');
//         }
//         tabButton[i].classList.add('orange');
//         tabContent[i].classList.add('show');
//     })
// }


// tabButton[0].addEventListener('click', ()=>{
//     tabButton[0].classList.remove('orange');
//     tabButton[1].classList.remove('orange');
//     tabButton[2].classList.remove('orange');
//     tabButton[0].classList.add('orange');

//     tabContent[0].classList.remove('show');
//     tabContent[1].classList.remove('show');
//     tabContent[2].classList.remove('show');
//     tabContent[0].classList.add('show');
// })

// tabButton[1].addEventListener('click', ()=>{
//     tabButton[0].classList.remove('orange');
//     tabButton[1].classList.remove('orange');
//     tabButton[2].classList.remove('orange');
//     tabButton[1].classList.add('orange');

//     tabContent[0].classList.remove('show');
//     tabContent[1].classList.remove('show');
//     tabContent[2].classList.remove('show');
//     tabContent[1].classList.add('show');
// })

// tabButton[2].addEventListener('click', ()=>{
//     tabButton[0].classList.remove('orange');
//     tabButton[1].classList.remove('orange');
//     tabButton[2].classList.remove('orange');
//     tabButton[2].classList.add('orange');

//     tabContent[0].classList.remove('show');
//     tabContent[1].classList.remove('show');
//     tabContent[2].classList.remove('show');
//     tabContent[2].classList.add('show');
// })