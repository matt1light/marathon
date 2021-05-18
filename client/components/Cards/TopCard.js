import Card from './Card';

export const TopCard = (props) => {
    const {children} = props;
    return <Card className="max-w-2xl m-auto">
        {children}
    </Card>
}

export default TopCard;