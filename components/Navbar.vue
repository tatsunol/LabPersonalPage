<template>
<nav class="navbar" role="navigation" aria-label="main navigation">
  <div id="navbarTop" class="navbar-menu">
    <div class="navbar-start is-size-6">
      <a class="navbar-item" href='#biography'>
        略歴
      </a>
      <a class="navbar-item" href="#publication">
        業績
      </a>
      <a class="navbar-item" href="#award">
        受賞
      </a>
      <a class="navbar-item" href="#other">
        その他
      </a>
    </div>
  </div>
  <!--
  <div class="navbar-end .navbar-burger">
    <div class="navbar-item has-dropdown is-hoverable">
      <a class="navbar-link">
          言語 / Lang
      </a>
      <div class="navbar-dropdown">
        <a class="navbar-item">
            EN
        </a>
        <a class="navbar-item is-active is-tab">
            JP
        </a>
      </div>
    </div>
  </div>
  -->
</nav>
</template>

<script>
export default {
}
</script>

<style scoped lang="scss">
.navbar-menu {
  padding-left: 0px;
}

.navbar-item {
  padding-left: 16px;
  padding-right: 16px;
}
</style>