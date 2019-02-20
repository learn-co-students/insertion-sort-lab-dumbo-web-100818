function findMinAndRemove(array){
  let min = array[0]
  let minI = 0

  for(let i = 0; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i]
      minI = i
    }

  }
  array.splice(minI, 1)
  return min
}

function insertionSort(array){
  let news
  let sorts = []

  while (array.length != 0) {
    news = findMinAndRemove(array)
    sorts.push(news)
  }
  return sorts

}
