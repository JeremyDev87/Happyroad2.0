import React from 'react';
import UserInfo from './Users/userInfo'
import './test.css'

function MenuUser() {
    return (
        <div className="w-full relative h-4/5 bg-white">
            <div className="bg-red-200 w-full py-10"> 
                <UserInfo/>
            </div>
            <div className="bg-green-200 w-full py-16"> base icon </div>
            <div className="bg-blue-200 w-full py-20"> etc Icon </div>
        </div>
    );
}

export default MenuUser;