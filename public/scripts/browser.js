const productDOM = document.querySelector('.list-product > table > tbody')


const showProduct = async () => {
  try {
    const {
      data: { tasks },
    } = await axios.get('/api/v1')
    if(tasks.length < 1) {
      productDOM.innerHTML = `
        <tr>
          <th>-</th>
          <th>-</th>
          <th>-</th>
        </tr>
      `
      return 
    }
    const allTasks = tasks.map((task) => {
      const { name, _id:taskID, code} = task
      return `
        <tr>
          <th>${code}</th>
          <th>${name}</th>
          <th><button type="button" class="deleteBtn" data-id="${taskID}">delete</button></th>
        </tr>
      `
    }).join('')
    productDOM.innerHTML = allTasks
  } catch (error) {
    console.log(error);
    productDOM.innerHTML = `<h1>Error</h1>`
  }
}

showProduct()


// Delete Product

productDOM.addEventListener('click', async (e) => {
  const el = e.target
  if(el.classList.contains('deleteBtn')) {
    const id = el.dataset.id
    try {
      await axios.delete(`/api/v1/${id}`)
      showProduct()
    } catch (error) {
      console.log(error);
    }
  }
})


