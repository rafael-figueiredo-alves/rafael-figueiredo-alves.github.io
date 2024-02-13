import '/src/components/Shared/Chip/Chip.css'

//#region 
import Android from '/src/components/Shared/Chip/Assets/Android.png'
import Blazor from '/src/components/Shared/Chip/Assets/Blazor.png'
import Bootstrap from '/src/components/Shared/Chip/Assets/Bootstrap.png'
import CSharp from '/src/components/Shared/Chip/Assets/CSharp.png'
import CSS3 from '/src/components/Shared/Chip/Assets/CSS3.png'
import Dart from '/src/components/Shared/Chip/Assets/Dart.png'
import Delphi from '/src/components/Shared/Chip/Assets/delphi.png'
import ExcelVBA from '/src/components/Shared/Chip/Assets/ExcelVBA.png'
import Firebase from '/src/components/Shared/Chip/Assets/Firebase.png'
import Flutter from '/src/components/Shared/Chip/Assets/Flutter.png'
import HTML5 from '/src/components/Shared/Chip/Assets/HTML5.png'
import iOS from '/src/components/Shared/Chip/Assets/iOS.png'
import Javascript from '/src/components/Shared/Chip/Assets/JavaScript.png'
import Lazarus from '/src/components/Shared/Chip/Assets/lazarus.png'
import Linux from '/src/components/Shared/Chip/Assets/Linux.png'
import MongoDB from '/src/components/Shared/Chip/Assets/MongoDB.png'
import Multiplatform from '/src/components/Shared/Chip/Assets/Multiplatform.png'
import MySQL from '/src/components/Shared/Chip/Assets/MySQL.png'
import Python from '/src/components/Shared/Chip/Assets/Python.png'
import ReactLogo from '/src/components/Shared/Chip/Assets/ReactJS.png'
import Rust from '/src/components/Shared/Chip/Assets/Rust.png'
import SQLite from '/src/components/Shared/Chip/Assets/SQLLite.png'
import Typescript from '/src/components/Shared/Chip/Assets/Typescript.png'
import Vite from '/src/components/Shared/Chip/Assets/Vite.png'
import Windows from '/src/components/Shared/Chip/Assets/Windows.png'
import Web from '/src/components/Shared/Chip/Assets/Web.png'
import { ChipKind, ChipProps } from '../../../models/Interfaces'
//#endregion

export const Chip = (props: ChipProps) => {
    function GetImage(): string{
        
        let ImageSrc: string;

        switch(props.Kind) {
            case ChipKind.Android:
                ImageSrc = Android;
                break;
            case ChipKind.Blazor:
                ImageSrc = Blazor;
                break;
            case ChipKind.Bootstrap:
                ImageSrc = Bootstrap;
                break;
            case ChipKind.CSharp:
                ImageSrc = CSharp;
                break;
            case ChipKind.CSS3:
                ImageSrc = CSS3;
                break;
            case ChipKind.Dart:
                ImageSrc = Dart;
                break;
            case ChipKind.Delphi:
                ImageSrc = Delphi;
                break;
            case ChipKind.ExcelVBA:
                ImageSrc = ExcelVBA;
                break;
            case ChipKind.Firebase:
                ImageSrc = Firebase;
                break;
            case ChipKind.Flutter:
                ImageSrc = Flutter;
                break;
            case ChipKind.HTML5:
                ImageSrc = HTML5;
                break;
            case ChipKind.iOS:
                ImageSrc = iOS;
                break;
            case ChipKind.Javascript:
                ImageSrc = Javascript;
                break;
            case ChipKind.Lazarus:
                ImageSrc = Lazarus;
                break;
            case ChipKind.Linux:
                ImageSrc = Linux;
                break;
            case ChipKind.MongoDB:
                ImageSrc = MongoDB;
                break;
            case ChipKind.Multiplatform:
                ImageSrc = Multiplatform;
                break;
            case ChipKind.MySQL:
                ImageSrc = MySQL;
                break;
            case ChipKind.Python:
                ImageSrc = Python;
                break;
            case ChipKind.ReactJS:
                ImageSrc = ReactLogo;
                break;
            case ChipKind.Rust:
                ImageSrc = Rust;
                break;
            case ChipKind.SQLite:
                ImageSrc = SQLite;
                break;
            case ChipKind.Typescript:
                ImageSrc = Typescript;
                break;
            case ChipKind.Vite:
                ImageSrc = Vite;
                break;
            case ChipKind.Windows:
                ImageSrc = Windows;
                break;
            case ChipKind.Web:
                ImageSrc = Web;
                break;                
            default:
                ImageSrc = Multiplatform;
        };

        return ImageSrc;
    }

    function GetText(): string{
        let Texto: string;

        switch(props.Kind) {
            case ChipKind.Android:
                Texto = 'Android';
                break;
            case ChipKind.Blazor:
                Texto = 'Blazor';
                break;
            case ChipKind.Bootstrap:
                Texto = 'Bootstrap';
                break;
            case ChipKind.CSharp:
                Texto = 'C#';
                break;
            case ChipKind.CSS3:
                Texto = 'CSS3';
                break;
            case ChipKind.Dart:
                Texto = 'Dart';
                break;
            case ChipKind.Delphi:
                Texto = 'Delphi';
                break;
            case ChipKind.ExcelVBA:
                Texto = 'Excel VBA';
                break;
            case ChipKind.Firebase:
                Texto = 'Firebase';
                break;
            case ChipKind.Flutter:
                Texto = 'Flutter';
                break;
            case ChipKind.HTML5:
                Texto = 'HTML5';
                break;
            case ChipKind.iOS:
                Texto = 'iOS';
                break;
            case ChipKind.Javascript:
                Texto = 'Javascript';
                break;
            case ChipKind.Lazarus:
                Texto = 'Lazarus';
                break;
            case ChipKind.Linux:
                Texto = 'Linux';
                break;
            case ChipKind.MongoDB:
                Texto = 'MongoDB';
                break;
            case ChipKind.Multiplatform:
                Texto = 'Multi-platform';
                break;
            case ChipKind.MySQL:
                Texto = 'MySQL';
                break;
            case ChipKind.Python:
                Texto = 'Python';
                break;
            case ChipKind.ReactJS:
                Texto = 'React JS';
                break;
            case ChipKind.Rust:
                Texto = 'Rust';
                break;
            case ChipKind.SQLite:
                Texto = 'SQLite';
                break;
            case ChipKind.Typescript:
                Texto = 'Typescript';
                break;
            case ChipKind.Vite:
                Texto = 'Vite';
                break;
            case ChipKind.Windows:
                Texto = 'Windows';
                break;
            default:
                Texto = Multiplatform;
        };

        return Texto;
    }

    return (
            <div className="chip">
                <img src={GetImage()} alt={GetText()} width="96" height="96" />
                {GetText()}
            </div>
    )
}