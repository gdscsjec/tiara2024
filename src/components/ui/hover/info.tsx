import { CalendarIcon } from "@radix-ui/react-icons"
import {InfoCircleFilled} from '@ant-design/icons';

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"

function Info({info}:{info:string}) {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button className="border-none ml-0" variant={null} ><InfoCircleFilled /></Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="flex justify-between space-x-4">
          {info}
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}

export default Info;