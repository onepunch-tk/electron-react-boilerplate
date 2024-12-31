# Electron React 보일러플레이트

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js Version](https://img.shields.io/badge/node-%3E%3D22.0.0-brightgreen)](https://nodejs.org)

Electron + React + TypeScript 개발 환경을 위한 보일러플레이트입니다.

## ✨ 주요 기능

- ⚛️ **React 18** - TypeScript 지원
- ⚡ **Vite** - 빠른 개발 환경 구축
- 🚀 **SWC** - 초고속 컴파일러
- 🔒 보안 강화 설정
- 🔄 핫 모듈 교체 (HMR)
- 📦 간편한 패키징과 배포
- 🛠️ Windows 빌드를 위한 GitHub Actions

## 🔧 시스템 요구사항

- Node.js >= 22.0.0
- pnpm >= 8.0.0

## 🚀 시작하기

```bash
# 저장소 클론
git clone https://github.com/yourusername/electron-react-boilerplate.git
cd electron-react-boilerplate

# 의존성 설치
pnpm install

# 개발 서버 실행
pnpm electron:dev
```

## 📝 사용 가능한 스크립트

- `pnpm dev` - Vite 개발 서버 실행
- `pnpm electron:dev` - Electron 개발 환경 실행 (핫 리로드 지원)
- `pnpm build` - 웹 리소스 빌드
- `pnpm build:electron` - Electron 리소스 빌드
- `pnpm app:build` - 최종 애플리케이션 패키징
- `pnpm lint` - ESLint 실행

## 📁 프로젝트 구조

```
.
├── src/
│   ├── renderer/           # React 애플리케이션
│   │   ├── components/
│   │   ├── assets/
│   │   ├── App.tsx
│   │   └── main.tsx
│   ├── main/              # Electron 메인 프로세스
│   │   ├── index.ts
│   │   └── preload.ts
│   └── shared/            # 공유 타입과 유틸리티
├── public/                # 정적 자산
└── release/               # 빌드된 애플리케이션
```

## 🔒 보안 특징

- 엄격한 CSP (콘텐츠 보안 정책)
- 컨텍스트 격리 활성화
- Node 통합 비활성화
- 샌드박스 활성화
- 제한된 프리로드 스크립트 노출

## 🏗️ 프로덕션 빌드

```bash
# 프로덕션용 빌드
pnpm app:build
```

패키징된 애플리케이션은 `release` 디렉토리에서 찾을 수 있습니다.

## 🚀 GitHub Actions

태그를 푸시하면 자동으로 Windows 인스톨러를 빌드하는 워크플로우가 포함되어 있습니다:

```bash
# 버전 태그 생성
git tag v1.0.0
git push origin v1.0.0
```

## 🤝 기여하기

기여는 언제나 환영합니다! Pull Request를 자유롭게 제출해주세요.

## 📄 라이선스

이 프로젝트는 MIT 라이선스를 따릅니다. 자세한 내용은 [LICENSE](LICENSE) 파일을 참조하세요.

## 🙏 감사의 말

다음 프로젝트들에 감사드립니다:
- [Electron](https://www.electronjs.org/)
- [Vite](https://vitejs.dev/)
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [SWC](https://swc.rs/)

## 📦 설정 파일 구조

```
├── tsconfig.json          # TypeScript 루트 설정
├── tsconfig.app.json      # React 앱을 위한 TypeScript 설정
└── tsconfig.node.json     # Electron과 Vite를 위한 TypeScript 설정
```

## 💡 개발 모드 특징

- 자동 리로드
- 개발자 도구 기본 활성화
- 소스맵 지원
- 상세한 에러 메시지

---

❤️ [tkstar.dev]이 만들었습니다.
