'use strict';

const store = (function () {
  
  let items = [
    {id: cuid(), name: "apples", checked: false, isEditing: false},
    {id: cuid(), name: "oranges", checked: false, isEditing: false},
    {id: cuid(), name: "milk", checked: true, isEditing: false},
    {id: cuid(), name: "bread", checked: false, isEditing: false}
  ];
  let hideCompleted = false;
  let searchTerm = null;

  function findById(id) {
    return items.find((item) => id === item.id); 
  }

  function addItem(name) {
    try {
      Item.validateName(name);
      this.items.push(Item.create(name));
    }
    catch(error) {
      console.log(`Cannot add item: ${error.message}`)
    }
  }

    function findAndToggleChecked(id) {
      let item = this.findById(id);
      item.checked = !item.checked;
    }

    function findAndUpdateName(id, newName) {
      try {
        Item.validateName(newName);
        this.findById(id).name = newName;
      }
      catch(error) {
        console.log(`Cannot update name: ${error.message}`);
      }}

    function findAndDelete(id) {
      this.items = this.items.filter(item => item.id !== id);
    }

    function toggleCheckedFilter() {
      this.hideCheckedItems = !this.hideCheckedItems;
    }

    function setSearchTerm(val) {
      store.searchTerm = val;
    }

  return {items,
      hideCompleted,
      searchTerm,
      findById,
      addItem,
      findAndToggleChecked,
      findAndUpdateName,
      findAndDelete,
      toggleCheckedFilter,
      setSearchTerm
  };
}());