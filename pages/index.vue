<template>
  <main>
    <SectionHero />
    <SectionTrust />
    <SectionProblem />
    <SectionReposition />
    <SectionLayanan />
    <SectionWhyUs />
    <SectionPortfolio />
    <SectionHarga />
    <SectionProcess />
    <SectionRecurring />
    <SectionFaq />
    <SectionFinalCta />
  </main>
</template>

<script setup>
definePageMeta({ layout: 'default' })

onMounted(() => {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target) }
    })
  }, { threshold: 0.1 })
  document.querySelectorAll('.reveal').forEach(el => obs.observe(el))
})
</script>
