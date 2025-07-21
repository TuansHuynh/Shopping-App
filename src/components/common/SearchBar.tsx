// File: src/components/common/SearchBar.tsx
import '../style/search_bar.scss'
import { Icons } from "./Icons"

type Props = {
    value: string
    onChange: (value: string) => void
}

export default function SearchBar({ value, onChange }: Props) {
    return (
        <div className="search search_bar">
            <input
                type="text"
                placeholder="Search..."
                value={value}
                onChange={(e) => onChange(e.target.value)}
            />
            <Icons.Search className='icon_search' />
        </div>
    )
}
