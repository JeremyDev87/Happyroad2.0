import React from 'react';
import UserInfo from './Users/userInfo'
import UserBase from './Users/userBase'
import './test.css'

function MenuUser() {
    return (
        <div className="w-full relative h-4/5 bg-white">
            <div className="w-full py-10 border-b-2 border-gray-200"> 
                <UserInfo/>
            </div>
            <div className="w-full py-10">
                <UserBase/>
            </div>
        </div>
    );
}

export default MenuUser;