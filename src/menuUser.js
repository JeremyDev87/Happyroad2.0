import React, { useState } from 'react';
import {connect} from 'react-redux';
import UserInfo from './Users/userInfo'
import UserBase from './Users/userBase'

function MenuUser(props) {


    let [nowPage,setNowPage] = useState(props.page);
    if(props.page!==nowPage){
        setNowPage(props.page);
    }


    return (
        <div className={"w-full h-full bg-white " + (nowPage!=='user'?' right-full fixed':null)}>
            <div className="w-full py-10 border-b-2 border-gray-200"> 
                <UserInfo/>
            </div>
            <div className="w-full mt-5">
                <UserBase/>
            </div>
        </div>
    );
}


function GetStore(state){
    return {
        state : state
    }
}

export default connect(GetStore)(MenuUser);