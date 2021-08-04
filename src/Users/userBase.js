function UserBase() {
    return (
        <div className="mx-4">
            <div className="grid grid-cols-3 justify-items-center">
                <div className="iconOpenAni gridLayout">
                    <button className="iconStyle text-center text-xs w-20 h-14">정보 수정</button>
                </div>
                <div className="flex flex-col iconOpenAni">
                    <button className="iconStyle text-center text-xs w-20 h-14">탑승 현황</button>
                </div>
                <div className="flex flex-col iconOpenAni">
                    <button className="iconStyle text-center text-xs w-20 h-14">나의 문의</button>
                </div>
                <div className="flex flex-col iconOpenAni">
                    <button className="iconStyle text-center text-xs w-20 h-14">Icon</button>
                </div>
                <div className="flex flex-col iconOpenAni">
                    <button className="iconStyle text-center text-xs w-20 h-14">Icon</button>
                </div>
                <div className="flex flex-col iconOpenAni">
                    <button className="iconStyle text-center text-xs w-20 h-14">Icon</button>
                </div>
            </div>
        </div>
    );
}

export default UserBase;