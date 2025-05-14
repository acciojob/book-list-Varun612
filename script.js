//your JS code here. If required.
const title=document.getElementById('title');
const author=document.getElementById('author');
const isbn=document.getElementById('isbn');
const add=document.getElementById('submit');
const bodyRow=document.getElementById('book-list');
add.addEventListener('click',()=> {
	const titleInput=title.value;
	const authorInput=author.value;
	const isbnInput=isbn.value;
	const  newRow = document.createElement('tr');
	newRow.innerHTML = `
	<td>${titleInput}</td>
	<td>${authorInput}</td>
	<td>${isbnInput}</td>
	<td><button class="delete">Delete</button></td>
	`;
	bodyRow.appendChild(newRow);
	title.value='';
	author.value='';
	isbn.value='';
	newRow.querySelector('.delete').addEventListener('click', () => {
		newRow.remove();
	});
});