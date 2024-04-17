import '../../assets/dashboard.css';
import '../../assets/dashboard.js.download';

import Header from './Header';
import Sidebar from './Sidebar';
import Content from './Content';

export default function Layout({ children }) {

    return (
        <>
            <Header />
            <div className="container-fluid">
                <div className="row">
                    <Sidebar />
                    <Content content={children} />
                </div>
            </div>
        </>

    )
}