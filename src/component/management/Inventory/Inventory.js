import React, {useState} from "react";
import lists from "../../../config/list.js";
import NavigationBar from "../../NavigationBar.js";
import DashboardFooter from "../../DashboardFooter.js";
import InventoryBody from "./InventoryBody.js";

const Inventory = (props) => {
    const [ingredient, setIngredient] = useState("");

    const handleRemove = async (event, ingredient) => {
        event && event.preventDefault();
        if (!ingredient) {
            return alert('Please select vaild ingredient');
        }//need to check if it matchs a vaild ingreident

        /*to update the inventory*/
        const updatedInventory = props.userInventory.filter(item => item.ingredient !== ingredient);
        props.setUserInventory(updatedInventory);
        setIngredient("");
    };

    const handleAdding = (event, ingredient) => {
        event && event.preventDefault();
        if (!lists.ingredients.get(ingredient)) {
            return alert('Please provide a vaild ingredient');
        }//check if it matchs a vaild ingreident

        if (!ingredient) {
            return alert('Please provide an ingredient');
        }

        const newItem = {
            id: 1,
            ingredient: ingredient,
            quantity: 1
        };
        /*to update the inventory*/
        const updatedInventory = [...props.userInventory, newItem];
        props.setUserInventory(updatedInventory);
        setIngredient(""); // Clear the input fields
    };


    let value = {
        handleAdding,
        handleRemove,
        ingredient,
        setIngredient,
    }

    return (
        <div>
            <NavigationBar />
            <InventoryBody value={value} userInventory={props.userInventory} />
            <DashboardFooter />
        </div>
    );
}

export default Inventory