// Features dropdown active color logic
document.addEventListener("DOMContentLoaded", function () {
  const featuresBtn = document.getElementById("featuresDropdownBtn");
  const featuresDropdown = document.getElementById("featuresDropdown");
  const dropdownIcon = document.getElementById("dropdownIcon");
  let dropdownOpen = false;

  if (featuresBtn && featuresDropdown && dropdownIcon) {
    featuresBtn.addEventListener("click", function (e) {
      e.stopPropagation();
      dropdownOpen = !dropdownOpen;
      if (dropdownOpen) {
        featuresDropdown.classList.remove("opacity-0", "pointer-events-none");
        featuresDropdown.classList.add("opacity-100");
        featuresBtn.classList.add("text-teal-700");
        dropdownIcon.style.transform = "rotate(180deg)";
      } else {
        featuresDropdown.classList.add("opacity-0", "pointer-events-none");
        featuresDropdown.classList.remove("opacity-100");
        featuresBtn.classList.remove("text-teal-700");
        dropdownIcon.style.transform = "rotate(0deg)";
      }
    });

    // Close dropdown when clicking outside
    document.addEventListener("click", function (e) {
      if (
        dropdownOpen &&
        !featuresBtn.contains(e.target) &&
        !featuresDropdown.contains(e.target)
      ) {
        dropdownOpen = false;
        featuresDropdown.classList.add("opacity-0", "pointer-events-none");
        featuresDropdown.classList.remove("opacity-100");
        featuresBtn.classList.remove("text-teal-700");
        dropdownIcon.style.transform = "rotate(0deg)";
      }
    });

    // Close dropdown when clicking links
    const dropdownLinks = featuresDropdown.querySelectorAll("a");
    dropdownLinks.forEach(function (link) {
      link.addEventListener("click", function () {
        dropdownOpen = false;
        featuresDropdown.classList.add("opacity-0", "pointer-events-none");
        featuresDropdown.classList.remove("opacity-100");
        featuresBtn.classList.remove("text-teal-700");
        dropdownIcon.style.transform = "rotate(0deg)";
      });
    });
  }

  // Mobile Menu Functionality
  const mobileMenuBtn = document.getElementById("mobileMenuBtn");
  const mobileMenu = document.getElementById("mobileMenu");
  const menuIcon = document.getElementById("menuIcon");
  let mobileMenuOpen = false;

  // Mobile Features Dropdown References
  const mobileFeaturesBtn = document.getElementById("mobileFeaturesBtn");
  const mobileFeaturesDropdown = document.getElementById(
    "mobileFeaturesDropdown"
  );
  const mobileFeaturesIcon = document.getElementById("mobileFeaturesIcon");
  let mobileFeaturesOpen = false;

  // Function to close mobile features dropdown
  function closeMobileFeaturesDropdown() {
    if (mobileFeaturesDropdown && mobileFeaturesBtn && mobileFeaturesIcon) {
      mobileFeaturesOpen = false;
      mobileFeaturesDropdown.style.maxHeight = "0px";
      mobileFeaturesBtn.classList.remove("text-teal-700");
      mobileFeaturesIcon.style.transform = "rotate(0deg)";
    }
  }

  if (mobileMenuBtn && mobileMenu && menuIcon) {
    mobileMenuBtn.addEventListener("click", function (e) {
      e.stopPropagation();
      mobileMenuOpen = !mobileMenuOpen;

      if (mobileMenuOpen) {
        // Open mobile menu
        mobileMenu.style.maxHeight = mobileMenu.scrollHeight + "px";
        mobileMenu.classList.remove("opacity-0");
        mobileMenu.classList.add("opacity-100");
        menuIcon.classList.add("x");
      } else {
        // Close mobile menu and reset features dropdown
        mobileMenu.style.maxHeight = "0px";
        mobileMenu.classList.add("opacity-0");
        mobileMenu.classList.remove("opacity-100");
        menuIcon.classList.remove("x");
        closeMobileFeaturesDropdown();
      }
    });

    // Close mobile menu when clicking outside
    document.addEventListener("click", function (e) {
      if (
        mobileMenuOpen &&
        !mobileMenuBtn.contains(e.target) &&
        !mobileMenu.contains(e.target)
      ) {
        mobileMenuOpen = false;
        mobileMenu.style.maxHeight = "0px";
        mobileMenu.classList.add("opacity-0");
        mobileMenu.classList.remove("opacity-100");
        menuIcon.classList.remove("x");
        closeMobileFeaturesDropdown();
      }
    });

    // Close mobile menu when clicking links
    const mobileMenuLinks = mobileMenu.querySelectorAll("a");
    mobileMenuLinks.forEach(function (link) {
      link.addEventListener("click", function () {
        mobileMenuOpen = false;
        mobileMenu.style.maxHeight = "0px";
        mobileMenu.classList.add("opacity-0");
        mobileMenu.classList.remove("opacity-100");
        menuIcon.classList.remove("x");
        closeMobileFeaturesDropdown();
      });
    });

    // Handle window resize
    window.addEventListener("resize", function () {
      if (window.innerWidth >= 768 && mobileMenuOpen) {
        mobileMenuOpen = false;
        mobileMenu.style.maxHeight = "0px";
        mobileMenu.classList.add("opacity-0");
        mobileMenu.classList.remove("opacity-100");
        menuIcon.classList.remove("x");
        closeMobileFeaturesDropdown();
      }
    });
  }

  // Mobile Features Dropdown Functionality
  if (mobileFeaturesBtn && mobileFeaturesDropdown && mobileFeaturesIcon) {
    mobileFeaturesBtn.addEventListener("click", function (e) {
      e.stopPropagation();
      mobileFeaturesOpen = !mobileFeaturesOpen;

      if (mobileFeaturesOpen) {
        mobileFeaturesDropdown.style.maxHeight =
          mobileFeaturesDropdown.scrollHeight + "px";
        mobileFeaturesBtn.classList.add("text-teal-700");
        mobileFeaturesIcon.style.transform = "rotate(180deg)";
      } else {
        mobileFeaturesDropdown.style.maxHeight = "0px";
        mobileFeaturesBtn.classList.remove("text-teal-700");
        mobileFeaturesIcon.style.transform = "rotate(0deg)";
      }
    });

    // Close mobile features dropdown when clicking on feature links
    const mobileFeatureLinks = mobileFeaturesDropdown.querySelectorAll("a");
    mobileFeatureLinks.forEach(function (link) {
      link.addEventListener("click", function () {
        closeMobileFeaturesDropdown();
      });
    });
  }

  // FAQ Accordion Interactivity
  const faqToggles = document.querySelectorAll(".faq-toggle");
  const faqAccordion = document.getElementById("faqAccordion");

  faqToggles.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      e.stopPropagation();
      const parent = btn.closest(".faq-item");
      const content = parent.querySelector(".faq-content");
      const icon = btn.querySelector(".faq-icon");
      const expanded = btn.getAttribute("aria-expanded") === "true";
      const span = btn.querySelector("span");

      if (!expanded) {
        btn.setAttribute("aria-expanded", "true");
        btn.classList.remove("bg-white");
        btn.classList.add("bg-[#017D6E]");
        icon.classList.add("rotate-180");
        icon.classList.remove("faq-icon-default");
        icon.classList.add("faq-icon-white");
        span.classList.remove("text-gray-900");
        span.classList.add("text-white");
        content.classList.remove("hidden");
        content.classList.add("block");
      } else {
        btn.setAttribute("aria-expanded", "false");
        btn.classList.remove("bg-[#017D6E]");
        btn.classList.add("bg-white");
        icon.classList.remove("rotate-180");
        icon.classList.remove("faq-icon-white");
        icon.classList.add("faq-icon-default");
        span.classList.remove("text-white");
        span.classList.add("text-gray-900");
        content.classList.add("hidden");
        content.classList.remove("block");
      }
    });
  });

  // Closing all accordions when clicking outside
  document.addEventListener("click", function (e) {
    if (!faqAccordion.contains(e.target)) {
      faqToggles.forEach(function (btn) {
        const parent = btn.closest(".faq-item");
        const content = parent.querySelector(".faq-content");
        const icon = btn.querySelector(".faq-icon");
        const span = btn.querySelector("span");
        btn.setAttribute("aria-expanded", "false");
        btn.classList.remove("bg-[#017D6E]");
        btn.classList.add("bg-white");
        icon.classList.remove("rotate-180");
        icon.classList.remove("faq-icon-white");
        icon.classList.add("faq-icon-default");
        span.classList.remove("text-white");
        span.classList.add("text-gray-900");
        content.classList.add("hidden");
        content.classList.remove("block");
      });
    }
  });

  // cursor-pointer to span and icon in FAQ accordion
  function addFaqCursorPointer() {
    document.querySelectorAll(".faq-toggle").forEach(function (btn) {
      var span = btn.querySelector("span");
      var icon = btn.querySelector(".faq-icon");
      if (span) span.classList.add("cursor-pointer");
      if (icon) icon.classList.add("cursor-pointer");
      [span, icon].forEach(function (el) {
        if (el) {
          el.addEventListener("click", function (e) {
            e.stopPropagation();
            btn.click();
          });
        }
      });
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    addFaqCursorPointer();
  });
});
