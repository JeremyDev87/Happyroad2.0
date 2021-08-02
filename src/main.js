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
    let [touchStatus,setTouchStatus] = useState(false);

    let   start_x = props.state[0].doSlide;
    let   end_x = props.state[0].endSlide;

    useEffect(()=>{
        document.addEventListener('touchstart', touch_start);
        document.addEventListener('touchend', touch_end);
        return () => {
            document.removeEventListener('touchstart', touch_start);
            document.removeEventListener('touchend', touch_end);
        }
    })
    
    const touch_start = (e) => {
        start_x = e.touches[0].pageX;
        props.dispatch({type:'startX',XValue:start_x});
        setTouchStatus(true);
    }

    const touch_end = (e) => {
        end_x = e.changedTouches[0].pageX;
        props.dispatch({type:'endX',XValue:end_x});

        if(start_x-100 > end_x && start_x > end_x){
            if(getStatePage==='menu'){
                PageSlide('user');
            }else if(getStatePage==='search'){
                PageSlide('menu');
            }
        }else if(start_x+100 < end_x && start_x < end_x){
            if(getStatePage==='menu'){
                PageSlide('search');
            }else if(getStatePage==='user'){
                PageSlide('menu');
            }
        }
        setTouchStatus(false);
    }
    
    const PageSlide = (obj) => {
        props.dispatch({type:obj});
    }


    return (

        <div className="h-screen w-full mainColor">
            <TopBar/>
            {
                touchStatus
                ?<SlideGuide/>
                :null
            }
            <div className="h-4/5 w-full flex overflow-x-hidden ">
                <MenuSearch page={getStatePage}/>
                <MenuIcon page={getStatePage}/>
                <MenuUser page={getStatePage}/>
            </div>

            <Footer page={getStatePage}/>
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