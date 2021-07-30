import UserImg from '../images/userImg.png'

function UserInfo() {
    return (
        <div className="flex">
            <div className="w-1/3">
                <img src={UserImg} className="w-1/2" alt="UserImg"/>
                <p className="bg-white w-full text-sm">
                    <span>SK하이스텍</span>
                    <span>9111562</span>
                    <span>박정욱</span>
                </p>
            </div>
        </div>
    );
}

export default UserInfo;