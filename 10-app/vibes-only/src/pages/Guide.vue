<script setup lang="ts">
import { ref } from 'vue'
import TopBar from '@/components/TopBar.vue'
import VibeButton from '@/components/VibeButton.vue'
import SetupTab from '@/components/guide/SetupTab.vue'
import GuideTab from '@/components/guide/GuideTab.vue'
import JourneyTab from '@/components/guide/JourneyTab.vue'

const isCopied = ref(false)
const buttonLabel = ref('Clone Starter Kit')
const activeTab = ref<'setup' | 'guide' | 'journey'>('guide')

async function copyCloneCommand() {
  const cmd = 'git clone https://github.com/shvdg-developer/vibes-only-starter-kit.git'
  try {
    await navigator.clipboard.writeText(cmd)
    isCopied.value = true
    buttonLabel.value = 'Copied! 🎉'
    setTimeout(() => {
      isCopied.value = false
      buttonLabel.value = 'Clone Starter Kit'
    }, 2000)
  } catch {
    try {
      const textarea = document.createElement('textarea')
      textarea.value = cmd
      textarea.setAttribute('readonly', '')
      textarea.style.position = 'fixed'
      textarea.style.left = '-9999px'
      document.body.appendChild(textarea)
      textarea.select()
      document.execCommand('copy')
      document.body.removeChild(textarea)
      isCopied.value = true
      buttonLabel.value = 'Copied! 🎉'
      setTimeout(() => {
        isCopied.value = false
        buttonLabel.value = 'Clone Starter Kit'
      }, 2000)
    } catch {}
  }
}

function setActiveTab(tab: 'setup' | 'guide' | 'journey') {
  activeTab.value = tab
}
</script>

<template>
  <main class="min-h-dvh flex flex-col">
    <header class="border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 rounded-2xl">
      <div class="w-full max-w-3xl mx-auto px-5 py-3 text-center relative">
        <TopBar />
        <h1 class="text-2xl font-extrabold tracking-tight text-zinc-900 dark:text-white">Guide</h1>
        <p class="mt-1.5 text-zinc-700 dark:text-zinc-300">A short, opinionated path from idea → v1.</p>
        <div class="mt-3 flex items-center justify-center gap-2">
          <VibeButton :label="buttonLabel" @click="copyCloneCommand" />
        </div>
      </div>
    </header>

    <!-- Tab Navigation -->
    <div class="w-full max-w-3xl mx-auto px-5 mt-5">
      <div class="flex bg-zinc-100 dark:bg-zinc-800 rounded-lg p-1 border border-zinc-200 dark:border-zinc-700">
        <button
          @click="setActiveTab('setup')"
          :class="[
            'flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all duration-200',
            activeTab === 'setup'
              ? 'bg-white dark:bg-zinc-700 text-zinc-900 dark:text-white shadow-sm'
              : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white'
          ]"
        >
          🧰 Setup
        </button>
        <button
          @click="setActiveTab('guide')"
          :class="[
            'flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all duration-200',
            activeTab === 'guide'
              ? 'bg-white dark:bg-zinc-700 text-zinc-900 dark:text-white shadow-sm'
              : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white'
          ]"
        >
          📚 Guide
        </button>
        <button
          @click="setActiveTab('journey')"
          :class="[
            'flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all duration-200',
            activeTab === 'journey'
              ? 'bg-white dark:bg-zinc-700 text-zinc-900 dark:text-white shadow-sm'
              : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white'
          ]"
        >
          🚀 User Journey
        </button>
      </div>
    </div>

    <!-- Setup Tab Content -->
    <div v-if="activeTab === 'setup'">
      <SetupTab />
    </div>

    <!-- Guide Tab Content -->
    <div v-else-if="activeTab === 'guide'">
      <GuideTab />
    </div>

    <!-- User Journey Tab Content -->
    <div v-else-if="activeTab === 'journey'">
      <JourneyTab @change-tab="setActiveTab" />
    </div>
  </main>
</template>

