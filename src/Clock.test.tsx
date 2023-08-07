import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { describe, expect, test } from '@jest/globals'
import Clock from './Clock'

describe('test the main application functions', () => {
  test('loads and displays greeting', async () => {
    // ARRANGE
    render(
      <Clock
        counting={false}
        elapsedTime={0}
        setElapsedTime={(arg: number) => { console.log(arg) }}
        toggleCounting={(arg: boolean) => { console.log(arg) }}
        currentFormattedTime={''}
      />
    )

    // ACT
    await screen.findByRole('heading')

    // ASSERT
    expect(screen.getByRole('heading')).toHaveTextContent('Pomodorino Timer')
  })
})
