<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Sidebar from "@/components/Sidebar.vue";
import SideAdd from "@/components/SideAdd.vue";

export default {
  name: "default",
  components: { Header, Footer, SideAdd },
};
</script>

<template>
  <div class="drawer">
    <input id="elite-drawer" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content min-h-screen static">
      <!-- Page content here -->
      <Header />
      <slot />
      <SideAdd class="absolute bottom-32 right-10 btn btn-circle btn-primary hover:scale-150"/>
      <Footer class="fixed bottom-0" />
    </div>
    <div class="drawer-side">
      <label
        for="elite-drawer"
        aria-label="close sidebar"
        class="drawer-overlay"
      ></label>
      <ul class="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
        <!-- Sidebar content here -->
        <Sidebar />
      </ul>
    </div>
  </div>
</template>
