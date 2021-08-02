import React, { useState } from 'react';
import {connect} from 'react-redux';

function MenuSearch(props) {

    let [nowPage,setNowPage] = useState(props.page);
    if(props.page!==nowPage){
        setNowPage(props.page);
    }

    return (
        <div className={"w-full h-full bg-white " + (nowPage!=='search'?' left-full fixed':null)}>
            <div className="relative top-1/3 text-center">
                <label htmlFor="mainSearchInput" className="mr-2" ><i className="fas fa-search"></i></label>
                <input className="w-3/5 py-2 px-2 rounded-md border-b-2" type="text" placeholder="노선/정류장 검색" id="mainSearchInput"/>
            </div>
        </div>
    );
}

function GetStore(state){
    return {
        state : state
    }
}

export default connect(GetStore)(MenuSearch);