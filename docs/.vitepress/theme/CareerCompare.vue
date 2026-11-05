<script setup>
import { computed, ref } from 'vue'

const careers = [
  { id:'ai-engineer', name:'AI Engineer', summary:'Builds and integrates AI models into reliable products and services.', work:'Model integration, APIs, evaluation, deployment', skills:'Python, software engineering, ML, APIs, testing', majors:'Computer Science; Artificial Intelligence; Software Engineering; Computer Engineering; Machine Learning; Data Science; Statistics; Applied Mathematics', salary:'$133,080', growth:'+16%', outlook:'Software developers', source:'https://www.bls.gov/ooh/computer-and-information-technology/software-developers.htm' },
  { id:'agent-engineer', name:'AI Agent Engineer', summary:'Builds AI agents that use tools and coordinate multi-step workflows.', work:'Tool integration, orchestration, guardrails, monitoring', skills:'Python, APIs, LLMs, evaluation, security', majors:'Computer Science; Artificial Intelligence; Software Engineering; Computer Engineering; Data Science; Computational Linguistics; Statistics; Information Systems', salary:'$133,080', growth:'+16%', outlook:'Software developers', source:'https://www.bls.gov/ooh/computer-and-information-technology/software-developers.htm' },
  { id:'forward-engineer', name:'AI Forward Engineer', summary:'Uses AI-assisted development to prototype and deliver software solutions.', work:'Prototyping, product implementation, AI-assisted coding', skills:'Programming, product thinking, APIs, testing', majors:'Computer Science; Software Engineering; Computer Engineering; Information Technology; Human-Computer Interaction; Information Systems; Interaction Design', salary:'$133,080', growth:'+16%', outlook:'Software developers', source:'https://www.bls.gov/ooh/computer-and-information-technology/software-developers.htm' },
  { id:'fde', name:'AI Forward Deployed Engineer', summary:'Embeds with customers to build and deploy AI solutions in real business environments.', work:'Customer discovery, applied AI, integrations, cloud deployment', skills:'Python, APIs, RAG, agents, cloud, SQL, communication', majors:'Computer Science; Software Engineering; Computer Engineering; Artificial Intelligence; Data Science; Information Systems; Applied Mathematics; Statistics; Electrical Engineering', salary:'$133,080', growth:'+16%', outlook:'Software developers', source:'https://www.bls.gov/ooh/computer-and-information-technology/software-developers.htm' },
  { id:'solutions-architect', name:'AI Solutions Architect', summary:'Designs secure, scalable systems connecting business needs with AI capabilities.', work:'Architecture, cloud integration, security, technical planning', skills:'Cloud, systems design, networking, security, communication', majors:'Computer Science; Computer Engineering; Software Engineering; Information Technology; Information Systems; Cybersecurity; Network Engineering; Data Science', salary:'$130,390', growth:'See note', outlook:'Computer network architects', source:'https://www.bls.gov/ooh/computer-and-information-technology/computer-network-architects.htm' },
  { id:'ml-engineer', name:'Machine Learning Engineer', summary:'Develops, trains, evaluates, and deploys machine-learning models.', work:'Model development, feature engineering, deployment, monitoring', skills:'Python, statistics, ML frameworks, data pipelines, cloud', majors:'Computer Science; Machine Learning; Artificial Intelligence; Data Science; Statistics; Applied Mathematics; Computer Engineering', salary:'$140,910', growth:'+20%', outlook:'Computer and information research scientists', source:'https://www.bls.gov/ooh/computer-and-information-technology/computer-and-information-research-scientists.htm' },
  { id:'mlops', name:'MLOps Engineer', summary:'Builds infrastructure and processes that make machine-learning systems reliable in production.', work:'Model pipelines, deployment automation, monitoring, infrastructure', skills:'Cloud, Docker, CI/CD, Python, data engineering, observability', majors:'Computer Science; Software Engineering; Computer Engineering; Information Technology; Data Engineering; Information Systems', salary:'$133,080', growth:'+16%', outlook:'Software developers', source:'https://www.bls.gov/ooh/computer-and-information-technology/software-developers.htm' },
  { id:'data-scientist', name:'Data Scientist', summary:'Uses statistical and computational methods to extract insights from data.', work:'Data analysis, modeling, experimentation, communication', skills:'Statistics, Python, SQL, machine learning, visualization', majors:'Data Science; Statistics; Applied Mathematics; Computer Science; Economics; Operations Research', salary:'$112,590', growth:'+34%', outlook:'Data scientists', source:'https://www.bls.gov/ooh/math/data-scientists.htm' },
  { id:'research-engineer', name:'AI Research Engineer', summary:'Turns research ideas into experiments, models, and reproducible systems.', work:'Experimentation, model development, evaluation, research tooling', skills:'Python, mathematics, ML, research methods, distributed computing', majors:'Computer Science; Artificial Intelligence; Machine Learning; Mathematics; Applied Mathematics; Statistics; Physics; Electrical Engineering', salary:'$140,910', growth:'+20%', outlook:'Computer and information research scientists', source:'https://www.bls.gov/ooh/computer-and-information-technology/computer-and-information-research-scientists.htm' },
  { id:'data-engineer', name:'AI Data Engineer', summary:'Builds data pipelines and platforms that prepare information for AI products and analytics.', work:'Data pipelines, databases, data quality, platform integration', skills:'SQL, Python, distributed systems, cloud, data modeling', majors:'Data Engineering; Computer Science; Information Systems; Software Engineering; Data Science; Computer Engineering', salary:'$133,080', growth:'+16%', outlook:'Software developers', source:'https://www.bls.gov/ooh/computer-and-information-technology/software-developers.htm' },
  { id:'robotics', name:'AI Robotics Engineer', summary:'Combines AI, software, sensors, and control systems to create intelligent machines.', work:'Perception, robotics software, sensors, testing, control', skills:'Python, C++, robotics, linear algebra, control systems', majors:'Robotics Engineering; Mechanical Engineering; Electrical Engineering; Computer Engineering; Computer Science; Mechatronics', salary:'$140,910', growth:'+20%', outlook:'Computer and information research scientists', source:'https://www.bls.gov/ooh/computer-and-information-technology/computer-and-information-research-scientists.htm' },
  { id:'security', name:'AI Security Engineer', summary:'Helps protect AI applications, data, models, and connected systems from security risks.', work:'Threat modeling, secure integrations, testing, monitoring', skills:'Cybersecurity, software, cloud, identity, privacy, AI risk', majors:'Cybersecurity; Computer Science; Information Assurance; Computer Engineering; Information Technology; Software Engineering', salary:'$133,080', growth:'+16%', outlook:'Software developers', source:'https://www.bls.gov/ooh/computer-and-information-technology/software-developers.htm' }
]

