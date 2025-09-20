function displayDate(){
    document.getElementById('demo').innerHTML = Date()
}

function show(){
    let para = document.getElementById('paragraph')
    para.innerHTML = "Anya Pyari si bachi he"
    para.style.display="block"
    para.style.margin= "12px auto"
}

function changingStyle(){
    let alter = document.getElementById('textBox');
    alter.type = "textarea";
    alter.style.border = "4px solid #19183b"
}
