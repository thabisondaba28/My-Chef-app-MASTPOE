import React, { createContext, useContext, useState, ReactNode } from 'react';

type Dish = {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  count: number;
};

const initialDishes: Dish[] = [
  { 
    id: 1, 
    name: 'Chocolate Cake', 
    category: 'dessert', 
    price: 5.99, 
    image: 'https://www.themealdb.com/images/media/meals/qrqywr1503066605.jpg', 
    count: 0 
  },
  { 
    id: 2, 
    name: 'Grilled Chicken', 
    category: 'main', 
    price: 12.99, 
    image: 'https://www.themealdb.com/images/media/meals/1529446352.jpg', 
    count: 0 
  },
  { 
    id: 3, 
    name: 'Apple Pie', 
    category: 'dessert', 
    price: 4.99, 
    image: 'https://www.themealdb.com/images/media/meals/yrstur1511816601.jpg', 
    count: 0 
  },
  { 
    id: 4, 
    name: 'Steak', 
    category: 'main', 
    price: 14.99, 
    image: 'https://www.themealdb.com/images/media/meals/svprys1511176755.jpg', 
    count: 0 
  },
  { 
    id: 5, 
    name: 'Garlic Bread', 
    category: 'starter', 
    price: 3.99, 
    image: 'https://www.themealdb.com/images/media/meals/qwtrtp1511814705.jpg', 
    count: 0 
  },
  { 
    id: 6, 
    name: 'Cheesecake', 
    category: 'dessert', 
    price: 6.99, 
    image: 'https://www.themealdb.com/images/media/meals/qtqwwu1511792650.jpg', 
    count: 0 
  },
  { 
    id: 7, 
    name: 'Ice Cream Sundae', 
    category: 'dessert', 
    price: 4.49, 
    image: 'https://www.themealdb.com/images/media/meals/tttxxp1511814083.jpg', 
    count: 0 
  },
  { 
    id: 8, 
    name: 'Brownie', 
    category: 'dessert', 
    price: 3.49, 
    image: 'https://www.themealdb.com/images/media/meals/yypwwq1511304979.jpg', 
    count: 0 
  },
  { 
    id: 9, 
    name: 'Pasta Carbonara', 
    category: 'main', 
    price: 13.99, 
    image: 'https://www.themealdb.com/images/media/meals/wvpsxx1468256321.jpg', 
    count: 0 
  },
  { 
    id: 10, 
    name: 'Salmon', 
    category: 'main', 
    price: 15.99, 
    image: 'https://www.themealdb.com/images/media/meals/ysxwuq1487323065.jpg', 
    count: 0 
  },
  { 
    id: 11, 
    name: 'Vegetarian Burger', 
    category: 'main', 
    price: 11.49, 
    image: 'https://www.themealdb.com/images/media/meals/vvpprx1487325699.jpg', 
    count: 0 
  },
  { 
    id: 12, 
    name: 'Caesar Salad', 
    category: 'starter', 
    price: 6.99, 
    image: 'https://www.themealdb.com/images/media/meals/llcbn01574260722.jpg', 
    count: 0 
  },
  { 
    id: 13, 
    name: 'Tomato Soup', 
    category: 'starter', 
    price: 4.49, 
    image: 'https://www.themealdb.com/images/media/meals/vptwyt1511450962.jpg', 
    count: 0 
  },
  { 
    id: 14, 
    name: 'Bruschetta', 
    category: 'starter', 
    price: 5.99, 
    image: 'https://www.themealdb.com/images/media/meals/sxwquu1511462512.jpg', 
    count: 0 
  },
  { 
    id: 15, 
    name: 'Spring Rolls', 
    category: 'starter', 
    price: 4.99, 
    image: 'https://www.themealdb.com/images/media/meals/uspvup1511643613.jpg', 
    count: 0 
  }
];

interface DishesContextType {
  dishes: Dish[];
  updateCount: (id: number, change: number) => void;
}

const DishesContext = createContext<DishesContextType | undefined>(undefined);

interface DishesProviderProps {
  children: ReactNode;
}

export const DishesProvider: React.FC<DishesProviderProps> = ({ children }) => {
  const [dishes, setDishes] = useState<Dish[]>(initialDishes);

  const updateCount = (id: number, change: number) => {
    setDishes((prevDishes) =>
      prevDishes.map((dish) =>
        dish.id === id ? { ...dish, count: dish.count + change } : dish
      )
    );
  };

  return (
    <DishesContext.Provider value={{ dishes, updateCount }}>
      {children}
    </DishesContext.Provider>
  );
};

export const useDishes = () => {
  const context = useContext(DishesContext);
  if (!context) {
    throw new Error('useDishes must be used within a DishesProvider');
  }
  return context;
};
