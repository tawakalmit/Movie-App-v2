const menuToggle = document.querySelector('.menu-toggle');
const Modal = document.querySelector('.modal')

menuToggle.addEventListener('click',()=>{
    Modal.classListToggle('.modal-open')
})