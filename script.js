const siteConfig = Object.freeze({
  demoEmail: "hello@n0labs.com",
});

const productPages = new Set([
  "products",
  "sensor-simulation",
  "synthetic-data",
  "sitl-testing",
]);

function getCurrentPage() {
  const pathname = window.location.pathname.replace(/\/+$/, "");
  const filename = pathname.split("/").pop() || "index";
  return filename.replace(/\.html$/, "");
}

function currentPageAttribute(isCurrent) {
  return isCurrent ? ' aria-current="page"' : "";
}

function brandMarkup() {
  return `
    <a class="brand" href="index.html" aria-label="Null Labs home">
      <img src="assets/images/N0_final-256x256.png" alt="" width="28" height="28" />
      <span>NULL LABS</span>
    </a>
  `;
}

function renderSiteShell() {
  const currentPage = getCurrentPage();
  const header = document.querySelector("[data-site-header]");
  const footer = document.querySelector("[data-site-footer]");

  if (header) {
    header.innerHTML = `
      ${brandMarkup()}
      <nav aria-label="Primary navigation">
        <a href="index.html"${currentPageAttribute(currentPage === "index")}>About</a>
        <div class="nav-products">
          <a class="nav-products-trigger" href="products.html"${currentPageAttribute(productPages.has(currentPage))}>Products</a>
          <div class="product-nav-menu" role="group" aria-label="Product pages">
            <a href="sensor-simulation.html"${currentPageAttribute(currentPage === "sensor-simulation")}>Sensor simulation</a>
            <a href="synthetic-data.html"${currentPageAttribute(currentPage === "synthetic-data")}>Synthetic data</a>
            <a href="sitl-testing.html"${currentPageAttribute(currentPage === "sitl-testing")}>SITL testing</a>
          </div>
        </div>
        <a href="company.html"${currentPageAttribute(currentPage === "company")}>Company</a>
        <a href="research.html"${currentPageAttribute(currentPage === "research")}>Research</a>
      </nav>
      <a class="etched-button" data-demo-link>Request a demo</a>
    `;
  }

  if (footer) footer.innerHTML = brandMarkup();

  document.querySelectorAll("[data-demo-link]").forEach((link) => {
    link.href = `mailto:${siteConfig.demoEmail}`;
  });
}

renderSiteShell();

const slides = [...document.querySelectorAll(".hero-slide")];
const slideDots = [...document.querySelectorAll(".slide-dot")];
const slidePauseTimers = new WeakMap();
const slideFadeDuration = 900;
const pageLoader = document.querySelector("[data-page-loader]");
const pageLoaderProgress = document.querySelector("[data-page-loader-progress]");
const pageLoaderProgressValue = document.querySelector("[data-page-loader-progress-value]");
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const prefersReducedData = navigator.connection?.saveData === true;
const shouldPlayHeroVideo = !prefersReducedMotion && !prefersReducedData;
const ambientVideos = [...document.querySelectorAll("video[autoplay]:not(.hero-slide)")];
let currentSlide = 0;
let slideshowTimer;
let nextSlidePreloadTimer;
let pageLoaderCompletionTimer;

function setPageLoaderProgress(progress) {
  const normalizedProgress = Math.min(Math.max(progress, 0), 1);
  pageLoaderProgressValue?.style.setProperty("transform", `scaleX(${normalizedProgress})`);
  pageLoaderProgress?.setAttribute("aria-valuenow", String(Math.round(normalizedProgress * 100)));
}

function dismissPageLoader() {
  if (!pageLoader || pageLoader.classList.contains("is-hidden")) return;

  pageLoader.classList.add("is-hidden");
  pageLoader.setAttribute("aria-hidden", "true");
  document.body.classList.remove("page-loading");

  window.setTimeout(() => pageLoader.remove(), 700);
}

function completePageLoader() {
  if (!pageLoader || pageLoader.classList.contains("is-hidden") || pageLoaderCompletionTimer) return;

  setPageLoaderProgress(1);
  pageLoaderCompletionTimer = window.setTimeout(dismissPageLoader, 140);
}

