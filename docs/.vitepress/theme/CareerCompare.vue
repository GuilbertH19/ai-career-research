<script setup>
import { computed, ref } from 'vue'

const careers = [
  { id:'ai-engineer', name:'AI Engineer', family:'Software developer proxy', summary:'Builds and integrates AI models into reliable products and services.', work:'Model integration, APIs, evaluation, deployment', skills:'Python, software engineering, ML, APIs, testing', education:'Often a bachelor’s degree in computer science or a related field; requirements vary.', salary:'$133,080', growth:'+16%', outlook:'Software developers', source:'https://www.bls.gov/ooh/computer-and-information-technology/software-developers.htm' },
  { id:'agent-engineer', name:'AI Agent Engineer', family:'Software developer proxy', summary:'Builds AI-powered agents that use tools and coordinate multi-step workflows.', work:'Tool integration, orchestration, guardrails, monitoring', skills:'Python, APIs, LLMs, evaluation, security', education:'Software or computer science foundations; demonstrable projects are valuable.', salary:'$133,080', growth:'+16%', outlook:'Software developers', source:'https://www.bls.gov/ooh/computer-and-information-technology/software-developers.htm' },
  { id:'forward-engineer', name:'AI Forward Engineer', family:'Software developer proxy', summary:'Uses AI-assisted development to prototype and deliver software solutions.', work:'Prototyping, product implementation, AI-assisted coding', skills:'Programming, product thinking, APIs, testing', education:'Software development foundations; role titles and requirements vary by employer.', salary:'$133,080', growth:'+16%', outlook:'Software developers', source:'https://www.bls.gov/ooh/computer-and-information-technology/software-developers.htm' },
  { id:'solutions-architect', name:'AI Solutions Architect', family:'Computer network architect proxy', summary:'Designs secure, scalable technical systems that connect business needs with AI capabilities.', work:'Architecture, cloud integration, security, technical planning', skills:'Cloud, systems design, networking, security, communication', education:'Often a bachelor’s degree plus relevant technical experience.', salary:'$130,390', growth:'See note', outlook:'Computer network architects', source:'https://www.bls.gov/ooh/computer-and-information-technology/computer-network-architects.htm' },
  { id:'research-engineer', name:'AI Research Engineer', family:'Computer & information research scientist proxy', summary:'Turns research ideas into experiments, models, and reproducible systems.', work:'Experimentation, model development, evaluation, research tooling', skills:'Python, mathematics, ML, research methods, distributed computing', education:'Advanced study is common for research-scientist roles; engineering roles vary.', salary:'$140,910', growth:'+20%', outlook:'Computer and information research scientists', source:'https://www.bls.gov/ooh/computer-and-information-technology/computer-and-information-research-scientists.htm' },
  { id:'data-scientist', name:'Data Scientist', family:'Data scientist', summary:'Uses statistical and computational methods to extract insights from data.', work:'Data analysis, modeling, experimentation, communication', skills:'Statistics, Python, SQL, machine learning, visualization', education:'Typically a bachelor’s degree; some positions prefer graduate study.', salary:'$112,590', growth:'+34%', outlook:'Data scientists', source:'https://www.bls.gov/ooh/math/data-scientists.htm' }
]

const selected = ref(['ai-engineer','agent-engineer'])
const chosen = computed(() => selected.value.map(id => careers.find(c => c.id === id)).filter(Boolean))
function toggle(id) {
  if (selected.value.includes(id)) {
    if (selected.value.length > 2) selected.value = selected.value.filter(x => x !== id)
  } else if (selected.value.length < 3) selected.value = [...selected.value, id]
}
</script>

<template>
  <section class="insight-widget">
    <div class="insight-widget-head">
      <div><span class="insight-kicker">BUILD YOUR COMPARISON</span><h2>Select up to three careers</h2><p>Choose the roles you want to evaluate side by side.</p></div>
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
          <tr><th>Education pathway</th><td v-for="career in chosen" :key="career.id">{{ career.education }}</td></tr>
          <tr><th>Salary reference</th><td v-for="career in chosen" :key="career.id"><strong>{{ career.salary }}</strong><small>U.S. median for {{ career.outlook }} · May 2024</small></td></tr>
          <tr><th>Employment outlook</th><td v-for="career in chosen" :key="career.id"><strong>{{ career.growth }}</strong><small v-if="career.growth !== 'See note'">Projected 2024–34 for {{ career.outlook }}</small><small v-else>See the salary dashboard notes</small></td></tr>
          <tr><th>Source</th><td v-for="career in chosen" :key="career.id"><a :href="career.source" target="_blank" rel="noreferrer">BLS occupation profile ↗</a></td></tr>
        </tbody>
      </table>
    </div>
    <p class="insight-footnote">Salary and outlook figures describe the closest BLS occupational comparison, not a guaranteed salary or forecast for the emerging AI job title itself. Some titles do not have a separate BLS occupation code.</p>
  </section>
</template>
