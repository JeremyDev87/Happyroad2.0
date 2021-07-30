import {connect} from 'react-redux';

function SlideGuide(props) {

    let getStatePage = props.state[0].showPage;
    // console.log(getStatePage);

    return (
        <div className="fixed z-50 opacity-50 top-1/3 w-full text-center flex justify-between">
            {
                getStatePage==="menu"
                ? <div className="flex flex-col"><span className='text-5xl'>◁</span><span>검색</span></div>
                :getStatePage==="user"
                ? <div className="flex flex-col"><span className="text-5xl">◁</span><span>메뉴</span></div>
                :<div className="flex flex-col"><span className="text-5xl"></span><span></span></div>
            }

            {
                getStatePage==="menu"
                ?<div className="flex flex-col"><span className="text-5xl">▷</span><span>사용자정보</span></div>
                :getStatePage==="search"
                ?<div className="flex flex-col"><span className="text-5xl">▷</span><span>메뉴</span></div>
                :<div className="flex flex-col"><span className="text-5xl"></span><span></span></div>
            }
        </div>
    );
}
function GetStore(state){
    return {
        state : state
    }
}
export default connect(GetStore)(SlideGuide);