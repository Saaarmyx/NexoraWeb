import { defineConfig } from '@playwright/test'

const snapshotDir =
  process.env.PARITY_SNAPSHOT_DIR || '/tmp/opencode/nexora-parity/after'

export default defineConfig({
  testDir: './e2e',
  outputDir: '/tmp/opencode/nexora-parity/results',
  snapshotDir,
  snapshotPathTemplate: '{snapshotDir}/{arg}{ext}',
  timeout: 60000,
  expect: {
    toHaveScreenshot: {
      maxDiffPixelRatio: 0.01,
      animations: 'disabled',
    },
  },
  use: {
    baseURL: 'http://127.0.0.1:5199',
  },
  webServer: {
    command: 'npm run dev -- --port 5199 --strictPort',
    url: 'http://127.0.0.1:5199',
    reuseExistingServer: true,
    timeout: 120000,
  },
  projects: [{ name: 'parity' }],
})
