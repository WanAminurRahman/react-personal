import pages from "../../config/pages";
import { Link, useLocation } from 'react-router-dom';

function PageItem({ page }) {
    const location = useLocation();

    return (
        <>
            {page.map((p) => (
                <li className="nav-item" key={p.path}>
                    <Link to={p.path} className={location.pathname === p.path ? 'nav-link active' : 'nav-link'}>
                        {p.label}
                    </Link>
                </li>
            ))}
        </>
    )
}

function PageList({ pageData, type }) {
    const filteredData = pageData.filter((page) => page.type === type);

    return (
        <>
            <ul className="nav flex-column">
                <PageItem page={filteredData} />
            </ul>
        </>
    )
}

export default function Sidebar() {

    return (
        <>
            <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
                <div className="position-sticky pt-3">
                    <ul className="nav flex-column">
                        <PageList pageData={pages} type={'Main'} />
                    </ul>

                    <ul className="nav flex-column mb-2">
                        <PageList pageData={pages} type={'Admin'} />
                    </ul>
                </div>
            </nav>
        </>
    )
}