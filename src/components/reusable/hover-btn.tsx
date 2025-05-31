import { Button } from "../ui/button"
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "../ui/hover-card"

export function HoverBtn({ text, options }: { text: string; options: string[]; }) {
    return (
        <HoverCard>
            <HoverCardTrigger asChild>
                <Button variant="link" className="text-base font-semibold text-[#003a66] hover:text-[#e02454] cursor-pointer">{text}</Button>
            </HoverCardTrigger>
            <HoverCardContent className="w-80">
                <ul>
                    {options.length > 0 && options.map((val, idx) => (
                        <li
                            key={idx}
                            className={`${idx == 0 ? 'pb-3 border-b-1 border-b-[#0000005d]' :
                                idx === options.length - 1 ? 'pt-3' : 'py-3 border-b-1 border-b-[#0000005d]'}
                                cursor-pointer hover:text-[#e02454] text-sm`}>
                            {val}</li>
                    ))}
                </ul>
            </HoverCardContent>
        </HoverCard>
    )
}
