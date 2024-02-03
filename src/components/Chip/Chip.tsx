import '/src/components/Chip/Chip.css'

//#region 
import Android from '/src/components/Chip/Assets/Android.png'
import Blazor from '/src/components/Chip/Assets/Blazor.png'
import Bootstrap from '/src/components/Chip/Assets/Bootstrap.png'
import CSharp from '/src/components/Chip/Assets/CSharp.png'
import CSS3 from '/src/components/Chip/Assets/CSS3.png'
import Dart from '/src/components/Chip/Assets/Dart.png'
import Delphi from '/src/components/Chip/Assets/delphi.png'
import ExcelVBA from '/src/components/Chip/Assets/ExcelVBA.png'
import Firebase from '/src/components/Chip/Assets/Firebase.png'
import Flutter from '/src/components/Chip/Assets/Flutter.png'
import HTML5 from '/src/components/Chip/Assets/HTML5.png'
import iOS from '/src/components/Chip/Assets/iOS.png'
import Javascript from '/src/components/Chip/Assets/JavaScript.png'
import Lazarus from '/src/components/Chip/Assets/lazarus.png'
import Linux from '/src/components/Chip/Assets/Linux.png'
import MongoDB from '/src/components/Chip/Assets/MongoDB.png'
import Multiplatform from '/src/components/Chip/Assets/Multiplatform.png'
import Python from '/src/components/Chip/Assets/Python.png'
import ReactLogo from '/src/components/Chip/Assets/ReactJS.png'
import Rust from '/src/components/Chip/Assets/Rust.png'
import SQLite from '/src/components/Chip/Assets/SQLLite.png'
import Typescript from '/src/components/Chip/Assets/Typescript.png'
import Vite from '/src/components/Chip/Assets/Vite.png'
import Windows from '/src/components/Chip/Assets/Windows.png'
//#endregion

export enum ChipKind {
    Android = 1,
    Blazor = 2,
    Bootstrap = 3,
    CSharp = 4,
    CSS3 = 5,
    Dart = 6,
    Delphi = 7,
    ExcelVBA = 8,
    Firebase = 9,
    Flutter = 10,
    HTML5 = 11,
    iOS = 12,
    Javascript = 13,
    Lazarus = 14,
    Linux = 15,
    MongoDB = 16,
    Multiplatform = 17,
    MySQL = 18,
    Python = 19,
    ReactJS = 20,
    Rust = 21,
    SQLite = 22,
    Typescript = 23,
    Vite = 24,
    Windows = 25
}

interface ChipProps {
    Kind: ChipKind
}

export const Chip = (props: ChipProps) => {
    function GetImage(): string{
        switch(props.Kind) {
            case ChipKind.Android:
                return {Android};
        }
    }

    return (
            switch(props.Kind){
                case Android:
                    (
                        <div className="chip">
                        <img src={Android} alt="Person" width="96" height="96" />
                        
                    </div> 
                    ) 
                    break;
                   
            }
           }
            <div className="chip">
                <img src={Avatar} alt="Person" width="96" height="96" />
                
            </div>
    )
}