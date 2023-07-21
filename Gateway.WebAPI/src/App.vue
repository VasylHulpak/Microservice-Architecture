<script setup lang="ts">
import { Tabbar, TabbarItem } from 'vant';

import { ref } from 'vue';
const active = ref(-1);
</script>
<template>
  <Tabbar v-model="active" class="top-0 border-1px border-blue" type="card" scrollspy sticky>
    <TabbarItem url="/gateway/users/" icon="friends-o" >Users</TabbarItem>
    <TabbarItem url="/gateway/products" icon="cart-o">Products</TabbarItem>
  </Tabbar>
</template>
