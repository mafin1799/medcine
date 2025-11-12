export const formatMoney = (value: number | string, decimals?: number) => {
  const numericValue = Number(value)
  
  if (!Number.isFinite(numericValue)) return ''
  
  // Округляем значение до нужного количества знаков после запятой
  const roundedValue = Math.round(numericValue) === 0 ? 0 : Math.round(numericValue)
  
  const options: Intl.NumberFormatOptions = {
    currency: 'RUB',
    // задаём минимальное количество цифр после запятой
    maximumFractionDigits: decimals ?? 0,
    minimumFractionDigits: decimals ?? 0, 
    style: 'currency' // задаём максимальное количество цифр после запятой
  }
  
  const formatter = new Intl.NumberFormat('ru-RU', options)

  /**
   * Заменяем пробел на стандартный
   */
  return formatter.format(roundedValue).replace(/\u00A0/g, ' ') // Заменяем неразрывный пробел
}