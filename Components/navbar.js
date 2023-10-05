export default function navbar() {
  return `
  <nav>
    <div
      class="nav1_customBg d-flex sticky-top justify-content-between align-items-center px-4 py-3 gap-4"
    >
      <h3 class="nav1_custom text-uppercase text-light my-auto">
        Recycle and earn - A step towards sustainable fashion
      </h3>

      <button
        type="button"
        class="nav1_customBtn btn btn-light text-dark px-4 py-2 border border-dark border-2 shadow rounded-pill fw-medium text-nowrap"
      >
        Know more
      </button>
    </div>
  </nav>

  <nav class="navbar sticky-top navbar-expand-md navbar-dark bg-dark p-0">
    <div class="container-fluid px-4">
      <div class="nav2_customImg pt-md-2 pt-base-0 pt-1">
        <a class="navbar-brand" href="#"
          ><img
            class="img-fluid"
            src="https://i.postimg.cc/xTRDKs07/935de0dda480b956201668a2f5ceff1a.png"
            alt="kutir-logo"
        /></a>
      </div>

      <div class="vr text-warning me-auto"></div>

      <button
        class="navbar-toggler my-md-2"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto ps-md-3 ps-0">
          <li class="nav-item">
            <a
              class="nav1_custom py-1 my-0 nav-link active"
              aria-current="page"
              href="#"
              >Solar Khadi</a
            >
          </li>
          <li class="nav-item">
            <a class="nav1_custom py-1 my-0 nav-link" href="#"
              >Heritage Khadi</a
            >
          </li>
          <li class="nav-item">
            <a class="nav1_custom py-1 my-0 nav-link" href="#"
              >Custom Printing</a
            >
          </li>
        </ul>

        <form class="d-flex my-2" role="search">
          <input
            class="form-control me-2 bg-success-subtle"
            type="search"
            placeholder="Search on Kutir"
            aria-label="Search"
          />
          <button class="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>
      </div>
    </div>
  </nav>
  `;
}
