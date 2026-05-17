import { useEffect, useState } from 'react'
import type { AppLocale } from '../../types/homeContent'
import type { HomeMockupSectionsContent } from '../../types/homeMockupSections'
import { getHomeMockupSectionsContent } from '../../services/homeMockupSectionsService'
import { ElectronicMuseumShowcase } from './ElectronicMuseumShowcase'
import { HeritageMemorySection } from './HeritageMemorySection'
import { AppDownloadSection } from './AppDownloadSection'

type HomeMockupSectionsProps = {
  locale: AppLocale
}

export function HomeMockupSections({ locale }: HomeMockupSectionsProps) {
  const [content, setContent] = useState<HomeMockupSectionsContent | null>(null)

  useEffect(() => {
    let cancelled = false
    setContent(null)
    getHomeMockupSectionsContent(locale).then((data) => {
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
      <ElectronicMuseumShowcase content={content.museum} />
      <HeritageMemorySection content={content.heritage} />
      <AppDownloadSection content={content.app} />
    </>
  )
}
