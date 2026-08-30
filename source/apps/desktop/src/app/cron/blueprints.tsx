import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import type { AutomationBlueprint, AutomationBlueprintField } from '@/hermes'
import type { Locale } from '@/i18n'

// The blueprint catalog is shared with the dashboard, so its deliver slot
// defaults to "origin" (the chat/home-channel a dashboard or gateway job was
// created from). Desktop has no origin chat, so seed the deliver slot to the
// desktop's native target ("local" = This desktop) instead. The dialog then
// renders that slot with the shared DeliverSelect (backend-sourced targets), so
// the raw "origin" option never reaches the desktop UI.
const DELIVER_FIELD = 'deliver'
const DESKTOP_DELIVER_DEFAULT = 'local'

const KO_BLUEPRINTS: Record<string, { description: string; title: string }> = {
  'morning-brief': { title: '아침 브리핑', description: '오늘의 일정과 날씨, 긴급한 항목을 간단히 정리합니다.' },
  'important-mail': { title: '중요 메일 확인', description: '받은편지함을 주기적으로 확인하고 실제로 확인이 필요한 메일만 알려줍니다.' },
  'weekly-review': { title: '주간 검토', description: '완료한 일과 남은 일, 앞으로의 일정을 매주 정리합니다.' },
  'workday-start': { title: '업무 시작 알림', description: '평일 일정과 가장 중요한 우선순위를 간단히 알려줍니다.' },
  'custom-reminder': { title: '사용자 지정 알림', description: '원하는 내용과 일정으로 반복 알림을 만듭니다.' },
  'evening-winddown': { title: '저녁 마무리', description: '내일 일정과 오늘 밤 준비할 일을 하루 끝에 확인합니다.' },
  'news-digest': { title: '주제별 뉴스 요약', description: '관심 주제의 새로운 소식만 중복 없이 정기적으로 요약합니다.' },
  'bill-renewal-watch': { title: '청구 및 갱신 알림', description: '정기 결제, 구독 갱신 또는 납부일 전에 미리 알려줍니다.' },
  'price-watch': { title: '가격 및 재고 확인', description: '상품, 항공편, 호텔 또는 매물을 확인하고 조건을 충족하면 알려줍니다.' },
  'competitor-watch': { title: '경쟁사 소식 확인', description: '지정한 회사의 출시, 가격, 투자 및 공시 관련 주요 소식을 추적합니다.' },
  'habit-checkin': { title: '습관 점검', description: '습관을 꾸준히 이어가고 실천 여부를 돌아보도록 정기적으로 알려줍니다.' },
  'hydration-move': { title: '수분 섭취 및 움직임 알림', description: '낮 동안 물 마시기, 일어나기, 스트레칭을 주기적으로 알려줍니다.' },
  'meal-plan': { title: '주간 식단 계획', description: '식단 조건과 조리 가능 시간에 맞춰 주간 식단과 장보기 목록을 만듭니다.' },
  'learn-daily': { title: '매일 한 가지 학습', description: '배우고 싶은 주제를 매일 짧게, 단계적으로 학습합니다.' },
  'gratitude-journal': { title: '감사 및 회고', description: '하루를 돌아보고 좋았던 일을 기록하도록 저녁에 부드럽게 안내합니다.' },
  'on-this-day': { title: '오늘의 발견', description: '역사적 사건, 상식 또는 오늘의 단어를 매일 하나씩 소개합니다.' }
}

const KO_FIELD_LABELS: Record<string, string> = {
  time: '시간',
  deliver: '전달 대상',
  interval_min: '확인 주기',
  interval_h: '확인 주기',
  interval_hours: '알림 주기',
  criteria: '알림을 보낼 메일 조건',
  day: '요일',
  what: '알림 내용',
  recurrence: '반복 요일',
  topic: '주제',
  count: '항목 수',
  item: '확인할 대상',
  condition: '알림 조건',
  companies: '대상 회사',
  categories: '중요한 사건 유형',
  habit: '점검할 습관',
  start_hour: '시작 시간',
  end_hour: '종료 시간',
  diet: '식단',
  meals: '하루 식사 수',
  effort: '조리 난이도',
  flavor: '콘텐츠 종류'
}

