import '/src/components/Shared/ToolCard.css'
import Teste from '/src/components/Shared/Chip/Assets/delphi.png'
import { Tools } from '../../models/Interfaces'

export const ToolCard = ({Tool}:{Tool: Tools}) => {
    return(
        <div className="col-xl-4">
        <div className="card card-margin">
            <div className="card-header no-border">
                <img src={Teste} height={32} width={32}/>
                <h5 className="card-title" style={{marginBottom: "0px", marginLeft: "3px"}}>{Tool.Tool}</h5>
            </div>
            <div className="card-body pt-0">
                <div className="widget-49">
                    <div className="widget-49-title-wrapper">
                        <div className="widget-49-meeting-info">
                            <span className="widget-49-pro-title">{Tool.Description}</span>
                        </div>
                    </div>
                    <ol className="widget-49-meeting-points">
                        {Tool.Skills.map((Skill: string) =>
                            <li className="widget-49-meeting-item"><span>{Skill}</span></li>
                        )}
                    </ol>
                </div>
            </div>
        </div>
    </div>
    )    
}