import { Link } from "@inertiajs/react"; 

const Navbar = ({user}) => {
    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-xl">Gungjay</a>
            </div>
            <div className="flex-none gap-2">
                <div className="form-control">
                    <input
                        type="text"
                        placeholder="Search"
                        className="input input-bordered w-24 md:w-auto"
                    />
                </div>
                <div className="dropdown dropdown-end z-10">
                    <label
                        tabIndex="0"
                        className="btn btn-ghost btn-circle avatar"
                    >
                        <div className="w-10 rounded-full">
                            <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </label>
                    <ul
                        tabIndex="0"
                        className="mt-3 p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
                    >
                        {!user ? (
                            <>
                                <li className="items-center">
                                    <Link
                                        href={route("login")}
                                        as="button"
                                        className="justify-between"
                                    >
                                        Login
                                    </Link>
                                </li>
                                <li className="items-center">
                                    <Link
                                        href={route("register")}
                                        as="button"
                                        className="justify-between"
                                    >
                                        Register
                                    </Link>
                                </li>
                            </>
                        ) : (
                            <>
                                <li>
                                    <Link href={route("dashboard")} as="button">
                                        Dasboard
                                    </Link>
                                </li>

                                <li>
                                    <span>News</span>
                                </li>

                                <li>
                                    <Link>Settings</Link>
                                </li>
                                <li>
                                    <Link href={route("logout")} method="post" as="button">
                                        Logout
                                    </Link>
                                </li>
                            </>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
