# Cloudflare Pages 정적 배포 메모

이 프로젝트는 백엔드 없이 Cloudflare Pages에서 정적 사이트로 동작하도록 구성되어 있습니다.

## 빌드 결과

```bash
pnpm build
```

위 명령은 `next.config.mjs`의 `output: "export"` 설정을 사용해 `out/` 디렉터리를 생성합니다. Cloudflare Pages는 이 디렉터리의 HTML/CSS/JS/이미지 파일만 서빙하면 됩니다.

## Cloudflare Pages 빌드 설정

| 항목 | 값 |
| --- | --- |
| Framework preset | `Next.js (Static HTML Export)` |
| Build command | `pnpm build` |
| Build output directory | `out` |
| Node version | `.node-version` (`22.16.0`) |

## 운영 체크리스트

- [ ] GitHub 저장소에 push
- [ ] Cloudflare Pages에서 저장소 연결
- [ ] Build command를 `pnpm build`로 설정
- [ ] Build output directory를 `out`으로 설정
- [ ] 첫 배포 후 `*.pages.dev`에서 화면 확인
- [ ] 필요 시 Pages Custom domains에서 도메인 연결

## 현재 정적 export 조건

- 서버 API 없음
- `next start` 사용 안 함
- 이미지 최적화 서버 없이 `images.unoptimized: true` 사용
- 화면 상태는 브라우저 클라이언트 상태만 사용
