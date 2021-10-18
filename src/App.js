import "./styles.css";
import SideBar from "./SideBar.js";
import Footer from "./Footer.js";
import Projects from "./Projects.js";
import Earnings from "./Earnings";
import NavBar from "./NavBar.js";
import ColorCards from "./ColorCards.js";

export default function App() {
  return (
    <div className="App" id="page-top">
      <div id="wrapper">
        <SideBar />
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <NavBar />
            <div className="container-fluid">
              <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
                <a
                  href="#!"
                  className="d-none d-sm-inline-block btn btn-sm btn-info shadow-sm"
                >
                  <i className="fas fa-download fa-sm text-white-50 "></i>{" "}
                  Generate Report
                </a>
              </div>

              <Earnings />

              <div className="row">
                <Projects />

                <Footer />
              </div>
              <div className="row">
                <ColorCards />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
