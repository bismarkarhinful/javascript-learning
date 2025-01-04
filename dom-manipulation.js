// Wait for DOM to load
document.addEventListener('DOMContentLoaded', () => {
    // Get the output div
    const output = document.getElementById('output');

    // Create new elements
    const title = document.createElement('h2');
    title.textContent = 'DOM Manipulation Demo';
    output.appendChild(title);

    const button = document.createElement('button');
    button.textContent = 'Click me!';
    button.style.padding = '10px';
    button.style.margin = '10px 0';
    output.appendChild(button);

    const list = document.createElement('ul');
    output.appendChild(list);

    // Event handling
    let clickCount = 0;
    button.addEventListener('click', () => {
        clickCount++;
        const listItem = document.createElement('li');
        listItem.textContent = `Button clicked ${clickCount} time${clickCount === 1 ? '' : 's'}`;
        list.appendChild(listItem);
    });

    // Demonstrate different selectors
    console.log("Getting elements examples:");
    console.log("By ID:", document.getElementById('output'));
    console.log("By Class:", document.getElementsByClassName('output'));
    console.log("By Tag:", document.getElementsByTagName('div'));
});
