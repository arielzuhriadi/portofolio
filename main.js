const burgerButton = document.getElementById('burgerButton');
const navigation = document.getElementById('navigation');
const content = document.getElementById('content');

burgerButton.onclick = function(){
    navigation.style.display = 'flex';
    navigation.style.position = 'absolute';
    buttonClose.style.position = 'absolute';
}

content.onclick = function(){
    navigation.style.display = 'none';
}


// serifikate
const sertifikate = document.getElementById("sertifikate");
const closeSertifikate = document.getElementById("closeSertifikate");
const openSertifikat = document.getElementById("openSertifikat");

sertifikate.onclick = function(){
    openSertifikat.style.display = 'block';
}
closeSertifikate.onclick = function(){
    openSertifikat.style.display = 'none';
}

// resume
const resume = document.getElementById("resume");
const closeResume = document.getElementById("closeResume");
const openResume = document.getElementById("openResume");

resume.onclick = function(){
    openResume.style.display = 'block';
}
closeResume.onclick = function(){
    openResume.style.display = 'none';
}
