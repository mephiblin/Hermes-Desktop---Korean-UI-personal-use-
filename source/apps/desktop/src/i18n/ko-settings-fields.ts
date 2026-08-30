import { defineFieldCopy } from '@/app/settings/field-copy'

export const KO_FIELD_LABELS: Record<string, string> = defineFieldCopy({
  model: '기본 모델',
  modelContextLength: '컨텍스트 윈도우',
  fallbackProviders: '폴백 모델',
  toolsets: '활성화된 툴셋',
  timezone: '타임존',
  display: {
    personality: '성격',
    showReasoning: '추론 블록 표시'
  },
  desktop: {
    repoScanEnabled: '자동 리포지토리 검색',
    repoScanRoots: '리포지토리 검색 루트',
    repoScanExcludePaths: '제외할 리포지토리 경로'
  },
  agent: {
    maxTurns: '에이전트 단계 수',
    imageInputMode: '이미지 첨부',
    apiMaxRetries: 'API 재시도',
    serviceTier: '서비스 티어',
    toolUseEnforcement: '툴 사용 강제'
  },
  terminal: {
    cwd: '작업 디렉토리',
    backend: '실행 백엔드',
    timeout: '명령어 타임아웃',
    persistentShell: '지속적 셸',
    envPassthrough: '환경 변수 전달',
    dockerImage: 'Docker 이미지',
    singularityImage: 'Singularity 이미지',
    modalImage: 'Modal 이미지',
    daytonaImage: 'Daytona 이미지'
  },
  fileReadMaxChars: '파일 읽기 제한',
  toolOutput: {
    maxBytes: '터미널 출력 제한',
    maxLines: '파일 페이지 제한',
    maxLineLength: '줄 길이 제한'
  },
  codeExecution: {
    mode: '코드 실행 모드'
  },
  approvals: {
    mode: '승인 모드',
    timeout: '승인 타임아웃',
    mcpReloadConfirm: 'MCP 리로드 확인'
  },
  commandAllowlist: '명령어 허용 목록',
  security: {
    redactSecrets: '비밀번호 숨기기',
    allowPrivateUrls: '프라이빗 URL 허용'
  },
  browser: {
    allowPrivateUrls: '브라우저 프라이빗 URL',
    autoLocalForPrivateUrls: '프라이빗 URL용 로컬 브라우저',
    useRealProfile: '내 실제 브라우저 프로필 사용'
  },
  checkpoints: {
    enabled: '파일 체크포인트',
    maxSnapshots: '체크포인트 제한'
  },
  voice: {
    recordKey: '음성 단축키',
    maxRecordingSeconds: '최대 녹음 시간',
    autoTts: '응답 읽어주기'
  },
  stt: {
    enabled: '음성 인식',
    echoTranscripts: '전사본 에코',
    provider: '음성-텍스트 공급자',
    local: {
      model: '로컬 전사 모델',
      language: '전사 언어'
    },
    openai: {
      model: 'OpenAI STT 모델'
    },
    groq: {
      model: 'Groq STT 모델'
    },
    mistral: {
      model: 'Mistral STT 모델'
    },
    elevenlabs: {
      modelId: 'ElevenLabs STT 모델',
      languageCode: 'ElevenLabs 언어',
      tagAudioEvents: '오디오 이벤트 태그',
      diarize: '화자 분리'
    }
  },
  tts: {
    provider: '텍스트-음성 공급자',
    edge: {
      voice: 'Edge 음성'
    },
    openai: {
      model: 'OpenAI TTS 모델',
      voice: 'OpenAI 음성'
    },
    elevenlabs: {
      voiceId: 'ElevenLabs 음성',
      modelId: 'ElevenLabs 모델'
    },
    xai: {
      voiceId: 'xAI (Grok) 음성',
      language: 'xAI 언어',
      speed: 'xAI 재생 속도',
      autoSpeechTags: 'xAI 자동 음성 태그',
      optimizeStreamingLatency: 'xAI 스트리밍 지연 최적화',
      sampleRate: 'xAI 샘플 레이트',
      bitRate: 'xAI 비트 레이트'
    },
    minimax: {
      model: 'MiniMax TTS 모델',
      voiceId: 'MiniMax 음성'
    },
    mistral: {
      model: 'Mistral TTS 모델',
      voiceId: 'Mistral 음성'
    },
    gemini: {
      model: 'Gemini TTS 모델',
      voice: 'Gemini 음성'
    },
    neutts: {
      model: 'NeuTTS 모델',
      device: 'NeuTTS 디바이스'
    },
    kittentts: {
      model: 'KittenTTS 모델',
      voice: 'KittenTTS 음성'
    },
    piper: {
      voice: 'Piper 음성'
    },
    deepinfra: {
      model: 'DeepInfra TTS 모델',
      voice: 'DeepInfra 음성'
    }
  },
  memory: {
    memoryEnabled: '지속적 메모리',
    userProfileEnabled: '사용자 프로필',
    memoryCharLimit: '메모리 예산',
    userCharLimit: '프로필 예산',
    provider: '메모리 공급자'
  },
  context: {
    engine: '컨텍스트 엔진'
  },
  compression: {
    enabled: '자동 압축',
    threshold: '압축 임계값',
    targetRatio: '압축 목표 비율',
    protectLastN: '보호할 최근 메시지 수'
  },
  delegation: {
    model: '서브에이전트 모델',
    provider: '서브에이전트 공급자',
    maxIterations: '서브에이전트 턴 제한',
    maxConcurrentChildren: '병렬 서브에이전트',
    childTimeoutSeconds: '서브에이전트 타임아웃',
    reasoningEffort: '서브에이전트 추론 노력'
  },
  updates: {
    nonInteractiveLocalChanges:
      'Hermes가 앱에서 자동 업데이트될 때 로컬 소스 수정을 임시 보관할지 폐기할지 정합니다. 터미널 업데이트에서는 항상 확인합니다.'
  }
})

