import { useTheme } from '../hooks/useTheme'
import './ThemeSelector.css'
import modeToggle from '../assets/darkmode_icon.svg'

const themeColors = ['#58249c', '#249c6b', '#b70233', 'blue'];

export default function ThemeSelector() {

    const { changeColor, changeMode, mode } = useTheme();

    const toggleMode = () => {
        changeMode(mode === 'dark' ? 'light': 'dark');
    }

    return (
        <div className='theme-selector'>
            <div className='mode-toggle'>
                <img
                src={modeToggle}
                alt="dark mode toggle"
                onClick={toggleMode}
                style={{filter: mode === 'dark' ? 'invert(100%)': 'invert(20%)'}}
                />
            </div>
            <div className='theme-buttons'>
                {themeColors.map(color => (
                    <div
                        key={color}
                        onClick={() => changeColor(color)}
                        style={{background: color}}
                    />
                ))}
            </div>
        </div>
    )
}