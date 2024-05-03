<template>
    <div class="dropdown dropdown-top dropdown-end">
      <div tabindex="0" role="button" class="btn m-1">
        挑選主題
        <svg
          width="12px"
          height="12px"
          class="h-2 w-2 fill-current opacity-60 inline-block"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 2048 2048"
        >
          <path
            d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"
          ></path>
        </svg>
      </div>
      <ul
        tabindex="0"
        class="dropdown-content z-[1] p-2 shadow-2xl bg-base-300 rounded-box w-52"
      >
        <li>
          <input
            type="radio"
            name="theme-dropdown"
            class="theme-controller btn btn-sm btn-block btn-ghost justify-start"
            v-for="theme of themes" :value="theme" :aria-label="theme"
          />
        </li>
        
      </ul>
    </div>
</template>

<script setup>
const colorMode = useColorMode();
const themes = [
  "light",
  "dark",
  "cupcake",
  "emerald",
  "retro",
  "cyberpunk",
  "valentine",
  "halloween",
  "garden",
  "lofi",
  "pastel",
  "fantasy",
  "wireframe",
  "luxury",
  "cmyk",
  "autumn",
  "business",
  "acid",
  "lemonade",
  "coffee",
  "nord"
];

</script>

<style lang="scss" scoped>

</style>