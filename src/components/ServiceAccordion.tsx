import { Flex, IconButton, Separator, Text } from "@radix-ui/themes"
import { useEffect, useRef, useState, type ReactNode } from "react"
import { Star } from "../icons/star"
import { Arrow } from "../icons/arrow"
import { PrimaryHead } from "./Head"
import { formatMoney } from "../helpers/formatMoney"

export interface IServiceAccordion {
    rating: number
    badge?: ReactNode
    title: string
    services: string,
    image: string
    description: string[]
    priceBadge?: ReactNode
    accentPrice: [string, string]
    secondaryPrice: [string, string]

}

export const ServiceAccordion: React.FC<IServiceAccordion> = (props) => {
    const { rating, accentPrice, description, image, secondaryPrice, services, title, badge, priceBadge } = props;
    const [isOpen, setIsOpen] = useState(false);
    const contentRef = useRef<HTMLDivElement>(null);
    const [maxHeight, setMaxHeight] = useState('0px');

    useEffect(() => {
        if (contentRef.current) {
            setMaxHeight(isOpen ? `${contentRef.current.scrollHeight}px` : '0px');
        }
    }, [isOpen]);

    // При монтировании и изменении размера экрана проверяем ширину
    useEffect(() => {
        const checkWidth = () => {
            if (window.innerWidth >= 836) {
                setIsOpen(true);
            } else {
                setIsOpen(false);
            }
        };

        checkWidth();
        window.addEventListener("resize", checkWidth);
        return () => window.removeEventListener("resize", checkWidth);
    }, []);

    return (
        <Flex direction={'column'} px={'24px'} pt={'16px'} pb={'32px'} style={{ backgroundColor: '#ffffff', borderRadius: 12, maxWidth: 390 }}>
            {/* Верхняя часть с рейтингом и бейджем */}
            <Flex gap={'4px'} align={'center'}>
                <Star />
                <Text style={{ display: 'flex', placeContent: 'center', lineHeight: '19px', fontSize: '16px' }} weight={"bold"} >
                    {rating}
                </Text>
                {badge}
            </Flex>
            {/* Заголовок и кнопка */}
            <Flex pt={'20px'} justify={'between'}>
                <Flex direction={'column'} gap={'4px'}>
                    <Text style={{ lineHeight: '21px', fontSize: '18px' }} weight={'bold'}>
                        {title}
                    </Text>
                    <Text style={{ lineHeight: '14px', fontSize: '12px' }} >
                        {services}
                    </Text>
                </Flex>
                <IconButton
                    className="hide_expand"
                    onClick={() => setIsOpen(!isOpen)}
                    variant="outline"
                    style={{
                        borderRadius: '50%',
                        paddingLeft: !isOpen ? 2.5 : 0,
                        transform: isOpen ? 'rotate(90deg)' : 'none',
                        transition: 'transform 0.3s ease'
                    }}>
                    <Arrow />
                </IconButton>
            </Flex>

            {/* Контейнер с анимацией раскрытия */}
            <div
                ref={contentRef}
                style={{
                    maxHeight: maxHeight,
                    overflow: 'hidden',
                    transition: 'max-height 0.5s ease',
                }}
                aria-expanded={isOpen}
            >
                <Flex direction={'column'}>
                    <Flex justify={'center'} pt={'20px'}>
                        <img src={image} height={125} width={342} style={{ objectFit: 'cover', borderRadius: 14 }} />
                    </Flex>
                    <Flex justify={'start'} py={'20px'}>
                        <ul style={{ margin: 0, paddingInline: 24 }}>
                            {description.map((opt, idx) => (
                                <li key={idx}>
                                    <Text style={{ fontSize: 12, lineHeight: '14px' }}>{opt}</Text>
                                </li>
                            ))}
                        </ul>
                    </Flex>
                    <Separator color="gray" size="4" />
                    {priceBadge}
                    <Flex pt={'12px'} gap={'4px'} direction={'column'}>
                        <Flex justify={'between'}>
                            <PrimaryHead>{accentPrice[0]}</PrimaryHead>
                            <PrimaryHead>{formatMoney(accentPrice[1])}*</PrimaryHead>
                        </Flex>
                        <Flex justify={'between'}>
                            <Text weight={'medium'} style={{ fontSize: 14, lineHeight: '17px' }}>{secondaryPrice[0]}</Text>
                            <Text weight={'medium'} style={{ fontSize: 14, lineHeight: '17px' }}>{formatMoney(secondaryPrice[1])}*</Text>
                        </Flex>
                    </Flex>
                </Flex>
            </div>
        </Flex>
    );
};
