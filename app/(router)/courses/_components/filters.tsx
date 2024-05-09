import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const Filters = () => {
    return (
        <Select>
            <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filter" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="light">All</SelectItem>
                <SelectItem value="dark">Paid</SelectItem>
                <SelectItem value="system">Free</SelectItem>
            </SelectContent>
        </Select>
    )
}

export default Filters