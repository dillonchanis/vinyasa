<template>
  <div>
    <Navbar />
    <NavbarNav />

    <!-- content -->
  </div>
</template>

<script>
import { Navbar, NavbarNav } from './layout'

export default {
  name: 'Base',
  components: {
    Navbar,
    NavbarNav
  }
}
</script>
