import type { ExploreTileLayoutId } from '../../types/exploreSyria'

/** Desktop 3×4 masonry (LTR column indices; RTL flips visually via `dir`) */
export const EXPLORE_TILE_LAYOUT: Record<ExploreTileLayoutId, { gridColumn: string; gridRow: string }> = {
  palmyra: { gridColumn: '1', gridRow: '1' },
  fortressNight: { gridColumn: '2', gridRow: '1' },
  emblem: { gridColumn: '3', gridRow: '1' },
  stainedGlass: { gridColumn: '1', gridRow: '2' },
  clockTower: { gridColumn: '2', gridRow: '2' },
  norias: { gridColumn: '3', gridRow: '2 / span 2' },
  street: { gridColumn: '1', gridRow: '3 / span 2' },
  hillFort: { gridColumn: '2', gridRow: '3' },
  souq: { gridColumn: '2', gridRow: '4' },
  interior: { gridColumn: '3', gridRow: '4' },
}
