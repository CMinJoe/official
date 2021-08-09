<template>
  <div
    class="togglebutton-wrapper"
    v-bind:class="isactive ? 'togglebutton-checked' : ''"
  >
    <label :for="name">
      <span class="togglebutton-label">{{ label }}</span>
      <span class="tooglebutton-box"></span>
    </label>
    <input
      type="checkbox"
      :name="name"
      v-model="isactive"
      :id="name"
      @change="onToogle"
    />
  </div>
</template>

<script>
export default {
  name: "togglebutton",
  props: ["label", "name"],
  model: {
    prop: "checked",
    event: "change",
  },
  data: function() {
    return { isactive: false };
  },
  methods: {
    onToogle: function() {
      this.$emit("clicked", this.isactive);
    },
  },
};
</script>
