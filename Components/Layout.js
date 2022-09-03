import Head from "next/head";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

export default function Layout({ children }) {
  return (
    <>
      <div id="wrapper">
        <Sidebar />

        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <Navbar />
            <div className="container-fluid">{children}</div>
          </div>
        </div>

        <script src="/assets/vendor/jquery/jquery.min.js"></script>

        <script src="/assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

        <script src="/assets/vendor/jquery-easing/jquery.easing.min.js"></script>

        <script src="/assets/js/sb-admin-2.min.js"></script>

        <script src="/assets/vendor/chart.js/Chart.min.js"></script>

        <script src="/assets/js/demo/chart-area-demo.js"></script>
        <script src="/assets/js/demo/chart-pie-demo.js"></script>
        <script
          src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.5/dist/umd/popper.min.js"
          integrity="sha384-Xe+8cL9oJa6tN/veChSP7q+mnSPaj5Bcu9mPX5F5xIGE0DVittaqT5lorf0EI7Vk"
          crossOrigin="anonymous"
        ></script>
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.min.js"
          integrity="sha384-ODmDIVzN+pFdexxHEHFBQH3/9/vQ9uori45z4JjnFsRydbmQbmL5t1tQ0culUzyK"
          crossOrigin="anonymous"
        ></script>
      </div>
    </>
  );
}
