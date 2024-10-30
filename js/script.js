
const formReady = () => {

    document.getElementById('empForm').addEventListener('submit', (e) => {
        e.preventDefault()

        console.log('ID: ', document.querySelector('#id').value)
        console.log('Name: ', document.querySelector('#name').value)
        console.log('Extension: ', document.querySelector('#ext').value)
        console.log('Email: ', document.querySelector('#email').value)
        console.log('Department: ', document.querySelector('#department').value)

    })}

    window.addEventListener('load', formReady)
