# 실버케어 파트너스 웹사이트 구현 태스크 (TASK.md)

본 문서는 `PRD.md`에 정의된 요구사항을 바탕으로 실버케어 파트너스 웹사이트를 구축하기 위한 개발 절차 체크리스트입니다.

## 1. 프로젝트 초기 셋업 (Project Setup)
- [ ] 작업 디렉토리 생성 및 `git init` (초기 셋업)
- [ ] 필수 파일 뼈대 생성 (`index.html`, `style.css`, `script.js`)
- [ ] HTML 기본 구조 `<!DOCTYPE html>` 선언 및 타겟 화면(1920x1080) 모바일 뷰포트 메타 태그 추가
- [ ] CSS, JS 파일 연동 및 폰트(Pretendard), FontAwesome CDN 등 초기 리소스 로드

## 2. 시맨틱 HTML 구조 설계 (HTML Architecture)
- [ ] SEO 구조를 위한 `index.html` 내 시맨틱 태그 구조화 (`<header>`, `<main>`, `<footer>` 등)
- [ ] Meta 정보 작성 (페이지 `<title>`, `<meta name="description">` 태그 및 `Open Graph (OG)` 태그 설정)
- [ ] 글로벌 테마 적용을 위한 GNB (Global Navigation Bar) 및 모바일 뷰 토글 버튼 추가
- [ ] **각 섹션별 마크업 작성 (더미 텍스트/이미지 기반):**
    - [ ] 히어로 섹션 (Hero Section) 구성
    - [ ] 회사 소개 (About Us) 구성
    - [ ] 핵심 서비스 (Core Services) - 카드 컴포넌트 마크업
    - [ ] 서비스 패키지 및 가격 정책 (Pricing Plans) 추가
    - [ ] 왜 실버케어인가 (Why Choose Us) - 차별화 포인트 마크업
    - [ ] 고객 후기 (Testimonials) 추가
    - [ ] 팀 소개 (Our Team) 추가
    - [ ] 문의하기 (Contact Us) - 폼(Form) UI 마크업
- [ ] 접근성 준수: 모든 `<img>` 태그에 적절한 `alt` 텍스트 속성 기입

## 3. CSS 스타일링 및 반응형 구현 (Styling & Responsive UI)
- [ ] `:root` 공통 테마 변수 (Color, Font size, Radius, Shadow) 선언 (메인 컬러: 푸른색 `#2563EB`)
- [ ] 공통 클래스 및 리셋 CSS 작성
- [ ] 모바일 퍼스트(Mobile-First) 또는 데스크탑 퍼스트 기반의 반응형 레이아웃 구현 (미디어 쿼리 `@media` 적용)
- [ ] 부드러운 애니메이션 및 트랜지션 효과 선언 (`scroll-behavior: smooth`, 버튼 hover 등)
- [ ] 접근성을 고려한 고령 폰트(기본 18px 이상) 및 고대비 색상 조율
- [ ] **섹션별 상세 스타일링:**
    - [ ] 헤더 디자인 (고정 스크롤 효과 등)
    - [ ] 섹션 공통 스타일링 (패딩, 제목 색상, 여백 등)
    - [ ] 핵심 서비스 (Core Services) - 카드 UI 디자인 및 정렬
    - [ ] 문의하기 (Contact Us) - 입력 폼 UI 및 포커스 스타일링

## 4. 자바스크립트 모듈 구현 (JavaScript Logic)
- [ ] 네비게이션 모바일 뷰 토글 동작 구현 (햄버거 메뉴)
- [ ] Intersection Observer를 이용한 스크롤 연동 Fade-in 애니메이션 이벤트 구현
- [ ] 사이드바 / 헤더 스크롤 시 그림자(Shadow) 동적 변경 이벤트 추가
- [ ] 문의하기 폼(Form) 스크립트: 제출 시 XSS 방지 등 간단한 프론트엔드 입력값 검증(Validation) 로직 및 알림창 띄우기 처리 구현
- [ ] GNB 앵커태그 클릭 시 해당 페이지 구역으로의 Smooth Scrolling 로직 보완

## 5. 검증 및 최적화 (Testing & Refinement)
- [ ] 브라우저 개발자 도구를 통한 네트워크 탭 내 초기 로드 시간 (LCP 2.5초 이내) 측정 및 확인
- [ ] 웹 접근성(Accessibility) 플러그인 확인 및 수정 (명도 대비, Alt 텍스트)
- [ ] 데스크탑, 태블릿, 모바일 기기별 레이아웃 깨짐(Responsive QA) 확인
- [ ] 성능 테스트 도구를 통한 웹페이지 전반 성능/SEO 지표 확인
- [ ] 주요 사용자 및 자녀 타겟의 공감 문구가 디자인에 잘 녹아있는지 카피라이팅 최종 확인

## 6. 배포 빌드 및 릴리즈 (Deployment)
- [ ] 최종 테스트 완료 후 `git add` 및 커밋
- [ ] GitHub 등 원격 저장소(`main` 브랜치)에 최종 코드 푸시
