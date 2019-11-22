<template>
  <div>
    <px-assets-table :assets="assets" v-if="!isLoading" />
    <div class="text-center" v-else>
      <bounce-loader :loading="isLoading" :color="'#68d391'" :size="100" />
    </div>
  </div>
</template>

<script>
import PxAssetsTable from '@/components/PxAssetsTable'
import api from '@/api.js'

export default {
  name: 'Home',
  components: {
    PxAssetsTable
  },
  data() {
    return {
      assets: [],
      isLoading: true
    }
  },
  metaInfo: {
    title: 'Platzi Exchange 💹'
  },
  async created() {
    try {
      this.assets = await api.getAssets()
      this.isLoading = false
    } catch (error) {
      return null
    }
  }
}
</script>
