<script setup lang="ts">
import VibeButton from '@/components/VibeButton.vue'

type TabKey = 'setup' | 'guide' | 'journey'
const emit = defineEmits<{ (e: 'change-tab', tab: TabKey): void }>()

function goToGuide() {
  emit('change-tab', 'guide')
}
</script>

<template>
  <div class="space-y-5">
    <section class="w-full max-w-3xl mx-auto px-5 mt-5 text-left border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 rounded-2xl py-5">
      <h2 class="text-xl font-semibold text-zinc-900 dark:text-zinc-100">🌟 Alex's Journey: From Idea to V1</h2>
      <p class="mt-3 text-zinc-700 dark:text-zinc-300">Follow Alex's story as they build a gratitude jar app using the starter kit approach. This journey shows how to keep things lightweight while letting AI do the heavy lifting.</p>
    </section>

    <section class="w-full max-w-3xl mx-auto px-5 text-left border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 rounded-2xl py-5">
      <div class="flex items-center gap-3 mb-4">
        <div class="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 font-semibold text-sm">1</div>
        <h3 class="text-lg font-semibold text-zinc-900 dark:text-zinc-100">Pick an idea and get vibing</h3>
      </div>
      <div class="ml-11 space-y-3">
        <p class="text-zinc-700 dark:text-zinc-300">Alex clicks "Get Vibing!" and lands on the idea: <strong>gratitude jar</strong>.</p>
        <p class="text-zinc-700 dark:text-zinc-300">The goal is simple: jot down gratitudes and revisit them later.</p>
        <div class="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-400 pl-4 py-2 rounded-r-md">
          <p class="text-sm text-blue-800 dark:text-blue-200"><strong>💡 Insight:</strong> Start with something that resonates with you personally.</p>
        </div>
      </div>
    </section>

    <section class="w-full max-w-3xl mx-auto px-5 text-left border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 rounded-2xl py-5">
      <div class="flex items-center gap-3 mb-4">
        <div class="w-8 h-8 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center text-green-600 dark:text-green-400 font-semibold text-sm">2</div>
        <h3 class="text-lg font-semibold text-zinc-900 dark:text-zinc-100">Clone the Starter Kit</h3>
      </div>
      <div class="ml-11 space-y-3">
        <p class="text-zinc-700 dark:text-zinc-300">Alex clones the repo and skims the README plus the placeholder documents.</p>
        <div class="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-400 pl-4 py-2 rounded-r-md">
          <p class="text-sm text-green-800 dark:text-green-200"><strong>🚀 Pro tip:</strong> Don't overthink the initial setup - just get something running!</p>
        </div>
      </div>
    </section>

    <section class="w-full max-w-3xl mx-auto px-5 text-left border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 rounded-2xl py-5">
      <div class="flex items-center gap-3 mb-4">
        <div class="w-8 h-8 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center text-purple-600 dark:text-purple-400 font-semibold text-sm">3</div>
        <h3 class="text-lg font-semibold text-zinc-900 dark:text-zinc-100">Add docs to Cursor for context</h3>
      </div>
      <div class="ml-11 space-y-3">
        <p class="text-zinc-700 dark:text-zinc-300">Alex adds relevant files into Cursor's <code class="bg-zinc-100 dark:bg-zinc-800 px-2 py-1 rounded text-sm">@Docs</code> to improve AI's context.</p>
        <p class="text-zinc-700 dark:text-zinc-300">Optional: Alex considers using an MCP for extra context but keeps it simple for now.</p>
        <div class="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-400 pl-4 py-2 rounded-r-md">
          <p class="text-sm text-purple-800 dark:text-purple-200"><strong>🧠 Context is key:</strong> The better your AI understands your project, the more helpful it becomes.</p>
        </div>
      </div>
    </section>

    <section class="w-full max-w-3xl mx-auto px-5 text-left border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 rounded-2xl py-5">
      <div class="flex items-center gap-3 mb-4">
        <div class="w-8 h-8 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center text-orange-600 dark:text-orange-400 font-semibold text-sm">4</div>
        <h3 class="text-lg font-semibold text-zinc-900 dark:text-zinc-100">Create a design doc from the idea</h3>
      </div>
      <div class="ml-11 space-y-3">
        <p class="text-zinc-700 dark:text-zinc-300">Alex copies the idea's markdown and pastes it into a new doc, e.g., <code class="bg-zinc-100 dark:bg-zinc-800 px-2 py-1 rounded text-sm">95-designs/design.md</code>.</p>
        <p class="text-zinc-700 dark:text-zinc-300">Then Alex adds raw thoughts under the pasted idea (messy is fine—context beats polish).</p>
        <div class="bg-orange-50 dark:bg-orange-900/20 border-l-4 border-orange-400 pl-4 py-2 rounded-r-md">
          <p class="text-sm text-orange-800 dark:text-orange-200"><strong>✍️ Raw thoughts matter:</strong> Don't worry about perfect formatting - just get your ideas down!</p>
        </div>
      </div>
    </section>

    <section class="w-full max-w-3xl mx-auto px-5 text-left border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 rounded-2xl py-5">
      <div class="flex items-center gap-3 mb-4">
        <div class="w-8 h-8 bg-red-100 dark:bg-red-900 rounded-full flex items-center justify-center text-red-600 dark:text-red-400 font-semibold text-sm">5</div>
        <h3 class="text-lg font-semibold text-zinc-900 dark:text-zinc-100">Ask AI to refine the idea</h3>
      </div>
      <div class="ml-11 space-y-3">
        <p class="text-zinc-700 dark:text-zinc-300">Alex asks the AI to turn the raw notes into a clearer, structured design doc.</p>
        <p class="text-zinc-700 dark:text-zinc-300">The AI refines it into concise sections (purpose, features, constraints, acceptance criteria).</p>
        <div class="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-400 pl-4 py-2 rounded-r-md">
          <p class="text-sm text-red-800 dark:text-red-200"><strong>🤖 AI partnership:</strong> Let AI help structure your thoughts - it's great at organizing messy ideas!</p>
        </div>
      </div>
    </section>

    <section class="w-full max-w-3xl mx-auto px-5 text-left border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 rounded-2xl py-5">
      <div class="flex items-center gap-3 mb-4">
        <div class="w-8 h-8 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center text-indigo-600 dark:text-indigo-400 font-semibold text-sm">6</div>
        <h3 class="text-lg font-semibold text-zinc-900 dark:text-zinc-100">Decide a stance (scope and involvement)</h3>
      </div>
      <div class="ml-11 space-y-3">
        <p class="text-zinc-700 dark:text-zinc-300">Alex wants something that "just works now," minimal involvement, no long-term maintenance.</p>
        <p class="text-zinc-700 dark:text-zinc-300">That means: prefer simple tech, ship the smallest slice, avoid over-engineering.</p>
        <div class="bg-indigo-50 dark:bg-indigo-900/20 border-l-4 border-indigo-400 pl-4 py-2 rounded-r-md">
          <p class="text-sm text-indigo-800 dark:text-indigo-200"><strong>🎯 Scope matters:</strong> Be honest about what you actually want to build and maintain.</p>
        </div>
      </div>
    </section>

    <section class="w-full max-w-3xl mx-auto px-5 text-left border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 rounded-2xl py-5">
      <div class="flex items-center gap-3 mb-4">
        <div class="w-8 h-8 bg-teal-100 dark:bg-teal-900 rounded-full flex items-center justify-center text-teal-600 dark:text-teal-400 font-semibold text-sm">7</div>
        <h3 class="text-lg font-semibold text-zinc-900 dark:text-zinc-100">Choose a tech stack</h3>
      </div>
      <div class="ml-11 space-y-3">
        <p class="text-zinc-700 dark:text-zinc-300">Alex picks a web app using <strong>Vue 3 + Vite + Tailwind CSS</strong>.</p>
        <p class="text-zinc-700 dark:text-zinc-300">Keep it local-first and simple.</p>
        <div class="bg-teal-50 dark:bg-teal-900/20 border-l-4 border-teal-400 pl-4 py-2 rounded-r-md">
          <p class="text-sm text-teal-800 dark:text-teal-200"><strong>⚡ Stack choice:</strong> Pick familiar tools or let AI suggest - but keep it simple!</p>
        </div>
      </div>
    </section>

    <section class="w-full max-w-3xl mx-auto px-5 text-left border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 rounded-2xl py-5">
      <div class="flex items-center gap-3 mb-4">
        <div class="w-8 h-8 bg-pink-100 dark:bg-pink-900 rounded-full flex items-center justify-center text-pink-600 dark:text-pink-400 font-semibold text-sm">8</div>
        <h3 class="text-lg font-semibold text-zinc-900 dark:text-zinc-100">Make a "Hello, World" with the stack</h3>
      </div>
      <div class="ml-11 space-y-3">
        <p class="text-zinc-700 dark:text-zinc-300">Alex follows the official Tailwind guide for Vite: <a href="https://tailwindcss.com/docs/installation/using-vite" class="text-blue-700 dark:text-blue-400 hover:underline" target="_blank" rel="noopener">Tailwind Vite guide</a>.</p>
        <p class="text-zinc-700 dark:text-zinc-300">The goal is to get a blank but styled page running quickly.</p>
        <div class="bg-pink-50 dark:bg-pink-900/20 border-l-4 border-pink-400 pl-4 py-2 rounded-r-md">
          <p class="text-sm text-pink-800 dark:text-pink-200"><strong>🌍 Start simple:</strong> Get the basic setup working before adding features!</p>
        </div>
      </div>
    </section>

    <section class="w-full max-w-3xl mx-auto px-5 text-left border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 rounded-2xl py-5">
      <div class="flex items-center gap-3 mb-4">
        <div class="w-8 h-8 bg-yellow-100 dark:bg-yellow-900 rounded-full flex items-center justify-center text-yellow-600 dark:text-yellow-400 font-semibold text-sm">9</div>
        <h3 class="text-lg font-semibold text-zinc-900 dark:text-zinc-100">Confirm it runs</h3>
      </div>
      <div class="ml-11 space-y-3">
        <p class="text-zinc-700 dark:text-zinc-300">Alex installs dependencies and runs the dev server.</p>
        <p class="text-zinc-700 dark:text-zinc-300">Seeing the app in the browser confirms the baseline is good—time to iterate.</p>
        <div class="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-400 pl-4 py-2 rounded-r-md">
          <p class="text-sm text-yellow-800 dark:text-yellow-200"><strong>✅ Verify first:</strong> Always confirm your setup works before building features!</p>
        </div>
      </div>
    </section>

    <section class="w-full max-w-3xl mx-auto px-5 text-left border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 rounded-2xl py-5">
      <div class="flex items-center gap-3 mb-4">
        <div class="w-8 h-8 bg-rose-100 dark:bg-rose-900 rounded-full flex items-center justify-center text-rose-600 dark:text-rose-400 font-semibold text-sm">10</div>
        <h3 class="text-lg font-semibold text-zinc-900 dark:text-zinc-100">Add Cursor rules for guidance</h3>
      </div>
      <div class="ml-11 space-y-3">
        <p class="text-zinc-700 dark:text-zinc-300">Alex creates <code class="bg-zinc-100 dark:bg-zinc-800 px-2 py-1 rounded text-sm">.mdc</code> rule files under <code class="bg-zinc-100 dark:bg-zinc-800 px-2 py-1 rounded text-sm">.cursor/rules</code> to guide the AI:</p>
        <ul class="list-disc pl-5 space-y-1 text-zinc-700 dark:text-zinc-300">
          <li>Vue + TypeScript conventions</li>
          <li>Vite project structure</li>
          <li>Tailwind utility-first styling tips</li>
          <li>Personal preferences (naming, testing stance, error handling)</li>
        </ul>
        <div class="bg-rose-50 dark:bg-rose-900/20 border-l-4 border-rose-400 pl-4 py-2 rounded-r-md">
          <p class="text-sm text-rose-800 dark:text-rose-200"><strong>📋 Rules help:</strong> Good rules make AI much more effective at helping you!</p>
        </div>
      </div>
    </section>

    <section class="w-full max-w-3xl mx-auto px-5 text-left border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 rounded-2xl py-5">
      <div class="flex items-center gap-3 mb-4">
        <div class="w-8 h-8 bg-cyan-100 dark:bg-cyan-900 rounded-full flex items-center justify-center text-cyan-600 dark:text-cyan-400 font-semibold text-sm">11</div>
        <h3 class="text-lg font-semibold text-zinc-900 dark:text-zinc-100">Start an implementation doc</h3>
      </div>
      <div class="ml-11 space-y-3">
        <p class="text-zinc-700 dark:text-zinc-300">Alex creates an implementation plan at <code class="bg-zinc-100 dark:bg-zinc-800 px-2 py-1 rounded text-sm">95-prompts/app-creation.md</code>.</p>
        <p class="text-zinc-700 dark:text-zinc-300">The doc references the design doc for context and states the architecture and minimal features to ship first.</p>
        <div class="bg-cyan-50 dark:bg-cyan-900/20 border-l-4 border-cyan-400 pl-4 py-2 rounded-r-md">
          <p class="text-sm text-cyan-800 dark:text-cyan-200"><strong>📝 Plan first:</strong> A good implementation plan saves hours of coding time!</p>
        </div>
      </div>
    </section>

    <section class="w-full max-w-3xl mx-auto px-5 text-left border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 rounded-2xl py-5">
      <div class="flex items-center gap-3 mb-4">
        <div class="w-8 h-8 bg-emerald-100 dark:bg-emerald-900 rounded-full flex items-center justify-center text-emerald-600 dark:text-emerald-400 font-semibold text-sm">12</div>
        <h3 class="text-lg font-semibold text-zinc-900 dark:text-zinc-100">Let AI refine the implementation plan</h3>
      </div>
      <div class="ml-11 space-y-3">
        <p class="text-zinc-700 dark:text-zinc-300">Alex asks the AI to structure and refine the plan.</p>
        <p class="text-zinc-700 dark:text-zinc-300">Now Alex has a solid implementation document.</p>
        <div class="bg-emerald-50 dark:bg-emerald-900/20 border-l-4 border-emerald-400 pl-4 py-2 rounded-r-md">
          <p class="text-sm text-emerald-800 dark:text-emerald-200"><strong>🤝 AI collaboration:</strong> Use AI to improve your plans, not just execute them!</p>
        </div>
      </div>
    </section>

    <section class="w-full max-w-3xl mx-auto px-5 text-left border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 rounded-2xl py-5">
      <div class="flex items-center gap-3 mb-4">
        <div class="w-8 h-8 bg-violet-100 dark:bg-violet-900 rounded-full flex items-center justify-center text-violet-600 dark:text-violet-400 font-semibold text-sm">13</div>
        <h3 class="text-lg font-semibold text-zinc-900 dark:text-zinc-100">Execute the plan with AI</h3>
      </div>
      <div class="ml-11 space-y-3">
        <p class="text-zinc-700 dark:text-zinc-300">Alex attaches both docs (design + implementation) in chat and asks the AI to execute the plan.</p>
        <p class="text-zinc-700 dark:text-zinc-300">The request emphasizes: "build the smallest vertical slice first, run after each edit."</p>
        <div class="bg-violet-50 dark:bg-violet-900/20 border-l-4 border-violet-400 pl-4 py-2 rounded-r-md">
          <p class="text-sm text-violet-800 dark:text-violet-200"><strong>🔧 Build incrementally:</strong> Small, testable changes are much easier to debug!</p>
        </div>
      </div>
    </section>

    <section class="w-full max-w-3xl mx-auto px-5 text-left border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 rounded-2xl py-5">
      <div class="flex items-center gap-3 mb-4">
        <div class="w-8 h-8 bg-amber-100 dark:bg-amber-900 rounded-full flex items-center justify-center text-amber-600 dark:text-amber-400 font-semibold text-sm">14</div>
        <h3 class="text-lg font-semibold text-zinc-900 dark:text-zinc-100">Review, iterate, and refine</h3>
      </div>
      <div class="ml-11 space-y-3">
        <p class="text-zinc-700 dark:text-zinc-300">Alex reviews generated code, calls out what works and what doesn't, and requests targeted edits.</p>
        <p class="text-zinc-700 dark:text-zinc-300">The loop continues until the MVP feels right—then small improvements land incrementally.</p>
        <div class="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-400 pl-4 py-2 rounded-r-md">
          <p class="text-sm text-amber-800 dark:text-amber-200"><strong>🔄 Iterate fast:</strong> Quick feedback loops lead to better results!</p>
        </div>
      </div>
    </section>

    <section class="w-full max-w-3xl mx-auto px-5 text-left border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 rounded-2xl py-5">
      <div class="flex items-center gap-3 mb-4">
        <div class="w-8 h-8 bg-lime-100 dark:bg-lime-900 rounded-full flex items-center justify-center text-lime-600 dark:text-lime-400 font-semibold text-sm">15</div>
        <h3 class="text-lg font-semibold text-zinc-900 dark:text-zinc-100">Done (for now)</h3>
      </div>
      <div class="ml-11 space-y-3">
        <p class="text-zinc-700 dark:text-zinc-300">Alex stops when the MVP works and is pleasant to use.</p>
        <div class="bg-lime-50 dark:bg-lime-900/20 border-l-4 border-lime-400 pl-4 py-2 rounded-r-md">
          <p class="text-sm text-lime-800 dark:text-lime-200"><strong>🎉 Ship it:</strong> Perfect is the enemy of done. Ship when it feels good enough!</p>
        </div>
      </div>
    </section>

    <section class="w-full max-w-3xl mx-auto px-5 text-left border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 rounded-2xl py-5">
      <div class="text-center py-6">
        <h3 class="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-3">Ready to start your own journey?</h3>
        <p class="text-zinc-700 dark:text-zinc-300 mb-4">Follow Alex's footsteps and build something amazing with the starter kit!</p>
        <VibeButton label="Get Started" @click="goToGuide" />
      </div>
    </section>
  </div>
</template>

