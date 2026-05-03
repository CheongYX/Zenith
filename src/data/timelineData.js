export const getTimelineData = (lang) => [
  {
    id: "os-series", // 建议把 id 改成字符串，避免潜在的类型错误
    date: '2025.08', 
    title: lang === 'zh' ? '操作系统' : 'Operating System:',
    category: 'learning', 
    layout: 'collection', // 你原本的标记，非常棒
    description: lang === 'zh' ? '输入中文' : 'Write in English',
    tags: ['OS', 'Learning'],
    articles: [
      { 
        id: 'os-try1', 
        title: lang === 'zh' ? '尝试1' : 'try1', 
        date: '2025-08-20'
      },
      { 
        id: 'os-try2', // 🚨 核心：这个 ID 必须等于 os-deadlock-gaming.md
        title: lang === 'zh' ? 'testing123' : 'testing123', 
        date: '2025-08-20'
      }
    ]
  },
    {
    id: "testing3", 
    date: '2026.05', 
    title: lang === 'zh' ? '输入中文' : 'in English thank you',
    category: 'project', 
    layout: 'tabs', 
    description: lang === 'zh' ? '太酷拉' : 'It\'s cool!',
    tags: ['yay']
  }
];