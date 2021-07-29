import logo from '../images/HPRD2_Logo_bright.png';


function Topbar() {
    return (
        <div>
            <div className="text-center py-3 bg-white w-full relative">
                <img src={logo} className="mx-auto w-1/4" alt="logo"/>
            </div>
        </div>
    );
}

export default Topbar;