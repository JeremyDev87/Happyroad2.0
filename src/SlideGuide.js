
function SlideGuide() {
    return (
        <div className="fixed z-50 opacity-50 top-1/3 bg-red-100 w-full text-center text-5xl flex">
            <div className="flex flex-col">
                <span>왼쪽 화살표</span>
                <span>왼쪽 화살표</span>
            </div>
            <div className="flex flex-col">
                <span>오른쪽 화살표</span>
                <span>오른쪽 화살표</span>
            </div>
        </div>
    );
}

export default SlideGuide;