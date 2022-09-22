import { useEffect, useState } from 'react'

export function UseEffectTest() {
  const [list, setList] = useState<String[]>([])
  const [filter, setFilter] = useState('')

  useEffect(() => {
    fetch('https://api.github.com/users/pedrojorge148/repos')
      .then((response) => response.json())
      .then((data) => {
        setList(data.map((item: any) => item.full_name))
      })
  }, [])

  const filteredList = list.filter((item) => item.includes(filter))

  function addToList() {
    setList((state) => [...state, 'Novo Item'])
  }

  return (
    <div>
      <input
        type="text"
        onChange={(e) => setFilter(e.target.value)}
        value={filter}
      />
      <ul>
        {list.map((item) => (
          <li>{item}</li>
        ))}
      </ul>

      {'------------------------------------------'}

      <ul>
        {filteredList.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
      <button onClick={addToList}>Add to list</button>
    </div>
  )
}
