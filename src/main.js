import TopBar from './partials/topbar';
import Footer from './partials/footer';
import MenuIcon from './menuIcon';


function Main() {
    return (

        <div className="h-screen w-full mainColor">
            <TopBar/>
            <MenuIcon/>
            <Footer/>
        </div>
    );
}

export default Main;