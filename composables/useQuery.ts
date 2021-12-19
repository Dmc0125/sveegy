const useQuery = (queryParam: string, defaultValue = '') => {
  const query = ref(defaultValue)

  onMounted(() => {
    const route = useRoute()
    const param = route.query[queryParam]

    if (param && typeof param === 'string') {
      query.value = param
    }
  })

  return query
}

export default useQuery
