import React from 'react';

function MenuSearch() {
    return (
        <div className="w-full h-4/5 bg-white text-center">
            <div className="relative top-1/3">
                <label htmlFor="mainSearchInput" className="mr-2" ><i className="fas fa-search"></i></label>
                <input className="w-3/5 py-2 px-2 rounded-md border-b-2" type="text" placeholder="노선/정류장 검색" id="mainSearchInput"/>
            </div>
        </div>
    );
}

export default MenuSearch;