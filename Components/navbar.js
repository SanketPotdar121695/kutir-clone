export default function navbar() {
  return `
  <nav class="navbar-nav p-0">
          <div
            class="nav1_customBg container-fluid d-flex justify-content-between align-items-center px-4 py-3 gap-4"
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

        <nav class="navbar navbar-expand-lg navbar-dark bg-dark p-0">
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
              class="navbar-toggler my-2"
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
              <div
                class="container-fluid d-flex justify-content-between align-items-center gap-2"
              >
                <div class="me-auto">
                  <ul
                    class="navbar-nav me-auto ms-md-2 ms-0 mt-2 mt-md-0"
                  >
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
                </div>

                <div>
                  <button class="btn nav1_customBg text-light me-auto btn-sm">
                    Log In/Sign Up
                  </button>
                </div>
              </div>

              <form class="d-flex my-2" role="search">
                <div class="input-group me-2 input-group-sm">
                  <span
                    class="input-group-text bg-success-subtle"
                    style="cursor: pointer;"
                    id="basic-addon2"
                    >
                      <i class="bi bi-search"></i>
                    </i
                  ></span>
                  <input
                    type="search"
                    class="form-control bg-success-subtle"
                    placeholder="Search on Kutir"
                    aria-label="Search"
                    aria-describedby="basic-addon2"
                  />
                </div>
              </form>
            </div>
          </div>
        </nav>
  `;
}
