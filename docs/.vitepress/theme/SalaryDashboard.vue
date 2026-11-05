<script setup>
import { computed, ref } from 'vue'

const occupations = [
 { id:'software', name:'Software developers', median:133080, growth:16, employment:1961400, openings:129200, year:'May 2024', label:'Closest broad proxy for AI Engineer, AI Agent Engineer, and AI Forward Engineer', source:'https://www.bls.gov/ooh/computer-and-information-technology/software-developers.htm' },
 { id:'data', name:'Data scientists', median:112590, growth:34, employment:328300, openings:23400, year:'May 2024', label:'Relevant comparison for data-focused AI roles', source:'https://www.bls.gov/ooh/math/data-scientists.htm' },
 { id:'research', name:'Computer & information research scientists', median:140910, growth:20, employment:48300, openings:3200, year:'May 2024', label:'Closest broad proxy for research-oriented AI roles', source:'https://www.bls.gov/ooh/computer-and-information-technology/computer-and-information-research-scientists.htm' },
 { id:'network', name:'Computer network architects', median:130390, growth:null, employment:null, openings:null, year:'May 2024', label:'Related architecture reference for AI Solutions Architect; not a direct match', source:'https://www.bls.gov/ooh/computer-and-information-technology/computer-network-architects.htm' }
]
const metric = ref('median')
const selected = ref('all')
const filtered = computed(() => selected.value === 'all' ? occupations : occupations.filter(o => o.id === selected.value))
const maxValue = computed(() => Math.max(...filtered.value.map(o => metric.value === 'median' ? o.median : (o.growth || 0))))
const metricLabel = computed(() => metric.value === 'median' ? 'Median annual wage' : 'Projected employment growth')
function metricValue(o) {
 if (metric.value === 'median') return '$' + o.median.toLocaleString('en-US')
 return o.growth === null ? 'Not shown' : '+' + o.growth + '%'
}
function barWidth(o) {
 const v = metric.value === 'median' ? o.median : (o.growth || 0)
 return maxValue.value ? Math.round(v / maxValue.value * 100) : 0
}
</script>

<template>
 <section class="insight-widget">
  <div class="insight-widget-head">
   <div><span class="insight-kicker">U.S. LABOR MARKET</span><h2>Salary &amp; employment snapshot</h2><p>Official occupational data, presented as a reference for AI-related career research.</p></div>
   <span class="insight-count">BLS · 2024 data</span>
  </div>
  <div class="dashboard-controls">
   <label>Compare metric
    <select v-model="metric"><option value="median">Median annual wage</option><option value="growth">Projected job growth</option></select>
   </label>
   <label>Occupation
    <select v-model="selected"><option value="all">All reference occupations</option><option v-for="o in occupations" :key="o.id" :value="o.id">{{ o.name }}</option></select>
   </label>
  </div>
  <div class="metric-summary">
   <div><span>REFERENCE OCCUPATIONS</span><strong>{{ filtered.length }}</strong></div>
   <div><span>DATA PERIOD</span><strong>2024–34</strong></div>
   <div><span>METRIC</span><strong>{{ metricLabel }}</strong></div>
  </div>
  <div class="salary-chart">
   <div v-for="o in filtered" :key="o.id" class="salary-row">
    <div class="salary-row-top"><strong>{{ o.name }}</strong><b>{{ metricValue(o) }}</b></div>
    <div class="salary-track"><div class="salary-fill" :style="{ width: barWidth(o) + '%' }"></div></div>
    <p>{{ o.label }}</p>
    <div class="salary-row-meta"><span v-if="metric === 'median'">Median wage · {{ o.year }}</span><span v-else>Projected 2024–34</span><a :href="o.source" target="_blank" rel="noreferrer">BLS source ↗</a></div>
   </div>
  </div>
  <div class="dashboard-notes">
   <strong>How to interpret these numbers</strong>
   <p>These are national U.S. medians, not starting salaries. The BLS publishes data for broad occupations rather than many new AI-specific titles. The software developer median is used as a broad reference for several software-building AI roles; it is not a separate AI Engineer or AI Agent Engineer salary.</p>
   <p>The computer network architect wage is shown as a related architecture reference. Its growth rate is intentionally not plotted here because the page uses a consistent 2024–34 projection set and the corresponding BLS profile has changed its projection period in later updates.</p>
   <p>Median annual wages are from May 2024. Growth rates and annual openings are from the BLS 2024–34 Employment Projections. Figures are rounded as published and can vary by region, industry, experience, and employer.</p>
  </div>
 </section>
</template>
