export default function carousel() {
  return `
    <div class="container-fluid p-0">
        <div
          id="carouselExampleSlidesOnly"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                src="https://i.postimg.cc/RhG3s8k9/569d6bba23411c8ed907e52532acf755.png"
                class="d-block w-100"
                alt="poster1"
              />
            </div>

            <div class="carousel-item">
              <img
                src="https://i.postimg.cc/g0v2tQh5/aa3a0b0bd235409dfcafcb65a98fbb10.png"
                class="d-block w-100"
                alt="poster2"
              />
            </div>

            <div class="carousel-item">
              <img
                src="https://i.postimg.cc/8kLmBzsB/08a73cb40dfc24f1005f4432b0b66b47.png"
                class="d-block w-100"
                alt="poster3"
              />
            </div>

            <div class="carousel-item">
              <img
                src="https://i.postimg.cc/7600VKPY/68f0127257bf65b16f2c842ef0fa559c.png"
                class="d-block w-100"
                alt="poster4"
              />
            </div>
          </div>
        </div>
      </div>
    `;
}
