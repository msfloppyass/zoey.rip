// Typing effect for header
window.addEventListener('DOMContentLoaded', function() {
    const terminal = document.getElementById('terminal');
    const text = 'zoey.rip >';
    const textNode = document.createTextNode('');
    const cursor = document.createElement('span');
    cursor.className = 'terminal-cursor';
    cursor.textContent = '_';
    terminal.textContent = '';
    terminal.appendChild(textNode);
    terminal.appendChild(cursor);
    let i = 0;
    function type() {
        if (i <= text.length) {
            textNode.nodeValue = text.slice(0, i);
            i++;
            setTimeout(type, 100);
        }
    }
    type();
});