export const KO_FIELD_DESCRIPTIONS: Record<string, string> = defineFieldCopy({
  model: '새로운 채팅에 사용되며 입력창에서 다른 모델을 선택하지 않는 한 사용됩니다.',
  modelContextLength: "선택한 모델의 감지된 컨텍스트 창을 사용하려면 0으로 두세요.",
  fallbackProviders: '기본 모델이 실패할 경우 시도할 예비 공급자:모델 항목입니다.',
  display: {
    personality: '새 세션에 대한 기본 어시스턴트 스타일.',
    showReasoning: '백엔드가 제공하는 경우 추론 섹션을 표시합니다.'
  },
  desktop: {
    repoScanEnabled: '프로젝트에 표시하기 위해 로컬 폴더를 Git 리포지토리로 스캔합니다.',
    repoScanRoots: '스캔할 폴더입니다. 비워두면 홈 디렉터리를 스캔합니다.',
    repoScanExcludePaths: '리포지토리 검색에서 제외할 폴더와 그 하위 폴더입니다.'
  },
  timezone: 'IANA 타임존 식별자. 비어있으면 시스템 타임존을 사용합니다.',
  browser: {
    useRealProfile:
      "로컬 브라우징은 실제 로그인을 사용합니다. Hermes는 기본 브라우저의 프로필(쿠키, 로그인, 설정)을 관리된 스냅샷에 복사하고 패키지된 Chromium으로 제어합니다 — 실제 프로필은 절대 직접 열리지 않으며, 클라우드 브라우저 백엔드가 구성된 경우에도 요청 시 실제 프로필 세션을 열 수 있습니다. 기본 브라우저가 Chromium이 아닌 경우(Chrome, Edge, Brave, Chromium만 지원) 명확한 메시지와 함께 실패합니다. 기본적으로 꺼져 있습니다."
  },
  agent: {
    imageInputMode: '이미지 첨부가 모델에 전송되는 방식을 제어합니다.',
    maxTurns: 'Hermes가 실행을 멈추기 전까지 허용할 도구 호출 턴의 상한입니다.'
  },
  terminal: {
    cwd: '도구 및 터미널 작업에 대한 기본 프로젝트 폴더입니다.',
    persistentShell: '백엔드가 지원하는 경우 명령 간에 셸 상태를 유지합니다.',
    envPassthrough: '도구 실행에 전달할 환경 변수입니다.',
    dockerImage: '실행 백엔드가 Docker인 경우 사용되는 컨테이너 이미지입니다.',
    singularityImage: '실행 백엔드가 Singularity인 경우 사용되는 이미지입니다.',
    modalImage: '실행 백엔드가 Modal인 경우 사용되는 이미지입니다.',
    daytonaImage: '실행 백엔드가 Daytona인 경우 사용되는 이미지입니다.'
  },
  codeExecution: {
    mode: '현재 프로젝트에 대한 코드 실행 범위를 얼마나 엄격하게 제어하는지.'
  },
  fileReadMaxChars: 'Hermes가 한 파일 요청에서 읽을 수 있는 최대 문자 수입니다.',
  approvals: {
    mode: 'Hermes가 명시적 승인이 필요한 명령을 처리하는 방식입니다.',
    timeout: '승인 프롬프트가 시간 초과되기까지 지속되는 시간입니다.'
  },
  security: {
    redactSecrets: '가능한 경우 감지된 비밀을 모델이 볼 수 있는 콘텐츠에서 숨깁니다.'
  },
  checkpoints: {
    enabled: '파일 편집 전 롤백 스냅샷을 생성합니다.'
  },
  memory: {
    memoryEnabled: '미래 세션에 도움이 될 내구성 있는 메모리를 저장합니다.',
    userProfileEnabled: '사용자 선호도의 컴팩트한 프로필을 유지합니다.'
  },
  context: {
    engine: '컨텍스트 제한이 가까워질 때 장기 대화를 관리하는 전략입니다.'
  },
  compression: {
    enabled: '대화가 커질 때 오래된 컨텍스트를 요약합니다.'
  },
  voice: {
    autoTts: '어시스턴트 응답을 자동으로 음성으로 읽습니다.'
  },
  tts: {
    xai: {
      voiceId: 'xAI 음성 ID(예: eve) 또는 사용자 정의 음성 ID.',
      language: '음성 인식 언어 코드(예: en, pt-BR) 또는 "auto"로 자동 감지.',
      speed: '재생 속도. 0.7 = 느림, 1.0 = 일반, 1.5 = 빠름.',
      autoSpeechTags: 'LLM이 합성 전에 스크립트에 표현력 있는 오디오 태그([laughing], [sighs])를 삽입하도록 허용.',
      optimizeStreamingLatency: '지연 vs. 품질 트레이드오프. 0 = 최고 품질, 2 = 최저 지연.',
      sampleRate: '오디오 샘플 레이트(Hz). 높을수록 품질이 좋고 파일 크기가 커집니다.',
      bitRate: 'MP3 비트레이트(bps). 코덱이 mp3인 경우에만 적용됩니다.'
    },
    neutts: {
      device: 'NeuTTS를 위한 로컬 추론 장치.'
    }
  },
  stt: {
    enabled: '로컬 또는 제공자 기반 음성 전사를 사용하도록 활성화합니다.',
    echoTranscripts: '음성 메시지의 원시 🎙️ 전사를 채팅에 다시 게시합니다.',
    elevenlabs: {
      languageCode: '선택적 ISO-639-3 언어 코드. 비어있으면 ElevenLabs가 자동 감지합니다.'
    }
  },
  updates: {
    nonInteractiveLocalChanges:
      'Hermes가 앱 자체(터미널 프롬프트 없이)로 자체 업데이트를 진행할 때 로컬 소스 수정 사항을 임시 보관하거나 폐기합니다. 터미널 업데이트는 항상 묻습니다.'
  }
})

