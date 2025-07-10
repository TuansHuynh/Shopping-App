import '../style/search_bar.scss'
import { Icons } from "./Icons";

export default function SearchBar() {
    return (
        <div className="search search_bar">
            <input type="text" placeholder="Search..."/>
            <Icons.Search className='icon_search'/>
        </div>
    )
}