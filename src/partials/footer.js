import React, { useState } from 'react';
import {connect} from 'react-redux';

function Footer(props) {

    let [nowPage,setNowPage] = useState(props.page);
    if(props.page!==nowPage){
        setNowPage(props.page);
    }

    return (
        <div className="flex justify-evenly items-center w-full mainColor fixed py-5 text-gray-50">
            <button onClick={()=>{props.dispatch({type:'search'})}} className={"py-2 px-5 " + (nowPage==='search'?'text-blue-500':null)}><i className="fas fa-search fa-lg"></i></button>
            <button onClick={()=>{props.dispatch({type:'menu'})}} className={"py-2 px-5 " + (nowPage==='menu'?'text-blue-500':null)}><i className="fas fa-th fa-lg"></i></button>
            <button onClick={()=>{props.dispatch({type:'user'})}} className={"py-2 px-5 " + (nowPage==='user'?'text-blue-500':null)}><i className="fas fa-user fa-lg"></i></button>
        </div>
    );
}

function GetStore(state){
    return {
        state : state
    }
}

export default connect(GetStore)(Footer);