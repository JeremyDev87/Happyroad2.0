import React, { useEffect } from 'react';
import UserInfo from './Users/userInfo'

function MenuUser() {
    useEffect(()=>{
        document.addEventListener('touchstart', touch_start);
        document.addEventListener('touchend', touch_end);

        return () => {
            document.removeEventListener('touchstart', touch_start);
            document.removeEventListener('touchend', touch_end);
        }
    })

    let   start_x = 0;
    let   end_x = 0;

    const touch_start = (e) => {
        start_x = e.touches[0].pageX;
    }
    const touch_end = (e) => {
        end_x = e.changedTouches[0].pageX;
        // console.log('start_x : ' + start_x);
        // console.log('end_x : ' + end_x);
        if(start_x-120 > end_x && start_x > end_x){
        }else if(start_x+120 < end_x && start_x < end_x){
            document.location.href = './main';
        }
    }

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