const KO_FIELD_HELP: Record<string, string> = {
  time: '24시간제 현지 시각(예: 08:00)',
  interval_min: '확인 사이의 분 단위 간격',
  interval_h: '확인 사이의 시간 간격입니다. 서비스 요청 제한을 고려하세요.',
  interval_hours: '알림 사이의 시간 간격',
  topic: '주제, 제품, 인물 또는 검색어',
  item: 'URL 또는 옵션·날짜·판매자를 포함한 정확한 설명',
  condition: '통화를 포함한 기준 가격, 재고 여부 또는 조건 변경',
  companies: '정식 회사명과 도메인. 별칭을 함께 쓰면 중복 제거에 도움이 됩니다.',
  start_hour: '활성 시간대의 시작 시각(24시간제)',
  end_hour: '활성 시간대의 종료 시각(24시간제)'
}

const KO_OPTION_LABELS: Record<string, string> = {
  everyday: '매일', weekdays: '평일', weekends: '주말', sunday: '일요일', monday: '월요일',
  friday: '금요일', saturday: '토요일', 'no restrictions': '제한 없음', vegetarian: '채식', vegan: '비건',
  'high-protein': '고단백', 'low-carb': '저탄수화물', 'dinner only': '저녁만',
  'lunch and dinner': '점심과 저녁', 'all three': '세 끼 모두', quick: '간단', medium: '보통',
  ambitious: '정성 요리', 'on this day in history': '역사 속 오늘', 'word of the day': '오늘의 단어',
  'science fact': '과학 상식', 'quote of the day': '오늘의 명언'
}

export function localizeBlueprint(blueprint: AutomationBlueprint, locale: Locale): AutomationBlueprint {
  if (locale !== 'ko') return blueprint

  const copy = KO_BLUEPRINTS[blueprint.key]
  return {
    ...blueprint,
    title: copy?.title ?? blueprint.title,
    description: copy?.description ?? blueprint.description,
    fields: blueprint.fields.map(field => ({
      ...field,
      label: KO_FIELD_LABELS[field.name] ?? field.label,
      help: KO_FIELD_HELP[field.name] ?? field.help
    }))
  }
}

export function blueprintOptionLabel(option: string, locale: Locale): string {
  return locale === 'ko' ? (KO_OPTION_LABELS[option] ?? option) : option
}

function isDeliverField(field: AutomationBlueprintField): boolean {
  return field.name === DELIVER_FIELD
}

// Initial form state for a blueprint = each field's default (or ''). Pure so the
// suite can assert the form seeds correctly without mounting React. The deliver
// slot is special-cased: an "origin" default (or empty) becomes "local" so a
// desktop-created job delivers to This desktop instead of nowhere.
export function initialBlueprintValues(blueprint: AutomationBlueprint): Record<string, string> {
  const out: Record<string, string> = {}

  for (const field of blueprint.fields) {
    const seeded = field.default ?? ''
    out[field.name] = isDeliverField(field) && (seeded === '' || seeded === 'origin') ? DESKTOP_DELIVER_DEFAULT : seeded
  }

  return out
}

// A slot-level validation error from the backend arrives as "422: <message>"
// (or "<code>: <message>"); strip the leading numeric code for inline display.
export function cleanBlueprintFieldError(message: string): string {
  return message.replace(/^\d+:\s*/, '')
}

// Help text to show under a slot control. The backend deliver help is
// origin/dashboard-centric and even contradicts desktop semantics ("local =
// save only" vs. This desktop), and the DeliverSelect is self-explanatory —
// skip it for the deliver slot.
export function blueprintSlotHelp(field: AutomationBlueprintField): string | undefined {
  return field.help && field.type !== 'text' && !isDeliverField(field) ? field.help : undefined
}

// Renders one blueprint slot's control (enum/weekdays → Select, time → time
// input, else text). The deliver slot is handled separately by the dialog's
// shared DeliverSelect, so it's not rendered here.
export function BlueprintSlotControl({
  field,
  id,
  locale,
  onChange,
  value
}: {
  field: AutomationBlueprintField
  id: string
  locale: Locale
  onChange: (next: string) => void
  value: string
}) {
  if (field.type === 'enum' || field.type === 'weekdays') {
    return (
      <Select onValueChange={onChange} value={value}>
        <SelectTrigger className="h-9 rounded-md" id={id}>
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {field.options.map(option => (
            <SelectItem key={option} value={option}>
              {blueprintOptionLabel(option, locale)}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    )
  }

  if (field.type === 'time') {
    return <Input id={id} onChange={event => onChange(event.target.value)} type="time" value={value} />
  }

  return (
    <Input
      id={id}
      onChange={event => onChange(event.target.value)}
      placeholder={field.help || field.label}
      type="text"
      value={value}
    />
  )
}
