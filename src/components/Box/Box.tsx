import './box.scss';

interface BoxProps {
    title: string,
    children?: React.ReactNode
}

const Box = (props: BoxProps) => {
    return (
        <div className="box-wrapper">
            <h3>{props.title}</h3>
            {props.children}
        </div>
    )
}

export default Box;