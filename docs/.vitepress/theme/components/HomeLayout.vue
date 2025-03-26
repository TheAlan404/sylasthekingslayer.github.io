<script setup>
import { useData } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import RandomContent from './RandomContent.vue'

const { frontmatter } = useData()
</script>

<template>
  <DefaultTheme.Layout>
    <template #home-hero-before>
      <div class="hero-top-content">
        <RandomContent />
      </div>
    </template>
  </DefaultTheme.Layout>
</template>

<style scoped>
.hero-top-content {
  padding: 2rem 1.5rem 0;
  max-width: 1152px;
  margin: 0 auto;
}
</style> 