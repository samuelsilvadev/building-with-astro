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

  cover-headingBg: var(--slidev-theme-accents-teal)
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

## _Rethinking the way we create websites_

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
    Astro is a <span :class="{ 'underline underline-yellow': $slidev.nav.clicks === 2 }">static site generator</span> that was created to deliver fast websites by generating HTML pages at <span :class="{ 'underline underline-yellow': $slidev.nav.clicks === 2 }"> build time </span>.
  </p>
</div>

---
layout: section
class: text-center
---

# What makes Astro great?

---
layout: center
---

# Component-Based Architecture

---
layout: default
---

<div class="text-left">

_ProductCard.astro_

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

# MPA (Multi-Page Application)

---
layout: image
image: ./images/spa-vs-mpa.png
---

---
layout: center
---

# Island Architecture

---
layout: image
image: ./images/islands.png
---

---
layout: section
---

# What if my data changes?

---
layout: center
---

# Demo

---
layout: section
---

# ...Isn't that a poor version of Next.js?