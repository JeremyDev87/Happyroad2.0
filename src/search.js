import TopBar from './partials/topbar';
import Footer from './partials/footer';
import MenuSearch from './menuSearch';


function Search() {
    return (

        <div className="h-screen w-full mainColor">
            <TopBar/>
            <MenuSearch/>
            <Footer/>
        </div>
    );
}

export default Search;