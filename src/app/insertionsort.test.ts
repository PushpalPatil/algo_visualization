import { expect, test } from 'vitest'
import { insertionsort } from '@/lib/algorithms/insertionsort'

test('insertion sort successfully sorts an array of small integers', () => {
    expect(insertionsort([4, 3, 2, 16, 1, 3, 15, 2, 15, 9])).toEqual([1, 2, 2, 3, 3, 4, 9, 15, 15, 16])
})

test('insertion sort successfully returns undefined for empty array', () => {
    expect(insertionsort([])).toEqual(undefined)
})

test('insertion sort successfully returns the single element for a single element array', () => {
    expect(insertionsort([2])).toEqual([2])
})