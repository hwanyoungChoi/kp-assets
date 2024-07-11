# 기타 자산 관리 서비스

### 개요
kp 서비스의 일부 메뉴를 클론 개발
웹뷰로 제공될 `기타 자산 목록`, `기타 자산 상세`, `기타 자산 등록/수정` 세 가지 페이지로 구성된 서비스

#### 디렉토리 주요 구성

```bash
└── src
    ├── App.js
    ├── components/    # 공통 컴포넌트들
    ├── hooks/
    │   ├── mutations/    # mutation API 요청들
    │   └── queries/      # query API 요청들
    ├── containers/    # 페이지로 노출될 완성된 화면 컴포넌트들
    ├── pages/         # 라우트와 매칭되는 페이지 컴포넌트들
    └── lib/           # 공통 유틸리티
```

---

### 설치 및 실행

프로젝트 root에서 의존하는 패키지를 설치 후 아래 명령을 통해 개발 서버를 구동할 수 있습니다.

```bash
yarn dev
yarn start:server # mock server
```

> http://localhost:5173 접속
