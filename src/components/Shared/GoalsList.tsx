import { Goals } from "../../models/Interfaces";

export const GoalsList = ({ Goals }: { Goals: Goals[] }) => {
    return (
        <>
            {Goals.map((Goal,indice) => (
                <p key={indice} style={{ fontSize: '1rem',marginBottom: '0rem', marginLeft: '10px' }}><i className={Goal.Reached ? "fa-regular fa-circle-check" : "fa-regular fa-circle"} /> {Goal.Goal}</p>
            ))}
        </>
    )
}