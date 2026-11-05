import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'en-US',
  title: 'The Future of AI Careers',
  description: 'Explore emerging careers, skills, and opportunities in artificial intelligence.',
  base: '/ai-career-research/',
  cleanUrls: true,
  appearance: true,
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'AI Careers', link: '/careers/' },
      { text: 'Skills', link: '/skills/' },
      { text: 'Industry Trends', link: '/industry-trends/' },
      { text: 'Resources', link: '/resources/' },
      { text: 'Career Insights', items: [
        { text: 'Career Comparison', link: '/career-insights/compare' },
        { text: 'Salary & Job Market', link: '/career-insights/salary-dashboard' }
      ] }
    ],
    sidebar: {
      '/careers/': [
        { text: 'AI Career Profiles', items: [
          { text: 'Overview', link: '/careers/' },
          { text: 'AI Engineer', link: '/careers/ai-engineer' },
          { text: 'AI Agent Engineer', link: '/careers/ai-agent-engineer' },
          { text: 'AI Forward Engineer', link: '/careers/ai-forward-engineer' },
          { text: 'AI Forward Deployed Engineer', link: '/careers/ai-forward-deployed-engineer' },
          { text: 'AI Solutions Architect', link: '/careers/ai-solutions-architect' }
        ]}
      ],
      '/skills/': [{ text: 'Skills', items: [
        { text: 'Skills Overview', link: '/skills/' },
        { text: 'Programming & Software', link: '/skills/programming-software' },
        { text: 'Data & Mathematics', link: '/skills/data-mathematics' },
        { text: 'Machine Learning', link: '/skills/machine-learning' },
        { text: 'Cloud & Architecture', link: '/skills/cloud-architecture' },
        { text: 'Communication & Teamwork', link: '/skills/communication-teamwork' },
        { text: 'Critical Judgment & Responsible AI', link: '/skills/critical-judgment' }
      ] }],
      '/industry-trends/': [{ text: 'Industry Trends', items: [
        { text: 'Overview', link: '/industry-trends/' },
        { text: 'Generative AI at Work', link: '/industry-trends/generative-ai-at-work' },
        { text: 'AI Agents & Automation', link: '/industry-trends/ai-agents-automation' },
        { text: 'Demand for AI Capabilities', link: '/industry-trends/ai-skills-workforce' },
        { text: 'Privacy, Security & Responsibility', link: '/industry-trends/responsible-ai-governance' },
        { text: 'AI Across Industries', link: '/industry-trends/ai-across-industries' },
        { text: 'AI-Native Software Development', link: '/industry-trends/ai-native-development' }
      ] }],
      '/resources/': [{ text: 'Resources', items: [
        { text: 'Research & Learning', link: '/resources/' },
        { text: 'Government Statistics', link: '/resources/government-statistics' },
        { text: 'Academic Research', link: '/resources/academic-research' },
        { text: 'Industry Reports', link: '/resources/industry-reports' },
        { text: 'Job Postings', link: '/resources/job-postings' },
        { text: 'Technical Documentation', link: '/resources/technical-documentation' },
        { text: 'Structured Courses', link: '/resources/structured-courses' }
      ] }]
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