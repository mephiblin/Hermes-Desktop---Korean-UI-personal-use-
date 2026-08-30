const KO_SLASH_DESCRIPTIONS: Record<string, string> = {
  '/new': '새 데스크톱 대화를 시작합니다.',
  '/branch': '최근 메시지에서 새 대화를 분기합니다.',
  '/yolo': '위험한 명령을 자동 승인하는 YOLO 모드를 전환합니다.',
  '/wake': '데스크톱 호출어 감지를 제어합니다 [on|off|status].',
  '/handoff': '현재 세션을 메시징 플랫폼으로 넘깁니다.',
  '/profile': '활성 Hermes 프로필을 전환합니다.',
  '/skin': '데스크톱 테마를 바꾸거나 다음 테마로 전환합니다.',
  '/title': '현재 세션의 이름을 변경합니다.',
  '/help': '데스크톱 슬래시 명령 목록을 표시합니다.',
  '/browser': '브라우저 CDP 연결을 관리합니다 [connect|disconnect|status]. 로컬 게이트웨이 전용입니다.',
  '/journey': '시간에 따른 Skill과 메모리를 보여주는 메모리 그래프를 엽니다.',
  '/model': '이 세션에서 사용할 모델을 전환합니다.',
  '/resume': '저장된 세션을 다시 시작합니다.',
  '/approvals': '승인 모드를 확인하거나 설정합니다 [manual|smart|off].',
  '/agents': '활성 데스크톱 세션과 실행 중인 작업을 표시합니다.',
  '/background': '프롬프트를 백그라운드에서 실행합니다.',
  '/compress': '현재 대화의 컨텍스트를 압축합니다.',
  '/debug': '디버그 보고서를 생성합니다.',
  '/goal': '이 세션의 지속 목표를 관리합니다.',
  '/loop': '이 세션에서 프롬프트를 일정 간격으로 반복 실행합니다.',
  '/personality': '이 세션의 성격을 전환합니다.',
  '/pet': 'petdex 마스코트를 켜거나 입양합니다.',
  '/hatch': '반려동물 생성기를 열어 새 반려동물을 만듭니다.',
  '/queue': '다음 턴에 실행할 프롬프트를 대기열에 넣습니다.',
  '/retry': '마지막 사용자 메시지를 다시 시도합니다.',
  '/rollback': '파일 시스템 체크포인트를 확인하거나 복원합니다.',
  '/save': '현재 대화 기록을 JSON으로 저장합니다.',
  '/status': '현재 세션 상태를 표시합니다.',
  '/steer': '다음 도구 호출 뒤에 현재 실행 방향을 조정할 메시지를 전달합니다.',
  '/stop': '실행 중인 백그라운드 프로세스를 중지합니다.',
  '/tools': '에이전트가 사용할 수 있는 도구를 확인하거나 전환합니다.',
  '/undo': '마지막 사용자·어시스턴트 대화 한 쌍을 제거합니다.',
  '/usage': '이 세션의 토큰 사용량을 표시합니다.',
  '/version': 'Hermes Agent 버전을 표시합니다.'
}

const KO_SLASH_GROUPS: Record<string, string> = {
  Commands: '명령',
  Configuration: '설정',
  Info: '정보',
  Model: '모델',
  Options: '옵션',
  Session: '세션',
  Sessions: '세션',
  Skills: 'Skill',
  Themes: '테마',
  'Tools & Skills': '도구 및 Skill'
}

export function koreanSlashDescription(command: string, fallback: string): string {
  const normalized = command.trim().split(/\s+/, 1)[0]?.toLowerCase() || ''

  return KO_SLASH_DESCRIPTIONS[normalized] || fallback
}

export function koreanSlashGroup(group: string): string {
  return KO_SLASH_GROUPS[group.trim()] || group
}
