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