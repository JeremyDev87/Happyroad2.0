import React, { useEffect } from 'react';
import logo from './images/HPRD2_Logo_bright.png';

function MenuSearch() {
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
        if(start_x-120 > end_x && start_x > end_x){
            document.location.href = './main';
        }
    }

    return (
        <div className="w-full h-4/5 bg-white text-center">
            <div className="relative top-1/3">
                <label htmlFor="mainSearchInput" className="mr-2" ><i className="fas fa-search"></i></label>
                <input className="w-3/5 py-2 px-2 rounded-md border-b-2" type="text" placeholder="노선/정류장 검색" id="mainSearchInput"/>
            </div>
        </div>
    );
}

export default MenuSearch;