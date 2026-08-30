# Hermes Desktop 한국어 패치 백업

- 최초 백업일: 2026-08-29
- 최근 갱신일: 2026-08-30
- 기준 Hermes 릴리스: `v2026.8.27`
- 기준 Git 커밋: `5fc308a70719a83cccdbba4c0e39c23f5a8239d5`
- 대상 Desktop 버전: `v0.17.0`
- 번역 범위: 주요 Desktop UI 한국어 번역. 미번역 키는 영어로 대체됩니다.

## 백업 내용

`source/`에는 저장소 기준 상대 경로를 유지한 다음 파일이 있습니다.

- `apps/desktop/src/i18n/ko.ts`
- `apps/desktop/src/i18n/ko-settings-fields.ts`
- `apps/desktop/src/i18n/ko-slash-commands.ts`
- `apps/desktop/src/i18n/catalog.ts`
- `apps/desktop/src/i18n/languages.ts`
- `apps/desktop/src/i18n/languages.test.ts`
- `apps/desktop/src/i18n/types.ts`
- `apps/desktop/src/app/cron/blueprints.tsx`
- `apps/desktop/src/app/cron/blueprints.test.ts`
- `apps/desktop/src/app/cron/index.tsx`
- `apps/desktop/src/app/settings/field-copy.ts`
- `apps/desktop/src/app/messaging/index.tsx`
- `apps/desktop/src/plugins/kanban/i18n.ts`
- `apps/desktop/src/app/chat/composer/hooks/use-slash-completions.ts`

`Hermes-Desktop-Korean-v2026.8.27.tar.gz`는 위 소스와 이 문서의 압축 사본입니다.

## 번역 현황

2026-08-30 기준 영어 locale의 표시 항목 3,182개 중 약 2,278개에 한국어 문구가
별도로 정의되어 있습니다(약 71.6%). 제품명과 기술 식별자처럼 의도적으로
원문을 유지한 항목도 있으므로 이 수치는 완성도 자체가 아니라 코드상의
한국어 override 수를 뜻합니다. 정의되지 않은 항목은 영어로 안전하게 대체됩니다.

### 공통 인터페이스

- 저장, 취소, 삭제, 복사, 열기, 닫기, 검색, 새로고침, 다시 시도 등의 공통 작업
- 로딩, 실행 중, 완료, 실패, 선택 사항 등의 공통 상태
- 파일 메뉴: 경로 복사, 다운로드, 이름 변경, 삭제, 포함 폴더 및 파일 트리 열기
- 제목 표시줄: 좌우 사이드바, 검색, 설정, 메모리 그래프, HUD 및 레이아웃 편집기
- 언어 선택 화면과 일반 오류 경계·복구 작업

### 시작 및 알림

- Desktop 시작 단계와 게이트웨이 연결 상태
- 시작 실패, 설치 복구, 로컬 게이트웨이 전환, 로그 열기 및 원격 로그인
- 알림 목록의 보기, 숨기기, 지우기 및 업데이트 안내

### 대화와 에이전트

- 새 세션과 후속 메시지 작성창, 첨부 메뉴, 음성 입력 상태 및 메시지 대기열
- 세션 로딩, 생각 중, 응답 시간, 복사, 편집, 분기, 반응 및 소리 내어 읽기
- 인증·결제·디스크·게이트웨이·제공자·런타임·스트리밍 오류 분류와 복구 작업
- 체크포인트 복원, 이전/다음 체크포인트 이동 및 편집 메시지 재전송
- 승인 요청: 이번 세션 허용, 영구 허용, 거부 및 허용 목록 안내
- 확인 질문: 직접 입력, 건너뛰기, 응답 진행률 및 늦은 답변의 후속 메시지 작성
- MCP 서버 설치·활성화·인증 요청과 결과 상태
- 서브에이전트 트리의 실행·완료·실패·스트리밍 상태

### 도구 실행 표시

- 코드·명령·출력·URL·결과·검색어·파일·경로 및 활동 복사
- 실행 중, 오류, 복구됨, 완료 및 실패 단계 요약
- 브라우저 클릭·입력·이동·스냅샷·스크린샷
- 파일 읽기·검색·목록·편집·패치와 터미널 명령 실행
- 코드 실행, 이미지 생성, 메모리 저장, 세션 기록 검색, 할 일 업데이트
- 이미지 분석, 웹페이지 읽기 및 웹 검색

### 모델

- 모델 선택기: 검색, 현재 모델, 제공자 추가, 인증 상태, 무료/Pro 및 가격 안내
- 모델 표시 목록
- 사고 모드, 빠른 모드와 추론 수준(최소~울트라) 등의 모델 옵션

### 사이드바와 작업 공간

