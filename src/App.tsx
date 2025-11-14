/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef, useState } from 'react'
import {
  Box,
  Button,
  Checkbox,
  Dialog,
  Flex,
  Link,
  Section,
  Text,
  TextField
} from '@radix-ui/themes'
import bannerImage from './assets/image.webp'
import { PrimaryHead } from './components/Head'
import { ServiceAccordion } from './components/ServiceAccordion'
import { WhySection } from './components/WhySection'
import { services } from './data/services'
import { whyData } from './data/why'
import { Controller, useForm } from 'react-hook-form'
import axios from 'axios'

/**
 * Генерирует UUID версии 4
 * @returns {string} UUID в формате 8-4-4-4-12 шестнадцатеричных символов
 */
function generateUUIDv4(): string {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = (crypto.getRandomValues(new Uint8Array(1))[0] & 0xf) >> (c === 'x' ? 0 : 1)
    const v = c === 'x' ? r : (r & 0x3) | 0x8
    return v.toString(16)
  })
}


function App() {
  const formRef = useRef<HTMLDivElement>(null)
  const searchParams = new URLSearchParams(window.location.search);

  // Извлекаем значение параметра region
  const region = searchParams.get('region');

  const scrollToForm = async () => {
    /**
     * Тут отправить событие scrollDown
     */
    formRef.current?.scrollIntoView({ behavior: 'smooth' });

    const response = await axios.get('https://www.za-zdoroviem.ru/count.php', { params: { referer: document?.referrer, event: 'scrolldown', region } })
    const data = response.data

    console.log(data)
  }

  const [isOpenSuccess, setIsOpenSuccess] = useState(false)

  const {
    control,
    handleSubmit
  } = useForm()

  const onSubmit = async (data: {name: string, phone: string}) => {
    const {name, phone} = data
    setIsOpenSuccess(true)
    const response = await axios.get('https://www.za-zdoroviem.ru/count.php', { params: { event: 'click', referer: document?.referrer, region, name, phone} })

    if (response) {
      const data = response.data
      console.log('GET response:', data);
    }
  }

  const handleGetLogin = async () => {
    const response = await axios.get('https://www.za-zdoroviem.ru/count.php', { params: { referer: document?.referrer, event: 'enter', region } })
    const data = response.data
    console.log(data)
  }

  useEffect(() => {
    const localValue = localStorage.getItem('uuid')

    if (!localValue) {
      const uuid = generateUUIDv4()
      localStorage.setItem('uuid', uuid)
      /**
       * Отправляем событие о входе
       */
      handleGetLogin()

    }
  }, [])

  return (
    <Flex direction='column' maxWidth='100vw' style={{ backgroundColor: '#F2F7FF' }} width='100vw'>
      <Section
        py='0'
        style={{
          overflow: 'hidden',
          position: 'relative'
        }}
      >
        {/* Фоновое изображение с затемнением */}
        <img
          alt='Banner'
          src={bannerImage}
          style={{
            filter: 'brightness(50%)',
            maxHeight: 311,
            objectFit: 'cover',
            width: '100%' // затемнение
          }}
        />
        {/* Поверх текста и кнопка */}
        <div
          style={{
            alignItems: 'center',
            color: 'white',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            height: '100%',
            justifyContent: 'center',
            left: 0,
            position: 'absolute',
            textAlign: 'center',
            top: 0,
            width: '100%'
          }}
        >
          <Text
            style={{ fontSize: 25, lineHeight: '29px', maxWidth: 300 }}
            weight='bold'
          >
            Добро пожаловать
            в сервис медицинского туризма
          </Text>
          <Text style={{ fontSize: 14, lineHeight: '17px', maxWidth: 380, paddingInline: 20 }}>
            Мы предлагаем комплексные решения по организации и сопровождению вашего лечения с поддержкой лучших клиник и специалистов
          </Text>
          <Button
            color='blue'
            style={{
              borderRadius: 28,
              height: 51,
              padding: '16px 28px 16px 28px'
            }}
            onClick={scrollToForm}
          >
            <Text weight='medium'>Оставить заявку</Text>
          </Button>
        </div>
      </Section>
      <Section pb='33px' pt='52px' style={{ display: 'flex', placeContent: 'center' }}>
        <PrimaryHead>Почему медицинский туризм?</PrimaryHead>
      </Section>
      <Flex className='services' gap='40px' justify='center'>
        {whyData.map((props) => <WhySection {...props} />)}
      </Flex>
      <Section pb='20px' pt='62px' style={{ display: 'flex', placeContent: 'center' }}>
        <PrimaryHead>Топ услуг</PrimaryHead>
      </Section>
      <Flex justify='center'>
        <Box>
          <Flex className='services' gap='16px' px='20px' style={{ maxWidth: 840 }} wrap='wrap'>
            {services.map(props => <ServiceAccordion {...props} />)}
          </Flex>
          <Text style={{ fontSize: 14, lineHeight: '17px', paddingBlockStart: 16, paddingInline: 24 }}>* среняя цена за один зуб, не является офертой</Text>
        </Box>
      </Flex>
      <Flex align='center' direction='column' gap='12px' justify='center' mt='40px' pb='52px' pt='24px' style={{ backgroundColor: '#0000000F' }}>
        <Text style={{ fontSize: 18, lineHeight: '21px' }} weight='bold'>Помощь в организации лечения</Text>
        <Text style={{ fontSize: 16, lineHeight: '19px', textAlign: 'center' }}>Наши специалисты помогут выбрать клинику, врача и организовать вашу поездку</Text>
      </Flex>
      <Flex align='center' direction='column' justify='center' pt='62px'>
        <PrimaryHead>Мы работаем</PrimaryHead>
        <PrimaryHead>Просто. Быстро.Надежно.</PrimaryHead>
      </Flex>
      <Flex gap='16px' justify='center' pb='65px' pt='20px' px='20px'>
        <Flex direction='column' position='relative'>
          <div style={{ backgroundColor: '#D5DEFF', height: 433, left: 16, position: 'absolute', width: 3, zIndex: 1 }}></div>
          <Flex direction='column' gap='129px'>
            <div style={{ alignItems: 'center', backgroundColor: '#D7DFFE', borderRadius: '50%', display: 'flex', height: 32, justifyContent: 'center', width: 32, zIndex: 2 }}>1</div>
            <div style={{ alignItems: 'center', backgroundColor: '#D7DFFE', borderRadius: '50%', display: 'flex', height: 32, justifyContent: 'center', width: 32, zIndex: 2 }}>2</div>
            <div style={{ alignItems: 'center', backgroundColor: '#D7DFFE', borderRadius: '50%', display: 'flex', height: 32, justifyContent: 'center', width: 32, zIndex: 2 }}>3</div>
          </Flex>
        </Flex>
        <Flex direction='column' gap='32px' pt='4px'>
          <Flex direction='column' gap='12px' >
            <Text style={{ fontSize: 18, lineHeight: '21px' }} weight='bold'>Консультация и выбор клиники</Text>
            <Text style={{ fontSize: 16, height: 95, lineHeight: '19px', maxWidth: 692 }} weight='medium'>Наши специалисты анализируют вашу ситуацию, подбирают оптимальную клинику и врача, составляют предварительный план лечения и рассчитывают стоимость.</Text>
          </Flex>
          <Flex direction='column' gap='12px'>
            <Text style={{ fontSize: 18, lineHeight: '21px' }} weight='bold'>Организация трансфера и проживания</Text>
            <Text style={{ fontSize: 16, height: 76, lineHeight: '19px', maxWidth: 692 }} weight='medium'>Мы бронируем билеты, подбираем комфортное жилье рядом с клиникой (гостиница, апартаменты или реабилитационный центр).</Text>
          </Flex>
          <Flex direction='column' gap='12px'>
            <Text style={{ fontSize: 18, lineHeight: '21px' }} weight='bold'>Лечение и сопровождение</Text>
            <Text style={{ fontSize: 16, height: 76, lineHeight: '19px', maxWidth: 692 }} weight='medium'>На протяжении всего лечения вас сопровождает персональный менеджер, который решает все организационные вопросы.</Text>
          </Flex>
        </Flex>
      </Flex>
      <form onSubmit={handleSubmit(onSubmit as unknown as any)}>
        <Flex ref={formRef} align='center' direction='column' mb='100px' pb='40px' pt='20px' px='20px' style={{ background: '#D5DEFF' }}>
          <Text as='div' style={{ fontSize: '25px', lineHeight: '29px', marginInline: 'auto' }} weight='bold'>Оставить заявку</Text>
          <Box maxWidth='390px'>

            <Flex direction='column' gap='16px'>
              <Controller
                name='name'
                control={control}
                rules={{ required: 'Заполните имя пользователя' }}
                render={({ field, fieldState }) =>
                  <label>
                    <Text as='div' mb='1px' style={{ fontSize: '14px', lineHeight: '20px' }} weight='medium'>
                      Имя*
                    </Text>
                    <TextField.Root {...field} />
                    <small style={{ color: fieldState.invalid && 'red' || undefined }}>{fieldState.error?.message}</small>
                  </label>
                }
              />
              <Controller
                name='phone'
                control={control}
                rules={{ required: 'Введите номер телефона' }}
                render={({ field, fieldState }) =>
                  <label>
                    <Text as='div' mb='1px' style={{ fontSize: '14px', lineHeight: '20px' }} weight='medium'>
                      Номер телефона*
                    </Text>
                    <TextField.Root {...field} />
                    <small style={{ color: fieldState.invalid && 'red' || undefined }}>{fieldState.error?.message}</small>
                  </label>
                }
              />
            </Flex>
            <Controller
              control={control}
              name='isAgree'
              rules={{ required: true }}
              render={({ field, fieldState }) =>
                <Text as='div' size='2' style={{ marginTop: 24 }} color={fieldState.invalid && 'red' || undefined}>
                  <Flex as='span' gap='2'>
                    <Checkbox checked={field.value} onCheckedChange={() => field.onChange(!field.value)} />
                    <span>
                      Я согласен с <Link href='#' style={{ display: 'inline' }} underline='always'>политикой</Link> обработки персональных данных
                    </span>
                  </Flex>
                </Text>
              }
            />
            <Flex justify='center'>
              <Button
                color='blue'
                style={{
                  borderRadius: 28,
                  height: 51,
                  marginTop: '24px',
                  padding: '16px 28px 16px 28px',
                  width: 'max-content'
                }}
              >
                <Text weight='medium'>Отправить</Text>
              </Button>
            </Flex>
          </Box>
        </Flex>
      </form>
      <Dialog.Root open={isOpenSuccess}>
        <Dialog.Content maxWidth="450px">
          <Flex direction={'column'} align={'center'} justify={'center'}>
            <Dialog.Title>Заявка успешно отправлена</Dialog.Title>
            <Dialog.Description>Скоро с вами свяжется наш менеджер</Dialog.Description>
          </Flex>
          <Dialog.Close>
            <button className="IconButton" aria-label="Close" onClick={() => setIsOpenSuccess(false)}>
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Root>
    </Flex>
  )
}

export default App
