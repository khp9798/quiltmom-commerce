# 퀼트맘 온라인 쇼핑몰

오프라인과 위탁 판매 중심의 제주 수공예 브랜드 **퀼트맘**을 위한 실제 운영형 온라인 쇼핑몰 프로젝트입니다. 현재는 브랜드와 상품을 탐색하는 프론트엔드 MVP이며, 이후 Java/Spring Boot 서버를 연결해 상품·주문·결제·재고를 다루는 커머스로 확장합니다.

- [공개 사이트](https://quiltmom-jeju.ohgoodaymate.chatgpt.site)
- [개발 과정과 기술 의사결정](https://app.notion.com/p/3fb25d358b2e816cb8e9d75e26429160)

## 현재 제공하는 기능

- 반응형 브랜드 및 상품 카탈로그
- 카테고리별 상품 필터
- 현재 접속 중에 유지되는 찜 목록
- 온라인 스토어 준비 상태 안내

현재 상품명과 분류는 화면 구성을 위한 임시 데이터입니다. 실제 상품 정보와 온라인 주문·결제는 운영 자료와 정책이 확정된 뒤 적용합니다.

## 기술 선택

- **React + TypeScript**: 화면 상태와 사용자 상호작용을 타입 안전하게 구현
- **Vinext/Vite**: 현재 Sites 배포 환경과 호환되는 프론트엔드 빌드
- **Java 21 + Spring Boot (예정)**: 주문·결제·재고의 트랜잭션과 서버 규칙 담당
- **관계형 데이터베이스 (예정)**: 상품, 옵션, 주문, 결제, 재고 사이의 관계와 정합성 보장

## 백엔드 요청 흐름

```text
GET /api/products
  → ProductController
  → ProductService
  → ProductRepository
  → H2 개발용 데이터베이스
  → ProductResponse JSON
```

- **Controller**: HTTP 주소와 요청·응답 형식을 담당
- **Service**: 상품 조회 규칙과 트랜잭션 경계를 담당
- **Repository**: JPA를 통해 데이터베이스 조회를 담당
- **Entity**: 데이터베이스의 상품 행을 Java 객체로 표현
- **Response DTO**: 외부에 공개할 API 응답 형태를 Entity와 분리

## 실행 및 검증

요구 사항은 Node.js `22.13.0` 이상입니다.

```bash
npm install
npm run dev
```

백엔드는 JDK 21을 사용합니다.

```bash
cd backend
./gradlew bootRun
```

- `GET /api/products`: 전체 상품 조회
- `GET /api/products/{productId}`: 상품 한 건 조회
- `GET /actuator/health`: 서버 상태 확인

- `npm run build`: 배포 가능한 결과물 생성
- `npm test`: 빌드 후 핵심 운영 문구와 화면 구조 검증
- `npm run lint`: 코드 규칙과 접근성 관련 정적 검사

## 개발 원칙

- 정식 오픈 전에는 무료 개발·테스트 환경만 사용합니다.
- 금액과 재고는 클라이언트 값을 신뢰하지 않고 서버에서 다시 검증합니다.
- 주문 생성, 재고 차감, 결제 결과 반영의 실패 상황을 테스트합니다.
- 유료 서비스는 예상 비용과 무료 대안을 검토하고 명시적 승인 후 도입합니다.
