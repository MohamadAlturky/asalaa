import type { AppLocale } from '../types/homeContent'
import type { ProviderItem, ProvidersPageContent } from '../types/providers'

export async function getProvidersPageContent(locale: AppLocale): Promise<ProvidersPageContent> {
  const isAr = locale === 'ar'
  return {
    pageTitle: isAr ? 'الحرفيين' : 'Craftsmen',
    breadcrumbHomeLabel: isAr ? 'الصفحة الرئيسية' : 'Home',
    viewWorksLabel: isAr ? 'عرض الأعمال' : 'View Works',
  }
}

export async function getProviders(locale: AppLocale): Promise<ProviderItem[]> {
  const isAr = locale === 'ar'
  
  // Mocking multiple providers to match the grid in the design
  return [
    {
      id: 'p1',
      username: 'kamelabdo',
      name: isAr ? 'كامل عبدو' : 'Kamel Abdo',
      avatarSrc: '/asalaa/images/avatar-placeholder.svg',
    },
    {
      id: 'p2',
      username: 'kamelabdo2',
      name: isAr ? 'كامل عبدو' : 'Kamel Abdo',
      avatarSrc: '/asalaa/images/avatar-placeholder.svg',
    },
    {
      id: 'p3',
      username: 'kamelabdo3',
      name: isAr ? 'كامل عبدو' : 'Kamel Abdo',
      avatarSrc: '/asalaa/images/avatar-placeholder.svg',
    },
    {
      id: 'p4',
      username: 'yazantulaimat',
      name: isAr ? 'يزن طليمات' : 'Yazan Tulaimat',
      avatarSrc: '/asalaa/images/avatar-placeholder.svg',
    },
    {
      id: 'p5',
      username: 'kamelabdo4',
      name: isAr ? 'كامل عبدو' : 'Kamel Abdo',
      avatarSrc: '/asalaa/images/avatar-placeholder.svg',
    },
    {
      id: 'p6',
      username: 'kamelabdo5',
      name: isAr ? 'كامل عبدو' : 'Kamel Abdo',
      avatarSrc: '/asalaa/images/avatar-placeholder.svg',
    },
    {
      id: 'p7',
      username: 'kamelabdo6',
      name: isAr ? 'كامل عبدو' : 'Kamel Abdo',
      avatarSrc: '/asalaa/images/avatar-placeholder.svg',
    },
    {
      id: 'p8',
      username: 'kamelabdo7',
      name: isAr ? 'كامل عبدو' : 'Kamel Abdo',
      avatarSrc: '/asalaa/images/avatar-placeholder.svg',
    },
    {
      id: 'p9',
      username: 'kamelabdo8',
      name: isAr ? 'كامل عبدو' : 'Kamel Abdo',
      avatarSrc: '/asalaa/images/avatar-placeholder.svg',
    },
    {
      id: 'p10',
      username: 'kamelabdo9',
      name: isAr ? 'كامل عبدو' : 'Kamel Abdo',
      avatarSrc: '/asalaa/images/avatar-placeholder.svg',
    },
    {
      id: 'p11',
      username: 'kamelabdo10',
      name: isAr ? 'كامل عبدو' : 'Kamel Abdo',
      avatarSrc: '/asalaa/images/avatar-placeholder.svg',
    },
    {
      id: 'p12',
      username: 'kamelabdo11',
      name: isAr ? 'كامل عبدو' : 'Kamel Abdo',
      avatarSrc: '/asalaa/images/avatar-placeholder.svg',
    },
  ]
}
