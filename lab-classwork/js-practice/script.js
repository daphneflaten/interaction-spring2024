const cursor = document.getElementById('cursor');
console.log(cursor);

document.addEventListener('mousemove', () => {
    console.log(event.clientX);
    console.log(event.clientY);
    cursor.style.left = event.clientX + 'px';
    cursor.style.top = event.clientY + 'px';

})