<script setup lang="ts">
</script>

<template>
  <div class="space-y-5">
    <section class="w-full max-w-3xl mx-auto px-5 mt-5 text-left border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 rounded-2xl py-5" aria-label="Contents">
      <h2 class="sr-only">📑 Contents</h2>
      <nav>
        <ul class="grid gap-2 sm:grid-cols-2">
          <li>
            <a href="#choose-your-path" class="text-blue-700 dark:text-blue-400 hover:underline">1) Choose your path</a>
          </li>
          <li>
            <a href="#plan-the-build" class="text-blue-700 dark:text-blue-400 hover:underline">2) Plan the build</a>
          </li>
          <li>
            <a href="#define-the-mvp" class="text-blue-700 dark:text-blue-400 hover:underline">3) Define the MVP</a>
          </li>
          <li>
            <a href="#ship-and-iterate" class="text-blue-700 dark:text-blue-400 hover:underline">4) Ship and iterate</a>
          </li>
        </ul>
      </nav>
    </section>

    <section id="choose-your-path" class="w-full max-w-3xl mx-auto px-5 text-left border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 rounded-2xl py-5">
      <h2 class="text-xl font-semibold text-zinc-900 dark:text-zinc-100">🧭 1) Choose your path</h2>
      <ol class="mt-4 space-y-3 list-decimal pl-5 text-left">
        <li class="text-zinc-800 dark:text-zinc-200"><strong>Pick an idea</strong> you care about.</li>
        <li class="text-zinc-800 dark:text-zinc-200">Clone the <strong>'Starter Kit'</strong> to get a head start.</li>
        <li class="text-zinc-800 dark:text-zinc-200"><strong>Create a design document</strong> with a rough description of the concept.</li>
        <li class="text-zinc-800 dark:text-zinc-200"><strong>Dump your thoughts</strong>: requirements, desired outcomes, key features, and display/UX ideas.</li>
        <li class="text-zinc-800 dark:text-zinc-200">Write freely to capture context—then <strong>ask AI to structure and clarify</strong>.</li>
        <li class="text-zinc-800 dark:text-zinc-200">Add one short <strong>user scenario</strong> (who, how, expected result).</li>
        <li class="text-zinc-800 dark:text-zinc-200">Add appropriate <strong>@Docs</strong> sources in Cursor (sources, references, etc.) so AI can pull official guidance. See
          <a href="https://docs.cursor.com/en/guides/advanced/working-with-documentation#using-%40docs" class="text-blue-700 dark:text-blue-400 hover:underline" target="_blank" rel="noopener">Using @Docs</a>.
        </li>
        <li class="text-zinc-800 dark:text-zinc-200">If relevant, connect <strong>MCP</strong> providers for internal docs/tools (e.g., Confluence, Google Drive). See
          <a href="https://docs.cursor.com/en/context/mcp" class="text-blue-700 dark:text-blue-400 hover:underline" target="_blank" rel="noopener">MCP overview</a>
          and
          <a href="https://docs.cursor.com/en/tools/mcp" class="text-blue-700 dark:text-blue-400 hover:underline" target="_blank" rel="noopener">MCP tools</a>.
        </li>
      </ol>
    </section>

    <section id="plan-the-build" class="w-full max-w-3xl mx-auto px-5 text-left border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 rounded-2xl py-5">
      <h2 class="text-xl font-semibold text-zinc-900 dark:text-zinc-100">🛠️ 2) Plan the build</h2>
      <p class="mt-3 text-zinc-700 dark:text-zinc-300">Set your stance:</p>
      <ul class="mt-2 list-disc pl-5 space-y-2">
        <li class="text-zinc-800 dark:text-zinc-200"><strong>Purpose and horizon</strong>: ship today vs. build a foundation.</li>
        <li class="text-zinc-800 dark:text-zinc-200"><strong>Maintenance</strong>: ongoing ownership vs. one-off utility.</li>
        <li class="text-zinc-800 dark:text-zinc-200"><strong>Involvement</strong>: hands-on alongside AI vs. delegating.</li>
        <li class="text-zinc-800 dark:text-zinc-200"><strong>Risk tolerance</strong>: comfort with complexity/refactors/tech debt.</li>
      </ul>
      <ol class="mt-3 list-decimal pl-5 space-y-2">
        <li class="text-zinc-800 dark:text-zinc-200"><strong>Bootstrap</strong>:
          <ul class="mt-2 list-disc pl-5 space-y-2">
            <li>Ask AI to initialize with your preferred stack.</li>
            <li>Let AI pick the stack.</li>
            <li>
              Create a minimal "Hello World" (e.g., Vue 3 + Vite + Tailwind):
              <ul class="mt-2 list-disc pl-5 space-y-2">
                <li>The AI can read your file structure and scripts to propose changes in the right places.</li>
                <li>Dependency versions are pinned.</li>
                <li>You can run a known-good app before iterating with AI.</li>
              </ul>
            </li>
          </ul>
        </li>
        <li class="text-zinc-800 dark:text-zinc-200"><strong>Add project rules</strong> in <code>.cursor/rules</code> to guide architecture, stack choices, and workflows. See
          <a href="https://docs.cursor.com/en/context/rules" class="text-blue-700 dark:text-blue-400 hover:underline" target="_blank" rel="noopener">Rules</a>.
        </li>
      </ol>
    </section>

    <section id="define-the-mvp" class="w-full max-w-3xl mx-auto px-5 text-left border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 rounded-2xl py-5">
      <h2 class="text-xl font-semibold text-zinc-900 dark:text-zinc-100">🎯 3) Define the MVP</h2>
      <ol class="mt-4 space-y-3 list-decimal pl-5 text-left">
        <li class="text-zinc-800 dark:text-zinc-200"><strong>Create implementation document</strong>, using your design document: app type, prioritized features, acceptance criteria, and constraints.</li>
        <li class="text-zinc-800 dark:text-zinc-200">If bootstrapped, let AI analyze the codebase and tailor suggestions to your stack.</li>
        <li class="text-zinc-800 dark:text-zinc-200">Start with the smallest slice that proves value. Example for this site: a single button selecting an idea from JSON and displaying it.</li>
      </ol>
    </section>

    <section id="ship-and-iterate" class="w-full max-w-3xl mx-auto px-5 text-left border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 rounded-2xl py-5">
      <h2 class="text-xl font-semibold text-zinc-900 dark:text-zinc-100">🚀 4) Ship and iterate</h2>
      <ul class="mt-3 list-disc pl-5 space-y-2">
        <li class="text-zinc-800 dark:text-zinc-200">Implement in tiny steps; run the app after each edit.</li>
        <li class="text-zinc-800 dark:text-zinc-200">Prefer simple, boring solutions over clever abstractions.</li>
        <li class="text-zinc-800 dark:text-zinc-200">Enhance the UI and layer small UX improvements incrementally.</li>
        <li class="text-zinc-800 dark:text-zinc-200">When stuck, restate constraints, show errors, or reduce scope.</li>
        <li class="text-zinc-800 dark:text-zinc-200">Call out what you liked and didn't like; add examples of desired vs. undesired behavior.</li>
      </ul>
    </section>
  </div>
</template>

