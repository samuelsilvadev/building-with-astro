---
theme: the-unnamed
highlighter: shiki
lineNumbers: false
drawings:
  persist: false
transition: slide-left
css: unocss
layout: cover
themeConfig:
  color: "#F3EFF5"
  background: "#000"
  dark: "#000"

  code-background: "#0F131E"
  code-border: "#242d34"

  accents-teal: "#44FFD2"
  accents-yellow: "#FFE45E"
  accents-red: "#FE4A49"
  accents-lightblue: "#15C2CB"
  accents-blue: "#5EADF2"
  accents-vulcan: "#0E131F"

  default-headingBg: var(--slidev-theme-accents-yellow)
  default-headingColor: var(--slidev-theme-accents-vulcan)
  default-background: var(--slidev-theme-background)

  center-headingBg: var(--slidev-theme-accents-blue)
  center-headingColor: var(--slidev-theme-accents-vulcan)
  center-background: var(--slidev-theme-background)

  cover-headingBg: var(--slidev-theme-accents-yellow)
  cover-headingColor: var(--slidev-theme-accents-vulcan)
  cover-background: var(--slidev-theme-background)

  section-headingBg: var(--slidev-theme-accents-lightblue)
  section-headingColor: var(--slidev-theme-accents-vulcan)
  section-background: var(--slidev-theme-background)

  aboutme-bg: var(--slidev-theme-color)
  aboutme-color: var(--slidev-theme-background)
  aboutme-helloBg: var(--slidev-theme-accents-yellow)
  aboutme-helloColor: var(--slidev-theme-background)
  aboutme-nameColor: var(--slidev-theme-accents-red)
---

# Astro.build

## _Rethinking the way we create web-*_

<div class="abs-br m-6 flex gap-2">
  <a href="https://github.com/samuelsilvadev/slides-introduction-to-astro" target="_blank" alt="GitHub"
    class="text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white">
    <carbon-logo-github />
  </a>
</div>

---
layout: center
clicks: 2
---

# What is Astro?


<div v-click class="mt-10 ">
  <p class="text-3xl text-center important-line-height-normal italic">
    Astro is a <span :class="{ 'underline underline-yellow': $slidev.nav.clicks === 2 }">static site generator</span> that was created to deliver fast websites by generating HTML pages at <span :class="{ 'underline underline-yellow': $slidev.nav.clicks === 2 }"> build time</span>.
  </p>
</div>

---
layout: default
class: text-center important-bg-black
---

# What makes Astro great?

<div class="text-left mt-20">

  <div v-click>

  - **Component based 🧱**

  </div>

  <div v-click>

  - **Multi-Page Application 📑**

  </div>

  <div v-click>

  - **Island Architecture 🏝️**

  </div>

  <div v-click>

  - **CMSes integrations 🛜**

  </div>
 
  <div v-click>

  - **Built-in Markdown support 🔋**

  </div>

  <div v-click>

  - **Tooling ⚙️**

  </div>

</div>

---
layout: center
---

# Component based

<div v-click class="mt-10 ">
  <p class="text-3xl text-center important-line-height-normal italic">
    Although we will be using a SSG it's still possible to take full advantage from component based development.
  </p>
</div>

---
layout: default
class: important-bg-black
---

<div class="text-left">

# _ProductCard.astro_

```astro {all|1,6|2-3|5|7-9|11-14|16-18|all}
---
import ImageFallback from '@components/ImageFallback.astro';
import CartActions from '@components/CartActions.astro';

const { name, price } = Astro.props;
---
<style>
  ...
</style>

<ImageFallback />
<h1>{name}</h1>
<p>{price}</p>
<CartActions />

<script>
  ...
</script>
```

</div>

---
layout: center
---

# Multi-Page Application - MPA

<div v-click class="mt-10">
  <p class="text-3xl text-center important-line-height-normal italic">
    Every navigation, requests a new HTML page from the server.
  </p>
</div>
<span v-click class="text-5xl text-center mt-5">
  😱
</span>

---
layout: image
image: /spa-vs-mpa.png
---

---
layout: center
---

# Island Architecture

<div v-click class="mt-10">
  <p class="text-3xl text-center important-line-height-normal italic">
    The ability to make part of the UI interactive within an HTML page that is mostly static
  </p>
</div>

---
layout: image
image: /islands.png
---

---
layout: center
---

# Demo

---
layout: default
class: text-center important-bg-black
---

# Considerations

<div class="text-left">


  <div v-click class="mt-5">

  - ## Isn't that a poor version of Next.js?

  </div>

  <div v-click class="mt-5">

  - ## What if my data changes?

  </div>
  
  <div v-click class="mt-5">

  - ## SSR - Server Side Rendering

  </div>
  
  <div v-click class="mt-5">

  - ## Cache

  </div>

</div>

---
layout: center
---

# Quiz time