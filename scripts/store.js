import item from './item.js';

let items= [];
let hideCheckedItems = false;



/* function findById(id){
  return items.find('item-id');
}


function addItem(name){
  try {
    item.validateName(name);
    this.items.push(item.create(name));

  } catch(error) {
    console.log(error);
  }
}

function findAndToggleChecked(id){
  let foundItem = findById(id); 
  foundItem = !items.checked;
}

function findAndUpdateName(id, newName){
  try {
    item.validateName(newName);
    items = this.findById(id);
  } catch(error) {
    console.log(`Cannot update name: ${error.message}`);
  }
}

function findAndDelete(id) {
  const index = this.items.findIndex(item => item.id === id);
  this.items.splice(index, 1);
}

export default {
  items,
  hideCheckedItems,
  findById,
  addItem,
  findAndToggleChecked,
  findAndUpdateName,
  findAndDelete
};

 */


export default {
  items,
  hideCheckedItems,
};  