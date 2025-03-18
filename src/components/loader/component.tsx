import clsx from "clsx"
import styles from "./styles.module.scss"

interface LoaderProps {
  classNames: string[]
}

const Loader = ({ classNames }: LoaderProps) => {
  return (
    <div
      className={clsx(
        styles.root,
        classNames?.map(style => styles[style]),
      )}
    />
  )
}

export default Loader
