import type { IServiceAccordion } from "../components/ServiceAccordion";
import serviceImage from '../assets/orto.png'
import { Badge, Text } from "@radix-ui/themes";

export const services: IServiceAccordion[] = [
    {
        accentPrice: ['Тула', '14365'],
        description: ['Металлокерамика', 'Циркониевые коронки', 'Имплантация', 'Съёмные протезы'],
        image: serviceImage,
        rating: 4.8,
        secondaryPrice: ['Москва', '16900'],
        services: 'Протезирование, коронки, мосты, имплантация',
        title: 'Ортопедическая стоматология',
        badge: <Badge color="blue">Выгодная цена</Badge>,
        priceBadge:
            <div style={{ borderRadius: 7, height: 23, marginTop: 20, padding: '4px 10px 4px 10px', textAlign: 'center', backgroundColor: '#FFF832', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ fontWeight: 600, fontSize: 12, lineHeight: '14px' }}>15% выгоды</Text>
            </div>
    },
    {
        accentPrice: ['Тула', '17500'],
        description: ['Виниры', 'Отбеливание', 'Реставрация', 'Художественная реставрация'],
        image: serviceImage,
        rating: 5,
        secondaryPrice: ['Москва', '30700'],
        services: 'Виниры, отбеливание, реставрация улыбки',
        title: 'Эстетическая стоматология',
        badge: <Badge color="blue">Выгодная цена</Badge>,
        priceBadge: <></>
    },
    {
        accentPrice: ['Нижний Новгород', '13340'],
        description: ['Сложное удаление', 'Синус-лифтинг', 'Костная пластика', 'Имплантация'],
        image: serviceImage,
        rating: 4.6,
        secondaryPrice: ['Москва', '16900'],
        services: 'Удаление зубов, имплантация, костная пластика',
        title: 'Хирургическая стоматология',
        badge: <></>,
        priceBadge: <></>
    }
]