function watchInitialSlide(slide) {
  if (!pageLoader) return;

  setPageLoaderProgress(0.08);
  if (!shouldPlayHeroVideo || !(slide instanceof HTMLVideoElement)) {
    window.requestAnimationFrame(completePageLoader);
    return;
  }

  if (slide.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA) {
    completePageLoader();
    return;
  }

  slide.addEventListener("loadstart", () => setPageLoaderProgress(0.18), { once: true });
  slide.addEventListener("loadedmetadata", () => setPageLoaderProgress(0.44), { once: true });
  slide.addEventListener("progress", () => {
    if (!slide.duration || !slide.buffered.length) return;

    const bufferedRatio = slide.buffered.end(slide.buffered.length - 1) / slide.duration;
    setPageLoaderProgress(0.44 + Math.min(bufferedRatio, 1) * 0.46);
  });
  slide.addEventListener("loadeddata", completePageLoader, { once: true });
  slide.addEventListener("error", completePageLoader, { once: true });
  window.setTimeout(completePageLoader, 6000);
}

function loadSlideVideo(slide, preload = "auto") {
  if (!(slide instanceof HTMLVideoElement) || !slide.dataset.src) return;

  slide.preload = preload;
  if (!slide.getAttribute("src")) {
    slide.src = slide.dataset.src;
    slide.load();
  }
}

function preloadUpcomingSlide() {
  if (!shouldPlayHeroVideo || slides.length < 2) return;

  window.clearTimeout(nextSlidePreloadTimer);
  nextSlidePreloadTimer = window.setTimeout(() => {
    const nextSlide = slides[(currentSlide + 1) % slides.length];
    loadSlideVideo(nextSlide, "metadata");
  }, 1200);
}

if (!shouldPlayHeroVideo) {
  ambientVideos.forEach((video) => {
    video.autoplay = false;
    video.preload = "none";
    video.pause();
  });
}

function shuffleSlides() {
  for (let index = slides.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [slides[index], slides[randomIndex]] = [slides[randomIndex], slides[index]];
  }
}

function showSlide(nextSlide) {
  if (!slides.length) return;

  currentSlide = (nextSlide + slides.length) % slides.length;
  slides.forEach((slide, index) => {
    const isActive = index === currentSlide;
    slide.classList.toggle("is-active", isActive);

    if (!(slide instanceof HTMLVideoElement)) return;

    window.clearTimeout(slidePauseTimers.get(slide));
    if (isActive) {
      if (shouldPlayHeroVideo) {
        loadSlideVideo(slide, "auto");
        slide.play().catch(() => {});
      }
      return;
    }

    const pauseTimer = window.setTimeout(() => {
      if (!slide.classList.contains("is-active")) slide.pause();
    }, slideFadeDuration);
    slidePauseTimers.set(slide, pauseTimer);
  });

  const firstVisibleSlide = Math.min(
    Math.max(currentSlide - 2, 0),
    slides.length - slideDots.length,
  );

  slideDots.forEach((dot, index) => {
    const slideIndex = firstVisibleSlide + index;
    const isCurrent = slideIndex === currentSlide;
    dot.dataset.slide = String(slideIndex);
    dot.setAttribute("aria-label", `Slide ${slideIndex + 1}`);
    dot.classList.toggle("is-active", isCurrent);
    if (isCurrent) dot.setAttribute("aria-current", "true");
    else dot.removeAttribute("aria-current");
  });

  preloadUpcomingSlide();
}

function startSlideshowTimer() {
  if (!shouldPlayHeroVideo || slides.length < 2 || document.hidden) return;

  window.clearInterval(slideshowTimer);
  slideshowTimer = window.setInterval(() => showSlide(currentSlide + 1), 5000);
}

shuffleSlides();
watchInitialSlide(slides[0]);
showSlide(0);
startSlideshowTimer();

document.querySelector("[data-slide-previous]")?.addEventListener("click", () => {
  showSlide(currentSlide - 1);
  startSlideshowTimer();
});

document.querySelector("[data-slide-next]")?.addEventListener("click", () => {
  showSlide(currentSlide + 1);
  startSlideshowTimer();
});

slideDots.forEach((dot) => {
  dot.addEventListener("click", () => {
    showSlide(Number(dot.dataset.slide));
    startSlideshowTimer();
  });
});

