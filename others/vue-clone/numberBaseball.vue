<template>
    <div>
        <h1>{{result}}</h1>
        <form @submit="onSubmitForm">
            <input ref="answer" maxlength="4" v-model="value" />
            <button type="submit">입력</button>
        </form>
        <div>시도 : {{ tries.length }}</div>
        <ul>
            <li v-for="t in tries">{{ t }}</li>
        </ul>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                tries : [],
                value : '',
                result : ''
            }
        },
        methods : {
            onSubmitForm(e) {
                e.preventDefault();
                this.tries.push(this.value);
                this.$refs.answer.focus();
                this.value = ''
            }
        }
    }
</script>

<style>

</style>