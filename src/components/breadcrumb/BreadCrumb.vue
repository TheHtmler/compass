<template>
    <div class="breadcrumb">
        <!-- <div class="path" v-for="(item, index) in $route.meta.routesList" :key="index">
            <router-link class="path-enable" tag="span" :to="{path: item.routePath}" v-if="index !== $route.meta.routesList.length - 1">
                {{item.routeName}}<span v-if="$route.meta.routesList.length > 1">&nbsp;/&nbsp;</span>
            </router-link>
            <span v-else>
                {{item.routeName}}
            </span>
        </div> -->
        <div class="path" v-if="$route.meta.routesList.length > 1" >
            <router-link class="path-enable" tag="span" :to="{path: item.routePath}" v-for="(item, index) in $route.meta.routesList" :key="index" v-if="index !== $route.meta.routesList.length - 1">
                {{item.routeName}}
            </router-link>
            <span v-else>
                &nbsp;/&nbsp;{{item.routeName}}
            </span>
        </div>
        <span v-else>
            {{$route.meta.routesList[0].routeName}}
        </span>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="less" scoped>
    .breadcrumb {
        flex: 1 1 auto;
        padding: 8px 10px;
        font-size: 16px;
        color: #fff;

        .path {
            display: inline-block;

            .path-enable {
                color: #5b6773;
                cursor: pointer;

                &:hover {
                    color: #88939C;
                    text-decoration: underline;
                }
            }
        }
    }
</style>

