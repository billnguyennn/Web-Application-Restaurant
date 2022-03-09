import React, { useState, useEffect } from 'react';
import Menu from './Menu';
import axios from 'axios';

const FoodSelection = ({ filterItems }) => {

    // Create useState to receive data from backend.
    const [menuItems, setMenuItems] = useState([]);
    // useState for filter Item.
    const [selectedItems, setSelectedItems] = useState([]);

    // connection for database 
    useEffect(async () => {
        const response = await axios.get("http://localhost:4200/menu");
        setMenuItems(response);
        setSelectedItems(response.data);
    }, []);

    const filterItem = (category) => {
        if (category === 'All') {
            setSelectedItems(menuItems.data); // total menu.category
        } else {
            const newItems = menuItems.data.filter((item) => item.category === category);
            setSelectedItems(newItems);
        };
    }
    return (
        <>
            <div className="btn-container">
                <button className="filter-btn" onClick={() => filterItem('All')}>
                    All
                </button>
                <button className="filter-btn" onClick={() => filterItem('Appertizer')}>
                    Appertizer
                </button>
                <button className="filter-btn" onClick={() => filterItem('Entree')}>
                    Entree
                </button>
                <button className="filter-btn" onClick={() => filterItem('Special')}>
                    Special
                </button>
                <button className="filter-btn" onClick={() => filterItem('Drink')}>
                    Drinks
                </button>
                <button className="filter-btn" onClick={() => filterItem('Dessert')}>
                    Dessert
                </button>
            </div>
            <Menu selectedFoods={selectedItems} />
        </>
    );
}

export default FoodSelection;


