import "./index.css";
export function Banner() {
  return (
    <div class="banner">
      <div>
        We stand with Ukraine.
        <span class="banner-warning"> Show your support</span> 🇺🇦
      </div>
    </div>
  );
}
export function Navbar() {
  return (
    <div class="navbar-outer">
      <nav>
        <ul class="nav-menus">
          <li>教程</li>
          <li>指南</li>
          <li>关于</li>
          <li>在线试用</li>
          <input class="search" />
          <li style={{ marginLeft: "12px" }}>v10.18.1</li>

          <li class="toolbar-icon">
            <div>
              <img
                src="/public/svgs/github.svg"
                style={{ height: "auto", width: "1.6rem" }}
              />
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <Navbar></Navbar>
    </div>
  );
}
