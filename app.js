const item = document.querySelector('.item');
const placeHolders = document.querySelectorAll('.placeholder')

item.addEventListener('dragstart', dragstart);
item.addEventListener('dragend', dragend);

for (const placeholder of placeHolders){
    placeholder.addEventListener('dragover', dragOver);
    placeholder.addEventListener('dragenter', dragEnter);
    placeholder.addEventListener('dragleave', dragLeave);
    placeholder.addEventListener('drop', dragDrop);
}

function dragstart(event){
event.target.classList.add('hold');
setTimeout(() => event.target.classList.add
('hide'),0);
}

function dragend(event){
event.target.classList.remove('hold', "hide");
}

function dragOver(event){
event.preventDefault();
console.log('drag over');

}

function dragEnter(event){
    event.target.classList.add('hovered');
    console.log('drag enter');
}

function dragLeave(event){
    event.target.classList.remove('hovered');
    console.log('drag leave');
}

function dragDrop(event){
    event.target.classList.remove('hovered');
    event.target.append(item);
    console.log('drag drop');
    
}
