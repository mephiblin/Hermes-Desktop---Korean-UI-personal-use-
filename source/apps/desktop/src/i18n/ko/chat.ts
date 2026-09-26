// @ts-nocheck
export const chatKo = {
  statusStack: {
    hideStack: '상태 스택 숨기기',
    showStack: '상태 스택 표시',
    agents: '에이전트',
    background: (count: number) => `백그라운드 ${count}개`,
    goalActive: '목표 진행 중',
    goalBlocked: '목표 차단됨',
    goalDone: '목표 완료',
    goalPaused: '목표 일시 중지',
    goalWaiting: '목표 대기 중',
    subagents: (count: number) => `서브 에이전트 ${count}개`,
    todos: (done: number, total: number) => `작업 ${done}/${total}`,
    running: '실행 중',
    stop: '중지',
    dismiss: '닫기',
    exit: (code: number) => `종료 코드 ${code}`,
    cron: (count: number) => `예약 작업 ${count}개`,
    activeRuns: (count: number) => `실행 중인 작업 ${count}개`,
    empty: '실행 중인 백그라운드 작업이 없습니다.',
    control: {
      goalActiveTurns: (turn: number, maxTurns: number) => `턴 ${turn}/${maxTurns}`,
      goalDoneTurns: (turns: number) => `${turns}턴`,
      goalTurn: (turn: number) => `${turn}턴`,
      goalActions: '목표 작업',
      viewDetails: '상세 정보 보기',
      addCriterion: '기준 추가',
      addCriterionDialogTitle: '기준 추가',
      addCriterionPlaceholder: '기준 입력...',
      criterionLabel: '기준',
      pauseGoal: '목표 일시 중지',
      resumeGoal: '목표 재개',
      resumeNow: '지금 재개',
      clearGoal: '목표 지우기',
      clearGoalConfirmTitle: '목표를 지울까요?',
      clearGoalConfirmBody: '진행 중인 목표를 지울까요? 이 작업은 취소할 수 없습니다.',
      copyCriterion: (index: number) => `기준 ${index} 복사`,
      removeCriterion: (index: number) => `기준 ${index} 삭제`,
      removeCriterionConfirmTitle: (index: number) => `기준 ${index}을(를) 삭제할까요?`,
      removeCriterionConfirmBody: (index: number) => `기준 ${index}을(를) 삭제하시겠습니까?`,
      clearCriteria: '모든 기준 지우기',
      clearCriteriaConfirmTitle: '모든 기준을 지울까요?',
      clearCriteriaConfirmBody: '이 목표의 모든 기준을 삭제하시겠습니까?',
      criteriaHeader: (count: number) => `기준 · ${count}`,
      noCriteria: '기준 없음',
      goalDetailsTitle: '목표 상세 정보',
      objectiveLabel: '목표',
      contractOutcome: '결과',
      contractVerification: '검증',
      contractConstraints: '제약 조건',
      contractBoundaries: '경계',
      contractStopWhen: '종료 조건',
      waitBarrierTitle: '대기 조건',
      waitUntil: (target: string) => `${target}까지 대기`,
      waitSession: (target: string) => `세션 ${target} 대기 중`,
      waitPid: (pid: number) => `프로세스 ${pid} 대기 중`,
      qualityGatesTitle: '품질 게이트',
      gateCommand: '명령어',
      gateAttempts: (attempts: number, max: number) => `시도 ${attempts}/${max}`,
      gateTimeout: (seconds: number) => `제한 시간 ${seconds}초`,
      gateLastExit: (code: number | null) => (code === null ? '대기 중' : `종료 코드: ${code}`),
      loopActive: '루프 실행 중',
      loopPaused: '루프 일시 중지',
      loopDeferred: '루프 대기 중',
      loopFinished: '루프 완료',
      loopRuns: (runs: number) => `${runs}회 실행`,
      loopRunCount: (current: number, total: number) => `실행 ${current}/${total}`,
      loopNext: (time: string) => `다음 실행: ${time}`,
      loopEverySeconds: (seconds: number) => `${seconds}초마다`,
      loopEveryMinutes: (minutes: number) => `${minutes}분마다`,
      loopEveryHours: (hours: number) => `${hours}시간마다`,
      loopSelfPaced: '자율 진행',
      loopActions: '루프 작업',
      pauseLoop: '루프 일시 중지',
      resumeLoop: '루프 재개',
      stopLoop: '루프 중지',
      stopLoopConfirmTitle: '루프를 중지할까요?',
      stopLoopConfirmBody: '이 루프를 중지하시겠습니까?',
      dismissLoop: '루프 닫기',
      loopPromptLabel: '프롬프트',
      loopCadenceLabel: '주기',
      loopUntilLabel: '종료 조건',
      loopDeferredNotice: '현재 활성 목표가 세션을 제어하고 있습니다.',
      loopAwaitingResponse: '응답 대기 중',
      heartbeatActive: '하트비트 실행 중',
      heartbeatPaused: '하트비트 일시 중지',
      heartbeatEveryMinutes: (minutes: number) => `${minutes}분마다`,
      heartbeatEveryHours: (hours: number) => `${hours}시간마다`,
      heartbeatEverySeconds: (seconds: number) => `${seconds}초마다`,
      heartbeatNext: (time: string) => `다음 하트비트: ${time}`,
      heartbeatDueWaitingForIdle: '예정됨 — 유휴 상태 대기',
      heartbeatActions: '하트비트 작업',
      pauseHeartbeat: '하트비트 일시 중지',
      resumeHeartbeat: '하트비트 재개',
      clearHeartbeat: '하트비트 지우기',
      clearHeartbeatConfirmTitle: '하트비트를 지울까요?',
      clearHeartbeatConfirmBody: '이 하트비트를 삭제하시겠습니까?',
      heartbeatFiredCount: (count: number) => `${count}회 트리거됨`,
      actionFailed: (msg: string) => `작업 실패: ${msg}`,
      actionSucceeded: '작업 완료',
      copySuccess: '기준을 클립보드에 복사했습니다',
      copyFailure: '기준 복사 실패',
      continuationFailed: '목표 지속 전송 실패',
      continuationQueued: '목표를 재개했습니다 — 현재 턴 완료 후 전송됩니다',
      continuationBusy: '목표를 재개했습니다 — 세션이 실행 중입니다. 먼저 현재 응답을 중지하세요.',
      controlUnavailable: (msg: string) => `세션 제어 불가: ${msg}`,
      dismissError: '오류 닫기',
      add: '추가'
    },
    coding: {
      title: '작업 트리',
      noBranch: '브랜치 없음',
      detached: '분리됨 (Detached)',
      clean: '변경 없음 (Clean)',
      changed: (count: number) => `${count}개 변경됨`,
      ahead: (count: number) => `${count}개 앞섬`,
      behind: (count: number) => `${count}개 뒤처짐`,
      review: '검토',
      close: '닫기',
      openChanges: '변경 사항 열기',
      openFile: '파일 열기',
      stage: '스테이징',
      unstage: '스테이징 취소',
      stageAll: '모두 스테이징',
      viewAsTree: '트리 보기',
      viewAsList: '목록 보기',
      revert: '되돌리기',
      revertAll: '모두 되돌리기',
      revertConfirm: '이 파일의 변경 사항을 버리고 커밋된 상태로 되돌릴까요? 이 작업은 취소할 수 없습니다.',
      revertAllConfirm: '모든 변경 사항을 버리고 커밋된 상태로 되돌릴까요? 이 작업은 취소할 수 없습니다.',
      staged: '스테이징됨',
      noChanges: '변경 사항 없음',
      notRepo: 'Git 저장소가 아닙니다',
      noDiff: '표시할 변경 사항이 없습니다',
      scopeUncommitted: '커밋되지 않음',
      scopeBranch: '브랜치',
      scopeLastTurn: '이전 턴',
      commit: '커밋',
      commitAndPush: '커밋 및 푸시',
      commitPlaceholder: (shortcut: string) => `메시지 (${shortcut} 로 커밋)`,
      generateCommitMessage: '커밋 메시지 자동 생성',
      stopGenerating: '생성 중지',
      createPr: 'PR 생성',
      openPr: 'PR 열기',
      ghMissing: 'PR을 열려면 GitHub CLI(gh)를 설치하고 로그인하세요',
      agentShip: 'Hermes에게 커밋 및 PR 위임',
      agentShipUnavailable: '이 변경 사항을 포함하는 채팅이 화면에 없습니다.',
      agentShipPrompt: '현재 변경 사항을 검토하고 Conventional Commits 규칙에 맞게 커밋한 후 브랜치를 푸시하고 풀 리퀘스트를 생성하세요.',
      newBranch: '새 브랜치',
      branchOffFrom: (base: string) => `${base}에서 새 브랜치 생성`,
      switchTo: (branch: string) => `${branch} 브랜치로 전환`,
      switchFailed: (branch: string) => `${branch} 브랜치 전환 실패`,
      worktrees: '워크트리'
    }
  },

  webhooks: {
    search: '웹훅 검색...',
    loading: '웹훅 불러오는 중...',
    loadFailed: '웹훅을 불러오지 못했습니다',
    subscriptions: (count: number) => `구독 (${count})`,
    hint: '수신기가 실행되면 구독 변경 사항이 즉시 반영됩니다. 비활성화된 구독은 수신 이벤트를 거부합니다.',
    empty: '아직 등록된 웹훅 구독이 없습니다.',
    disabledTitle: '웹훅 수신기 비활성화됨',
    disabledBody: '웹훅은 자체 게이트웨이 플랫폼입니다. 들어오는 HTTP 이벤트를 허용하려면 여기서 활성화하세요. Telegram, Discord, Slack 등으로 전달할 때만 채팅 채널이 필요합니다.',
    enable: '웹훅 활성화',
    enabling: '활성화 중...',
    enabled: (name: string) => `활성화됨: "${name}"`,
    disabled: (name: string) => `비활성화됨: "${name}"`,
    enableRow: '켜기',
    disableRow: '끄기',
    delete: '삭제',
    deleting: '삭제 중...',
    deleted: '웹훅 삭제됨',
    deleteTitle: '웹훅 삭제',
    deleteDescPrefix: '다음을 영구적으로 삭제합니다: ',
    deleteDescSuffix: '. 이 작업은 되돌릴 수 없습니다.',
    deleteFailed: (name: string) => `"${name}" 삭제 실패`,
    toggleFailed: (name: string, enabled: boolean) => `"${name}"을(를) ${enabled ? '켜는' : '끄는'} 데 실패했습니다`,
    newSubscription: '새 구독',
    restarting: '게이트웨이 재시작 중...',
    restartNeeded: '웹훅이 활성화되었으나 수신기를 시작하려면 게이트웨이를 재시작해야 합니다.',
    restartGateway: '게이트웨이 재시작',
    restartingGateway: '재시작 중...',
    restartFailed: (detail: string) => `게이트웨이 재시작 실패${detail}`,
    enabledRestarting: '웹훅 활성화됨, 게이트웨이 재시작 중...',
    all: '(전체)',
    deliverOnly: '페이로드만 전달',
    createdTitle: '구독 생성됨',
    createdSecretHint: '비밀키는 지금만 표시되므로 즉시 복사하세요.',
    webhookUrl: '웹훅 URL',
    secretOnce: '비밀키 (최초 1회만 표시)',
    done: '완료',
    fieldName: '이름',
    fieldNamePlaceholder: '예: github-push',
    fieldDescription: '설명',
    fieldDescriptionPlaceholder: '웹훅 역할 설명 (선택 사항)',
    fieldEvents: '이벤트',
    fieldEventsPlaceholder: '쉼표로 구분, 비워두면 전체',
    fieldSkills: '스킬',
    fieldSkillsPlaceholder: '쉼표로 구분된 스킬 이름 (선택 사항)',
    fieldDeliver: '전달 대상',
    fieldDeliverOnly: '페이로드만 전달',
    fieldPrompt: '프롬프트',
    fieldPromptPlaceholder: '웹훅 발생 시 에이전트 지침 (선택 사항)',
    nameRequired: '이름은 필수 항목입니다',
    create: '생성',
    creating: '생성 중...',
    created: '생성 완료',
    createFailed: (detail: string) => `생성 실패: ${detail}`,
    copy: '복사',
    deliverOptions: {
      log: '로그',
      telegram: 'Telegram',
      discord: 'Discord',
      slack: 'Slack',
      email: '이메일',
      github_comment: 'GitHub 코멘트'
    }
  },

  desktop: {
    audioReadFailed: '녹음된 오디오를 읽을 수 없습니다',
    sessionUnavailable: '세션을 사용할 수 없습니다',
    createSessionFailed: '새 세션을 생성하지 못했습니다',
    promptFailed: '프롬프트 전송 실패',
    staleSessionTitle: '채팅이 최신 상태가 아님',
    staleSessionBody: '동일한 채팅의 다른 화면보다 이전 상태였습니다. 최신 메시지를 불러왔습니다. 원하시면 다시 전송하세요.',
    providerCredentialRequired: '첫 메시지를 보내기 전에 공급자 자격 증명을 추가하세요.',
    emptySlashCommand: '비어 있는 슬래시 명령어',
    desktopCommands: '데스크톱 명령어',
    skillCommandsAvailable: (count: number) => `${count}개의 스킬 명령어를 사용할 수 있습니다.`
  },

  sidebar: {
    filter: {
      grouping: '그룹화',
      ordering: '정렬 순서',
      show: '표시',
      filters: '필터',
      status: '상태'
    }
  },

  composer: {
    stopDictation: '음성 받아쓰기 중지',
    transcribingDictation: '음성 텍스트 변환 중',
    voiceControls: '음성',
    voiceEngine: '음성 대화 엔진',
    voiceEngineChained: '음성 인식 + Hermes 음성'
  },

  assistant: {
    thread: {
      loadingLocalModel: (model: string) => `${model} 모델을 메모리에 로드하는 중`,
      processingPrompt: '프롬프트 처리 중',
      errorLayerBodies: {
        auth: 'AI 서비스에서 로그인을 거부했습니다. 이 공급자의 자격 증명을 확인한 후 메시지를 다시 보내세요.',
        billing: '이 공급자에 사용할 크레딧이 부족합니다. 크레딧을 충전하거나 공급자를 전환한 후 다시 보내세요.',
        disk: '디스크 공간이 부족하여 대화를 저장하지 못했습니다. 여유 공간을 확보한 후 다시 시도하세요.'
      }
    }
  },

  shell: {
    modelMenu: {
      followDefault: '설정 기본값 사용'
    },
    modelOptions: {
      sendsOnRoute: (level: string) => `이 경로에서 ${level} 전송`
    },
    statusbar: {
      unknown: '알 수 없음',
      restart: '재시작',
      update: '업데이트'
    }
  },

  preview: {
    linkHint: '미리보기 창을 열려면 ⌘/Ctrl-클릭',
    sourceLineTitle: '클릭하여 선택 · Shift-클릭하여 확장 · 드래그하여 컴포저에 추가',
    binaryTitle: '바이너리 파일로 보입니다',
    binaryBody: (label: string) => `${label} 미리보기 시 읽을 수 없는 텍스트가 표시될 수 있습니다.`,
    largeTitle: '파일 크기가 큽니다'
  },

  notifications: {
    sharedProfileWarning: '다른 Hermes 설치본이 이 프로필을 사용 중입니다. 두 설치본이 설정과 데이터를 공유하므로 충돌이 발생할 수 있습니다. 계속하거나 다른 설치본을 닫으세요.',
    compressDeferredDone: '컨텍스트 압축 완료',
    desktopOutOfDateTitle: 'Hermes 앱 버전 만료',
    desktopOutOfDateMessage: '이 Hermes 앱이 연결된 백엔드보다 구버전이어서 정상 작동하지 않을 수 있습니다. 앱을 업데이트하세요.',
    updateDesktopApp: '앱 업데이트'
  },

  connectorsPage: {
    page: {
      matchesElsewhere: (count: number) => `다른 그룹에 ${count}개 결과가 더 있습니다.`,
      segmentNoMatch: (segment: string) => `${segment}에 일치하는 항목이 없어 모든 결과를 표시합니다.`,
      freeTierNote: '로그인하기 전까지 연결은 이 컴퓨터에 유지됩니다.',
      signInLine: '관리형 앱을 사용하려면 Nous에 로그인하세요.',
      disconnectNoAccount: '연결을 해제할 계정이 없습니다. 페이지를 새로고침하고 다시 시도하세요.'
    }
  },

  agents: {
    extendedTranscript: '전체 로그',
    transcriptTruncated: '최근 16 KiB 표시 중',
    transcriptUnavailable: '실시간 로그 사용 불가',
    moreFiles: (count: number) => `+${count}개 파일 더보기`,
    moreAgents: (count: number) => `+${count}개 에이전트 더보기`,
    queued: '대기열에 추가됨',
    waitingActivity: '작업 대기 중',
    steer: '지시하기',
    steerPlaceholder: '이 서브 에이전트를 위한 지침',
    steerQueued: '다음 체크포인트에 반영 대기 중'
  },

  profiles: {
    fleet: {
      localDevice: '이 기기 (로컬 백엔드 — Hermes가 없으면 설치하고, 있으면 새 세션을 엽니다)',
      switchDeviceTitle: '이 기기로 전환할까요?',
      switchDeviceDesc: '이 컴퓨터에서 새 세션을 시작합니다. 현재 대화는 이전 게이트웨이에 유지됩니다.',
      switchDeviceConfirm: '전환',
      installDeviceTitle: '이 기기로 전환할까요?',
      installDeviceDesc: 'Hermes를 로컬에 설치한 후 이 컴퓨터에서 새 세션을 시작합니다. 확인하기 전까지는 설치되지 않습니다.',
      installDeviceConfirm: '로컬에 설치',
      connectExistingInstead: '대신 기존 게이트웨이에 연결'
    },
    status: {
      unread: (count: number) => (count === 1 ? '읽지 않은 세션 1개' : `읽지 않은 세션 ${count}개`),
      needsInput: (count: number) => (count === 1 ? '응답이 필요한 세션 1개' : `응답이 필요한 세션 ${count}개`)
    }
  },

  rightSidebar: {
    remotePickerNewFolder: '새 폴더',
    remotePickerFolderName: '폴더 이름',
    remotePickerCreateFolder: '폴더 생성',
    remotePickerInvalidFolderName: '슬래시(/) 없이 단일 폴더 이름을 입력하세요.',
    remotePickerCreateFolderFailed: (error: string) => `폴더를 생성하지 못했습니다 (${error}).`,
    folderTip: (cwd: string) => cwd,
    showIgnored: 'gitignored 파일 표시',
    hideIgnored: 'gitignored 파일 숨기기',
    previewUnavailable: '미리보기를 사용할 수 없습니다',
    couldNotPreview: (path: string) => `${path} 미리보기에 실패했습니다`
  },

  commandCenter: {
    nav: {
      capabilities: {
        title: '기능 및 확장',
        detail: '스킬, 도구, MCP 서버 및 플러그인'
      }
    },
    sharedGatewayRestartTitle: '공유 게이트웨이를 재시작할까요?',
    sharedGatewayRestartDescription: (bots: string) => `이 기기의 모든 봇이 재연결됩니다: ${bots}`,
    sharedGatewayRestartConfirm: '모두 재시작',
    sharedGatewayRestarted: (count: number) => `공유 게이트웨이가 재시작되었습니다 (${count}개 봇)`
  }
}
