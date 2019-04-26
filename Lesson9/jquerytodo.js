
const userList = document.querySelector('.name-list');
const listInput = document.querySelector('.list-input');
const addListBtn= document.querySelector('.addListBtn');

addListBtn.addEventListener('click', function(){ 
	//create li 
	const newLi = document.createElement('LI');
	const liContent = document.createTextNode(listInput.value);



	// add input value inside new li 
	newLi.appendChild(liContent);
	//attachin the li to the user list
	userList.appendChild(newLi);
	listInput.value = '';
});
 