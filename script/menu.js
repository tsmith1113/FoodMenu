let menu = {
    drinks : [
     "Water", "Tea", "Sweet Tea",
     "Coke", "Dr. Pepper", "Sprite"
     ],
    entrees : [
    "Hamburger w/ Fries",
     "Grilled Cheese w/ Tater Tots",
    "Grilled Chicken w/ Veggies",
     "Chicken Fried Steak w/ Mashed Potatoes",
    "Fried Shrimp w/ Coleslaw",
     "Veggie Plate"
    ],
    desserts: [
     "Cheesecake", "Chocolate Cake", "Snickerdoodle Cookie"
     ]
    };


   // input 
   const menuCategoryDropdown = document.getElementById("menuCategoryDropdown");
   const menuList = document.getElementById("menuList");

   
   
   //output
   const outputMenu = document.getElementById("outputMenu");

   window.onload = () => {
    menuCategoryDropdown.onchange = onMenuCategoryDropdownChange;
   }
   function onMenuCategoryDropdownChange(){
    
    //figure out what value was selected (which category)
    let selectedCategory = menuCategoryDropdown.value;
    console.log(selectedCategory);

    // clear out menuList from previous selection
    menuList.options.length = 0;

     // loop through the correct array an add values to the toyList one at a time
     let itemsInCategory = getItemsForCategory(selectedCategory);
    console.log(itemsInCategory);

    itemsInCategory.forEach(addItemsToMenuList);

    function addItemsToMenuList(menuItem) {
        let newOption = document.createElement("option");
        newOption.value = menuItem;
        newOption.innerHTML = menuItem;
        menuList.appendChild(newOption);

   }

   function getItemsForCategory(categoryCode) {
    if (categoryCode === "drinks") {
        return menu.drinks;
    } else if (categoryCode === "entrees") {
        return menu.entrees;
    } else if (categoryCode === "desserts") {
        return menu.desserts;
    }
    return [];
}

   
}