# 온도자기 Ondojagi

Next.js 정적 export 기반의 온도자기 소개 사이트입니다. 서버 런타임 없이 `out/` 디렉터리만 Cloudflare Pages에 배포하도록 구성되어 있습니다.

## 로컬 실행

```bash
pnpm install
pnpm dev
```

## 정적 빌드

```bash
pnpm build
```

빌드가 성공하면 Cloudflare Pages에 올릴 정적 산출물이 `out/`에 생성됩니다. `next start`는 사용하지 않습니다.

## Cloudflare Pages 설정

Cloudflare dashboard에서 Workers & Pages -> Create application -> Pages -> Import an existing Git repository를 선택한 뒤 아래처럼 설정합니다.

| 항목 | 값 |
| --- | --- |
| Framework preset | `Next.js (Static HTML Export)` |
| Build command | `pnpm build` |
| Build output directory | `out` |
| Root directory | `/` |
| Node.js version | `.node-version`의 `22.16.0` 사용 |

Cloudflare가 npm 명령을 기본으로 제안하면 Build command를 `npx next build`로 둬도 됩니다. 이 프로젝트는 `pnpm-lock.yaml`이 있으므로 `pnpm build`를 명시하는 쪽이 의존성 설치 방식과 더 잘 맞습니다.

## 배포 방식

1. GitHub에 이 저장소를 push합니다.
2. Cloudflare Pages에서 저장소를 연결합니다.
3. 위 빌드 설정으로 첫 배포를 실행합니다.
4. 배포 후 발급되는 `*.pages.dev` 주소에서 확인합니다.
5. 커스텀 도메인은 Pages 프로젝트의 Custom domains에서 연결합니다.

## 서버 없는 구성

- `next.config.mjs`에 `output: "export"`를 설정했습니다.
- `next/image`는 정적 export에서 동작하도록 `images.unoptimized: true`를 유지합니다.
- API Route, Route Handler, `next start`, 별도 Node 서버를 사용하지 않습니다.
- 화면 구성과 스타일 파일은 기존 디자인을 유지합니다.

참고:

- Cloudflare Pages static Next.js guide: https://developers.cloudflare.com/pages/framework-guides/nextjs/deploy-a-static-nextjs-site/
- Cloudflare Pages build image: https://developers.cloudflare.com/pages/configuration/build-image/
- Next.js static exports: https://nextjs.org/docs/pages/guides/static-exports
