interface PanelProps {
  categories: any
}

const Panel = ({ categories }: PanelProps) => {
  console.log(categories, "categories")
  return <div>Panel</div>
}

export default Panel
