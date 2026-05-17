import type { HomeExploreContent } from '../../types/homeExplore'
import { CategoryFeatureRail } from './CategoryFeatureRail'
import { DiscoverSyriaBanner } from './DiscoverSyriaBanner'

type HomeDiscoverSectionProps = {
  content: HomeExploreContent
  categoriesNavLabel: string
}

export function HomeDiscoverSection({ content, categoriesNavLabel }: HomeDiscoverSectionProps) {
  return (
    <div>
      <CategoryFeatureRail items={content.categories} ariaLabel={categoriesNavLabel} />
      <DiscoverSyriaBanner banner={content.banner} />
    </div>
  )
}
