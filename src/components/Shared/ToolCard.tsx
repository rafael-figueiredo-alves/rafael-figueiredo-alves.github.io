import '/src/components/Shared/ToolCard.css'
import { ToolImg, Tools } from '../../models/Interfaces'

//#region Imagens
import Access from '/src/assets/ToolImg/Access.png'
import Bitbucket from '/src/assets/ToolImg/Bitbucket.png'
import ChatGPT from '/src/assets/ToolImg/ChatGTP.png'
import Chrome from '/src/assets/ToolImg/Chrome.png'
import Copilot from '/src/assets/ToolImg/Copilot.png'
import Edge from '/src/assets/ToolImg/Edge.png'
import Excel from '/src/assets/ToolImg/Excel.png'
import Figma from '/src/assets/ToolImg/Figma.png'
import Firebase from '/src/assets/ToolImg/Firebase.png'
import Gimp from '/src/assets/ToolImg/Gimp.png'
import Git from '/src/assets/ToolImg/Git.png'
import Github from '/src/assets/ToolImg/Github.png'
import HeidiSQL from '/src/assets/ToolImg/HeidiSQL.png'
import Lunacy from '/src/assets/ToolImg/Lunacy.png'
import MariaDB from '/src/assets/ToolImg/MariaDB.png'
import MongoDB from '/src/assets/ToolImg/MongoDB.png'
import MySQL from '/src/assets/ToolImg/MySql.png'
import NPM from '/src/assets/ToolImg/NPM.png'
import NuGet from '/src/assets/ToolImg/Nuget.png'
import Outlook from '/src/assets/ToolImg/Outlook.png'
import PenPot from '/src/assets/ToolImg/PenPot.png'
import PowerPoint from '/src/assets/ToolImg/PowerPoint.png'
import Publisher from '/src/assets/ToolImg/Publisher.png'
import RadStudio from '/src/assets/ToolImg/RadStudio.png'
import SQLite from '/src/assets/ToolImg/SQLite.png'
import SQLServer from '/src/assets/ToolImg/SQLServer.png'
import Thunderbird from '/src/assets/ToolImg/Thunderbird.png'
import VirtualBox from '/src/assets/ToolImg/VirtualBox.png'
import VS from '/src/assets/ToolImg/VS.png'
import VSCode from '/src/assets/ToolImg/VSCode.png'
import Word from '/src/assets/ToolImg/Word.png'
//#endregion

export const ToolCard = ({Tool}:{Tool: Tools}) => {
    function GetImage(): string{
        
        let ImageSrc: string;

        switch(Tool.ToolImg) {
            case ToolImg.Access:
                ImageSrc = Access;
                break; 
            case ToolImg.Bitbucket:
                ImageSrc = Bitbucket;
                break;    
            case ToolImg.ChatGPT:
                ImageSrc = ChatGPT;
                break;            
            case ToolImg.Chrome:
                ImageSrc = Chrome;
                break;            
            case ToolImg.Copilot:
                ImageSrc = Copilot;
                break;            
            case ToolImg.Edge:
                ImageSrc = Edge;
                break;          
            case ToolImg.Excel:
                ImageSrc = Excel;
                break;          
            case ToolImg.Figma:
                ImageSrc = Figma;
                break;    
            case ToolImg.Firebase:
                ImageSrc = Firebase;
                break;             
            case ToolImg.GIMP:
                ImageSrc = Gimp;
                break;         
            case ToolImg.Git:
                ImageSrc = Git;
                break;        
            case ToolImg.Github:
                ImageSrc = Github;
                break;           
            case ToolImg.HeidiSQL:
                ImageSrc = HeidiSQL;
                break;                                
            case ToolImg.Lunacy:
                ImageSrc = Lunacy;
                break;           
            case ToolImg.MariaDB:
                ImageSrc = MariaDB;
                break;            
            case ToolImg.MongoDB:
                ImageSrc = MongoDB;
                break;            
            case ToolImg.MySQL:
                ImageSrc = MySQL;
                break;          
            case ToolImg.NPM:
                ImageSrc = NPM;
                break;       
            case ToolImg.NuGet:
                ImageSrc = NuGet;
                break;          
            case ToolImg.Outlook:
                ImageSrc = Outlook;
                break;            
            case ToolImg.PenPot:
                ImageSrc = PenPot;
                break;           
            case ToolImg.PowerPoint:
                ImageSrc = PowerPoint;
                break;
            case ToolImg.Publisher:
                ImageSrc = Publisher;
                break;              
            case ToolImg.RadStudio:
                ImageSrc = RadStudio;
                break;              
            case ToolImg.SQLLite:
                ImageSrc = SQLite;
                break;           
            case ToolImg.SQLManagement:
                ImageSrc = SQLServer;
                break;               
            case ToolImg.SQLServer:
                ImageSrc = SQLServer;
                break;              
            case ToolImg.Thunderbird:
                ImageSrc = Thunderbird;
                break;                
            case ToolImg.VS:
                ImageSrc = VS;
                break;       
            case ToolImg.VSCode:
                ImageSrc = VSCode;
                break;            
            case ToolImg.VirtualBox:
                ImageSrc = VirtualBox;
                break;               
            case ToolImg.Word:
                ImageSrc = Word;
                break;                                                
            default:
                ImageSrc = Access;
        };

        return ImageSrc;
    }

    return(
        <div className="col-xl-4">
        <div className="card-tool card-margin">
            <div className="card-header-tool no-border">
                <img src={GetImage()} height={32} width={32} />
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