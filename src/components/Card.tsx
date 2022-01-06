import {FC} from "react";

export enum CardVariant {
    primary = 'prymary',
    secondary = 'secondary'
}

interface ICardProps {
    height: string
    width: string
    onClick: (num: number) => void
    variant: CardVariant
}

export const Card: FC<ICardProps> = (
    {
        height,
        width,
        variant,
        onClick,
        children
    }) => {
    return (
        <div style={{height, width,
            border: variant === CardVariant.primary ? '1px solid black' : '',
            background: variant === CardVariant.secondary ? 'lightgray' : ''
        }}
            onClick={() => onClick(5)}
        >
            {children}
        </div>
    )
}