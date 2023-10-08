export default function footer() {
  return `
    <div class="row">
          <div class="col-6 col-md-2 mb-3">
            <img
              class="img-fluid"
              src="https://i.postimg.cc/xTRDKs07/935de0dda480b956201668a2f5ceff1a.png"
              alt="kutir-logo"
            />
          </div>

          <div class="col-6 col-md-2 mb-3">
            <h6 class="text-decoration-underline">Shop on Kutir</h6>
            <ul class="nav flex-column">
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-body-secondary">Women</a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-body-secondary">Men</a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-body-secondary"
                  >Home and Furnishing</a
                >
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-body-secondary">Fabrics</a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-body-secondary"
                  >Custom Printing</a
                >
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-body-secondary"
                  >Donate and Earn</a
                >
              </li>
            </ul>
          </div>

          <div class="col-6 col-md-2 mb-3">
            <h6 class="text-decoration-underline">Useful Links</h6>
            <ul class="nav flex-column">
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-body-secondary">Return</a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-body-secondary"
                  >Priacy Policy</a
                >
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-body-secondary"
                  >Reward Policy</a
                >
              </li>
            </ul>
          </div>

          <div class="col-6 col-md-2 mb-3">
            <h6 class="text-decoration-underline">Help</h6>
            <ul class="nav flex-column">
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-body-secondary"
                  >About Us</a
                >
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-body-secondary"
                  >Contact Us</a
                >
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-body-secondary"
                  >Terms and Coditions</a
                >
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-body-secondary">FAQs</a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-body-secondary"
                  >Track Orders</a
                >
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-body-secondary"
                  >Shipping</a
                >
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-body-secondary"
                  >Cancellation</a
                >
              </li>
            </ul>
          </div>

          <div class="col-lg-4 mb-3">
            <div
              class="d-flex flex-column w-100 gap-4 ms-0 justify-content-center align-items-center"
            >
              <button class="btn w-25 nav1_customBg text-light" type="button">
                Sign up
              </button>
              <button class="btn btn-outline-success w-25" type="button">
                Log in
              </button>
            </div>
          </div>
        </div>

        <div
          class="d-flex flex-column flex-sm-row justify-content-between pt-4 mt-4 border-top"
        >
          <p>© 2023 Kutir, Inc. All rights reserved.</p>
          <ul class="list-unstyled d-flex">
            <h6>Follow Us</h6>
            <li class="ms-3">
              <a class="link-body-emphasis" href="#"
                ><svg class="bi" width="24" height="24">
                  <use xlink:href="#twitter"></use></svg
              ></a>
            </li>
            <li class="ms-3">
              <a class="link-body-emphasis" href="#"
                ><svg class="bi" width="24" height="24">
                  <use xlink:href="#instagram"></use></svg
              ></a>
            </li>
            <li class="ms-3">
              <a class="link-body-emphasis" href="#"
                ><svg class="bi" width="24" height="24">
                  <use xlink:href="#facebook"></use></svg
              ></a>
            </li>
          </ul>
        </div>
    `;
}
