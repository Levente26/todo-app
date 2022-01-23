import './themeSelector.scss'
import { useTheme } from '../hooks/useTheme'
import ModeSwitch from '../asserts/mode-switch.svg'

const themeColors = ['#d9e900', '#17c700', '#00a3d4']

const ThemeSelector = () => {

    const { changeColor, changeMode, mode } = useTheme()
    
    const toggleMode = () => {
        changeMode(mode === 'dark' ? 'light' : 'dark')
    } 

    return (
        <div className={`App ${mode} theme-selector display-f pt-2 pb-1`}>
            <div className='mode-toggle ml-1'>
                <img 
                    src={ModeSwitch}
                    alt='light/dark toggle icon'
                    onClick={toggleMode}
                    style={{ filter: mode === 'dark' ? 'invert(100%)' : 'invert(20%)'}}
                />
            </div>
            <div className='theme-buttons '>
                {themeColors.map(color => (
                    <div 
                        className="mr-1 display-i-b br-full"
                        key={color}
                        onClick={() => changeColor(color)}
                        style={{ background: color }}
                    />
                ))}
            </div>
        </div>
    )
}
export default ThemeSelector