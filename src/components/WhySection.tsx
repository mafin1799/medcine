import { Section, Text } from "@radix-ui/themes"
import { Chechmark } from "../icons/checkmark"
import type React from "react"

interface IWhySectionProps {
    title: string
    description: string
}
export const WhySection: React.FC<IWhySectionProps> = ({ title, description }) => {

    return (
        <Section py={'0'} style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'column' }}>
            <Chechmark />
            <Text weight={'bold'} style={{ fontSize: 18, lineHeight: '21px', paddingTop: 12 }}>{title}</Text>
            <Text style={{ fontSize: 14, lineHeight: '17px', paddingTop: 16, textAlign: 'center', paddingInline: 20, maxWidth: 380 }}>{description}</Text>
        </Section>
    )
}