tailwind.config = {
  theme: {
    extend: {
      screens: {
        smm: { min: "321px" },
        sm: { min: "580px" },
        md: { min: "768px" },
        lg: { min: "991px" },
        xl: { min: "1025px" },
      },
      fontFamily: {
        elza: ["elza-text", "sans-serif"],
        articulat: ["articulat-cf", "sans-serif"],
      },
      spacing: {
        small: "5px",
        large: "1.125rem",
        13: "2.375rem",
        15: "3.875rem",
        17: "4.375rem",
        18: "4.5rem",
        19: "4.875rem",
        21: "5.5rem",
        84: "22.625rem",
      },

      maxWidth: {
        "3xl": "2.75rem",
        smm: "18rem",
        xxs: "21rem",
        xsm: "21.125rem",
        "5xxl": "1104px",
        "6xxl": "1216px",
        large: "59.25rem",
        90: "90%",
      },
      minWidth: {
        ssm: "9.25rem",
        xss: "12.5rem",
        smm: "18rem",
        xxs: "20rem",
        xsm: "21.125rem",
        "2xl": "42rem",
        large: "59.25rem",
        90: "90%",
      },
      width: {
        118: "29.5rem", //newly added
      },
      height: {
        87: "21.75rem", //newly added
      },
      colors: {
        gray: {
          50: "#F8F8F8",
          100: "#999999",
          200: "#666666",
          300: "#333333",
          500: "#555555",
          600: "#CCCCCC",
        },
        orange: {
          100: "#FFEDE8",
          150: "#FFF4EE", //newly added
          200: "#FFB5A0",
          300: "#FFF9F8",
          400: "#FF6435",
          900: "#83635A",
          950: "#3B2823",
        },
        purple: {
          100: "#AC82F4",
          150: "#8371A9",
          200: "#8D4AFF",
          250: "#9E76E4",
          300: "#CB36FF",
          400: "#CCAEFF",
          450: "#C5A2FF",
          500: "#7441CC",
          550: "#7120FD",
          800: "#492F75",
          850: "#32253B",
          900: "#24163B",
          950: "#2F2540",
        },
        cyan: {
          200: "#36ACDF",
          300: "#5492D1",
        },
        teal: {
          200: "#63D3DA",
          300: "#7CDBC4",
        },
        indigo: {
          950: "#1D0C39", //newly added
        },
      },
      fontSize: {
        xxs: "10px",
        "2xxl": "1.75rem",
        "3xxl": "2rem",
        "4xxl": "2.5rem",
      },
      letterSpacing: {
        tight: "-0.02em",
        high: "-0.04em",
      },
      lineHeight: {
        tiny: "1.09091",
        11: "1.1875",
      },

      backgroundImage: {
        "hero-pattern":
          "linear-gradient(180deg, #160B29 0%, rgba(22, 11, 41, 0.88) 100%);",
        "blue-gradient":
          "url('./images/explore-polygon-bg.png'),linear-gradient(180deg, #2A0B5E 0%, #1D0C39 100%) ",
        "search-icon": "url('./images/svg/search.svg')",
        "carousal-pattern": "url('./images/carousal-section-bg.png')",
        "creators-bg": "url('./images/creators-bg.png')",
        "polygon-bg": "url('./images/svg/polygon-bg.svg')",
        "drop-down": "url('./images/svg/drop-down.svg')",
        "dropdown-bg": "url('./images/svg/drop-down-bg.svg')",
        "search-down-arrow": "url('./images/svg/down-icon.svg')",
        "yellow-bg":
          "linear-gradient(180deg, #FFB017 0%, rgba(148, 35, 0, 0.22) 100%);",
        "blue-gradient-bg":
          "linear-gradient(180deg, rgba(62, 0, 169, 0.6) -35.58%, rgba(203, 54, 255, 0.072) 180.77%);",
      },
      borderRadius: {
        "3xxl": "2rem",
        "4xl": "2.5rem",
        "5xl": "3.75rem",
      },
      boxShadow: {
        "3xl": "0px 1px 3px 1px rgba(0, 0, 0, 0.15);",
        "3xxl": "0px 1px 3px 1px rgba(0, 0, 0, 0.1)",
        "4xl": " 0px 1px 3px 1px rgba(0, 0, 0, 0.15);",
        "4xxl": "0px 0px 14px rgba(0, 0, 0, 0.25);",
        "5xl":
          "0px 30px 49px -22px rgba(0, 0, 0, 0.1), 0px 1px 3px 1px rgba(0, 0, 0, 0.15);",
        "6xxl":
          " 0px 1px 3px 1px rgba(0, 0, 0, 0.1), 0px 27px 21px -17px rgba(0, 0, 0, 0.08);",
        "6xl":
          "0px 1.85185px 3.14815px rgba(83, 30, 0, 0.05), 0px 8.14815px 6.51852px rgba(83, 30, 0, 0.05), 0px 20px 13px rgba(83, 30, 0, 0.08), 0px 38.5185px 25.4815px rgba(83, 30, 0, 0.08);",
        "7xl":
          "0px 1.85185px 3.14815px rgba(83, 30, 0, 0.02), 0px 8.14815px 6.51852px rgba(83, 30, 0, 0.03), 0px 20px 13px rgba(83, 30, 0, 0.04), 0px 38.5185px 25.4815px rgba(83, 30, 0, 0.04)",
        "8xl":
          "0px 14px 24px -7px rgba(0, 0, 0, 0.1), 0px 1px 3px rgba(0, 0, 0, 0.15)",
        "9xl": "0px 18px 16px -3px rgba(0, 0, 0, 0.1);",
        "9xxl": "9.47378px 7.10533px 13.0264px 4.73689px rgba(0, 0, 0, 0.05);",
        "yello-shadow":
          "10.5544px 7.91577px 14.5122px 5.27718px rgba(0, 0, 0, 0.05), 0px 31px 44px 1px rgba(0, 0, 0, 0.6)",
        "dropdown-shadow":
          "0px 13.85px 13.15px -12px rgba(83, 30, 0, 0.05), 0px 0px 0px 1px rgba(0, 0, 0, 0.1);",
        "2xxl":
          "6.83739px 5.12804px 9.40141px 3.41869px rgba(0, 0, 0, 0.05), 0px 38px 39.315px -13px rgba(0, 0, 0, 0.2)",
      },
    },
  },
};

