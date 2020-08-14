import item from './item.js';

let items= [];
let hideCheckedItems = false;



function findById(id){
  return this.items.find(function (item){
    return item.id === id;
  });
}


function addItem(name){
  try {
    item.validateName(name);
    items.push(item.create(name));
  } catch(error) {
    console.log(error);
  }
}

function findAndToggleChecked(id){ 
  let foundItem = this.findById(id);
  console.log(foundItem, id);
  foundItem.checked = !foundItem.checked;
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

function toggleCheckedFilter() {
  hideCheckedItems = !hideCheckedItems;
}


export default {
  items,
  hideCheckedItems,
  findById,
  addItem,
  findAndToggleChecked,
  findAndUpdateName,
  findAndDelete,
  toggleCheckedFilter
};



/* 

export default {
  items,
  hideCheckedItems,
};   */