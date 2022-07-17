<template>
  <router-view name="NavBarWebsite" />
  <router-view name="NavBarDashboard" />
  <router-view name="SideBarDashboard" />
  <router-view />
  <router-view name="FooterWebsite" />
</template>

<style>
html,
body {
  overflow-x: hidden;
  padding: 0 !important;
}
</style>
