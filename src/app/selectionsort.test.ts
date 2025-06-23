import { expect, test } from 'vitest'
import { selectionsort } from './selectionsort'

test('selection sort successfully sorts an array of small integers', () => {
    expect(selectionsort([4, 3, 2, 16, 1, 3, 15, 2, 15, 9])).toEqual([ 1, 2, 2, 3, 3, 4, 9, 15, 15, 16 ])
})