- 새 세션, Skills, 메시지, 결과물 및 예약 작업 탐색
- 세션 검색, 고정, 읽음 상태, 이름 변경, 보관, 분기 및 터미널 열기
- 프로젝트·세션 목록과 오늘/어제/이번 주 등의 날짜 구분
- 오른쪽 사이드바의 파일 시스템, 터미널, 폴더 선택, 파일 트리 및 변경 사항 검토
- 파일·웹·소스·차이 미리보기의 기본 동작과 대용량/잘림 안내
- 명령 센터 전체: 세션·프로젝트 이동, 테마·반려동물, 설정 필드, 시스템 상태,
  로그·진단·백업·메모리 관리 및 관련 작업

### 설정과 프로필

- 설정 화면 전체의 섹션, 설명, 선택 옵션, 연결·게이트웨이·키·MCP·도구 구성
- 외관, 테마, 반려동물, 업데이트, 정보, 음성·STT·TTS, 메모리·컨텍스트 설정
- 각 설정 필드의 한국어 이름과 도움말은 `ko-settings-fields.ts`로 분리 보관
- 새 프로필 생성, 로컬·원격 연결, 가져오기·내보내기, 이름 변경·삭제
- 프로필 범위, SOUL.md 편집, 상태·오류·연결 안내

### 키보드 단축키

- 키보드 단축키 화면 전체와 카테고리 이름
- 대화, 프로필, 세션, 탐색, 보기, 패널, 검색, 명령 센터 관련 모든 동작
- 키 조합 기록·변경·초기화, 충돌 경고 및 페이지 내 찾기

### 메시징 플랫폼

- 메시징 검색, 연결 상태, 활성화, 저장, 재시작, 페어링 승인·해제 화면
- Telegram, Discord, Slack, Mattermost, Matrix, Signal, WhatsApp 설정 필드
- Home Assistant, 이메일, Twilio SMS, DingTalk, Feishu/Lark, WeCom, Weixin 설정 필드
- BlueBubbles, QQ Bot, Google Chat, Teams, IRC, LINE, ntfy, Photon, Raft,
  SimpleX, Yuanbao, API Server, Webhook 등의 플랫폼별 한국어 안내
- 플랫폼 ID, 환경 변수 이름, 토큰, URL, 명령 및 저장값은 원문 유지

### Kanban

- 최초 안내문의 카드 실행 방식과 Ready, Triage, Todo, Scheduled, Running,
  Review, Blocked 단계 설명
- 내부 보드·열 ID와 자동화 상태값은 변경하지 않음

### 업데이트와 초기 설정

- 업데이트 확인, 다운로드, 적용, 재시작, 수동 업데이트 및 오류 복구 화면
- 로컬 미리보기·외부 프로세스의 업데이트 차단 안내
- 최초 실행의 모델 공급자 선택, API 키, 브라우저·장치 코드·CLI 로그인
- 기본 모델 선택, 무료·Pro 표시와 시작 완료 화면

### 프롬프트 조각

- 프롬프트 조각 선택 팝업의 제목과 사용 안내
- 코드 검토, 구현 계획, 코드 설명 항목의 이름과 상세 설명
- 선택 시 입력창에 삽입되는 실제 시작 프롬프트

### 슬래시 명령 팔레트

- 입력창에서 `/`를 입력할 때 나타나는 내장 Desktop 명령 34개의 한국어 설명
- 세션, 설정, 명령, 옵션, 테마, 도구 및 Skill 등의 그룹 제목
- `/new`, `/goal`, `/tools` 같은 실행 명령과 옵션 저장값은 원문 유지
- 사용자 설치 Skill과 플러그인 명령의 설명은 작성자가 정한 의미를 보존하기 위해 원문 유지

## 남은 주요 미번역 영역

영어 대체 기능으로 정상 표시되지만 다음 묶음은 아직 한국어 문구가 별도로
정의되지 않았거나 일부만 번역되어 있습니다. 중요도 순으로 정리했습니다.

1. Skills 및 Starmap: 기능 검색·설치·상세 정보와 에이전트 관계 시각화
2. Webhooks: Webhook 생성·편집·보안·전달 기록
3. Artifacts: 생성 결과 검색·분류·카드·버전 미리보기
4. 상태 스택과 Git 작업: 백그라운드 작업, 변경 파일, 브랜치, 커밋·PR
5. 설치·진단·원격 표시·결제 제한 안내
6. Zones, 나머지 컨텍스트 메뉴 및 일부 Desktop 보조 문구

이번 갱신에서 우선순위가 높았던 `업데이트`와 `초기 설정` 두 묶음은 번역을
완료하여 위 남은 목록에서 제외했습니다.

### 예약 작업 및 Blueprint