$(document).ready(function () {
  //Header
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 100) {
      $(".site-header").addClass("header-wrapper");
    } else {
      $(".site-header").removeClass("header-wrapper");
    }
  });

  //Nav Toggle
  function navToggle() {
    $(".navbar-toggler").click(function () {
      $(".navbar-collapse").toggleClass("active");
      $("header").toggleClass("menu-opened");
      $(this).toggleClass("collapsed");
    });
  }
  navToggle();

  //DropDown
  let index = 1;
  const on = (listener, query, fn) => {
    document.querySelectorAll(query).forEach((item) => {
      item.addEventListener(listener, (el) => {
        fn(el);
      });
    });
  };

  on("click", ".selectBtn", (item) => {
    const next = item.target.nextElementSibling;
    if (next) {
      next.classList.toggle("toggle");
      next.style.zIndex = index++;
    }
  });

  on("click", ".option", (item) => {
    item.target.parentElement.classList.remove("toggle");
    const parent = item.target.closest(".select").children[0];
    parent.setAttribute("data-type", item.target.getAttribute("data-type"));
    const img = item.target.querySelector("figure");
    if (img) {
      parent.innerHTML = img.outerHTML + item.target.innerText;
    } else {
      parent.innerText = item.target.innerText;
    }
  });

  //  Add class name particular section  appears on screen
  const highlightSection = document.querySelector(".section-start-exploring");

  window.addEventListener("scroll", () => {
    const sectionPosition = highlightSection.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 2;

    if (sectionPosition < screenPosition) {
      highlightSection.classList.add("section-animation");
    } else {
      highlightSection.classList.remove("section-animation");
    }
  });
});

