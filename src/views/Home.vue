<template>
  <div class="home">
    <crud-table msg="Mocking APIs" />
  </div>
</template>

<script>
// @ is an alias to /src
import CrudTable from "@/components/CrudTable.vue";

export default {
  name: "Home",
  components: {
    CrudTable
  }
};
</script>
