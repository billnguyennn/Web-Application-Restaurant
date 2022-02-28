
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Every sign in page to 
function Admin() {
    let navigate = useNavigate();
    console.log(localStorage.getItem("logInStatus"));
    useEffect(() => {                                                
        if(!localStorage.getItem("logInStatus")){
            return navigate("/SignIn");
        }
    }, []);

    return (
        <div>
            <h1>This is Admin Page</h1>
        </div>
    )
}


export default Admin;

// Check localStorage if it has status, check if it true, stay,
// false --> redirect to SignIn page
// This task is done

// New Task: Admin will create / delete / update menu items.
//