const formDOM = document.querySelector('.add-form')
const nameDOM = document.querySelector('.name-input')
const codeDOM = document.querySelector('.code-input')

formDOM.addEventListener('submit', async (e) => {
  e.preventDefault()
  const name = nameDOM.value
  const code = codeDOM.value
  try {
    await axios.post('/api/v1', {name, code})
    window.location.href="./product.html"
  } catch (error) {
    alert('Please input the data')
  }
})