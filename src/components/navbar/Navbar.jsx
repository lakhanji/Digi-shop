import { Link, useNavigate } from "react-router-dom";
import SearchBar from "../searchBar/SearchBar";
import { useSelector } from "react-redux";

const Navbar = () => {
    // get user from localStorage 
    const user = JSON.parse(localStorage.getItem('users'));

    // navigate 
    const navigate = useNavigate();

    // logout function 
    const logout = () => {
        localStorage.clear('users');
        navigate("/login");
    };

    // CartItems
    const cartItems = useSelector((state) => state.cart);

    // navList Data
    const navList = (
        <ul className="flex space-x-3 text-white font-medium text-md px-5">
            {/* Home */}
            <li className="hover:underline decoration-2 underline-offset-4">
                <Link to={'/'}>Home</Link>
            </li>

            {/* All Product */}
            <li className="hover:underline decoration-2 underline-offset-4">
                <Link to={'/allproduct'}>All Product</Link>
            </li>

            {/* Signup */}
            {!user ? (
                <li className="hover:underline decoration-2 underline-offset-4">
                    <Link to={'/signup'}>Signup</Link>
                </li>
            ) : ""}

            {/* Login */}
            {!user ? (
                <li className="hover:underline decoration-2 underline-offset-4">
                    <Link to={'/login'}>Login</Link>
                </li>
            ) : ""}

            {/* User */}
            {user?.role === "user" && (
                <li className="hover:underline decoration-2 underline-offset-4">
                    <Link to={'/user-dashboard'}>User</Link>
                </li>
            )}

            {/* Admin */}
            {user?.role === "admin" && (
                <li className="hover:underline decoration-2 underline-offset-4">
                    <Link to={'/admin-dashboard'}>Admin</Link>
                </li>
            )}

            {/* Logout */}
            {user && (
                <li
                    className="cursor-pointer hover:underline decoration-2 underline-offset-4"
                    onClick={logout}
                >
                    Logout
                </li>
            )}

            {/* Cart */}
            <li className="hover:underline decoration-2 underline-offset-4">
                <Link to={'/cart'}>
                    Cart({cartItems.length})
                </Link>
            </li>
        </ul>
    );

    return (
        <nav className="bg-gradient-to-r from-[#1b1646] to-[#4c84f3] sticky top-0">
            {/* main */}
            <div className="lg:flex lg:justify-between items-center py-3 lg:px-3">
                {/* left */}
                <div className="left py-3 lg:py-0">
                    <Link to={'/'}>
                        <h2 className="font-bold text-white text-2xl text-center">Digi-Shop</h2>
                    </Link>
                </div>

                {/* right */}
                <div className="right flex justify-center mb-4 lg:mb-0">
                    {navList}
                </div>

                {/* Search Bar */}
                <SearchBar />
            </div>
        </nav>
    );
};

export default Navbar;
