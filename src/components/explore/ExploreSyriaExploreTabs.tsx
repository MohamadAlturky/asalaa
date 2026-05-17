import styles from './ExploreSyriaExploreTabs.module.css'

export type ExploreSyriaTabId = 'discover' | 'photos' | 'posts'

type ExploreSyriaExploreTabsProps = {
  active: ExploreSyriaTabId
  onChange: (tab: ExploreSyriaTabId) => void
  labels: {
    discover: string
    photos: string
    posts: string
  }
  tablistAriaLabel: string
}

const TABS: ExploreSyriaTabId[] = ['discover', 'photos', 'posts']

export function ExploreSyriaExploreTabs({ active, onChange, labels, tablistAriaLabel }: ExploreSyriaExploreTabsProps) {
  return (
    <div className={styles.dock} role="tablist" aria-label={tablistAriaLabel}>
      {TABS.map((id) => {
        const isActive = active === id
        const label = labels[id]
        return (
          <button
            key={id}
            type="button"
            role="tab"
            id={`explore-tab-${id}`}
            aria-selected={isActive}
            tabIndex={isActive ? 0 : -1}
            className={`${styles.tab} ${isActive ? styles.tabActive : styles.tabInactive}`}
            onClick={() => onChange(id)}
          >
            {label}
          </button>
        )
      })}
    </div>
  )
}
