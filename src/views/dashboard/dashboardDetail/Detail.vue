<template>
    <div class="graph-detail">
        <div class="row">
            <div class="section">
                <div class="header">Data from : <span class="app-name">{{ chartData.name }}</span></div>
                <graph></graph>
            </div>
        </div>
    </div>
</template>

<script>
    import graph from './Graph.vue'

    export default {
        created() {
            // console.log(this.$route.query.rowData)
            // console.log(this.$route.query.rowData.name)
            console.log(this.chartData)
        },
        computed: {
            chartData() {
                return this.$store.getters.chartData
            }
        },
        methods: {
            
        },
        components: {
            graph
        }
    }
</script>

<style lang="less" scoped>
    .graph-detail {

        .row {
            display: flex;
            margin-bottom: 15px;

            .header {
                padding: 10px 20px;
                font-size: 14px;
                border-bottom: 2px solid #3282d4;
                color: #fff;
                background-color: #2A3034;

                .app-name {
                    font-style: italic;
                    color: #d9de0b;
                }
            }

            .section {
                width: 100%;
            }
        }
    }
</style>
