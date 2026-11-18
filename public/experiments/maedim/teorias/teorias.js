const gHTMLElements = {
    "t1": document.getElementById('t1'),
    "t2": document.getElementById('t2'),
    "t3": document.getElementById('t3'),
    "t4": document.getElementById('t4'),
    "t5": document.getElementById('t5'),
    "tf1": document.getElementById('tf1'),
    "tf2": document.getElementById('tf2'),
    "tf3": document.getElementById('tf3'),
    "tf4": document.getElementById('tf4'),
    "tf5": document.getElementById('tf5'),
};

let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");
let c1 = 0;
let c2 = 0;
let c3 = 0;
let c4 = 0;
let c5 = 0;

function aparecer1() {
    c2 = c3 = c4 = c5 = 0;
    btn2.textContent = "REVELAR";
    btn3.textContent = "REVELAR";
    btn4.textContent = "REVELAR";
    btn5.textContent = "REVELAR";
    c1++;
    gHTMLElements['t1'].style.display = 'flex';
    gHTMLElements['t2'].style.display = 'none';
    gHTMLElements['t3'].style.display = 'none';
    gHTMLElements['t4'].style.display = 'none';
    gHTMLElements['t5'].style.display = 'none';
    gHTMLElements['tf1'].style.display = 'flex';
    gHTMLElements['tf2'].style.display = 'none';
    gHTMLElements['tf3'].style.display = 'none';
    gHTMLElements['tf4'].style.display = 'none';
    gHTMLElements['tf5'].style.display = 'none';
    if (c1%2 == 0) {
        btn1.textContent = "REVELAR";
        gHTMLElements['t1'].style.display = 'none';
        gHTMLElements['tf1'].style.display = 'none';
    } else {
        btn1.textContent = "ESCONDER";
    }
}

function aparecer2() {
    c1 = c3 = c4 = c5 = 0;
    btn1.textContent = "REVELAR";
    btn3.textContent = "REVELAR";
    btn4.textContent = "REVELAR";
    btn5.textContent = "REVELAR";
    c2++;
    gHTMLElements['t1'].style.display = 'none';
    gHTMLElements['t2'].style.display = 'flex';
    gHTMLElements['t3'].style.display = 'none';
    gHTMLElements['t4'].style.display = 'none';
    gHTMLElements['t5'].style.display = 'none';
    gHTMLElements['tf1'].style.display = 'none';
    gHTMLElements['tf2'].style.display = 'flex';
    gHTMLElements['tf3'].style.display = 'none';
    gHTMLElements['tf4'].style.display = 'none';
    gHTMLElements['tf5'].style.display = 'none';
    if (c2%2 == 0) {
        btn2.textContent = "REVELAR";
        gHTMLElements['t2'].style.display = 'none';
        gHTMLElements['tf2'].style.display = 'none';
    } else {
        btn2.textContent = "ESCONDER";
    }
}

function aparecer3() {
    c1 = c2 = c4 = c5 = 0;
    btn1.textContent = "REVELAR";
    btn2.textContent = "REVELAR";
    btn4.textContent = "REVELAR";
    btn5.textContent = "REVELAR";
    c3++;
    gHTMLElements['t1'].style.display = 'none';
    gHTMLElements['t2'].style.display = 'none';
    gHTMLElements['t3'].style.display = 'flex';
    gHTMLElements['t4'].style.display = 'none';
    gHTMLElements['t5'].style.display = 'none';
    gHTMLElements['tf1'].style.display = 'none';
    gHTMLElements['tf2'].style.display = 'none';
    gHTMLElements['tf3'].style.display = 'flex';
    gHTMLElements['tf4'].style.display = 'none';
    gHTMLElements['tf5'].style.display = 'none';
    if (c3%2 == 0) {
        btn3.textContent = "REVELAR";
        gHTMLElements['t3'].style.display = 'none';
        gHTMLElements['tf3'].style.display = 'none';
    } else {
        btn3.textContent = "ESCONDER";
    }
}

function aparecer4() {
    c1 = c2 = c3 = c5 = 0;
    btn1.textContent = "REVELAR";
    btn2.textContent = "REVELAR";
    btn3.textContent = "REVELAR";
    btn5.textContent = "REVELAR";
    c4++;
    gHTMLElements['t1'].style.display = 'none';
    gHTMLElements['t2'].style.display = 'none';
    gHTMLElements['t3'].style.display = 'none';
    gHTMLElements['t4'].style.display = 'flex';
    gHTMLElements['t5'].style.display = 'none';
    gHTMLElements['tf1'].style.display = 'none';
    gHTMLElements['tf2'].style.display = 'none';
    gHTMLElements['tf3'].style.display = 'none';
    gHTMLElements['tf4'].style.display = 'flex';
    gHTMLElements['tf5'].style.display = 'none';
    if (c4%2 == 0) {
        btn4.textContent = "REVELAR";
        gHTMLElements['t4'].style.display = 'none';
        gHTMLElements['t4'].style.display = 'none';
    } else {
        btn4.textContent = "ESCONDER";
    }
}

function aparecer5() {
    c1 = c2 = c3 = c4 = 0;
    btn1.textContent = "REVELAR";
    btn2.textContent = "REVELAR";
    btn3.textContent = "REVELAR";
    btn4.textContent = "REVELAR";
    c5++;
    gHTMLElements['t1'].style.display = 'none';
    gHTMLElements['t2'].style.display = 'none';
    gHTMLElements['t3'].style.display = 'none';
    gHTMLElements['t4'].style.display = 'none';
    gHTMLElements['t5'].style.display = 'flex';
    gHTMLElements['tf1'].style.display = 'none';
    gHTMLElements['tf2'].style.display = 'none';
    gHTMLElements['tf3'].style.display = 'none';
    gHTMLElements['tf4'].style.display = 'none';
    gHTMLElements['tf5'].style.display = 'flex';
    if (c5%2 == 0) {
        btn5.textContent = "REVELAR";
        gHTMLElements['t5'].style.display = 'none';
        gHTMLElements['tf5'].style.display = 'none';
    } else {
        btn5.textContent = "ESCONDER";
    }
}
