import React, { useState } from 'react';
import {connect} from 'react-redux';
import {useHistory} from 'react-router-dom';

function MenuIcon(props) {

    let [nowPage,setNowPage] = useState(props.page);
    let history = useHistory();

    if(props.page!==nowPage){
        setNowPage(props.page);
    }

    const doClickIcon = (obj) => {
        console.log(`click : ${obj}`);
        if(obj==='nearStop'){
            history.push('./nearStop');
        }else if(obj==='timeTable'){
            history.push('./timeTable');
        }else if(obj==='innerShuttle'){
            history.push('./innerShuttle');
        }else if(obj==='favorate'){
            history.push('./favorate');
        }else if(obj==='voc'){
            history.push('./voc');
        }else if(obj==='notice'){
            history.push('./notice');
        }else if(obj==='sue'){
            history.push('./sue');
        }else if(obj==='contact'){
            history.push('./contact');
        }else if(obj==='newRoute'){
            history.push('./newRoute');
        }else if(obj==='satisfy'){
            history.push('./satisfy');
        }
    }
    
    return (
        <div className={"w-full h-full bg-white " + (nowPage!=='menu'?' right-full fixed ':null)}>
            <div className="container">
                <div className="pt-3 grid grid-cols-4 justify-items-center">
                    <div className="iconOpenAni gridLayout">
                        <button className="iconStyle w-14 h-14 font-bold" onClick={()=>{doClickIcon('nearStop')}}><i className="fas fa-map-marker-alt fa-lg"></i></button>
                        <div className="iconName w-20">주변정류장</div>
                    </div>
                    <div className="iconOpenAni gridLayout">
                        <button className="iconStyle w-14 h-14 font-bold" onClick={()=>{doClickIcon('timeTable')}}><i className="far fa-clock fa-lg"></i></button>
                        <div className="iconName w-20">운행시간표</div>
                    </div>
                    <div className="iconOpenAni gridLayout">
                        <button className="iconStyle w-14 h-14 font-bold" onClick={()=>{doClickIcon('innerShuttle')}}><i className="fas fa-spinner fa-lg"></i></button>
                        <div className="iconName w-20">사내셔틀</div>
                    </div>
                    <div className="iconOpenAni gridLayout">
                        <button className="iconStyle w-14 h-14 font-bold" onClick={()=>{doClickIcon('favorate')}}><i className="far fa-star fa-lg"></i></button>
                        <div className="iconName w-20">즐겨찾기</div>
                    </div>
                    <div className="iconOpenAni gridLayout">
                        <button className="iconStyle w-14 h-14 font-bold" onClick={()=>{doClickIcon('voc')}}><i className="far fa-question-circle fa-lg"></i></button>
                        <div className="iconName w-20">문의사항</div>
                    </div>
                    <div className="iconOpenAni gridLayout">
                        <button className="iconStyle w-14 h-14 font-bold" onClick={()=>{doClickIcon('notice')}}><i className="fas fa-volume-up fa-lg"></i></button>
                        <div className="iconName w-20">공지사항</div>
                    </div>
                    <div className="iconOpenAni gridLayout">
                        <button className="iconStyle w-14 h-14 font-bold" onClick={()=>{doClickIcon('sue')}}><i className="far fa-question-circle fa-lg"></i></button>
                        <div className="iconName w-20">신고</div>
                    </div>
                    <div className="iconOpenAni gridLayout">
                        <button className="iconStyle w-14 h-14 font-bold" onClick={()=>{doClickIcon('contact')}}><i className="far fa-address-book fa-lg"></i></button>
                        <div className="iconName w-22">담당자 연락처</div>
                    </div>
                    <div className="iconOpenAni gridLayout">
                        <button className="iconStyle w-14 h-14 font-bold" onClick={()=>{doClickIcon('newRoute')}}><i className="far fa-question-circle fa-lg"></i></button>
                        <div className="iconName w-20">노선 신설</div>
                    </div>
                    <div className="iconOpenAni gridLayout">
                        <button className="iconStyle w-14 h-14 font-bold" onClick={()=>{doClickIcon('satisfy')}}><i className="far fa-smile fa-lg"></i></button>
                        <div className="iconName w-20">만족도 조사</div>
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