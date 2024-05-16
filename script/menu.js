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
   const menuList =  document.getElementById("menuList");
   
   //output
   const outputMenu = document.getElementById("outputMenu");

   window.onload = function(){
    populateMenuList()
   };

   function populateMenuList(){
    console.log("populate")
    

   // Add default option
   let defaultOption = document.createElement("option");
   defaultOption.textContent = "Select an option";
   defaultOption.value = '';
   menuList.appendChild(defaultOption);
   }
   
   