type Maybe<T> = T | undefined

type ReactFCWithClassname<T> = React.FC<T & { className?: string }>
