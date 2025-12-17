document.addEventListener("DOMContentLoaded", () => {
  const heroSection = document.querySelector("#hero-video");
  const heroContent = heroSection.querySelector(".hero-content");

  function checkScroll() {
    const sectionTop = heroSection.getBoundingClientRect().top;
    const triggerPoint = window.innerHeight / 1.3;

    if (sectionTop < triggerPoint) {
      heroContent.classList.add("visible");
      // بعد تفعيل الحركة، نوقف المراقبة لتقليل الحسابات
      window.removeEventListener("scroll", checkScroll);
    }
  }

  // تحقق عند scroll
  window.addEventListener("scroll", checkScroll);

  // تحقق إذا السكشن ظاهر عند تحميل الصفحة
  checkScroll();
});
    
// فلتر 

document.addEventListener("DOMContentLoaded", () => {
    const filterBtns = document.querySelectorAll(".filter-btn");
    const products = document.querySelectorAll(".product-card");
    const titles = document.querySelectorAll(".collection-title");

    filterBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            // إزالة active من كل الأزرار
            filterBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");

            const filter = btn.getAttribute("data-filter");

            // التحكم بالمنتجات
            products.forEach(prod => {
                if (filter === "all" || prod.getAttribute("data-category") === filter) {
                    prod.style.display = "block";
                } else {
                    prod.style.display = "none";
                }
            });

            // التحكم بالعناوين
            titles.forEach(title => {
                if (filter === "all" || title.getAttribute("data-category") === filter) {
                    title.style.display = "block";
                } else {
                    title.style.display = "none";
                }
            });
        });
    });
});

// about
document.addEventListener("DOMContentLoaded", () => {
  const about = document.querySelector("#about");
  const content = document.querySelector(".about-content");
  const line = document.querySelector(".about-side-line");

  function revealAbout() {
    const top = about.getBoundingClientRect().top;
    const trigger = window.innerHeight / 1.3;

    if (top < trigger) {
      content.classList.add("visible");
      line.classList.add("visible");
      window.removeEventListener("scroll", revealAbout);
    }
  }

  revealAbout();
  window.addEventListener("scroll", revealAbout);
});





// الحصول على عناصر الشاشة الترحيبية
const splashLogo = document.getElementById('splash-logo');
const splash = document.getElementById('splash');

// عند النقر على الشعار، اختفاء الشاشة تدريجيًا
splashLogo.addEventListener('click', () => {
    splash.style.opacity = '0';           // تأثير fade
    splash.style.pointerEvents = 'none';  // منع أي تفاعل
    setTimeout(() => {
        splash.style.display = 'none';    // إخفاء العنصر بعد الانتقال
    }, 800); // نفس مدة الانتقال في CSS
});