const selected = ref(['ai-engineer','fde'])
const chosen = computed(() => selected.value.map(id => careers.find(c => c.id === id)).filter(Boolean))
function toggle(id) {
  if (selected.value.includes(id)) {
    if (selected.value.length > 1) selected.value = selected.value.filter(x => x !== id)
  } else if (selected.value.length < 3) selected.value = [...selected.value, id]
}
</script>

<template>
  <section class="insight-widget">
    <div class="insight-widget-head">
      <div><span class="insight-kicker">BUILD YOUR COMPARISON</span><h2>Select up to three careers</h2><p>Compare responsibilities, useful college majors, and labor-market reference data.</p></div>
      <span class="insight-count">{{ selected.length }} / 3 selected</span>
    </div>
    <div class="compare-picker">
      <button v-for="career in careers" :key="career.id" type="button" class="compare-choice" :class="{ active: selected.includes(career.id) }" :aria-pressed="selected.includes(career.id)" @click="toggle(career.id)">
        <span class="compare-check">{{ selected.includes(career.id) ? '✓' : '+' }}</span><span>{{ career.name }}</span>
      </button>
    </div>
    <div class="compare-table-wrap">
      <table class="compare-table">
        <thead><tr><th>Career dimension</th><th v-for="career in chosen" :key="career.id">{{ career.name }}</th></tr></thead>
        <tbody>
          <tr><th>Primary focus</th><td v-for="career in chosen" :key="career.id">{{ career.summary }}</td></tr>
          <tr><th>Typical work</th><td v-for="career in chosen" :key="career.id">{{ career.work }}</td></tr>
          <tr><th>Key skills</th><td v-for="career in chosen" :key="career.id">{{ career.skills }}</td></tr>
          <tr><th>Related college majors</th><td v-for="career in chosen" :key="career.id">{{ career.majors }}</td></tr>
          <tr><th>Salary reference</th><td v-for="career in chosen" :key="career.id"><strong>{{ career.salary }}</strong><small>U.S. median for {{ career.outlook }} · May 2024</small></td></tr>
          <tr><th>Employment outlook</th><td v-for="career in chosen" :key="career.id"><strong>{{ career.growth }}</strong><small>Projected 2024–34 for {{ career.outlook }}</small></td></tr>
          <tr><th>Source</th><td v-for="career in chosen" :key="career.id"><a :href="career.source" target="_blank" rel="noreferrer">BLS occupation profile ↗</a></td></tr>
        </tbody>
      </table>
    </div>
    <p class="insight-footnote">Major lists are suggested academic pathways, not mandatory degree requirements. Salary and outlook figures describe broad BLS occupational comparisons, not guaranteed pay or forecasts for each AI job title. Some titles do not have a separate BLS occupation code.</p>
  </section>
</template>
