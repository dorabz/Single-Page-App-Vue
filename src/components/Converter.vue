<template>
<form>
<div><label>Number</label>
<div><input v-model.number="no" @keyup="byfive"/>
</div>
</div>
<div><label>Number with added 5</label>
<div><input v-model.number="noFive" @keyup="delfive"/>
</div>
</div>
</form>
<h3>Lifecycle hook</h3>
<h3>Date and time:  {{ current }} </h3>
</template>

<script>
export default {
    data() {
        return {
            no: 5,
            noFive: 10,
            current: new Date().toLocaleString("hr-HR"),
        };
    },
    methods: {
        byfive() {
            this.noFive = Math.round((this.no + 5));
        },
        delfive() {
            this.no = Math.round((this.noFive - 5));
        },
    },
    mounted() {
    window.setInterval(() => {
      this.current = new Date().toLocaleString("hr-HR");
    }, 1000);
    }
};
</script>