<script setup lang="ts">
</script>

<template>
  <div class="space-y-5">
    <section class="w-full max-w-3xl mx-auto px-5 mt-5 text-left border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 rounded-2xl py-5">
      <h2 class="text-xl font-semibold text-zinc-900 dark:text-zinc-100">🧰 Install Cursor</h2>
      <p class="mt-3 text-zinc-700 dark:text-zinc-300">
        Download and install Cursor for your platform. See the official installation guide:
        <a
          href="https://docs.cursor.com/en/get-started/installation"
          class="text-blue-700 dark:text-blue-400 hover:underline"
          target="_blank"
          rel="noopener"
        >Installation docs</a>.
      </p>
      <ul class="mt-3 list-disc pl-5 space-y-2 text-zinc-800 dark:text-zinc-200">
        <li>Install the app and sign in.</li>
        <li>Open your project folder in Cursor.</li>
        <li>Enable the in-editor chat and side panels as needed.</li>
      </ul>
    </section>

    <section class="w-full max-w-3xl mx-auto px-5 text-left border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 rounded-2xl py-5">
      <h2 class="text-xl font-semibold text-zinc-900 dark:text-zinc-100">📎 Add docs for context</h2>
      <p class="mt-3 text-zinc-700 dark:text-zinc-300">
        Give the AI richer context by attaching relevant documentation with <code class="bg-zinc-100 dark:bg-zinc-800 px-2 py-1 rounded text-sm">@Docs</code>. Learn more here:
        <a
          href="https://docs.cursor.com/en/guides/advanced/working-with-documentation"
          class="text-blue-700 dark:text-blue-400 hover:underline"
          target="_blank"
          rel="noopener"
        >Working with documentation</a>.
      </p>
      <ul class="mt-3 list-disc pl-5 space-y-2 text-zinc-800 dark:text-zinc-200">
        <li>Collect links or files for APIs, product specs, or internal guides.</li>
        <li>Use <code class="bg-zinc-100 dark:bg-zinc-800 px-2 py-1 rounded text-sm">@Docs</code> in chat to reference them directly.</li>
        <li>Keep sources focused and current to improve answer quality.</li>
      </ul>
    </section>

    <section class="w-full max-w-3xl mx-auto px-5 text-left border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 rounded-2xl py-5">
      <h2 class="text-xl font-semibold text-zinc-900 dark:text-zinc-100">🔌 Set up an MCP server (optional)</h2>
      <p class="mt-3 text-zinc-700 dark:text-zinc-300">
        Connect Model Context Protocol (MCP) providers to securely expose internal tools and knowledge to the AI. Start here:
        <a
          href="https://docs.cursor.com/en/context/mcp"
          class="text-blue-700 dark:text-blue-400 hover:underline"
          target="_blank"
          rel="noopener"
        >MCP overview</a>.
      </p>
      <ul class="mt-3 list-disc pl-5 space-y-2 text-zinc-800 dark:text-zinc-200">
        <li>Choose a provider (e.g., internal docs, knowledge bases, or tools).</li>
        <li>Follow the provider setup and configure access credentials.</li>
        <li>Restart Cursor and verify the MCP tools appear in your workspace.</li>
      </ul>
    </section>
  </div>
</template>

