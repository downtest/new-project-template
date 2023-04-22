<template>
    <div>
        App vue component
        <button @click="makeGet">get</button>
    </div>
</template>

<script>
export default {
    name: "App",
    methods: {
        makeGet() {
            window.$axios.get('/fas')
                .then(({data}) => {
                    console.log(data, `resp`)
                })
        },
    },
}
</script>
