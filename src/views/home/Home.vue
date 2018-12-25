<template>
    <div class="layout">
        <Layout>
            <Header class="header">
                <v-head></v-head>
            </Header>
            <Layout>
                <Sider hide-trigger class="sider">
                    <v-sider></v-sider>
                </Sider>
                <Layout :style="{padding: '0 24px 24px'}">
                    <Breadcrumb :style="{margin: '24px 0'}">
                        <BreadcrumbItem>Home</BreadcrumbItem>
                        <BreadcrumbItem>Components</BreadcrumbItem>
                        <BreadcrumbItem>Layout</BreadcrumbItem>
                    </Breadcrumb>
                    <Content :style="{padding: '24px', minHeight: '280px', background: '#fff'}">
                        Content
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    </div>
</template>

<script>
    import vHead from 'views/home/Header'
    import vSider from 'views/home/Sider'

    export default {
        components: {
            vHead,
            vSider
        }
    }
</script>

<style lang="less" scoped>
    .layout{
        position: absolute;
        margin-bottom: 10px;
        box-sizing: border-box;
        border-radius: 5px;
        width: 100%;
        height: 100%;
        min-height: 100%;
        background-color: #353c42;
        box-shadow: 0 3px 20px #000;
        background-clip: content-box;
        overflow: hidden;

        .ivu-layout{
            height: 100%;
            
            .header{
                background-color: #272c30;
                border-top-left-radius: 5px;
                border-top-right-radius: 5px;
            }
    
            .sider{
                background: #30363c;
            }
        }

    }
</style>