- 예약 작업 생성·편집·삭제·일시정지·재개·즉시 실행 및 실행 기록
- 매일·평일·매주·매월·매시간·15분마다 및 사용자 지정 일정 표시
- 이름, 프롬프트, 실행 주기, 전달 대상, 모델과 사용자 지정 일정 입력 UI
- 작업 상태, 성공·실패 알림과 모델 설정 검토 경고
- Blueprint 목록, 선택, 설명, 입력 필드와 선택 옵션의 표시용 한국어화
- 아침 브리핑, 중요 메일, 주간 검토, 업무 시작, 사용자 지정 알림
- 저녁 마무리, 뉴스 요약, 청구·갱신, 가격·재고, 경쟁사 소식
- 습관 점검, 수분·움직임, 주간 식단, 매일 학습, 감사·회고, 오늘의 발견

Blueprint의 내부 key, 옵션 저장값, cron 표현식 및 실행 prompt template은
변경하지 않습니다. 도구 이름, 모델 ID, 명령과 기타 실행 데이터도 원문을
유지합니다.

## 설치 및 빌드 방법

이 백업은 실행 파일에 바로 덮어쓰는 패치가 아니라 Hermes Desktop의 한국어
소스 백업입니다. 소스를 Hermes 저장소에 복원한 다음 Desktop 앱을 다시
빌드해야 적용됩니다. 먼저 자신의 환경에 맞게 경로 변수를 지정합니다.

```bash
HERMES_REPO="$HOME/.hermes/hermes-agent"
PATCH_ARCHIVE="$HOME/Downloads/Hermes-Desktop-Korean-v2026.8.27.tar.gz"
RESTORE_DIR="/tmp/hermes-ko-restore"
```

### 1. 백업 압축 풀기

작업용 임시 폴더에 압축을 풉니다.

```bash
mkdir -p "$RESTORE_DIR"
tar -xzf "$PATCH_ARCHIVE" -C "$RESTORE_DIR"
```

압축을 풀면 `$RESTORE_DIR/source/apps/desktop/...` 아래에 원래 저장소
구조를 유지한 번역 파일이 나타납니다.

### 2. 호환성 확인

이 백업의 기준 버전은 Hermes `v2026.8.27`, Desktop `v0.17.0`입니다. 같은
버전에서는 `source/` 아래 파일을 저장소에 복사할 수 있습니다. Hermes가
업데이트된 뒤라면 파일 전체를 바로 덮어쓰지 말고 최신 i18n 변경 사항과 먼저
비교해야 합니다. 특히 `catalog.ts`, `languages.ts`, `types.ts`,
`field-copy.ts`를 통째로 덮어쓰면 새 버전의 변경을 잃을 수 있습니다.

현재 설치본과 차이를 확인하는 예:

```bash
diff -u \
  "$HERMES_REPO/apps/desktop/src/i18n/ko.ts" \
  "$RESTORE_DIR/source/apps/desktop/src/i18n/ko.ts"
```

### 3. 번역 소스 복원

동일한 기준 버전에서 전체 백업을 복원할 때 실행합니다. 먼저 현재 파일을 별도
위치에 복사해 두는 것을 권장합니다.

```bash
cp -a "$HERMES_REPO/apps/desktop/src/i18n" \
  /tmp/hermes-i18n-before-ko-restore

cp -a "$RESTORE_DIR/source/apps/desktop/src/." \
  "$HERMES_REPO/apps/desktop/src/"
```

두 번째 명령은 압축본에 포함된 파일만 같은 상대 경로에 복사합니다. 저장소의
그 밖의 소스 파일은 삭제하지 않습니다.

### 4. 검사

```bash
cd "$HERMES_REPO/apps/desktop"
npx tsc --build tsconfig.json --pretty false
npm test -- --run \
  src/i18n/languages.test.ts \
  src/i18n/runtime.test.ts \
  src/i18n/context.test.tsx \
  src/app/cron/blueprints.test.ts
```

모든 검사가 통과해야 빌드를 진행합니다.

### 5. Hermes Desktop 다시 빌드

```bash
cd "$HERMES_REPO"
"$HERMES_REPO/venv/bin/python" \
  -m hermes_cli.main desktop --build-only --force-build
```

빌드가 끝나면 기존 Hermes Desktop을 완전히 종료하고 애플리케이션 아이콘으로
다시 실행합니다. 데스크톱 실행 항목은 일반적으로 `hermes desktop`을 사용합니다.

### 6. 한국어 선택

Hermes Desktop의 `Settings → Appearance → Language`에서 `한국어`를
선택합니다. 명령줄 설정이 필요한 경우 다음 명령을 사용할 수 있습니다.

```bash
hermes config set display.language ko
```

### 업데이트 후 재적용 주의사항

Hermes 업데이트 후에는 최신 영어 locale에 새 키가 생기거나 기존 구조가 바뀔
수 있습니다. 이 경우 `ko.ts`와 `ko-settings-fields.ts`를 최신 소스에 맞춰
병합한 뒤 검사와 빌드를 다시 수행합니다. 정의되지 않은 새 문구는
`defineLocale`의 영어 대체 기능으로 표시되므로 Desktop 실행 자체는 유지되지만,
새 항목을 한국어로 표시하려면 별도 번역이 필요합니다.
