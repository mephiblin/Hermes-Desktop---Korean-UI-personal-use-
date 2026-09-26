// @ts-nocheck
import { defineFieldCopy } from '@/app/settings/field-copy'

export const settingsKo = {
  settings: {
    subpages: {
      appearanceTheme: '테마',
      appearanceTypography: '글꼴 및 배율',
      appearanceWindowLayout: '창 및 레이아웃',
      appearanceChatDisplay: '채팅 표시',
      appearancePet: '반려동물 (Pet)',
      appearanceGeneral: '일반',
      modelMain: '기본 모델',
      modelAuxiliary: '보조 모델',
      modelMoa: '에이전트 앙상블 (MoA)',
      modelFallbacks: '대체 모델',
      chatBehavior: '동작',
      chatAttachments: '첨부 파일',
      workspaceProjects: '프로젝트 및 탐색',
      workspaceShell: '쉘 환경',
      workspaceFiles: '파일 및 실행',
      safetyApprovals: '승인',
      safetyPrivacy: '개인정보 및 네트워크',
      safetyCheckpoints: '체크포인트',
      browserProfile: '브라우저 프로필',
      browserNetwork: '로컬 및 비공개 URL',
      memoryPersistent: '영구 메모리',
      memoryContext: '컨텍스트 및 압축',
      voiceConversation: '음성 대화',
      voiceTranscription: '음성 인식 (STT)',
      voiceSpeech: '음성 합성 (TTS)',
      advancedRuntime: '에이전트 제한',
      advancedTools: '도구 접근 권한',
      advancedTerminal: '터미널 백엔드',
      advancedOutput: '출력 제한',
      advancedDelegation: '서브 에이전트',
      advancedDesktop: '데스크톱 및 시작',
      gatewayConnection: '현재 창',
      gatewayDevices: '저장된 연결',
      gatewayManagedUpdates: '원격 업데이트',
      gatewayManagedUpdatesUnavailable: '원격 업데이트를 사용하려면 SSH 업데이트를 지원하는 데스크톱 버전이 필요합니다.',
      gatewayManagedUpdatesEmpty: '저장된 연결에 SSH 연결을 추가하면 여기서 업데이트를 관리할 수 있습니다.',
      keyboardShortcuts: '단축키',
      hudGesture: 'HUD 제스처',
      screenCapture: '화면 캡처',
      notificationAlerts: '데스크톱 알림',
      notificationSounds: '소리',
      archivedSessions: '보관 및 보존',
      defaultDirectory: '기본 프로젝트 폴더',
      vaultCredentials: '저장된 자격 증명',
      vaultSources: '비밀번호 관리자',
      appUpdates: '버전 및 업데이트',
      uninstall: '제거',
      billingOverview: '개요',
      billingPlans: '요금제'
    },
    closeSettings: '설정 닫기',
    exportConfig: '설정 내보내기',
    importConfig: '설정 가져오기',
    resetToDefaults: '기본값으로 복원',
    resetConfirm: '모든 설정을 Hermes 기본값으로 복원할까요?',
    exportFailed: '내보내기 실패',
    resetFailed: '초기화 실패',

    nav: {
      providers: '공급자',
      providerAccounts: '계정',
      providerApiKeys: 'API 키',
      providerCustomEndpoints: '사용자 지정 엔드포인트',
      providerLocalModels: '로컬 모델',
      gateway: '게이트웨이',
      apiKeys: '도구 및 키',
      keybinds: '키보드 단축키',
      keysTools: '도구',
      keysSettings: '설정',
      mcp: 'MCP',
      archivedChats: '보관된 채팅',
      sessions: '세션',
      about: '정보',
      billing: '결제',
      notifications: '알림',
      vault: '비밀번호 및 로그인'
    },

    plugins: {
      title: '데스크톱 플러그인',
      blurb: '에이전트가 아닌 이 데스크톱 앱을 확장합니다. 연결된 프로필이나 머신과 관계없이 앱 전체에 한 번 설치되며, 토글 시 즉시 적용됩니다.',
      count: (n: number) => `${n}개 설치됨`,
      openFolder: '데스크톱 플러그인 폴더 열기',
      rescan: '다시 검사',
      reveal: '파일 탐색기에서 보기',
      enable: '켜기',
      disable: '끄기',
      failed: '실패',
      empty: '설치된 데스크톱 플러그인이 아직 없습니다.',
      kinds: {
        bundled: '기본 번들',
        disk: '로컬 디스크',
        runtime: '런타임'
      },
      agentHalfMissing: '에이전트 구성 요소 누락됨',
      agentHalfMissingTip: '번들 플러그인의 데스크톱 UI 부분이지만, 에이전트 부분이 현재 연결된 백엔드/프로필에 설치되지 않았습니다. 기능 → 플러그인에서 설치하세요.',
      installModal: {
        installFromGit: 'Git에서 설치',
        reviewRepository: '저장소 검토',
        repoPlaceholder: 'https://github.com/owner/repo',
        title: '플러그인 설치',
        description: '설치하기 전에 이 저장소에 포함된 내용을 검토하세요.',
        repoLabel: '저장소',
        includesHeading: '포함된 패키지 구성 요소',
        agentLabel: '에이전트 플러그인',
        desktopLabel: '데스크톱 UI',
        profileLabel: '설치할 프로필',
        agentTargetLocal: (profile: string, dir: string) => `${profile} 백엔드(${dir})에 설치됩니다`,
        agentTargetRemote: (profile: string) => `연결된 ${profile} 백엔드에 설치됩니다`,
        catalogPinned: (name: string, sha: string) => `Hermes 카탈로그 항목 "${name}" — 에이전트 구성 요소는 브랜치 최신이 아닌 검토된 고정 커밋${sha ? ` ${sha}` : ''}에 설치됩니다.`,
        reviewedHeading: '검토된 카탈로그 항목',
        reviewedIntro: '이 항목은 고정된 커밋에서 보안 검토를 거쳤습니다. 아래에서 정확한 코드를 검토할 수 있습니다.',
        toolsConnected: (n: number) => (n === 1 ? '도구 1개 연결됨' : `도구 ${n}개 연결됨`),
        skillsReady: (names: string[]) => (names.length === 1 ? `스킬 ${names[0]} 준비됨` : `스킬 ${names.length}개 준비됨`),
        nextChat: '다음 채팅에서 더 많은 도구를 사용할 수 있습니다',
        serverNotConnected: (server: string, reason: string) => `MCP 서버 ${server}이(가) 연결되지 않았습니다${reason ? `: ${reason}` : '.'}`,
        missingEnvAction: '설정하기',
        alreadyInstalled: (name: string) => `${name}은(는) 이미 설치되어 있습니다.`,
        desktopTarget: '이 컴퓨터의 로컬 desktop-plugins 폴더에 설치됩니다',
        desktopTargetFromPackage: '위 패키지에서 이 앱으로 로드됨 — 모든 프로필에 동일하게 적용',
        desktopOnlyNote: '데스크톱 전용 패키지는 백엔드 에이전트 플러그인을 설치하지 않습니다.',
        insecureWarning: '이 URL은 비보안 또는 로컬 스키마를 사용합니다. 프로덕션 설치에는 https:// 또는 git@를 사용하세요.',
        securityHeading: '설치 전 확인',
        securityIntro: '신뢰할 수 있는 출처에서만 설치하세요. 추가될 내용을 보려면 아래 저장소를 검토하세요.',
        sourceHeading: '소스 코드',
        viewRepository: '저장소 보기',
        viewPluginFiles: '플러그인 파일 보기',
        gitCloneLabel: 'Git 클론 URL'
      }
    },

    uninstallSection: {
      dangerZone: '위험 구역',
      checkingInstalled: '설치 항목 확인 중…',
      uninstallHermes: 'Hermes 제거',
      chooseHowMuch: '삭제할 범위를 선택하세요. 작업을 완료하기 위해 앱이 종료됩니다. 설치 프로그램을 다시 열어 언제든 복원할 수 있습니다.',
      confirmUninstall: '제거 확인',
      confirmBody: (what: string) => `${what} 항목이 삭제됩니다. 이 작업은 취소할 수 없습니다.`,
      appLabel: '앱:',
      couldNotStart: '제거를 시작하지 못했습니다.',
      uninstalling: '제거 중…',
      yesUninstall: '예, 제거합니다',
      options: {
        gui: {
          title: '채팅 GUI만 제거',
          description: '이 데스크톱 앱을 삭제합니다. Hermes 에이전트, 설정, 대화 내용은 모두 유지됩니다.',
          consequence: '데스크톱 채팅 GUI (이 앱과 해당 데이터)'
        },
        lite: {
          title: 'GUI 및 에이전트 제거, 데이터 보존',
          description: '앱과 Hermes 에이전트를 삭제하지만 향후 재설치를 위해 설정, 대화 내용, 비밀값은 유지합니다.',
          consequence: '채팅 GUI 및 Hermes 에이전트 (설정, 대화 내용, 비밀값 보존)'
        },
        full: {
          title: '모두 제거',
          description: '앱, 에이전트 및 모든 사용자 데이터(설정, 대화 내용, 예약 작업, 비밀값, 로그)를 삭제합니다.',
          consequence: '전체 삭제 — 채팅 GUI, Hermes 에이전트 및 모든 사용자 데이터'
        }
      }
    },

    appearance: {
      hideCodeDiffsTitle: '코드 변경 사항 요약 표시',
      hideCodeDiffsDesc: '코드 본문 대신 수정/추가된 줄 수만 인라인으로 표시합니다.',
      hideThreadTimelineTitle: '스레드 타임라인 숨기기',
      hideThreadTimelineDesc: '대화 우측 가장자리의 탐색 바를 숨깁니다.',
      appActionsTitle: '앱 액션 위치',
      appActionsDesc: '제목 표시줄에서 설정, 레이아웃, HUD 버튼의 위치입니다. 오른쪽을 선택하면 왼쪽에 탭을 둘 수 있습니다.',
      appActionsLeft: '왼쪽',
      appActionsRight: '오른쪽'
    },

    customEndpoints: {
      add: '엔드포인트 추가',
      title: '사용자 지정 엔드포인트',
      description: 'OpenAI 호환 API를 제공하는 사설 서버나 프록시를 연결합니다.',
      empty: '등록된 사용자 지정 엔드포인트가 없습니다.',
      nameLabel: '이름',
      urlLabel: '기본 URL',
      apiKeyLabel: 'API 키 (선택 사항)',
      modelLabel: '모델 ID',
      save: '저장',
      cancel: '취소',
      delete: '삭제'
    },

    localModels: {
      connectionChanged: '로컬 모델 연결이 변경되었습니다',
      title: '로컬 모델',
      runtimeTitle: '로컬 런타임',
      runtimeReady: (backend: string) => `준비됨 · ${backend}`,
      serverRunning: '실행 중',
      runtimeInstalled: 'llama.cpp 런타임 설치됨',
      runtimeInstalledDetail: (tag: string, backend: string) => `빌드 ${tag}, ${backend} 백엔드. Hermes가 서버를 자동으로 시작하고 관리합니다.`,
      installTitle: '로컬 런타임 설치',
      installDesc: '컴퓨터의 GPU 또는 CPU에서 직접 실행되는 오픈소스 모델을 지원하기 위한 고성능 llama.cpp 런타임입니다.',
      installAction: '런타임 설치',
      downloading: '다운로드 중…',
      downloadModel: '모델 다운로드',
      downloadProgress: (received: string, total: string) => `${received} / ${total}`,
      modelList: '설치된 모델',
      empty: '다운로드된 로컬 모델이 없습니다.',
      removeModel: '모델 삭제',
      removeConfirm: (name: string) => `${name} 모델을 삭제할까요?`
    },

    toolsets: {
      webCapabilitySelectedMessage: (provider: string, capability: string) => `${provider}이(가) 이제 웹 ${capability} 작업을 처리합니다.`,
      configure: '도구 설정',
      builtin: '기본 도구',
      mcp: 'MCP 도구'
    },

    vault: {
      title: '비밀번호 및 로그인',
      blurb: '“GitHub에 로그인해줘”라고 요청하면 에이전트가 대신 로그인합니다. 로그인 페이지가 처음 나타날 때 자격 증명을 묻고 이후에는 자동으로 입력됩니다. 비밀번호는 이 기기에서 안전하게 암호화되어 모델에 노출되지 않습니다.',
      count: (n: number) => `${n}개 저장됨`,
      loadFailed: '볼트 항목을 불러오지 못했습니다',
      empty: '아직 저장된 항목이 없습니다',
      emptyDesc: '미리 입력하지 않아도 에이전트가 로그인할 때 자동으로 요청합니다. 필요한 경우 "추가"를 눌러 미리 등록할 수 있습니다.',
      add: '추가',
      addTitle: '로그인 정보, 카드, 주소 추가',
      addDescription: '이 기기에 암호화되어 안전하게 보관됩니다. 에이전트에게 비밀번호가 직접 표시되지 않습니다.',
      added: '저장되었습니다.'
    },

    billing: {
      title: '결제 및 플랜',
      plans: '요금제',
      currentPlan: '현재 요금제',
      upgrade: '업그레이드',
      manageSubscription: '구독 관리',
      credits: '크레딧',
      balance: '잔여 크레딧',
      buyCredits: '크레딧 충전',
      autoTopUp: '자동 충전',
      usage: '사용 내역',
      history: '결제 내역',
      perMonth: (amount: string) => `월 ${amount}`,
      creditsPerMonth: (amount: string) => `월 ${amount} 크레딧`,
      usageLabel: (label: string) => `${label} 사용량`,
      freeTier: {
        signIn: '로그인',
        title: 'Nous 무료 티어를 사용 중입니다',
        message: 'Nous 계정으로 로그인하여 더 많은 모델과 도구를 잠금 해제하세요.',
        caption: 'nous/welcome 환경과 커넥터가 포함되어 있습니다. 로그인하면 계정이 필요한 도구와 모든 최신 모델을 활용할 수 있습니다.',
        name: 'Nous · 무료 티어'
      }
    },

    fieldLabels: defineFieldCopy({
      model: '기본 모델',
      modelContextLength: '컨텍스트 길이',
      fallbackProviders: '대체 모델 목록',
      display: {
        personality: '어시스턴트 스타일',
        showReasoning: '추론 과정 표시'
      },
      desktop: {
        repoScanEnabled: '저장소 자동 검색',
        repoScanRoots: '검색 루트 디렉토리',
        repoScanExcludePaths: '검색 제외 경로'
      },
      timezone: '시간대 (Timezone)',
      agent: {
        imageInputMode: '이미지 입력 모드',
        maxTurns: '최대 턴 수'
      },
      terminal: {
        cwd: '작업 폴더',
        persistentShell: '영구 쉘 세션',
        envPassthrough: '환경 변수 전달'
      },
      codeExecution: {
        mode: '코드 실행 모드'
      },
      fileReadMaxChars: '파일 읽기 최대 문자 수',
      approvals: {
        mode: '명령어 승인 모드',
        timeout: '승인 대기 시간'
      },
      security: {
        redactSecrets: '비밀값 자동 마스킹'
      },
      checkpoints: {
        enabled: '자동 체크포인트 생성'
      },
      memory: {
        memoryEnabled: '영구 메모리 활성화',
        userProfileEnabled: '사용자 프로필 분석'
      },
      context: {
        engine: '컨텍스트 관리 엔진'
      },
      auxiliary: {
        compression: {
          timeout: '압축 모델 대기 시간 (초)'
        }
      },
      delegation: {
        model: '서브 에이전트 모델',
        provider: '서브 에이전트 공급자',
        maxIterations: '서브 에이전트 턴 제한',
        maxConcurrentChildren: '동시 실행 서브 에이전트 수',
        childTimeoutSeconds: '서브 에이전트 대기 시간 (초)',
        reasoningEffort: '서브 에이전트 추론 강도'
      },
      updates: {
        nonInteractiveLocalChanges: '앱 업데이트 시 로컬 변경 사항 처리'
      }
    }),

    fieldDescriptions: defineFieldCopy({
      model: '컴포저에서 다른 모델을 선택하지 않는 한 새 채팅에서 기본으로 사용됩니다.',
      modelContextLength: '0으로 두면 선택한 모델의 기본 감지된 컨텍스트 길이를 사용합니다.',
      fallbackProviders: '기본 모델 호출이 실패할 때 순서대로 시도할 백업 모델 목록입니다 (provider:model 형식).',
      display: {
        personality: '새 세션의 기본 어시스턴트 스타일입니다.',
        showReasoning: '백엔드가 추론 과정을 제공할 때 화면에 표시합니다.'
      },
      desktop: {
        repoScanEnabled: '로컬 폴더를 검색하여 Git 저장소를 프로젝트 목록에 표시합니다.',
        repoScanRoots: '검색할 기본 루트 폴더입니다. 비워두면 홈 디렉토리를 탐색합니다.',
        repoScanExcludePaths: '저장소 탐색 시 제외할 폴더 및 하위 경로입니다.'
      },
      timezone: 'Hermes가 현재 시간 컨텍스트를 파악할 때 사용합니다. 비워두면 시스템 표준 시간대를 따릅니다.',
      agent: {
        imageInputMode: '이미지 첨부 파일을 모델에 전달하는 방식을 제어합니다.',
        maxTurns: '에이전트가 단일 요청에서 도구를 호출할 수 있는 최대 턴 수입니다.'
      },
      terminal: {
        cwd: '도구 및 터미널 작업의 기본 프로젝트 작업 디렉토리입니다.',
        persistentShell: '백엔드가 지원하는 경우 명령어 실행 간에 쉘 세션 상태를 유지합니다.',
        envPassthrough: '도구 실행 시 전달할 환경 변수 목록입니다.'
      },
      codeExecution: {
        mode: '코드 실행을 현재 프로젝트 범위로 얼마나 엄격하게 제한할지 설정합니다.'
      },
      fileReadMaxChars: 'Hermes가 한 번에 읽을 수 있는 파일의 최대 문자 수입니다.',
      approvals: {
        mode: '명령어 실행 시 명시적 사용자 승인을 요청할 방식을 설정합니다.',
        timeout: '승인 요청이 만료될 때까지 기다릴 시간(초)입니다.'
      },
      security: {
        redactSecrets: '감지된 비밀값 및 토큰을 모델 프롬프트에서 최대한 마스킹합니다.'
      },
      checkpoints: {
        enabled: '파일 편집 전에 롤백할 수 있는 스냅샷을 자동으로 생성합니다.'
      },
      memory: {
        memoryEnabled: '새 세션에서도 유지되는 영구 메모리를 활성화합니다.',
        userProfileEnabled: '사용자의 성향 및 선호도를 분석하여 사용자 프로필을 유지합니다.'
      },
      context: {
        engine: '긴 대화가 컨텍스트 한계에 도달했을 때의 관리 전략입니다.'
      }
    })
  },

  modelAssignment: {
    saveFailed: 'Hermes가 해당 모델 변경 사항을 저장하지 못했습니다.',
    confirmTitle: '모델 선택 주의사항',
    confirmDetail: '이 조건을 수락하는 경우에만 확인을 누르세요.',
    confirmAction: '확인',
    declined: '모델 변경 취소됨 — 데이터 학습 티어 경고를 수락하지 않았습니다.'
  },

  modelPicker: {
    search: '모델 검색...',
    custom: '사용자 지정',
    recent: '최근 사용',
    recommended: '추천',
    all: '모든 모델',
    manageModels: '모델 관리',
    noModels: '일치하는 모델이 없습니다'
  },

  modelVisibility: {
    addCustomModel: '사용자 지정 모델 추가',
    removeCustomModel: '사용자 지정 모델 제거'
  }
}
