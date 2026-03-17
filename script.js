document.addEventListener('DOMContentLoaded', () => {
  // 모바일 메뉴 토글
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const nav = document.querySelector('.nav');
  const navLinks = document.querySelectorAll('.nav-list a');

  if (mobileMenuBtn && nav) {
    mobileMenuBtn.addEventListener('click', () => {
      nav.classList.toggle('active');
      const isExpanded = nav.classList.contains('active');
      // FA 아이콘 상태 변경
      mobileMenuBtn.innerHTML = isExpanded ? '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
      mobileMenuBtn.setAttribute('aria-expanded', isExpanded);
    });

    // 네비게이션 링크 클릭 시 메뉴 닫기 (모바일 환경)
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
          nav.classList.remove('active');
          mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
          mobileMenuBtn.setAttribute('aria-expanded', 'false');
        }
      });
    });
  }

  // 스크롤 시 Fade-in 애니메이션 (Intersection Observer 활용)
  const fadeElems = document.querySelectorAll('.custom-fade-in');
  
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target); // 한 번 보이면 관찰 해제
      }
    });
  }, observerOptions);

  fadeElems.forEach(elem => {
    observer.observe(elem);
  });

  // 예약/상담 폼 제출 처리
  const contactForm = document.getElementById('consultationForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault(); // 기본 제출 동작 방지
      const name = document.getElementById('name').value;
      alert(`감사합니다, ${name}님. 상담 신청이 완료되었습니다.\n빠른 시일 내에 전문 상담사가 연락드리겠습니다.`);
      contactForm.reset();
    });
  }

  // 스크롤 시 헤더에 그림자 효과 추가
  const header = document.querySelector('.header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.1)';
    } else {
      header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
    }
  });

  // Smooth scrolling for anchor links (safari compatibility)
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        window.scrollTo({
          top: targetElement.offsetTop - 80, // 헤더 높이(약 80px)만큼 오프셋
          behavior: 'smooth'
        });
      }
    });
  });
});