document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    window.clearInterval(slideshowTimer);
    slides.forEach((slide) => {
      if (slide instanceof HTMLVideoElement) slide.pause();
    });
    ambientVideos.forEach((video) => video.pause());
    return;
  }

  const activeSlide = slides[currentSlide];
  if (shouldPlayHeroVideo && activeSlide instanceof HTMLVideoElement) {
    activeSlide.play().catch(() => {});
  }
  if (shouldPlayHeroVideo) {
    ambientVideos.forEach((video) => video.play().catch(() => {}));
  }
  startSlideshowTimer();
});

const aboutHeader = document.querySelector(".about-page .site-header");

function updateAboutHeader() {
  if (!aboutHeader) return;

  const progress = Math.min(window.scrollY / 120, 1);
  aboutHeader.style.setProperty("--about-header-fill", `rgba(0, 0, 0, ${progress * 0.88})`);
  aboutHeader.style.setProperty("--about-header-border", `rgba(41, 41, 41, ${progress})`);
  aboutHeader.style.setProperty("--about-header-blur", `${progress * 12}px`);
}

if (aboutHeader) {
  updateAboutHeader();
  window.addEventListener("scroll", updateAboutHeader, { passive: true });
}

const domainDialog = document.querySelector("[data-domain-dialog]");
const dialogTitle = document.querySelector("[data-dialog-title]");
const dialogMedia = document.querySelector("[data-dialog-media]");

const domainExamples = {
  maritime: {
    title: "Maritime autonomy",
    video: "assets/videos/maritime.mp4",
  },
  aerial: {
    title: "Aerial ISR",
    video: "assets/videos/aerial-isr.mp4",
  },
  ground: {
    title: "Ground autonomy",
    video: "assets/videos/ground-autonomy.mp4",
  },
  "counter-uas": {
    title: "Counter UAS",
    images: Array.from(
      { length: 6 },
      (_, index) => `assets/images/domain-counter-uas-${index + 1}.webp`,
    ),
  },
};

function clearDialogMedia() {
  dialogMedia?.querySelector("video")?.pause();
  dialogMedia?.replaceChildren();
}

function createVideo(source, title) {
  const video = document.createElement("video");
  video.src = source;
  video.controls = true;
  video.autoplay = true;
  video.muted = true;
  video.loop = true;
  video.playsInline = true;
  video.setAttribute("aria-label", `${title} example video`);
  return video;
}

function createGallery(images, title) {
  const gallery = document.createElement("div");
  const image = document.createElement("img");
  const controls = document.createElement("div");
  const previous = document.createElement("button");
  const status = document.createElement("span");
  const next = document.createElement("button");
  let galleryIndex = 0;

  gallery.className = "dialog-gallery";
  controls.className = "dialog-gallery-controls";
  previous.type = "button";
  previous.textContent = "←";
  previous.setAttribute("aria-label", "Previous image");
  next.type = "button";
  next.textContent = "→";
  next.setAttribute("aria-label", "Next image");

  function updateGallery() {
    image.src = images[galleryIndex];
    image.alt = `${title} example ${galleryIndex + 1}`;
    image.decoding = "async";
    status.textContent = `${galleryIndex + 1} / ${images.length}`;
  }

  previous.addEventListener("click", () => {
    galleryIndex = (galleryIndex - 1 + images.length) % images.length;
    updateGallery();
  });

  next.addEventListener("click", () => {
    galleryIndex = (galleryIndex + 1) % images.length;
    updateGallery();
  });

  controls.append(previous, status, next);
  gallery.append(image, controls);
  updateGallery();
  return gallery;
}

document.querySelectorAll("[data-domain]").forEach((button) => {
  button.addEventListener("click", () => {
    const example = domainExamples[button.dataset.domain];
    if (!domainDialog || !dialogTitle || !dialogMedia || !example) return;

    clearDialogMedia();
    dialogTitle.textContent = example.title;
    if (example.video) dialogMedia.append(createVideo(example.video, example.title));
    if (example.images) dialogMedia.append(createGallery(example.images, example.title));
    domainDialog.showModal();
  });
});

document.querySelector("[data-dialog-close]")?.addEventListener("click", () => {
  domainDialog?.close();
});

domainDialog?.addEventListener("click", (event) => {
  if (event.target === domainDialog) domainDialog.close();
});

domainDialog?.addEventListener("close", clearDialogMedia);
