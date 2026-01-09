// Enables "copy to clipboard" for buttons with class="copy-btn"
// Expected DOM shape (example):
// <div>
//   <button class="copy-btn">Copy</button>
//   <pre><code>...</code></pre>
// </div>

export function initCopyButtons() {
  document.addEventListener("click", async (e) => {
    const btn = e.target.closest(".copy-btn");
    if (!btn) return;

    const code = btn.parentElement?.querySelector("code");
    if (!code) return;

    const text = code.innerText;

    try {
      await navigator.clipboard.writeText(text);

      const prev = btn.textContent;
      btn.textContent = "Copied!";
      setTimeout(() => (btn.textContent = prev), 1200);
    } catch (err) {
      // Fallback: select text so the user can manually copy
      const range = document.createRange();
      range.selectNodeContents(code);

      const sel = window.getSelection();
      if (!sel) return;

      sel.removeAllRanges();
      sel.addRange(range);

      const prev = btn.textContent;
      btn.textContent = "Select ⌘C";
      setTimeout(() => (btn.textContent = prev || "Copy"), 1200);
    }
  });
}
