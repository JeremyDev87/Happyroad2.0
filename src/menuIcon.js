import React, { useState } from 'react';
import {connect} from 'react-redux';

function MenuIcon(props) {

    let [nowPage,setNowPage] = useState(props.page);
    if(props.page!==nowPage){
        setNowPage(props.page);
    }

    return (
        <div className={"w-full h-full bg-white " + (nowPage!=='menu'?' right-full fixed ':null)}>
            <div className="container">
                <div className="pt-3 grid grid-cols-4 justify-items-center justify-self-center">
                    <div className="flex flex-col iconOpenAni">
                        <div className="iconStyle">Icon</div>
                        <div className="iconName">Name</div>
                    </div>
                    <div className="flex flex-col iconOpenAni">
                        <div className="iconStyle">Icon</div>
                        <div className="iconName">Name</div>
                    </div>
                    <div className="flex flex-col iconOpenAni">
                        <div className="iconStyle">Icon</div>
                        <div className="iconName">Name</div>
                    </div>
                    <div className="flex flex-col iconOpenAni">
                        <div className="iconStyle">Icon</div>
                        <div className="iconName">Name</div>
                    </div>
                    <div className="flex flex-col iconOpenAni">
                        <div className="iconStyle">Icon</div>
                        <div className="iconName">Name</div>
                    </div>
                    <div className="flex flex-col iconOpenAni">
                        <div className="iconStyle">Icon</div>
                        <div className="iconName">Name</div>
                    </div>
                    <div className="flex flex-col iconOpenAni">
                        <div className="iconStyle">Icon</div>
                        <div className="iconName">Name</div>
                    </div>
                    <div className="flex flex-col iconOpenAni">
                        <div className="iconStyle">Icon</div>
                        <div className="iconName">Name</div>
                    </div>
                    <div className="flex flex-col iconOpenAni">
                        <div className="iconStyle">Icon</div>
                        <div className="iconName">Name</div>
                    </div>
                    <div className="flex flex-col iconOpenAni">
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