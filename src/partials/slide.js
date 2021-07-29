import React, { useEffect } from 'react';

function Slide() {
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
        console.log('start');
        start_x = e.touches[0].pageX;
    }
    const touch_end = (e) => {
        console.log('end');
        end_x = e.changedTouches[0].pageX;
        if(start_x > end_x){
        console.log('next');
        document.location.href = './main';
        }else{
        console.log('prev');
        }
    }

}
export default Slide;

