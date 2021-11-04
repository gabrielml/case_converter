let text = document.querySelector("textarea");

let ucBtn = document.getElementById("upper-case");
ucBtn.addEventListener("click", function(){
    let toUpperCase = text.value.toUpperCase();
    document.querySelector("textarea").value = toUpperCase;
});

let lcBtn = document.getElementById("lower-case");
lcBtn.addEventListener("click", function(){
    let toLowerCase = text.value.toLowerCase();
    document.querySelector("textarea").value = toLowerCase;
});

let pcBtn = document.getElementById("proper-case");
pcBtn.addEventListener("click", function(){
    let toProperCase = properCase(text.value);
    document.querySelector("textarea").value = toProperCase;
});

let scBtn = document.getElementById("sentence-case");
scBtn.addEventListener("click", function(){
    let toSentenceCase = sentenceCase(text.value);
    document.querySelector("textarea").value = toSentenceCase;
});

let stfBtn = document.getElementById("save-text-file");
stfBtn.addEventListener("click", downloadTextFile);



function properCase(str){
    str = str.toLowerCase();
    str = str.split(' ');
    for(let i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(' ');
}

function sentenceCase(str){
    str = str.toLowerCase();
    str = str.charAt(0).toUpperCase() + str.slice(1);
    str = str.split('');
    for(let i = 0; i < str.length; i++){
        if(str[i] === "." && str[i+1] === " "){
            str[i+2] = str[i+2].charAt(0).toUpperCase();
        }
    }
    return str.join('');
}

function downloadTextFile() {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text.value));
    element.setAttribute('download', 'text.txt');

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}