import { Text } from "@radix-ui/themes"
import type { PropsWithChildren } from "react"

export const PrimaryHead: React.FC<PropsWithChildren> = ({children}) => {
    return(
          <Text color='blue' weight={'bold'} style={{ fontSize: 23, lineHeight: '29px' }}>{children}</Text>
    )
}