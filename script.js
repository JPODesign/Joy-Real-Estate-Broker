const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelectorAll(".main-nav a, .header-cta");
const searchForm = document.querySelector(".search-panel");
const detailsButtons = document.querySelectorAll(".details-button");
const modal = document.querySelector("#property-modal");
const modalTitle = modal?.querySelector("#modal-title");
const modalLocation = modal?.querySelector(".property-modal__location");
const modalDescription = modal?.querySelector(".property-modal__description");
const modalMainImage = modal?.querySelector(".property-modal__main-image");
const modalThumbs = modal?.querySelector(".property-modal__thumbs");
const modalVideos = modal?.querySelector(".property-modal__videos");
const modalFeatures = modal?.querySelector(".property-modal__features");
const closeModalButtons = modal?.querySelectorAll("[data-close-modal]");

const propertyDetails = {
  "acropolis-loyola": {
    title: "Acropolis Loyola Residence",
    location: "QC-Marikina Area",
    description: "A polished residential address with convenient access to Quezon City, Marikina, schools, and daily essentials.",
    images: ["assets/images/acropolis-loyola/main.png"],
    videos: [
      "assets/videos/acropolis-loyola/acropolis-2024-web.mp4",
      "assets/videos/acropolis-loyola/acropolis-2025-web.mp4",
    ],
    features: ["Prime city-edge location", "Residential community setting", "Buyer assistance available", "Viewing by appointment"],
  },
  "alta-monte-pililla": {
    title: "Alta Monte Pililla",
    location: "Pililla, Rizal",
    description: "A scenic Rizal property option for buyers who want fresh air, mountain surroundings, and long-term value.",
    images: ["assets/images/alta-monte-pililla/main.png"],
    videos: [
      "assets/videos/alta-monte-pililla/alta-1x1.mp4",
      "assets/videos/alta-monte-pililla/altamonte-9x16.mp4",
    ],
    features: ["Pililla location", "Investment-friendly community", "Flexible viewing support", "Local guidance from inquiry to handover"],
  },
  "east-bel-air-cainta": {
    title: "East Bel-Air Premier Unit",
    location: "Cainta, Rizal",
    description: "A Cainta property option with multiple media previews and practical access to Rizal and Metro Manila routes.",
    images: [
      "assets/images/east-bel-air-cainta/main.jpg",
      "assets/images/east-bel-air-cainta/gallery.jpg",
    ],
    videos: [
      "assets/videos/east-bel-air-cainta/ebar.mp4",
      "assets/videos/east-bel-air-cainta/ebar-1x1.mp4",
    ],
    features: ["Cainta address", "Multiple media previews", "Accessible urban location", "Consultation and viewing support"],
  },
  "splendido-tagaytay": {
    title: "Splendido Leisure Home",
    location: "Tagaytay, Cavite",
    description: "A leisure-focused property setting with generous visual previews and a relaxed destination feel.",
    images: [
      "assets/images/splendido-tagaytay/main.jpg",
      "assets/images/splendido-tagaytay/gallery.jpg",
      "assets/images/splendido-tagaytay/hero.jpg",
    ],
    videos: [],
    features: ["Destination property setting", "Large gallery views", "Leisure-focused lifestyle", "Investment consultation available"],
  },
  "east-bel-air-cainta-garden": {
    title: "East Bel-Air Garden Unit",
    location: "Cainta, Rizal",
    description: "A second East Bel-Air option with gallery media and videos for a closer look at the property environment.",
    images: [
      "assets/images/east-bel-air-cainta/gallery.jpg",
      "assets/images/east-bel-air-cainta/main.jpg",
    ],
    videos: [
      "assets/videos/east-bel-air-cainta/ebar-1x1.mp4",
      "assets/videos/east-bel-air-cainta/ebar.mp4",
    ],
    features: ["Garden-oriented visual preview", "Cainta convenience", "Multiple video formats", "Buyer support available"],
  },
  "splendido-view": {
    title: "Splendido View Residence",
    location: "Tagaytay, Cavite",
    description: "A Tagaytay property preview with gallery imagery suited for leisure, investment, or weekend-home buyers.",
    images: [
      "assets/images/splendido-tagaytay/gallery.jpg",
      "assets/images/splendido-tagaytay/main.jpg",
      "assets/images/splendido-tagaytay/hero.jpg",
    ],
    videos: [],
    features: ["Tagaytay setting", "Gallery media included", "Investment guidance", "Private viewing coordination"],
  },
};

menuToggle?.addEventListener("click", () => {
  const isOpen = document.body.classList.toggle("menu-open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    document.body.classList.remove("menu-open");
    menuToggle?.setAttribute("aria-expanded", "false");
    menuToggle?.setAttribute("aria-label", "Open navigation");
  });
});

searchForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  document.querySelector("#properties")?.scrollIntoView({ behavior: "smooth" });
});

const closePropertyModal = () => {
  if (!modal) return;
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
  modalVideos?.querySelectorAll("video").forEach((video) => video.pause());
};

const openPropertyModal = (propertyId) => {
  const property = propertyDetails[propertyId];

  if (!property || !modal || !modalTitle || !modalMainImage || !modalThumbs || !modalVideos || !modalFeatures) {
    return;
  }

  modalTitle.textContent = property.title;
  modalLocation.textContent = property.location;
  modalDescription.textContent = property.description;
  modalMainImage.src = property.images[0];
  modalMainImage.alt = property.title;

  modalThumbs.replaceChildren(
    ...property.images.map((image, index) => {
      const button = document.createElement("button");
      const thumb = document.createElement("img");

      button.type = "button";
      button.className = "property-modal__thumb";
      button.setAttribute("aria-label", `View image ${index + 1} for ${property.title}`);
      thumb.src = image;
      thumb.alt = `${property.title} thumbnail ${index + 1}`;
      button.append(thumb);
      button.addEventListener("click", () => {
        modalMainImage.src = image;
      });

      return button;
    }),
  );

  modalVideos.replaceChildren(
    ...(property.videos.length
      ? property.videos.map((videoSource) => {
          const video = document.createElement("video");
          video.src = videoSource;
          video.controls = true;
          video.muted = true;
          video.playsInline = true;
          video.preload = "metadata";
          return video;
        })
      : [Object.assign(document.createElement("p"), { textContent: "No deploy-safe video is available for this listing yet." })]),
  );

  modalFeatures.replaceChildren(
    ...property.features.map((feature) => {
      const item = document.createElement("li");
      item.textContent = feature;
      return item;
    }),
  );

  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
};

detailsButtons.forEach((button) => {
  button.addEventListener("click", () => openPropertyModal(button.dataset.property));
});

closeModalButtons?.forEach((button) => {
  button.addEventListener("click", closePropertyModal);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closePropertyModal();
  }
});
