import React from 'react';
import {connect} from 'react-redux';

function MenuIcon() {

    return (
        <div className="w-full relative h-4/5 bg-white">
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