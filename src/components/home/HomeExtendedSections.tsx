import { useEffect, useState } from 'react'
import type { AppLocale } from '../../types/homeContent'
import type { HomeExtendedSectionsContent } from '../../types/homeExtendedSections'
import { getHomeExtendedSectionsContent } from '../../services/homeExtendedSectionsService'
import { StoryVideoSection } from './StoryVideoSection'
import { NewProductsSection } from './NewProductsSection'
import { AsalaHomeFooter } from './AsalaHomeFooter'

type HomeExtendedSectionsProps = {
  locale: AppLocale
}

export function HomeExtendedSections({ locale }: HomeExtendedSectionsProps) {
  const [content, setContent] = useState<HomeExtendedSectionsContent | null>(null)

  useEffect(() => {
    let cancelled = false
    setContent(null)
    getHomeExtendedSectionsContent(locale).then((data) => {
      if (!cancelled) setContent(data)
    })
    return () => {
      cancelled = true
    }
  }, [locale])

  if (!content) {
    return null
  }

  return (
    <>
      <StoryVideoSection locale={locale} content={content.storyVideo} />
      <NewProductsSection content={content.newProducts} />
      <AsalaHomeFooter content={content.footer} />
    </>
  )
}
