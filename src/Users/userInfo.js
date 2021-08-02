import UserImg from '../images/userImg.png'

function UserInfo() {
    return (
        <div className="flex mx-4">
            <div className="w-1/2 text-center flex">
                <img src={UserImg} className="w-1/3 mr-2" alt="UserImg"/>
                <p className="bg-white w-full text-xs flex flex-col justify-center text-left">
                    <span className="mb-1 text-xl font-extrabold">홍길동</span>
                    <span className="mb-1">SK하이닉스</span>
                    <span className="mb-1">2345678</span>
                </p>
            </div>
            <div className="w-1/2 text-right flex justify-end">
                <button className="buttonStyle">어떤 버튼</button>
            </div>
        </div>
    );
}

export default UserInfo;