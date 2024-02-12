import { useContext } from 'react'
import { LangFramework, LanguagesFrameworks } from '../../models/Interfaces'
import AspNetCard from '/src/assets/Cards/AspNetCard.png'
import BlazorCard from '/src/assets/Cards/BlazorCard.png'
import BootstrapCard from '/src/assets/Cards/BootstrapCard.png'
import CSharpCard from '/src/assets/Cards/CSharpCard.png'
import DartFlutterCard from '/src/assets/Cards/DartFlutterCard.png'
import DelphiCard from '/src/assets/Cards/DelphiCard.png'
import ExcelCard from '/src/assets/Cards/ExcelCard.png'
import HTMLCSSCard from '/src/assets/Cards/HTMLCSSCard.png'
import JavascriptCard from '/src/assets/Cards/JavascriptCard.png'
import LazarusCard from '/src/assets/Cards/LazarusCard.png'
import MaterializeCard from '/src/assets/Cards/MaterializeCard.png'
import NextCard from '/src/assets/Cards/NextCard.png'
import NodeCard from '/src/assets/Cards/NodeJSCard.png'
import PythonCard from '/src/assets/Cards/PythonCard.png'
import ReactCard from '/src/assets/Cards/ReactCard.png'
import RustCard from '/src/assets/Cards/RustCard.png'
import TypescriptCard from '/src/assets/Cards/TypescriptCard.png'
import ViteCard from '/src/assets/Cards/ViteCard.png'
import { LanguageContext } from '../../contexts/LanguageContext'

export const LanguageFrameworkCards = ({Content}: {Content: LanguagesFrameworks[]}) => {
    return (
        <div className="row row-cols-1 row-cols-md-2 g-4">

        {Content.map(content => (
            <LangCard Card={content} />
        ))}

        </div>
    )
}

const LangCard = ({Card}:{Card:LanguagesFrameworks}) => {
    const {Translate} = useContext(LanguageContext)

    function GetImage(ImageEnum: LangFramework): string {
        
        let ImageSrc: string;

        switch (ImageEnum) {
            case LangFramework.AspNet:
                ImageSrc = AspNetCard;
                break;
            case LangFramework.Blazor :
                ImageSrc = BlazorCard;
                break;               
            case LangFramework.Bootstrap:
                ImageSrc = BootstrapCard;
                break;                 
            case LangFramework.CSharp:
                ImageSrc = CSharpCard;
                break;               
            case LangFramework.DartFlutter:
                ImageSrc = DartFlutterCard;
                break;                 
            case LangFramework.Delphi:
                ImageSrc = DelphiCard;
                break;               
            case LangFramework.Excel:
                ImageSrc = ExcelCard;
                break;              
            case LangFramework.HTMLCSS:
                ImageSrc = HTMLCSSCard;
                break;                
            case LangFramework.Javascript:
                ImageSrc = JavascriptCard;
                break;                   
            case LangFramework.Lazarus:
                ImageSrc = LazarusCard;
                break;                
            case LangFramework.Materialize:
                ImageSrc = MaterializeCard;
                break;                
            case LangFramework.NextJS:
                ImageSrc = NextCard;
                break;             
            case LangFramework.NodeJS:
                ImageSrc = NodeCard;
                break;             
            case LangFramework.Python:
                ImageSrc = PythonCard;
                break;               
            case LangFramework.React:
                ImageSrc = ReactCard;
                break;              
            case LangFramework.Rust:
                ImageSrc = RustCard;
                break;             
            case LangFramework.Typescript:
                ImageSrc = TypescriptCard;
                break;                   
            case LangFramework.Vite:
                ImageSrc = ViteCard;
                break;                                
            default:
                ImageSrc = AspNetCard;
        };

        return ImageSrc;
    }

    return(
        <div className="col">
        <div className="card h-100">
            <img src={GetImage(Card.LangFramework)} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{Card.Name}</h5>
                <p className="card-text">{Card.Description}</p>
                <br />
                <strong>{Translate("Languages.Skills", false)}</strong>
                <ul>
                {Card.Skills.map(skill => (
                    <li>{skill}</li>
                ))}
                </ul>                
            </div>
        </div>
    </div>        
    )
}