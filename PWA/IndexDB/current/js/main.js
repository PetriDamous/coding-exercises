import { openDB } from 'idb';

// Register the service worker
if ('serviceWorker' in navigator) {
  // Wait for the 'load' event to not block other work
  window.addEventListener('load', async () => {
    // Try to register the service worker.
    try {
      // Capture the registration for later use, if needed
      let reg;

      // import.meta.env.DEV is a special environment variable injected by Vite to let us know we're in development mode. Here, we can use the JS Module form of our service worker because we can control our browsers in dev.
      if (import.meta.env.DEV) {
        reg = await navigator.serviceWorker.register('/service-worker.js', {
          type: 'module',
        });
      } else {
        // In production, we use the normal service worker registration
        reg = await navigator.serviceWorker.register('/service-worker.js');
      }

      console.log('Service worker registered! 😎', reg);
    } catch (err) {
      console.log('😥 Service worker registration failed: ', err);
    }
  });
}

// Set up the database
const db = await openDB('settings-store', 1, {
  upgrade(db) {
    db.createObjectStore('settings');
  },
});

window.addEventListener('DOMContentLoaded', async () => {
  // Set up the editor
  const { Editor } = await import('./app/editor.js');
  const editor = new Editor(document.body);

  // Set up the menu
  const { Menu } = await import('./app/menu.js');
  new Menu(document.querySelector('.actions'), editor);

  // Save content to database on edit
  editor.onUpdate(async (content) => {
    await db.put('settings', content, 'content');
  });

  // Set the initial state in the editor
  const defaultText = `# Welcome to PWA Edit!\n\nTo leave the editing area, press the \`esc\` key, then \`tab\` or \`shift+tab\`.`;

  editor.setContent((await db.get('settings', 'content')) || defaultText);

  editor.setContent((await db.get('settings', 'content')) || defaultText);
});

// Set up night mode toggle
const { NightMode } = await import('./app/night-mode.js');
new NightMode(
  document.querySelector('#mode'),
  async (mode) => {
    editor.setTheme(mode);
    // Save the night mode setting when changed
    await db.put('settings', mode, 'mode');
  },
  // Retrieve the night mode setting on initialization
  await db.get('settings', 'mode'),
);
