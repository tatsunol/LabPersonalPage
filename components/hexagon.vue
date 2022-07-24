<template>
<div class="hexagon">
    <div class="hexagon_cont" ></div>
</div>
</template>

<style lang="scss" scoped>
.hexagon {
  width: 880px;
  height: 500px;
  background: #aaa;
  position: relative;
}

.hexagon_cont {
  height: 100%;
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1;
}

.hexagon::before,
.hexagon::after {
  content: "";
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: #aaa;
  z-index: 0;
}

.hexagon::before {
  transform: rotate(60deg);
}

.hexagon::after {
  transform: rotate(-60deg);
}
</style>