import React, { useEffect } from 'react';
import {connect} from 'react-redux';

function MenuIcon() {
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
            document.location.href = './user';
        }else if(start_x+120 < end_x && start_x < end_x){
            document.location.href = './search';
        }
    }

    return (
        <div className="w-full relative h-4/5 bg-white">
            <div className="container">
                <div className="pt-3 grid grid-cols-4 justify-items-center justify-self-center">
                    <div className="flex flex-col">
                        <div className="iconStyle">Icon</div>
                        <div className="iconName">Name</div>
                    </div>
                    <div className="flex flex-col">
                        <div className="iconStyle">Icon</div>
                        <div className="iconName">Name</div>
                    </div>
                    <div className="flex flex-col">
                        <div className="iconStyle">Icon</div>
                        <div className="iconName">Name</div>
                    </div>
                    <div className="flex flex-col">
                        <div className="iconStyle">Icon</div>
                        <div className="iconName">Name</div>
                    </div>
                    <div className="flex flex-col">
                        <div className="iconStyle">Icon</div>
                        <div className="iconName">Name</div>
                    </div>
                    <div className="flex flex-col">
                        <div className="iconStyle">Icon</div>
                        <div className="iconName">Name</div>
                    </div>
                    <div className="flex flex-col">
                        <div className="iconStyle">Icon</div>
                        <div className="iconName">Name</div>
                    </div>
                    <div className="flex flex-col">
                        <div className="iconStyle">Icon</div>
                        <div className="iconName">Name</div>
                    </div>
                    <div className="flex flex-col">
                        <div className="iconStyle">Icon</div>
                        <div className="iconName">Name</div>
                    </div>
                    <div className="flex flex-col">
                        <div className="iconStyle">Icon</div>
                        <div className="iconName">Name</div>
                    </div>

                </div>
            </div>
    </div>
    );
}


function stateToProps(state){
    return {
        state : state
    }
}

// export default MenuIcon;
export default connect(stateToProps)(MenuIcon);