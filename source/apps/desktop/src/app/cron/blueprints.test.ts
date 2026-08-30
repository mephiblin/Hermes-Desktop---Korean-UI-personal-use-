import { describe, expect, it } from 'vitest'

import type { AutomationBlueprint } from '@/hermes'

import { blueprintOptionLabel, initialBlueprintValues, localizeBlueprint } from './blueprints'

function blueprint(fields: AutomationBlueprint['fields']): AutomationBlueprint {
  return {
    key: 'test',
    title: 'Test',
    description: '',
    category: 'general',
    tags: [],
    command: '',
    appUrl: '',
    fields
  }
}

describe('initialBlueprintValues', () => {
  it('seeds each field from its default', () => {
    const values = initialBlueprintValues(
      blueprint([
        { name: 'time', type: 'time', label: 'Time', default: '08:00', options: [], optional: false, help: '' },
        {
          name: 'topic',
          type: 'enum',
          label: 'Topic',
          default: 'news',
          options: ['news', 'sports'],
          optional: false,
          help: ''
        }
      ])
    )

    expect(values).toEqual({ time: '08:00', topic: 'news' })
  })

  it('falls back to an empty string when a field has no default', () => {
    const values = initialBlueprintValues(
      blueprint([{ name: 'topic', type: 'text', label: 'Topic', default: null, options: [], optional: true, help: '' }])
    )

    expect(values).toEqual({ topic: '' })
  })

  it('returns an empty object for a blueprint with no fields', () => {
    expect(initialBlueprintValues(blueprint([]))).toEqual({})
  })

  it("seeds the deliver slot to 'local' when its default is the dashboard-only 'origin'", () => {
    const values = initialBlueprintValues(
      blueprint([
        {
          name: 'deliver',
          type: 'enum',
          label: 'Deliver',
          default: 'origin',
          options: ['origin', 'local', 'telegram'],
          optional: false,
          help: ''
        }
      ])
    )

    expect(values).toEqual({ deliver: 'local' })
  })

  it("seeds the deliver slot to 'local' when it has no default", () => {
    const values = initialBlueprintValues(
      blueprint([
        {
          name: 'deliver',
          type: 'enum',
          label: 'Deliver',
          default: null,
          options: ['origin', 'local'],
          optional: false,
          help: ''
        }
      ])
    )

    expect(values).toEqual({ deliver: 'local' })
  })

  it('leaves a non-origin deliver default untouched', () => {
    const values = initialBlueprintValues(
      blueprint([
        {
          name: 'deliver',
          type: 'enum',
          label: 'Deliver',
          default: 'telegram',
          options: ['origin', 'local', 'telegram'],
          optional: false,
          help: ''
        }
      ])
    )

    expect(values).toEqual({ deliver: 'telegram' })
  })
})

describe('Korean blueprint display localization', () => {
  it('translates display copy without changing keys, defaults, or option values', () => {
    const source = blueprint([
      {
        name: 'recurrence',
        type: 'weekdays',
        label: 'Repeat on',
        default: 'weekdays',
        options: ['everyday', 'weekdays', 'weekends'],
        optional: false,
        help: ''
      }
    ])
    source.key = 'custom-reminder'
    source.title = 'Custom reminder'
    source.description = 'A recurring reminder.'

    const localized = localizeBlueprint(source, 'ko')

    expect(localized.key).toBe(source.key)
    expect(localized.title).toBe('사용자 지정 알림')
    expect(localized.fields[0].label).toBe('반복 요일')
    expect(localized.fields[0].default).toBe('weekdays')
    expect(localized.fields[0].options).toEqual(['everyday', 'weekdays', 'weekends'])
    expect(blueprintOptionLabel('weekdays', 'ko')).toBe('평일')
    expect(blueprintOptionLabel('weekdays', 'en')).toBe('weekdays')
  })
})
