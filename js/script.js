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
});
