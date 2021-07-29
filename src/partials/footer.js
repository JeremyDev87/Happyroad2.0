import { Link } from 'react-router-dom';


function Footer() {
    return (
        <div className="flex justify-evenly items-center w-full mainColor fixed py-5 text-gray-50">
            <Link to="/search"><button className="py-2 px-5"><i className="fas fa-search fa-lg"></i></button></Link>
            <Link to="/main"><button className="py-2 px-5"><i className="fas fa-th fa-lg"></i></button></Link>
            <Link to="/user"><button className="py-2 px-5"><i className="fas fa-user fa-lg"></i></button></Link>
        </div>
    );
}

export default Footer;