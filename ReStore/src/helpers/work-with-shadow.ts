const addShadow = (setClassName : React.Dispatch<React.SetStateAction<string>>) => {
    setClassName("book-list-item shadow-lg bg-white rounded");
}

const returnUsualClass = (setClassName : React.Dispatch<React.SetStateAction<string>>) => {
    setClassName("book-list-item")
}

export { addShadow, returnUsualClass }