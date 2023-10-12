const CurrentCircle = ({ last }: { last?: boolean }) => {
    return (
        <svg width={last ? 50 : 30} height="30" xmlns="http://www.w3.org/2000/svg">
            <circle className="fill-main" cx="15" cy="15" r="15" />
            <circle className="fill-white" cx="15" cy="15" r="5" />
        </svg>
    );
}

export default CurrentCircle;