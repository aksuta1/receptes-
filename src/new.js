useEffect( () => {
  async function fetchData() {
    const response = await fetch(https://api.edamam.com/api/recipes/v2?type=public&q=${wordSubmitted}&app_id=${MY_ID}&app_key=${MY_KEY})
    const data = await response.json()
    setMyRecipies(data.hits)
    setMyFiltred(data.hits)
  }
  fetchData()
},[wordSubmitted])