//Thumnail carousal
function thumbCarousal() {
  const mainCarouselWrap = document.getElementById("main-carousel");
  const mainCarouselView = mainCarouselWrap.querySelector(".embla__viewport");
  const slides = mainCarouselView.querySelectorAll(".embla__slide");
  let delay = 3000;
  const mainCarousel = EmblaCarousel(
    mainCarouselView,
    {
      selectedClass: "",
      loop: true,
      skipSnaps: false,
      startIndex: 0,
    },
    [
      EmblaCarouselAutoplay(
        {
          playOnInit: true,
          delay: delay,
        },
        (emblaRoot) => emblaRoot.parentElement
      ),
    ]
  );

  const thumbCarouselWrap = document.getElementById("thumb-carousel");
  const thumbCarouselView = thumbCarouselWrap.querySelector(".embla__viewport");
  const thumbCarousel = EmblaCarousel(
    thumbCarouselView,
    {
      selectedClass: "",
      containScroll: "keepSnaps",
      dragFree: false,
      startIndex: 0,
      slidesToScroll: 1,
      slidesInView: window.innerWidth < 768 ? 1 : 3,
    },
    [
      EmblaCarouselAutoplay(
        {
          playOnInit: true,
          delay: delay,
        },
        (emblaRoot) => emblaRoot.parentElement
      ),
    ]
  );

  const onThumbClick = (mainCarousel, thumbCarousel, index) => () => {
    if (!thumbCarousel.clickAllowed()) return;
    mainCarousel.scrollTo(index);
  };

  const followMainCarousel = (mainCarousel, thumbCarousel) => () => {
    const currentSlideIndex = mainCarousel.selectedScrollSnap();
    thumbCarousel.scrollTo(mainCarousel.selectedScrollSnap());
    selectThumbBtn(mainCarousel, thumbCarousel);
    slides.forEach((slide) => {
      slide.classList.remove("is-current-slide");
    });
    slides[currentSlideIndex].classList.add("is-current-slide");
  };

  const selectThumbBtn = (mainCarousel, thumbCarousel) => {
    const previous = mainCarousel.previousScrollSnap();
    const selected = mainCarousel.selectedScrollSnap();
    thumbCarousel.slideNodes()[previous].classList.remove("is-selected");
    thumbCarousel.slideNodes()[selected].classList.add("is-selected");
  };

  thumbCarousel.slideNodes().forEach((thumbNode, index) => {
    const onClick = onThumbClick(mainCarousel, thumbCarousel, index);
    thumbNode.addEventListener("click", onClick, false);
  });

  const syncThumbCarousel = followMainCarousel(mainCarousel, thumbCarousel);
  mainCarousel.on("select", syncThumbCarousel);
  thumbCarousel.on("init", syncThumbCarousel);
}

//creatorsCarousal
function creatorsCarousal() {
  const setupPrevNextBtns = (prevBtn, nextBtn, embla) => {
    setTimeout(() => {
      prevBtn.addEventListener("click", embla.scrollPrev);
      nextBtn.addEventListener("click", embla.scrollNext);
    }, 1000);
  };
  const disablePrevNextBtns = (prevBtn, nextBtn, embla) => {
    return () => {
      if (embla.canScrollPrev()) prevBtn.removeAttribute("disabled");
      else prevBtn.setAttribute("disabled", "disabled");

      if (embla.canScrollNext()) nextBtn.removeAttribute("disabled");
      else nextBtn.setAttribute("disabled", "disabled");
    };
  };

  const autoplay = EmblaCarouselAutoplay(
    {
      delay: 4000,
      stopOnInteraction: false,
    },
    (emblaRoot) => emblaRoot.parentElement
  );

  const options = {
    loop: true,
    align: "center",
    inViewThreshold: 1,
  };

  const setupEmblaCarousel = (nodeEmbla, options) => {
    const viewPort = nodeEmbla.querySelector(".embla__viewport");
    const prevBtn = nodeEmbla.querySelector(".embla__button--prev");
    const nextBtn = nodeEmbla.querySelector(".embla__button--next");
    const embla = EmblaCarousel(viewPort, options, [autoplay]);

    const disablePrevAndNextBtns = disablePrevNextBtns(prevBtn, nextBtn, embla);

    setupPrevNextBtns(prevBtn, nextBtn, embla);

    embla.on("select", () => {
      // Remove the class name from all slides
      const slides = nodeEmbla.querySelectorAll(".image-slide");
      slides.forEach((slide) => {
        slide.classList.remove("current-slide");
      });

      // Add the class name to the current slide
      const currentIndex = embla.selectedScrollSnap();
      const currentSlide = slides[currentIndex];
      currentSlide.classList.add("current-slide");
    });
    embla.on("select", disablePrevAndNextBtns);
    embla.on("init", disablePrevAndNextBtns);
  };

  const nodesembla = [].slice.call(
    document.querySelectorAll(".embla-top-creators-carousal")
  );
  const emblaCarousels = nodesembla.map((nodeEmbla) =>
    setupEmblaCarousel(nodeEmbla, options)
  );
}

