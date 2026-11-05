import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'en-US',
  title: 'The Future of AI Careers',
  description: 'Explore emerging careers, skills, and opportunities in artificial intelligence.',
  base: '/ai-career-research/',
  cleanUrls: true,
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'AI Careers', link: '/careers/' },
      { text: 'Skills', link: '/skills/' },
      { text: 'Industry Trends', link: '/industry-trends/' },
      { text: 'Resources', link: '/resources/' }
    ],
    sidebar: {
      '/careers/': [
        { text: 'AI Career Profiles', items: [
          { text: 'Overview', link: '/careers/' },
          { text: 'AI Engineer', link: '/careers/ai-engineer' },
          { text: 'AI Agent Engineer', link: '/careers/ai-agent-engineer' },
          { text: 'AI Forward Engineer', link: '/careers/ai-forward-engineer' },
          { text: 'AI Solutions Architect', link: '/careers/ai-solutions-architect' }
        ]}
      ],
      '/skills/': [{ text: 'Skills', items: [{ text: 'Skills Overview', link: '/skills/' }] }],
      '/industry-trends/': [{ text: 'Industry Trends', items: [{ text: 'Overview', link: '/industry-trends/' }] }],
      '/resources/': [{ text: 'Resources', items: [{ text: 'Research & Learning', link: '/resources/' }] }]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/GuilbertH19/ai-career-research' }
    ],
    footer: {
      message: 'An educational research project about the changing world of work.',
      copyright: 'Copyright © 2026'
    },
    search: { provider: 'local' }
  }
})