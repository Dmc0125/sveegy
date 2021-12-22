const createIconName = (id: string) => `${id[0].toUpperCase()}${id.slice(1).replaceAll('-', ' ')}`

export default createIconName