//Testimonial Carousal
function testimonialCarousal() {
  const addDotBtnsAndClickHandlers = (emblaApi, dotsNode) => {
    let dotNodes = [];

    const addDotBtnsWithClickHandlers = () => {
      dotsNode.innerHTML = emblaApi
        .scrollSnapList()
        .map(() => '<button class="embla__dot" type="button"></button>')
        .join("");

      dotNodes = Array.from(dotsNode.querySelectorAll(".embla__dot"));
      dotNodes.forEach((dotNode, index) => {
        dotNode.addEventListener(
          "click",
          () => emblaApi.scrollTo(index),
          false
        );
      });
    };

    const toggleDotBtnsActive = () => {
      const previous = emblaApi.previousScrollSnap();
      const selected = emblaApi.selectedScrollSnap();
      dotNodes[previous].classList.remove("embla__dot--selected");
      dotNodes[selected].classList.add("embla__dot--selected");

      // add class name to current slide
      const slideNodes = Array.from(
        emblaNode.querySelectorAll(".embla__slide")
      );
      slideNodes.forEach((slideNode, index) => {
        if (index === selected) {
          slideNode.classList.add("embla__slide--current");
        } else {
          slideNode.classList.remove("embla__slide--current");
        }
      });
    };

    emblaApi
      .on("init", addDotBtnsWithClickHandlers)
      .on("reInit", addDotBtnsWithClickHandlers)
      .on("init", toggleDotBtnsActive)
      .on("reInit", toggleDotBtnsActive)
      .on("select", toggleDotBtnsActive);

    return () => {
      dotsNode.innerHTML = "";
    };
  };
  const OPTIONS = {
    breakpoints: {
      "(max-width: 580px)": { align: "start", loop: false },
    },
    loop: true,
    align: "center",
    containScroll: true,
    skipSnaps: false,
    slidesToScroll: 1,
  };

  const emblaNode = document.querySelector(".embla-testimonial");
  const viewportNode = emblaNode.querySelector(".embla__viewport");
  const dotsNode = document.querySelector(".teatimonial_embla__dots");
  const emblaApi = EmblaCarousel(viewportNode, OPTIONS);

  const removeDotBtnsAndClickHandlers = addDotBtnsAndClickHandlers(
    emblaApi,
    dotsNode
  );
  emblaApi.on("destroy", removeDotBtnsAndClickHandlers);
}

//creatorsCarousal
function agencyCarousal() {
  const setupPrevNextBtns = (prevBtn, nextBtn, embla) => {
    setTimeout(() => {
      prevBtn.addEventListener("click", embla.scrollPrev);
      nextBtn.addEventListener("click", embla.scrollNext);
    }, 1000);
  };
  const disablePrevNextBtns = (prevBtn, nextBtn, embla) => {
    return () => {
      if (embla.canScrollPrev()) prevBtn.removeAttribute("disabled");
      else prevBtn.setAttribute("disabled", "disabled");

      if (embla.canScrollNext()) nextBtn.removeAttribute("disabled");
      else nextBtn.setAttribute("disabled", "disabled");
    };
  };

  const options = {
    loop: false,
    align: "start",
    containScroll: true,
    skipSnaps: false,
    slidesToScroll: 1,
    inViewThreshold: 1,
  };

  const setupEmblaCarousel = (nodeEmbla, options) => {
    const viewPort = nodeEmbla.querySelector(".embla__viewport");
    const prevBtn = nodeEmbla.querySelector(".embla__button--prev");
    const nextBtn = nodeEmbla.querySelector(".embla__button--next");
    const embla = EmblaCarousel(viewPort, options);

    const disablePrevAndNextBtns = disablePrevNextBtns(prevBtn, nextBtn, embla);

    setupPrevNextBtns(prevBtn, nextBtn, embla);

    embla.on("select", disablePrevAndNextBtns);
    embla.on("init", disablePrevAndNextBtns);
  };

  const nodesembla = [].slice.call(
    document.querySelectorAll(".embla-agency-carousal")
  );
  const emblaCarousels = nodesembla.map((nodeEmbla) =>
    setupEmblaCarousel(nodeEmbla, options)
  );
}

window.addEventListener("load", () => {
  thumbCarousal();
  creatorsCarousal();
  agencyCarousal();
  testimonialCarousal();
});
$(document).ready(function () {});
