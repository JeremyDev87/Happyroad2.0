import React, { useEffect,useState } from 'react';
import {connect} from 'react-redux';
import TopBar from './partials/topbar';
import Footer from './partials/footer';
import MenuIcon from './menuIcon';
import MenuSearch from './menuSearch';
import MenuUser from './menuUser';
import SlideGuide from './SlideGuide';

function Main(props) {
    
    let getStatePage = props.state[0].showPage;
    // console.log(getStatePage);

    let [page,setPage] = useState(getStatePage);
    let [touchStatus,setTouchStatus] = useState(false);

    // let touchStatus = false;
    useEffect(()=>{
        document.addEventListener('touchstart', touch_start);
        document.addEventListener('touchend', touch_end);
        setPage(getStatePage);
        return () => {
            document.removeEventListener('touchstart', touch_start);
            document.removeEventListener('touchend', touch_end);
        }
    })

    let   start_x = 0;
    let   end_x = 0;

    const touch_start = (e) => {
        start_x = e.touches[0].pageX;
        setTouchStatus(true);
    }
    const touch_end = (e) => {
        end_x = e.changedTouches[0].pageX;
        if(start_x-100 > end_x && start_x > end_x){
            if(page==='menu'){
                
                PageSlide('user');
            }else if(page==='search'){
                PageSlide('menu');
            }
        }else if(start_x+100 < end_x && start_x < end_x){
            if(page==='menu'){
                PageSlide('search');
            }else if(page==='user'){
                PageSlide('menu');
            }
        }
        setTouchStatus(false);
    }
    
    const PageSlide = (obj) => {
        props.dispatch({type:obj})
    }

    return (

        <div className="h-screen w-full mainColor">
            <TopBar/>
            {
                touchStatus
                ?<SlideGuide/>
                :null
            }
            <div className="h-4/5 flex overflow-x-hidden">
                <MenuSearch page={page}/>
                <MenuIcon page={page}/>
                <MenuUser page={page}/>
            </div>

            <Footer page={page}/>
        </div>
    );
}

function GetStore(state){
    return {
        state : state
    }
}

// export default Main;
export default connect(GetStore)(Main);