import { useRoute, useRouter } from 'vue-router'
import { onMounted, ref, watch } from 'vue'

const useRouteQuery = (key: string, defaultValue: string) => {
  const queryValue = ref(defaultValue)

  onMounted(() => {
    const route = useRoute()
    const queryParam = route.query[key]

    if (typeof queryParam === 'string') {
      queryValue.value = queryParam
    }

    const router = useRouter()
    watch(() => queryValue.value, () => {
      router.replace({ query: { search: queryValue.value } })
    })
  })

  return queryValue
}

export default useRouteQuery
