import { useEffect, useState } from "react"

const Panel = () => {
  const [data, setData] = useState<any>()
  useEffect(() => {
    fetch("https://express-shina.ru/vacancy/catalog")
      .then(res => res.json())
      .then(data => console.log(data, "data"))
  }, [])
  return <div>Panel</div>
}

export default Panel
