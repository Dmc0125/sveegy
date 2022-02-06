const formatToDisplayName = (str: string) => `${str[0].toUpperCase()}${str.slice(1).replace(/(-)/g, ' ')}`

export default formatToDisplayName
