import { useSettings } from "@/context/SettingContext"
import useWindowDimensions from "@/hooks/useWindowDimensions"

function GitHubCorner() {
    useSettings()
    useWindowDimensions()
}

export default GitHubCorner
