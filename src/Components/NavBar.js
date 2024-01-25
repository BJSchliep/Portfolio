import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function Navbar(){
    return (
        < nav className="nav">
            <Link to="/" className="site_title">
                BS
            </Link>
            <ul>
                <CustomLink to="/projects">Projects</CustomLink>
                <CustomLink to="/aboutme">About Me</CustomLink>
                <CustomLink to="/contactme">Contact Me</CustomLink>
            </ul>
        </nav>

    )
}

function CustomLink({ to, children, ...props}) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end:true })

    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}