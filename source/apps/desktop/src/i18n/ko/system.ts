// @ts-nocheck
export const systemKo = {
  externalOpenFailed: {
    title: '링크를 열 수 없습니다',
    message: '이 주소를 열도록 등록된 브라우저가 없습니다. 링크를 복사하여 직접 열어주세요.',
    copyUrl: '링크 복사',
    close: '닫기'
  },

  remoteDisplayBanner: {
    message: (reason: string) => `소프트웨어 렌더링 활성 — 원격 디스플레이 감지됨 (${reason}). 화면 깜빡임을 방지하기 위해 GPU 가속이 비활성화되었습니다.`
  },

  billingBlock: {
    titleNous: 'Nous 크레딧 소진',
    titleProvider: (provider: string) => `크레딧 소진 — ${provider}`,
    fallbackMessage: '계정의 크레딧이 모두 소진되었습니다. 계속 진행하려면 크레딧을 충전하세요.',
    openBilling: '결제 관리 열기',
    addCredits: '크레딧 충전',
    dismiss: '닫기'
  },

  sendDiagnostics: {
    title: 'Nous에 진단 정보 보내기',
    privacyNotice: '디버그 번들을 Nous 내부 스토리지에 비공개로 업로드합니다. 시스템 정보(OS, 버전, 제공자, 설정된 API 키 목록 — 키 본문은 제외)와 에이전트, 게이트웨이, 데스크톱 로그(최대 각 512KB)가 포함됩니다. 민감한 정보는 업로드 전 자동으로 삭제되며, 14일 후 자동으로 삭제됩니다.',
    upload: '업로드',
    uploading: '업로드 중…',
    cancel: '취소',
    close: '닫기',
    copyLink: '링크 복사',
    uploadIdFallback: (id: string) => `보기 링크가 반환되지 않음 — 지원 문의 시 업로드 ID ${id} 제공`,
    doneTitle: '진단 정보 전송 완료',
    doneDescription: '진단 번들이 비공개로 업로드되었습니다. 아래 링크를 지원 스레드에 공유해 주세요.',
    failedTitle: '업로드 실패',
    failedHint: '터미널에서 hermes debug share --nous 를 실행하거나, hermes debug share --local 로 업로드 없이 보고서를 확인할 수도 있습니다.',
    handoffLead: '문의 채널 선택:',
    links: {
      github: 'GitHub Issues',
      portal: 'Nous 포털 지원',
      discord: 'Discord'
    }
  },

  guidedGreeting: {
    line: "안녕하세요! 들어오세요. 저는 Hermes입니다. 잠시 시스템 환경을 준비한 후 원하시는 작업을 바로 시작해 볼게요.\n\n먼저, 어떻게 불러드리면 좋을까요?",
    nameSuggestion: (name: string) => `(원하시면 편하게 ${name}(으)로 불러드릴 수도 있어요.)`
  },

  handoffTour: {
    profileTitle: '첫 작업은 기본 프로필에서 실행됩니다',
    profileText: '이 레일에서 프로필을 전환할 수 있습니다. 현재 활성화된 것은 default 프로필이며 작업 세션이 보관됩니다. 다른 하나는 환영 채팅이 있는 setup 프로필입니다.',
    sessionsTitle: '각 프로필은 자체 세션을 유지합니다',
    sessionsText: '이 목록은 default 프로필에 속합니다. 새 세션을 시작하면 현재 선택된 프로필에서 시작됩니다.',
    stayTitle: 'Hermes는 언제나 곁에 있습니다',
    stayText: '도움이 필요할 때 언제든 setup 프로필로 전환하여 환영 세션을 다시 열 수 있습니다.'
  },

  install: {
    stageStates: {
      pending: '대기 중',
      running: '설치 중',
      succeeded: '완료',
      skipped: '건너뜀',
      failed: '실패'
    },
    oneTimeTitle: 'Hermes 초기 설치가 필요합니다',
    unsupportedDesc: (platform: string) => `${platform} 환경에서는 자동 최초 설치가 아직 지원되지 않습니다. 터미널을 열고 아래 명령어를 실행한 후 앱을 다시 실행하세요. 이후 실행 시에는 이 단계가 생략됩니다.`,
    installCommand: '설치 명령어',
    copyCommand: '명령어 복사',
    viewDocs: '설치 문서 보기',
    installTo: '설치 위치',
    retryAfterRun: '실행 완료 -- 다시 시도',
    setupChoiceTitle: 'Hermes Desktop 설정',
    setupChoiceDesc: '이미 실행 중인 Hermes 게이트웨이에 연결하거나, 이 컴퓨터에 Hermes를 로컬 설치합니다.',
    setupChoiceDescLocal: '이 컴퓨터에 Hermes를 설치하거나 이미 실행 중인 게이트웨이에 연결하세요.',
    connectExistingTitle: '기존 Hermes에 연결',
    connectExistingShort: '기존 환경 연결',
    connectExistingDesc: '세션 토큰 또는 브라우저 로그인으로 원격 백엔드를 사용합니다. 로컬 설치는 진행되지 않습니다.',
    installLocalTitle: 'Hermes 로컬 설치',
    installLocalDesc: 'Hermes를 다운로드하고 Python 환경을 구축하여 이 컴퓨터에서 백엔드를 실행합니다.',
    useLocalTitle: '이 컴퓨터의 Hermes 사용',
    useLocalDesc: '이미 Hermes 런타임이 설치되어 있습니다. 원클릭으로 바로 시작하세요.',
    bundledLocalDesc: '이 앱에 포함된 Hermes 런타임을 사용합니다.',
    localStartUnavailable: '로컬 설치를 시작할 수 없습니다. Hermes Desktop을 재시작하고 다시 시도하세요.',
    remoteSetupTitle: '기존 Hermes에 연결',
    remoteSetupDesc: '게이트웨이 URL을 입력하세요. Hermes Desktop이 토큰 또는 브라우저 로그인 필요 여부를 자동으로 감지합니다.',
    remoteUrlTitle: '게이트웨이 URL',
    remoteUrlDesc: 'Hermes 게이트웨이의 기본 URL을 입력하세요. 원격인 경우 https://를 포함해야 합니다.',
    remoteUrlPlaceholder: 'https://gateway.example.com/hermes',
    probing: '게이트웨이 인증 방식 감지 중...',
    probeError: '해당 주소에 연결할 수 없습니다. URL 및 대상 컴퓨터에서 Hermes가 실행 중인지 확인하세요.',
    probeErrorDetails: '상세 정보',
    identityProvider: 'ID 공급자',
    authTitle: '인증',
    authNeedsOauth: (provider: string) => `이 게이트웨이를 테스트하기 전에 ${provider}(으)로 로그인하세요.`,
    authSignedIn: '브라우저 로그인이 완료되었습니다.',
    connected: '연결됨',
    signIn: '로그인',
    signInWith: (provider: string) => `${provider}(으)로 로그인`,
    enterUrlFirst: '먼저 게이트웨이 URL을 입력하세요.',
    signInIncomplete: '인증이 완료되기 전에 로그인 창이 닫혔습니다.',
    tokenTitle: '세션 토큰',
    tokenDesc: '원격 게이트웨이 .env 파일에서 세션 토큰을 복사하여 붙여넣으세요.',
    pasteSessionToken: '세션 토큰 붙여넣기',
    incompleteSignInTest: 'OAuth 게이트웨이를 테스트하기 전에 로그인하세요.',
    incompleteTokenTest: '이 게이트웨이를 테스트하기 전에 세션 토큰을 입력하세요.',
    testConnection: '연결 테스트',
    testSucceeded: (baseUrl: string, version: string) => `${baseUrl}에 연결되었습니다${version ? ` (${version})` : ''}.`,
    applyRemote: '적용 및 재연결',
    cancelInstall: '설치 취소',
    transcriptSaved: '전체 로그 저장 위치:',
    copiedOutput: '복사되었습니다!',
    copyOutput: '출력 복사',
    reloadRetry: '새로고침 후 다시 시도',
    openLogs: '로그 열기'
  },

  onboarding: {
    localModelsTitle: '로컬에서 모델 실행',
    localModelsPitch: '계정 없이도 모델을 다운로드하여 이 컴퓨터에서 직접 실행할 수 있습니다',
    localModelNamePlaceholder: '모델 이름 (예: command-a-plus-05-2026)',
    signInExpired: '로그인 시간이 초과되었습니다. 다시 시도하여 몇 분 내에 브라우저 인증을 완료하거나 API 키를 사용하세요.',
    signInDidNotFinish: (provider: string) => `${provider} 로그인이 완료되지 않았습니다. 인터넷 연결을 확인하고 다시 시도하거나 다른 공급자를 선택하세요.`,
    tryAgain: '다시 시도',
    useApiKeyInstead: 'API 키 사용',
    errorDetails: '상세 정보',
    pro: 'Pro',
    free: '무료'
  },

  freeTier: {
    providerRowTitle: 'Nous · 무료 티어',
    providerRowPitch: 'Nous 계정으로 로그인하여 더 많은 모델과 도구를 잠금 해제하세요.',
    readyTitle: 'Hermes가 준비되었습니다.',
    readyCaption: '무료 · 커넥터 포함',
    begin: '시작하기',
    signInInstead: 'Nous 계정으로 로그인',
    otherProviders: '다른 공급자',
    stripTitle: '무료 Nous 추론 및 커넥터를 사용할 수 있습니다.',
    stripBody: '모델 선택기를 열어 사용해 보거나 Nous 계정으로 로그인하세요.',
    openModelPicker: '모델 선택기 열기',
    dismiss: '닫기',
    providerName: 'Nous',
    statusLabel: (model: string) => `Nous · ${model}`,
    signIn: '로그인',
    signInHeading: 'Nous 계정으로 로그인하여 더 많은 모델과 도구를 잠금 해제하세요.',
    settingUp: '무료 추론 설정 중…',
    codeBody: '로그인을 완료하려면 브라우저에 이 코드를 입력하세요.',
    copyLink: '링크 복사',
    doNotShare: '이 코드를 다른 사람과 공유하지 마세요.',
    waiting: '로그인 대기 중…',
    finishingHeading: '로그인 마무리 중…',
    finishingBody: '브라우저에서 승인되었습니다. 계정 토큰을 가져오는 중입니다.',
    signedInAs: (email: string) => `${email} 계정으로 로그인됨`,
    signedIn: '로그인되었습니다.',
    completedBody: '계정에 추론과 도구가 연결되었습니다.',
    defaultModel: '기본 모델',
    change: '변경',
    done: '완료',
    notNow: '나중에',
    tryAgain: '다시 시도',
    startAgain: '처음부터 다시 시도',
    didNotComplete: '로그인이 완료되지 않았습니다',
    rejectedBody: '괜찮습니다. 여전히 무료 Nous 서비스를 이용하실 수 있습니다. 준비되면 언제든지 로그인하세요.',
    supersededBody: '새 로그인 코드로 대체되었습니다. 최신 코드를 사용하거나 다시 시작하세요.',
    timedOutHeading: '로그인 링크가 만료되었습니다',
    timedOutBody: '준비되면 언제든지 다시 시작하세요. 여전히 무료 Nous 서비스를 이용할 수 있습니다.',
    retiredBody: '로그인이 완료되기 전에 세션이 종료되었습니다. Hermes가 새 세션을 시작합니다.',
    errorBody: '로그인이 완료되지 않았습니다. 준비되면 다시 시도하세요.',
    busyHeading: '거의 다 되었습니다',
    busyBody: (wait: string) => `Nous 서비스가 혼잡하여 로그인을 완료하지 못했습니다. ${wait} 후에 다시 시도해 주세요.`,
    unreachableBody: 'Nous 서비스에 연결할 수 없습니다. 인터넷 연결을 확인하고 다시 시도하세요.',
    alreadySignedInHeading: '이미 로그인되어 있습니다.',
    alreadySignedInBody: '이 Hermes는 이미 Nous 계정에 로그인되어 있습니다.',
    setupFailed: {
      gateClosed: '이 버전의 Hermes는 Nous 계정 없이 시작할 수 없습니다. 무료로 1분 만에 가입하거나 로그인하세요.',
      paused: '로그인 없이 Hermes를 사용하는 기능이 잠시 중단되었습니다. 로그인은 무료이며 즉시 이용 가능합니다.',
      rateLimited: (wait: string) => `현재 사용자가 많아 Hermes가 ${wait} 후에 다시 시도합니다. 로그인하면 대기 없이 바로 이용 가능합니다.`,
      unreachable: 'Nous 서비스에 연결하지 못했습니다. 인터넷 연결을 확인한 후 다시 시도하거나 다른 공급자를 연결하세요.',
      serverError: 'Nous 서비스에 일시적인 문제가 발생했습니다. 잠시 후 다시 시도하거나 다른 공급자를 연결하세요.',
      powRequired: 'Nous 서버에서 작업 증명(PoW)을 요청했으나 에이전트에 아직 구현되지 않았습니다. 무료 계정으로 로그인해 계속하세요.',
      locked: '이 세션은 로그인 없이는 계속할 수 없습니다. 계속하려면 무료 Nous 계정으로 로그인하세요.',
      generic: '로그인 없이 무료 접근을 설정하지 못했습니다. 로그인하거나 다른 제공자를 연결하세요.',
      signInBelow: '로그인은 무료입니다. 아래에서 Nous를 선택하세요.',
      tryAgain: '다시 시도',
      retrying: '다시 시도하는 중…'
    }
  },

  updates: {
    discontinuedTitle: '이 Hermes 빌드는 더 이상 지원되지 않습니다',
    discontinuedBody: '이 Hermes 빌드는 더 이상 지원되지 않으며 정상 작동하지 않을 수 있습니다. 앱을 제거하세요. 데이터는 디스크에 유지됩니다.',
    channels: {
      stable: '안정판 (Stable)',
      canary: '카나리 (Canary)'
    },
    bundleSwapPending: '업데이트를 완료하려면 재시작하세요',
    bundleSwapPendingDesc: '업데이트된 앱이 이미 설치되었습니다. 재시작하면 새 버전이 로드됩니다. 대화와 설정은 그대로 유지됩니다.',
    bundleSwapPendingAction: 'Hermes 재시작',
    gitUnusable: '이 컴퓨터에서 Git을 실행할 수 없어 업데이트를 확인할 수 없습니다.',
    connectionSettings: '연결 설정',
    openDownloadPage: '다운로드 페이지 열기',
    availableBodyAppInstaller: '새 버전의 Hermes가 준비되었습니다. Hermes가 닫히고 업데이트가 완료된 후 자동으로 다시 열립니다.',
    manualUnavailableTitle: '여기서 업데이트할 수 없음',
    manualBodyBackend: 'Hermes 백엔드가 이 앱 외부에서 관리되고 있습니다. 백엔드를 호스팅하는 서버에서 다음 명령을 실행하세요:',
    manualPickedUpBackend: '업데이트가 완료되면 백엔드가 새 버전을 적용합니다.',
    applyingBodyAppInstaller: 'Hermes가 닫히고 업데이트를 완료합니다. 완료되면 다시 열립니다.',
    applyingCloseAppInstaller: '이 창이 닫히고 업데이트 후 Hermes가 자동으로 다시 열립니다.',
    checkUnknownTitleAppInstaller: '업데이트를 확인하지 못했습니다',
    checkUnknownBodyAppInstaller: '지금은 업데이트를 확인할 수 없습니다. Hermes를 재시작할 때 자동으로 설치되기도 합니다.',
    changeLogNew: '새로운 기능',
    changeLogFixed: '수정 사항',
    changeLogFaster: '성능 향상',
    changeLogImproved: '개선 사항',
    changeLogOther: '기타 변경 사항',
    changeLogFallbackLabel: '이번 업데이트 내용',
    changeLogFallbackItem: '성능 개선 및 버그 수정',
    appName: 'Hermes',
    version: (value: string) => `버전 ${value}`,
    versionUnavailable: '버전 정보 없음',
    checkNow: '지금 확인',
    seeWhatsNew: '변경 사항 보기',
    releaseNotes: '릴리스 노트',
    onLatest: '최신 버전을 사용 중입니다.',
    installing: '업데이트를 설치하는 중입니다.',
    cantReach: '업데이트 서버에 연결할 수 없습니다.',
    tapCheck: '업데이트를 확인하려면 \"지금 확인\"을 누르세요.',
    updateReady: (count: number) => `새 업데이트가 준비되었습니다 (${count}개 변경 사항 포함).`,
    updateReadyUnknown: '새 업데이트가 준비되었습니다.',
    availableBodyRelease: (tag: string) => `버전 ${tag}을(를) 설치할 준비가 되었습니다.`,
    lastChecked: (age: string) => `마지막 확인: ${age}`,
    never: '확인한 적 없음',
    justNow: '방금 전',
    minAgo: (count: number) => `${count}분 전`,
    hoursAgo: (count: number) => `${count}시간 전`,
    daysAgo: (count: number) => `${count}일 전`,
    versionDetailsDistributionStore: 'Microsoft Store',
    versionDetailsRuntime: '런타임',
    versionDetailsRuntimeEmbedded: '내장 런타임',
    versionDetailsRuntimeExternal: '외부 런타임 (시스템 환경 사용)',
    versionDetailsInstallId: '설치 ID',
    versionDetailsUncommittedChanges: '커밋되지 않은 변경 사항'
  },

  tips: {
    close: '이 팁 다시 보지 않기',
    items: {
      'new-session': {
        title: '새롭게 시작하기',
        text: '새 채팅을 시작하면 독립된 컨텍스트, 터미널 및 작업 디렉토리가 생성됩니다.'
      },
      skills: {
        title: '한 번 가르치면 계속 활용',
        text: '스킬은 작업에 필요할 때 Hermes가 로드하는 지침 폴더입니다.'
      },
      messaging: {
        title: '자리 비움 상태에서도 Hermes 사용',
        text: 'Telegram, Discord, Slack 등을 연결하여 동일한 에이전트와 메모리로 대화하세요.'
      },
      artifacts: {
        title: 'Hermes가 생성한 모든 결과물',
        text: '모든 세션의 이미지, 파일, 링크가 한곳에 색인화되어 표시됩니다.'
      },
      cron: {
        title: '스스로 실행되는 작업',
        text: '매시간, 매일 밤 또는 cron 표현식으로 프롬프트 실행을 예약하세요.'
      },
      'command-palette': {
        title: '모든 것을 제어하는 커맨드 팔레트',
        text: '세션, 설정, 스킬, 명령어를 커맨드 팔레트 하나로 검색하고 실행하세요.'
      },
      profiles: {
        title: '독립된 프로필',
        text: '각 프로필은 고유한 API 키, 메모리, 세션을 갖는 독립된 Hermes 환경입니다.'
      },
      'composer-mentions': {
        title: '첨부 및 명령어',
        text: '@를 입력하여 대화에 파일을 첨부하고, /를 입력하여 명령어를 실행하세요.'
      },
      'local-runtime-update': {
        title: '로컬 엔진 업데이트 가능',
        text: '로컬 모델을 실행하는 엔진의 새 버전이 있습니다. 활성 작업이 잠시 중단될 수 있습니다.',
        action: '지금 업데이트'
      },
      'local-setup': {
        title: '이 기기에서 로컬 모델 실행 가능',
        text: '사용자의 하드웨어에서 로컬 모델을 구동할 수 있습니다. 대화가 컴퓨터에 머물며 비용이 발생하지 않습니다.',
        action: '설정하기'
      },
      'right-pane': {
        title: '작업 창',
        text: '파일, 터미널, 코드 리뷰 및 인앱 브라우저가 우측 작업 창을 공유합니다.'
      }
    }
  },

  prompts: {
    gatewayDisconnected: '현재 Hermes 오프라인 상태입니다. 다시 연결한 후 전송하세요.',
    reconnect: '다시 연결',
    sudoSendFailed: 'sudo 비밀번호를 전송하지 못했습니다',
    secretSendFailed: '비밀값을 전송하지 못했습니다',
    sudoTitle: '관리자 비밀번호',
    sudoDesc: 'sudo 비밀번호를 입력하기 전에 명령어를 검토하세요. 비밀번호는 실행 중인 에이전트에 전송되며 이 세션 동안 캐시됩니다.',
    sudoCommandUnavailable: '에이전트가 명령어를 제공하지 않았습니다. 대화에서 직접 확인할 수 없다면 취소하세요.',
    sudoInstallDesc: '게이트웨이 호스트에 Bot Screen 패키지(TigerVNC + Xfce)를 설치하려면 sudo 비밀번호가 필요합니다.',
    sudoPlaceholder: 'sudo 비밀번호',
    secretTitle: '인증 정보 필요',
    secretDesc: '계속 진행하려면 자격 증명이 필요합니다.',
    secretPlaceholder: '비밀값 입력',
    vaultUnlockSendFailed: '마스터 비밀번호를 전송하지 못했습니다',
    vaultUnlockTitle: (name: string) => `${name} 잠금 해제`,
    vaultUnlockDesc: (name: string) => `에이전트가 ${name}에 저장된 로그인 정보로 웹사이트에 로그인하려고 합니다. 이번 세션 동안 잠금을 해제하려면 마스터 비밀번호를 입력하세요.`,
    vaultUnlockPlaceholder: '마스터 비밀번호',
    vaultUnlockKeepLocked: '잠금 상태 유지',
    vaultUnlockConfirm: '잠금 해제',
    vaultSaveSendFailed: '로그인 정보를 저장하지 못했습니다',
    vaultSaveTitle: (site: string) => `${site} 로그인 정보를 저장할까요?`,
    vaultSaveDesc: (origin: string) => `Hermes가 ${origin} 로그인 페이지에 도달했으나 저장된 로그인이 없습니다. 여기에 입력하면 암호화되어 모델에 노출되지 않고 안전하게 자동 입력됩니다.`,
    vaultSaveIdentifierLabel: '이메일 또는 사용자 이름',
    vaultSaveIdentifierPlaceholder: 'you@example.com',
    vaultSavePasswordPlaceholder: '비밀번호',
    vaultSaveFootnote: '저장된 로그인은 설정 → 비밀번호 및 로그인에서 관리할 수 있습니다.',
    vaultSaveDecline: '저장 안 함',
    vaultSaveConfirm: '저장 및 로그인',
    vaultCodeSendFailed: '인증 코드를 전송하지 못했습니다',
    vaultCodeTitle: (site: string) => `${site} 인증 코드`,
    vaultCodeDesc: (site: string) => `${site}에서 일회용 인증 코드(SMS, 이메일 또는 OTP)를 요청하고 있습니다. 입력하면 모델에 노출되지 않고 안전하게 전달됩니다.`,
    vaultCodeLabel: '인증 코드',
    vaultCodeFootnote: '팁: 설정 → 비밀번호 및 로그인에서 OTP 키를 저장해 두면 Hermes가 자동으로 입력합니다.',
    vaultCodeSkip: '건너뛰기',
    vaultCodeConfirm: '코드 입력'
  },

  errors: {
    boundaryDetails: '상세 정보',
    sendDiagnostics: '진단 정보 전송'
  },

  interfaceMode: {
    title: '인터페이스 모드',
    hint: '표시 방식을 변경하며 Hermes의 기능 자체는 변경되지 않습니다.',
    sessionNote: '심플 모드로 설정됨. 여기서 변경한 내용은 이번 세션 동안 유지됩니다. 완전히 내 것으로 만들려면 고급 모드로 전환하세요.',
    simple: {
      label: '심플',
      description: 'Hermes와의 대화 전용 모드입니다. 사이드바와 채팅만 표시되며 터미널, 파일 및 diff 창은 숨겨집니다.'
    },
    advanced: {
      label: '고급',
      description: '개발자 전용 모드입니다. 터미널, 파일, diff, 상태 표시줄 및 레이아웃을 자유롭게 활용할 수 있습니다.'
    }
  },

  zones: {
    showTabStrip: '탭 표시',
    hideTabStrip: '탭 숨기기',
    showStripTab: (title: string) => `${title} 표시`,
    hideStripTab: (title: string) => `${title} 숨기기`,
    lastTabKeptTitle: '마지막 탭은 유지됩니다',
    lastTabKeptBody: '이 영역에는 최소 하나의 표시 탭이 필요합니다. 다른 탭을 먼저 표시하거나 사이드바 전체를 접으세요.',
    toggleStripTab: (title: string) => `${title} 탭 전환`,
    minimize: '최소화',
    restore: '복원',
    closeRunningTitle: '실행 중인 탭을 닫을까요?',
    closeRunningBody: '이 채팅은 아직 작업 중이거나 입력을 기다리고 있습니다. 탭을 닫아도 세션 진행 상태는 유지되며 사이드바에서 다시 열 수 있습니다.',
    closeRunningConfirm: '탭 닫기',
    reload: '새로고침',
    closeOthers: '다른 탭 닫기',
    closeToRight: '오른쪽 탭 모두 닫기',
    closeAll: '모든 탭 닫기',
    newSessionTab: '새 세션 탭',
    newTab: '새 탭',
    pluginDisabled: (pluginId: string) => `플러그인 "${pluginId}" 비활성화됨`,
    pluginDisabledBody: '패널을 다시 불러오려면 기능 → 플러그인에서 다시 활성화하세요.',
    missingPane: (paneId: string) => `누락된 패널: ${paneId}`,
    editTitle: '레이아웃',
    editHint: '레이아웃을 선택하거나 영역 간에 패널을 드래그하세요.',
    reset: '초기화',
    templates: '템플릿',
    custom: '사용자 지정',
    newGridLayout: '새 그리드 레이아웃',
    saveCurrentAs: '현재 배치를 템플릿으로 저장',
    nameLayoutPlaceholder: '레이아웃 이름 입력…',
    deletePreset: (name: string) => `${name} 삭제`,
    zoneEditorTitle: '영역 편집기',
    editorHintPre: '클릭하여 분할 · ',
    editorHintPost: ' 방향 전환 · 드래그하여 병합 · 경계 드래그하여 크기 조절',
    templateColumns: '열 (Columns)',
    templateRows: '행 (Rows)',
    templateGrid: '그리드',
    templatePriority: '우선순위',
    zoneTag: (index: number) => `영역 ${index}`,
    mergeZones: (count: number) => `${count}개 영역 병합`,
    customZoneName: (count: number) => `사용자 지정 ${count}개 영역`,
    layoutNamePlaceholder: (fallback: string) => `레이아웃 이름 (${fallback})`,
    saveApply: '저장 및 적용',
    notExpressible: '이 배치는 서로 얽혀 있어(바람개비 형태) 중첩 분할로 표현할 수 없습니다',
    zoneCount: (count: number) => `${count}개 영역`,
    tabCount: (count: number) => `${count}개 탭`
  },

  contextMenu: {
    link: {
      openInApp: '인앱 브라우저에서 열기',
      openExternal: '외부 브라우저에서 열기',
      copyUrl: 'URL 복사',
      copyResolvedUrl: '확인된 URL 복사'
    },
    image: {
      copyImage: '이미지 복사',
      copyImageAddress: '이미지 주소 복사',
      saveImageAs: '이미지를 다른 이름으로 저장…'
    },
    edit: {
      cut: '잘라내기',
      paste: '붙여넣기',
      selectAll: '전체 선택',
      addToDictionary: '사전에 추가'
    },
    page: {
      copyPageUrl: '페이지 URL 복사',
      inspectElement: '요소 검사'
    }
  },

  ui: {
    search: {
      clear: '검색 지우기'
    },
    pagination: {
      label: '페이지 이동',
      previous: '이전',
      previousAria: '이전 페이지로 이동',
      next: '다음',
      nextAria: '다음 페이지로 이동'
    },
    sidebar: {
      title: '사이드바',
      description: '모바일 사이드바를 표시합니다.',
      toggle: (open: boolean) => `사이드바 ${open ? '숨기기' : '표시'}`
    }
  },

  keybinds: {
    clear: '지우기',
    actions: {
      nav: {
        capabilities: '스킬 열기'
      },
      conversation: {
        scrollPageUp: '대화 한 페이지 위로 스크롤',
        scrollPageDown: '대화 한 페이지 아래로 스크롤'
      },
      composer: {
        dictate: '음성 받아쓰기 시작 / 중지'
      },
      view: {
        cycleSidebarGrouping: '세션 그룹화 방식 전환',
        toggleProfileRail: '프로필 레일 표시/숨기기',
        toggleSimpleMode: '심플 모드 전환'
      }
    }
  },

  boot: {
    errors: {
      restartHermes: 'Hermes 재시작',
      openLogs: '로그 열기',
      reconnectNow: '지금 재연결',
      connectionSettings: '연결 설정',
      gatewaySignInRequiredDetail: '다시 연결하려면 다시 로그인하세요. 대화와 설정은 안전하게 보존됩니다.',
      signInAgain: '다시 로그인'
    },
    causes: {
      exitedEarly: 'Hermes 백그라운드 서비스가 시작 직후 중단되었습니다.',
      timedOut: 'Hermes 백그라운드 서비스가 제시간에 응답하지 않았습니다.',
      permission: 'Hermes가 데이터 폴더에 쓸 수 없습니다 (권한 문제).',
      diskFull: '디스크 공간이 부족하여 Hermes를 시작할 수 없습니다.',
      portInUse: 'Hermes에 필요한 네트워크 포트를 다른 프로그램이 사용 중입니다.',
      installMissing: 'Hermes 설치 파일 일부가 누락되었습니다. 설치 복구를 선택하여 복원하세요.'
    },
    failure: {
      details: '상세 정보',
      repairHint: '복구는 설치 프로그램을 다시 실행하며 새 환경에서는 몇 분 정도 걸릴 수 있습니다.',
      bundledReinstallHint: '번들 설치는 앱 내부에서 복구할 수 없습니다. 백엔드를 복원하려면 앱을 다시 설치하세요.',
      reinstallApp: '앱 재설치',
      remoteSignInHint: (signInLabel: string) => `저장된 원격 브라우저 세션에서 로그아웃한 후 ${signInLabel}을(를) 엽니다. 로컬 게이트웨이를 사용하여 번들 백엔드로 전환할 수도 있습니다.`,
      remoteFailureHint: '게이트웨이 설정에서 게이트웨이 URL과 로그인을 확인하거나 로컬 게이트웨이로 전환하세요.',
      cloudDownTitle: 'Nous Cloud 에이전트 오프라인',
      cloudDownDescription: '이 게이트웨이가 연결하는 Nous 관리형 클라우드 에이전트에서 서버 오류가 발생했습니다. 상태를 확인하거나 로컬 게이트웨이로 전환하세요.',
      cloudDownHint: '아래 버튼을 눌러 Nous 포털(인스턴스 상태 및 제어)과 Discord 지원 채널을 열 수 있습니다.',
      cloudDownCheckPortal: '포털 상태 확인',
      cloudDownDiscord: 'Discord에서 도움받기',
      hideRecentLogs: '최근 로그 숨기기',
      showRecentLogs: '최근 로그 보기',
      signedInTitle: '로그인됨',
      signedInMessage: '원격 게이트웨이에 다시 연결하는 중…',
      signInIncompleteTitle: '로그인 미완료',
      signInIncompleteMessage: '인증이 완료되기 전에 로그인 창이 닫혔습니다.'
    }
  }
}
