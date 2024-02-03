import '/src/components/Chips.css'
import Avatar from '/src/assets/Avatar.png'

interface ChipProps {
    Texto: string;
}

export const Chip = (props: ChipProps) => {
    return (
        <>
            <div className="chip">
                <img src={Avatar} alt="Person" width="96" height="96" />
                {props.Texto}
            </div>
        </>
    )
}