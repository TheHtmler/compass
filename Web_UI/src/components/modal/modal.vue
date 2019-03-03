<template>
  <Button @click="modal10 = true">Vertical center</Button>
    <Modal
        title="Title"
        v-model="modal10"
        class-name="vertical-center-modal">
        <p>Content of dialog</p>
        <p>Content of dialog</p>
        <p>Content of dialog</p>
    </Modal>
</template>

<script>
export default {
    data () {
        return {
            modal9: false,
            modal10: false,
        }
    }
}
</script>

<style lang="less" scoped>

</style>


