export const menu: Record<string, string> = {
  company: '회사소개',
  business: '의결권대행',
  customer: '고객지원',
} as const

export const submenu = {
  company: [
    { name: '인사말', link: '/company/greetings' },
    { name: '회사개요', link: '/company/outline' },
    { name: '사업소개', link: '/company/area' },
  ],
  business: [
    { name: '자사강점', link: '/business/strength' },
    { name: '업무절차', link: '/business/process' },
    { name: '수행사례', link: '/business/success' },
    { name: '주요분쟁사례', link: '/business/disputes' },
  ],
  customer: [
    { name: '오시는길', link: '/customer/directions' },
  ],
} as const