<template>
<nav class="navbar" role="navigation" aria-label="main navigation">
      <!--
  <div class="navbar-brand">

    <a class="navbar-item" href="https://bulma.io">
      <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
    </a>
    

    <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>
  -->

  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">
      <a class="navbar-item">
        略歴
      </a>
      <a class="navbar-item is-spaced">
        業績
      </a>
      <a class="navbar-item">
        受賞
      </a>
      <a class="navbar-item">
        その他
      </a>

    
      </div>
    </div>

    <div class="navbar-end">
        <div class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link">
                  言語 / Lang
              </a>

              <div class="navbar-dropdown">
                <a class="navbar-item">
                    EN
                </a>
                <a class="navbar-item">
                    JP
                </a>
              </div>
        </div>
    </div>
</nav>
</template>

<script>
export default {
    
}
</script>

<style scoped>

</style>