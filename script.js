const el = (e) => {return (e.charAt(0) == '#' ? document.querySelector(e) : document.querySelectorAll(e))};

let screen = el('#result');
let delButton = el('#delButton');
let resetButton = el('#resetButton');
let equalButton = el ('#equalButton');
let buttons = el('.calculator .section-3 .button');
let ope, prev, pres, resault;
let theme = 1;

buttons.forEach(element => {
    element.addEventListener('click', () => {
        if (element.dataset.num) {
           if (screen.innerHTML == ope) {
               screen.innerHTML = '';
               screen.innerHTML += element.dataset.num;
           } else {
               if (screen.innerHTML == 0) {
                   screen.innerHTML = '';
                   screen.innerHTML += element.dataset.num;
               } else {
                screen.innerHTML += element.dataset.num;
               }
           }
        } else if (element.dataset.ope) {
            ope = element.dataset.ope;
            prev = screen.innerHTML;
            screen.innerHTML = ope;
        }
    })
});
equalButton.onclick = () => {
    pres = screen.innerHTML;
    prev = parseInt(prev);
    pres = parseInt(pres);
    switch (ope) {
        case '+':
            resault = prev + pres;
            break;
        case '-':
                resault = prev - pres;
                break;
        case '*':
            resault = prev * pres;
            break;
        case '/':
            resault = prev / pres;
            break;
    }
    prev = null;
    pres = null;
    ope = null;
    screen.innerHTML = resault
}
resetButton.onclick = () => {
    prev = null;
    pres = null;
    ope = null;
    screen.innerHTML = '';
}
delButton.onclick = () => {
    screen.innerHTML = (Math.floor(parseInt(screen.innerHTML) / 10));
}
//..........................................

let toggle = el('.section-1 .box-button .button')[0],
    toggleBall = el('.section-1 .box-button .button .ball')[0];
let varr = getComputedStyle(document.documentElement);
el('.calculator .section-1')[0].style.color = '#fff';
el('.calculator .section-2')[0].style.color = '#fff';

toggle.onclick = () => {
    if (theme <3) {
        theme += 1;
    } else {
        theme = 1;
    }
    switch (theme) {
        case 1:
            toggle.classList.remove('theme-3');
            toggle.classList.add('theme-1');
            el('.calculator .section-1')[0].style.color = '#fff';
            el('.calculator .section-2')[0].style.color = '#fff';
            break;
        case 2:
            toggle.classList.remove('theme-1')
            toggle.classList.add('theme-2');
            el('.calculator .section-1')[0].style.color = null;
            el('.calculator .section-2')[0].style.color = null;
            break;
        case 3:
            toggle.classList.remove('theme-2')
            toggle.classList.add('theme-3');
            el('.calculator .section-1')[0].style.color = null;
            el('.calculator .section-2')[0].style.color = null;
            break;
        
    }
    let cssVar1 = varr.getPropertyValue(`--main-background-${theme}`);
    let cssVar2 = varr.getPropertyValue(`--toggle-background-${theme}`);
    let cssVar3 = varr.getPropertyValue(`--screen-background-${theme}`);
    let cssVar4 = varr.getPropertyValue(`--key-main-background-${theme}`);
    let cssVar5 = varr.getPropertyValue(`--key-main-shadow-${theme}`);
    let cssVar6 = varr.getPropertyValue(`--key-sec-background-${theme}`);
    let cssVar7 = varr.getPropertyValue(`--key-sec-shadow-${theme}`);
    let cssVar8 = varr.getPropertyValue(`--key-equals-background-${theme}`);
    let cssVar9 = varr.getPropertyValue(`--key-equals-shadow-${theme}`);
    let cssVar10 = varr.getPropertyValue(`--key-text-color-${theme}`);
    let cssVar11 = varr.getPropertyValue(`---key-text-sec-color-${theme}`);

    document.documentElement.style.setProperty(`--main-background`, cssVar1);
    document.documentElement.style.setProperty(`--toggle-background`, cssVar2);
    document.documentElement.style.setProperty(`--screen-background`, cssVar3);
    document.documentElement.style.setProperty(`--key-main-background`, cssVar4);
    document.documentElement.style.setProperty(`--key-main-shadow`, cssVar5);
    document.documentElement.style.setProperty(`--key-sec-background`, cssVar6);
    document.documentElement.style.setProperty(`--key-sec-shadow`, cssVar7);
    document.documentElement.style.setProperty(`--key-equals-background`, cssVar8);
    document.documentElement.style.setProperty(`--key-equals-shadow`, cssVar9);
    document.documentElement.style.setProperty(`--key-text-color`, cssVar10);
    document.documentElement.style.setProperty(`---key-text-sec-color`, cssVar11);
    
}