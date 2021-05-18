const CardGrid = (props) => {
    const {children} = props;

    return <div className="m-auto grid grid-cols-1 gap-4 max-w-md grid-flow-row lg:grid-cols-2 lg:max-w-4xl">
        {children}
    </div>
} 

export default CardGrid;