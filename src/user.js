import TopBar from './partials/topbar';
import Footer from './partials/footer';
import MenuUser from './menuUser';

function User() {
    return (
        <div className="h-screen w-full mainColor">
            <TopBar/>
            <MenuUser/>
            <Footer/>
        </div>
    );
}

export default User;