const recipesData = [
  {
    "id": 1,
    "title": "Margherita Pizza",
    "category": "Italian",
    "cookingTime": "30 mins",
    "difficulty": "Easy",
    "ingredients": ["Pizza Dough", "Tomato Sauce", "Mozzarella Cheese", "Basil"],
    "description": "Classic Italian pizza with fresh basil and mozzarella.",
    "image": "https://images.unsplash.com/photo-1604382355076-af4b0eb60143"
  },
  {
    "id": 2,
    "title": "Butter Chicken",
    "category": "Indian",
    "cookingTime": "45 mins",
    "difficulty": "Medium",
    "ingredients": ["Chicken", "Butter", "Cream", "Tomato Puree", "Spices"],
    "description": "Creamy and flavorful Indian chicken curry.",
    "image": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398"
  },
  {
    "id": 3,
    "title": "Veg Fried Rice",
    "category": "Chinese",
    "cookingTime": "20 mins",
    "difficulty": "Easy",
    "ingredients": ["Rice", "Carrot", "Capsicum", "Soy Sauce", "Spring Onion"],
    "description": "Quick and tasty vegetable fried rice.",
    "image": "https://images.unsplash.com/photo-1512058564366-18510be2db19"
  },
  {
    "id": 4,
    "title": "Paneer Tikka",
    "category": "Indian",
    "cookingTime": "35 mins",
    "difficulty": "Medium",
    "ingredients": ["Paneer", "Curd", "Spices", "Capsicum", "Onion"],
    "description": "Smoky grilled paneer cubes with spices.",
    "image": "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8"
  },
  {
    "id": 5,
    "title": "Chicken Burger",
    "category": "Fast Food",
    "cookingTime": "25 mins",
    "difficulty": "Easy",
    "ingredients": ["Chicken Patty", "Burger Bun", "Lettuce", "Cheese"],
    "description": "Juicy chicken burger with cheese and veggies.",
    "image": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd"
  },
  {
    "id": 6,
    "title": "Pasta Alfredo",
    "category": "Italian",
    "cookingTime": "25 mins",
    "difficulty": "Easy",
    "ingredients": ["Pasta", "Cream", "Garlic", "Parmesan Cheese"],
    "description": "Creamy Alfredo pasta loaded with cheese.",
    "image": "https://images.unsplash.com/photo-1645112411341-6c4fd023882c"
  },
  {
    "id": 7,
    "title": "Masala Dosa",
    "category": "South Indian",
    "cookingTime": "40 mins",
    "difficulty": "Medium",
    "ingredients": ["Rice Batter", "Potato", "Mustard Seeds", "Curry Leaves"],
    "description": "Crispy dosa stuffed with spicy potato filling.",
    "image": "https://images.unsplash.com/photo-1668236543090-82eba5ee5976"
  },
  {
    "id": 8,
    "title": "Tandoori Chicken",
    "category": "Indian",
    "cookingTime": "50 mins",
    "difficulty": "Hard",
    "ingredients": ["Chicken", "Curd", "Tandoori Masala", "Lemon"],
    "description": "Spicy roasted chicken cooked in tandoor style.",
    "image": "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91"
  },
  {
    "id": 9,
    "title": "Caesar Salad",
    "category": "Salad",
    "cookingTime": "15 mins",
    "difficulty": "Easy",
    "ingredients": ["Lettuce", "Croutons", "Cheese", "Caesar Dressing"],
    "description": "Healthy and refreshing Caesar salad.",
    "image": "https://images.unsplash.com/photo-1546793665-c74683f339c1"
  },
  {
    "id": 10,
    "title": "Chocolate Cake",
    "category": "Dessert",
    "cookingTime": "1 hour",
    "difficulty": "Medium",
    "ingredients": ["Flour", "Cocoa Powder", "Sugar", "Eggs"],
    "description": "Rich and moist chocolate cake.",
    "image": "https://images.unsplash.com/photo-1578985545062-69928b1d9587"
  },
  {
    "id": 11,
    "title": "Spring Rolls",
    "category": "Chinese",
    "cookingTime": "30 mins",
    "difficulty": "Medium",
    "ingredients": ["Cabbage", "Carrot", "Wrapper", "Soy Sauce"],
    "description": "Crispy vegetable spring rolls.",
    "image": "https://images.unsplash.com/photo-1603133872878-684f208fb84b"
  },
  {
    "id": 12,
    "title": "Sushi",
    "category": "Japanese",
    "cookingTime": "50 mins",
    "difficulty": "Hard",
    "ingredients": ["Rice", "Seaweed", "Fish", "Avocado"],
    "description": "Traditional Japanese sushi rolls.",
    "image": "https://images.unsplash.com/photo-1579871494447-9811cf80d66c"
  },
  {
    "id": 13,
    "title": "French Fries",
    "category": "Fast Food",
    "cookingTime": "20 mins",
    "difficulty": "Easy",
    "ingredients": ["Potatoes", "Salt", "Oil"],
    "description": "Crispy golden french fries.",
    "image": "https://images.unsplash.com/photo-1576107232684-1279f390859f"
  },
  {
    "id": 14,
    "title": "Momos",
    "category": "Tibetan",
    "cookingTime": "35 mins",
    "difficulty": "Medium",
    "ingredients": ["Flour", "Vegetables", "Chicken", "Sauce"],
    "description": "Steamed dumplings served with spicy chutney.",
    "image": "https://images.unsplash.com/photo-1626776876729-bab4369a5a5f"
  },
  {
    "id": 15,
    "title": "Biryani",
    "category": "Indian",
    "cookingTime": "1.5 hours",
    "difficulty": "Hard",
    "ingredients": ["Rice", "Chicken", "Spices", "Curd"],
    "description": "Aromatic and spicy chicken biryani.",
    "image": "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a"
  },
  {
    "id": 16,
    "title": "Pancakes",
    "category": "Breakfast",
    "cookingTime": "20 mins",
    "difficulty": "Easy",
    "ingredients": ["Flour", "Milk", "Eggs", "Maple Syrup"],
    "description": "Soft fluffy pancakes perfect for breakfast.",
    "image": "https://images.unsplash.com/photo-1528207776546-365bb710ee93"
  },
  {
    "id": 17,
    "title": "Tacos",
    "category": "Mexican",
    "cookingTime": "25 mins",
    "difficulty": "Easy",
    "ingredients": ["Tortilla", "Chicken", "Lettuce", "Cheese"],
    "description": "Crunchy tacos with delicious fillings.",
    "image": "https://images.unsplash.com/photo-1552332386-f8dd00dc2f85"
  },
  {
    "id": 18,
    "title": "Ice Cream Sundae",
    "category": "Dessert",
    "cookingTime": "10 mins",
    "difficulty": "Easy",
    "ingredients": ["Ice Cream", "Chocolate Syrup", "Nuts"],
    "description": "Sweet and creamy sundae dessert.",
    "image": "https://images.unsplash.com/photo-1563805042-7684c019e1cb"
  },
  {
    "id": 19,
    "title": "Ramen",
    "category": "Japanese",
    "cookingTime": "40 mins",
    "difficulty": "Medium",
    "ingredients": ["Noodles", "Broth", "Egg", "Chicken"],
    "description": "Hot Japanese noodle soup.",
    "image": "https://images.unsplash.com/photo-1617093727343-374698b1b08d"
  },
  {
    "id": 20,
    "title": "Fish Curry",
    "category": "Seafood",
    "cookingTime": "45 mins",
    "difficulty": "Medium",
    "ingredients": ["Fish", "Coconut Milk", "Spices"],
    "description": "Spicy and tangy fish curry.",
    "image": "https://images.unsplash.com/photo-1625944230945-1b7dd3b949ab"
  },
  {
    "id": 21,
    "title": "Falafel Wrap",
    "category": "Middle Eastern",
    "cookingTime": "30 mins",
    "difficulty": "Medium",
    "ingredients": ["Chickpeas", "Pita Bread", "Tahini"],
    "description": "Healthy falafel wrap with tahini sauce.",
    "image": "https://images.unsplash.com/photo-1544025162-d76694265947"
  },
  {
    "id": 22,
    "title": "Grilled Sandwich",
    "category": "Snack",
    "cookingTime": "15 mins",
    "difficulty": "Easy",
    "ingredients": ["Bread", "Cheese", "Vegetables", "Butter"],
    "description": "Crispy grilled vegetable sandwich.",
    "image": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af"
  },
  {
    "id": 23,
    "title": "Chicken Noodles",
    "category": "Chinese",
    "cookingTime": "25 mins",
    "difficulty": "Easy",
    "ingredients": ["Noodles", "Chicken", "Soy Sauce", "Vegetables"],
    "description": "Flavorful chicken noodles with veggies.",
    "image": "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841"
  },
  {
    "id": 24,
    "title": "Cheesecake",
    "category": "Dessert",
    "cookingTime": "1 hour",
    "difficulty": "Hard",
    "ingredients": ["Cream Cheese", "Sugar", "Biscuits"],
    "description": "Smooth creamy cheesecake dessert.",
    "image": "https://images.unsplash.com/photo-1533134242443-d4fd215305ad"
  },
  {
    "id": 25,
    "title": "Veggie Soup",
    "category": "Healthy",
    "cookingTime": "30 mins",
    "difficulty": "Easy",
    "ingredients": ["Carrot", "Beans", "Tomato", "Corn"],
    "description": "Nutritious and warm vegetable soup.",
    "image": "https://images.unsplash.com/photo-1547592180-85f173990554"
  }
]

export default recipesData