import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useState, useRef, useEffect } from "react";
import { Text, Flex, IconButton, Separator, Section, Badge, Button, Box, TextField, Checkbox, Link, Dialog, Theme } from "@radix-ui/themes";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import { ViteReactSSG } from "vite-react-ssg/single-page";
const bannerImage = "/assets/image-DoMMdsHY.webp";
const PrimaryHead = ({ children }) => {
  return /* @__PURE__ */ jsx(Text, { color: "blue", weight: "bold", style: { fontSize: 23, lineHeight: "29px" }, children });
};
const Star = () => /* @__PURE__ */ jsxs("svg", { width: "20.000000", height: "20.000000", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
  /* @__PURE__ */ jsx("desc", { children: "Created with Pixso." }),
  /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsx("clipPath", { id: "clip17_17", children: /* @__PURE__ */ jsx("rect", { id: "icon-component", width: "20.000000", height: "20.000000", fill: "white", "fill-opacity": "0" }) }) }),
  /* @__PURE__ */ jsx("rect", { id: "icon=icon", width: "20.000000", height: "20.000000", fill: "#FFFFFF", "fill-opacity": "0" }),
  /* @__PURE__ */ jsx("mask", { id: "mask17_17", "mask-type": "alpha", maskUnits: "userSpaceOnUse", x: "0.000000", y: "0.000000", width: "20.000000", height: "20.000000", children: /* @__PURE__ */ jsx("g", { "clip-path": "url(#clip17_17)", children: /* @__PURE__ */ jsx("path", { id: "path", d: "M5.58 12.16L4.79 16.78C4.77 16.86 4.77 16.94 4.79 17.02C4.8 17.1 4.82 17.17 4.86 17.24C4.95 17.42 5.1 17.54 5.29 17.6C5.48 17.66 5.67 17.64 5.84 17.55L10 15.37L14.14 17.55C14.22 17.59 14.29 17.61 14.37 17.62C14.45 17.64 14.53 17.64 14.61 17.62C14.81 17.59 14.96 17.49 15.08 17.33C15.19 17.16 15.24 16.98 15.2 16.78L14.41 12.16L17.77 8.88C17.83 8.82 17.88 8.76 17.91 8.69C17.95 8.62 17.98 8.54 17.99 8.46C18.02 8.26 17.97 8.08 17.85 7.92C17.73 7.76 17.57 7.66 17.37 7.64L12.73 6.96L10.65 2.75C10.61 2.68 10.57 2.62 10.51 2.56C10.45 2.5 10.39 2.46 10.32 2.42C10.14 2.33 9.95 2.32 9.76 2.39C9.57 2.45 9.43 2.57 9.34 2.75L7.26 6.96L2.62 7.64C2.54 7.65 2.46 7.67 2.39 7.71C2.32 7.74 2.26 7.79 2.2 7.85C2.06 7.99 1.99 8.17 2 8.37C2 8.57 2.07 8.74 2.22 8.88L5.58 12.16Z", fill: "#060A0C", "fill-opacity": "0.956863", "fill-rule": "evenodd" }) }) }),
  /* @__PURE__ */ jsx("g", { mask: "url(#mask17_17)", children: /* @__PURE__ */ jsx("rect", { id: "color", width: "20.000000", height: "20.000000", fill: "#FDD30B", "fill-opacity": "1.000000" }) })
] });
const Arrow = () => /* @__PURE__ */ jsxs("svg", { width: "7.000000", height: "14.500000", viewBox: "0 0 7 14.5", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
  /* @__PURE__ */ jsx("desc", { children: "Created with Pixso." }),
  /* @__PURE__ */ jsx("defs", {}),
  /* @__PURE__ */ jsx("path", { id: "path", d: "M0.26 0.17C0.58 -0.1 1.05 -0.06 1.32 0.26L6.82 6.76C7.05 7.04 7.05 7.45 6.82 7.73L1.32 14.23C1.05 14.55 0.58 14.59 0.26 14.32C-0.06 14.05 -0.1 13.58 0.17 13.26L5.26 7.25L0.17 1.23C-0.1 0.91 -0.06 0.44 0.26 0.17Z", fill: "#385FF2", "fill-opacity": "1.000000", "fill-rule": "evenodd" })
] });
const formatMoney = (value, decimals) => {
  const numericValue = Number(value);
  if (!Number.isFinite(numericValue)) return "";
  const roundedValue = Math.round(numericValue) === 0 ? 0 : Math.round(numericValue);
  const options = {
    currency: "RUB",
    // задаём минимальное количество цифр после запятой
    maximumFractionDigits: 0,
    minimumFractionDigits: 0,
    style: "currency"
    // задаём максимальное количество цифр после запятой
  };
  const formatter = new Intl.NumberFormat("ru-RU", options);
  return formatter.format(roundedValue).replace(/\u00A0/g, " ");
};
const ServiceAccordion = (props) => {
  const { rating, accentPrice, description, image, secondaryPrice, services: services2, title, badge, priceBadge } = props;
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);
  const [maxHeight, setMaxHeight] = useState("0px");
  useEffect(() => {
    if (contentRef.current) {
      setMaxHeight(isOpen ? `${contentRef.current.scrollHeight}px` : "0px");
    }
  }, [isOpen]);
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
  return /* @__PURE__ */ jsxs(Flex, { direction: "column", px: "24px", pt: "16px", pb: "32px", style: { backgroundColor: "#ffffff", borderRadius: 12, maxWidth: 390 }, children: [
    /* @__PURE__ */ jsxs(Flex, { gap: "4px", align: "center", children: [
      /* @__PURE__ */ jsx(Star, {}),
      /* @__PURE__ */ jsx(Text, { style: { display: "flex", placeContent: "center", lineHeight: "19px", fontSize: "16px" }, weight: "bold", children: rating }),
      badge
    ] }),
    /* @__PURE__ */ jsxs(Flex, { pt: "20px", justify: "between", children: [
      /* @__PURE__ */ jsxs(Flex, { direction: "column", gap: "4px", children: [
        /* @__PURE__ */ jsx(Text, { style: { lineHeight: "21px", fontSize: "18px" }, weight: "bold", children: title }),
        /* @__PURE__ */ jsx(Text, { style: { lineHeight: "14px", fontSize: "12px" }, children: services2 })
      ] }),
      /* @__PURE__ */ jsx(
        IconButton,
        {
          className: "hide_expand",
          onClick: () => setIsOpen(!isOpen),
          variant: "outline",
          style: {
            borderRadius: "50%",
            paddingLeft: !isOpen ? 2.5 : 0,
            transform: isOpen ? "rotate(90deg)" : "none",
            transition: "transform 0.3s ease"
          },
          children: /* @__PURE__ */ jsx(Arrow, {})
        }
      )
    ] }),
    /* @__PURE__ */ jsx(
      "div",
      {
        ref: contentRef,
        style: {
          maxHeight,
          overflow: "hidden",
          transition: "max-height 0.5s ease"
        },
        "aria-expanded": isOpen,
        children: /* @__PURE__ */ jsxs(Flex, { direction: "column", children: [
          /* @__PURE__ */ jsx(Flex, { justify: "center", pt: "20px", children: /* @__PURE__ */ jsx("img", { src: image, height: 125, width: 342, style: { objectFit: "cover", borderRadius: 14 } }) }),
          /* @__PURE__ */ jsx(Flex, { justify: "start", py: "20px", children: /* @__PURE__ */ jsx("ul", { style: { margin: 0, paddingInline: 24 }, children: description.map((opt, idx) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Text, { style: { fontSize: 12, lineHeight: "14px" }, children: opt }) }, idx)) }) }),
          /* @__PURE__ */ jsx(Separator, { color: "gray", size: "4" }),
          priceBadge,
          /* @__PURE__ */ jsxs(Flex, { pt: "12px", gap: "4px", direction: "column", children: [
            /* @__PURE__ */ jsxs(Flex, { justify: "between", children: [
              /* @__PURE__ */ jsx(PrimaryHead, { children: accentPrice[0] }),
              /* @__PURE__ */ jsxs(PrimaryHead, { children: [
                formatMoney(accentPrice[1]),
                "*"
              ] })
            ] }),
            /* @__PURE__ */ jsxs(Flex, { justify: "between", children: [
              /* @__PURE__ */ jsx(Text, { weight: "medium", style: { fontSize: 14, lineHeight: "17px" }, children: secondaryPrice[0] }),
              /* @__PURE__ */ jsxs(Text, { weight: "medium", style: { fontSize: 14, lineHeight: "17px" }, children: [
                formatMoney(secondaryPrice[1]),
                "*"
              ] })
            ] })
          ] })
        ] })
      }
    )
  ] });
};
const Chechmark = () => {
  return /* @__PURE__ */ jsxs("svg", { width: "40.000000", height: "40.000000", viewBox: "0 0 40 40", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
    /* @__PURE__ */ jsx("desc", { children: "Created with Pixso." }),
    /* @__PURE__ */ jsx("defs", {}),
    /* @__PURE__ */ jsx("path", { id: "path", d: "M20 4.5C11.43 4.5 4.5 11.43 4.5 20C4.5 28.56 11.43 35.5 20 35.5C28.56 35.5 35.5 28.56 35.5 20C35.5 11.43 28.56 4.5 20 4.5ZM14.93 18.06C14.35 17.47 13.4 17.47 12.81 18.06C12.23 18.64 12.23 19.59 12.81 20.18L16.75 24.12L18.87 26.24L21 24.12L28 17.12C28.58 16.53 28.58 15.58 28 15C27.41 14.41 26.46 14.41 25.87 15L18.87 22L14.93 18.06Z", fill: "#385FF2", "fill-opacity": "1.000000", "fill-rule": "evenodd" })
  ] });
};
const WhySection = ({ title, description }) => {
  return /* @__PURE__ */ jsxs(Section, { py: "0", style: { display: "flex", justifyContent: "flex-start", alignItems: "center", flexDirection: "column" }, children: [
    /* @__PURE__ */ jsx(Chechmark, {}),
    /* @__PURE__ */ jsx(Text, { weight: "bold", style: { fontSize: 18, lineHeight: "21px", paddingTop: 12 }, children: title }),
    /* @__PURE__ */ jsx(Text, { style: { fontSize: 14, lineHeight: "17px", paddingTop: 16, textAlign: "center", paddingInline: 20, maxWidth: 380 }, children: description })
  ] });
};
const serviceImage = "/assets/orto-BSd7NXA2.png";
const services = [
  {
    accentPrice: ["Тула", "14365"],
    description: ["Металлокерамика", "Циркониевые коронки", "Имплантация", "Съёмные протезы"],
    image: serviceImage,
    rating: 4.8,
    secondaryPrice: ["Москва", "16900"],
    services: "Протезирование, коронки, мосты, имплантация",
    title: "Ортопедическая стоматология",
    badge: /* @__PURE__ */ jsx(Badge, { color: "blue", children: "Выгодная цена" }),
    priceBadge: /* @__PURE__ */ jsx("div", { style: { borderRadius: 7, height: 23, marginTop: 20, padding: "4px 10px 4px 10px", textAlign: "center", backgroundColor: "#FFF832", display: "flex", alignItems: "center", justifyContent: "center" }, children: /* @__PURE__ */ jsx(Text, { style: { fontWeight: 600, fontSize: 12, lineHeight: "14px" }, children: "15% выгоды" }) })
  },
  {
    accentPrice: ["Тула", "17500"],
    description: ["Виниры", "Отбеливание", "Реставрация", "Художественная реставрация"],
    image: serviceImage,
    rating: 5,
    secondaryPrice: ["Москва", "30700"],
    services: "Виниры, отбеливание, реставрация улыбки",
    title: "Эстетическая стоматология",
    badge: /* @__PURE__ */ jsx(Badge, { color: "blue", children: "Выгодная цена" }),
    priceBadge: /* @__PURE__ */ jsx(Fragment, {})
  },
  {
    accentPrice: ["Нижний Новгород", "13340"],
    description: ["Сложное удаление", "Синус-лифтинг", "Костная пластика", "Имплантация"],
    image: serviceImage,
    rating: 4.6,
    secondaryPrice: ["Москва", "16900"],
    services: "Удаление зубов, имплантация, костная пластика",
    title: "Хирургическая стоматология",
    badge: /* @__PURE__ */ jsx(Fragment, {}),
    priceBadge: /* @__PURE__ */ jsx(Fragment, {})
  }
];
const whyData = [
  {
    title: "Самые выгодные цены",
    description: "Мы предлагаем большой перечень высококачественных стоматологических услуг по доступным ценам в регионах России."
  },
  {
    title: "Квалифицированные врачи",
    description: "Мы сотрудничаем с ведущими специалистами, которые работают по современным методикам лечения."
  },
  {
    title: "Современное оборудование",
    description: "Российские клиники оснащенные новейшим медицинским оборудованием."
  }
];
function generateUUIDv4() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    const r = (crypto.getRandomValues(new Uint8Array(1))[0] & 15) >> (c === "x" ? 0 : 1);
    const v = c === "x" ? r : r & 3 | 8;
    return v.toString(16);
  });
}
function App() {
  const formRef = useRef(null);
  const searchParams = new URLSearchParams(window.location.search);
  const region = searchParams.get("region");
  const scrollToForm = async () => {
    formRef.current?.scrollIntoView({ behavior: "smooth" });
    const response = await axios.get("https://www.za-zdoroviem.ru/count.php", { params: { referer: document.referrer, event: "scrolldown", region } });
    const data = response.data;
    console.log(data);
  };
  const [isOpenSuccess, setIsOpenSuccess] = useState(false);
  const {
    control,
    handleSubmit
  } = useForm();
  const onSubmit = async (data) => {
    const { name, phone } = data;
    setIsOpenSuccess(true);
    const response = await axios.get("https://www.za-zdoroviem.ru/count.php", { params: { event: "click", referer: document.referrer, region, name, phone } });
    if (response) {
      const data2 = response.data;
      console.log("GET response:", data2);
    }
  };
  const handleGetLogin = async () => {
    const response = await axios.get("https://www.za-zdoroviem.ru/count.php", { params: { referer: document.referrer, event: "enter", region } });
    const data = response.data;
    console.log(data);
  };
  useEffect(() => {
    const localValue = localStorage.getItem("uuid");
    if (!localValue) {
      const uuid = generateUUIDv4();
      localStorage.setItem("uuid", uuid);
      handleGetLogin();
    }
  }, []);
  return /* @__PURE__ */ jsxs(Flex, { direction: "column", maxWidth: "100vw", style: { backgroundColor: "#F2F7FF" }, width: "100vw", children: [
    /* @__PURE__ */ jsxs(
      Section,
      {
        py: "0",
        style: {
          overflow: "hidden",
          position: "relative"
        },
        children: [
          /* @__PURE__ */ jsx(
            "img",
            {
              alt: "Banner",
              src: bannerImage,
              style: {
                filter: "brightness(50%)",
                maxHeight: 311,
                objectFit: "cover",
                width: "100%"
                // затемнение
              }
            }
          ),
          /* @__PURE__ */ jsxs(
            "div",
            {
              style: {
                alignItems: "center",
                color: "white",
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                height: "100%",
                justifyContent: "center",
                left: 0,
                position: "absolute",
                textAlign: "center",
                top: 0,
                width: "100%"
              },
              children: [
                /* @__PURE__ */ jsx(
                  Text,
                  {
                    style: { fontSize: 25, lineHeight: "29px", maxWidth: 300 },
                    weight: "bold",
                    children: "Добро пожаловать в сервис медицинского туризма"
                  }
                ),
                /* @__PURE__ */ jsx(Text, { style: { fontSize: 14, lineHeight: "17px", maxWidth: 380, paddingInline: 20 }, children: "Мы предлагаем комплексные решения по организации и сопровождению вашего лечения с поддержкой лучших клиник и специалистов" }),
                /* @__PURE__ */ jsx(
                  Button,
                  {
                    color: "blue",
                    style: {
                      borderRadius: 28,
                      height: 51,
                      padding: "16px 28px 16px 28px"
                    },
                    onClick: scrollToForm,
                    children: /* @__PURE__ */ jsx(Text, { weight: "medium", children: "Оставить заявку" })
                  }
                )
              ]
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsx(Section, { pb: "33px", pt: "52px", style: { display: "flex", placeContent: "center" }, children: /* @__PURE__ */ jsx(PrimaryHead, { children: "Почему медицинский туризм?" }) }),
    /* @__PURE__ */ jsx(Flex, { className: "services", gap: "40px", justify: "center", children: whyData.map((props) => /* @__PURE__ */ jsx(WhySection, { ...props })) }),
    /* @__PURE__ */ jsx(Section, { pb: "20px", pt: "62px", style: { display: "flex", placeContent: "center" }, children: /* @__PURE__ */ jsx(PrimaryHead, { children: "Топ услуг" }) }),
    /* @__PURE__ */ jsx(Flex, { justify: "center", children: /* @__PURE__ */ jsxs(Box, { children: [
      /* @__PURE__ */ jsx(Flex, { className: "services", gap: "16px", px: "20px", style: { maxWidth: 840 }, wrap: "wrap", children: services.map((props) => /* @__PURE__ */ jsx(ServiceAccordion, { ...props })) }),
      /* @__PURE__ */ jsx(Text, { style: { fontSize: 14, lineHeight: "17px", paddingBlockStart: 16, paddingInline: 24 }, children: "* среняя цена за один зуб, не является офертой" })
    ] }) }),
    /* @__PURE__ */ jsxs(Flex, { align: "center", direction: "column", gap: "12px", justify: "center", mt: "40px", pb: "52px", pt: "24px", style: { backgroundColor: "#0000000F" }, children: [
      /* @__PURE__ */ jsx(Text, { style: { fontSize: 18, lineHeight: "21px" }, weight: "bold", children: "Помощь в организации лечения" }),
      /* @__PURE__ */ jsx(Text, { style: { fontSize: 16, lineHeight: "19px", textAlign: "center" }, children: "Наши специалисты помогут выбрать клинику, врача и организовать вашу поездку" })
    ] }),
    /* @__PURE__ */ jsxs(Flex, { align: "center", direction: "column", justify: "center", pt: "62px", children: [
      /* @__PURE__ */ jsx(PrimaryHead, { children: "Мы работаем" }),
      /* @__PURE__ */ jsx(PrimaryHead, { children: "Просто. Быстро.Надежно." })
    ] }),
    /* @__PURE__ */ jsxs(Flex, { gap: "16px", justify: "center", pb: "65px", pt: "20px", px: "20px", children: [
      /* @__PURE__ */ jsxs(Flex, { direction: "column", position: "relative", children: [
        /* @__PURE__ */ jsx("div", { style: { backgroundColor: "#D5DEFF", height: 433, left: 16, position: "absolute", width: 3, zIndex: 1 } }),
        /* @__PURE__ */ jsxs(Flex, { direction: "column", gap: "129px", children: [
          /* @__PURE__ */ jsx("div", { style: { alignItems: "center", backgroundColor: "#D7DFFE", borderRadius: "50%", display: "flex", height: 32, justifyContent: "center", width: 32, zIndex: 2 }, children: "1" }),
          /* @__PURE__ */ jsx("div", { style: { alignItems: "center", backgroundColor: "#D7DFFE", borderRadius: "50%", display: "flex", height: 32, justifyContent: "center", width: 32, zIndex: 2 }, children: "2" }),
          /* @__PURE__ */ jsx("div", { style: { alignItems: "center", backgroundColor: "#D7DFFE", borderRadius: "50%", display: "flex", height: 32, justifyContent: "center", width: 32, zIndex: 2 }, children: "3" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs(Flex, { direction: "column", gap: "32px", pt: "4px", children: [
        /* @__PURE__ */ jsxs(Flex, { direction: "column", gap: "12px", children: [
          /* @__PURE__ */ jsx(Text, { style: { fontSize: 18, lineHeight: "21px" }, weight: "bold", children: "Консультация и выбор клиники" }),
          /* @__PURE__ */ jsx(Text, { style: { fontSize: 16, height: 95, lineHeight: "19px", maxWidth: 692 }, weight: "medium", children: "Наши специалисты анализируют вашу ситуацию, подбирают оптимальную клинику и врача, составляют предварительный план лечения и рассчитывают стоимость." })
        ] }),
        /* @__PURE__ */ jsxs(Flex, { direction: "column", gap: "12px", children: [
          /* @__PURE__ */ jsx(Text, { style: { fontSize: 18, lineHeight: "21px" }, weight: "bold", children: "Организация трансфера и проживания" }),
          /* @__PURE__ */ jsx(Text, { style: { fontSize: 16, height: 76, lineHeight: "19px", maxWidth: 692 }, weight: "medium", children: "Мы бронируем билеты, подбираем комфортное жилье рядом с клиникой (гостиница, апартаменты или реабилитационный центр)." })
        ] }),
        /* @__PURE__ */ jsxs(Flex, { direction: "column", gap: "12px", children: [
          /* @__PURE__ */ jsx(Text, { style: { fontSize: 18, lineHeight: "21px" }, weight: "bold", children: "Лечение и сопровождение" }),
          /* @__PURE__ */ jsx(Text, { style: { fontSize: 16, height: 76, lineHeight: "19px", maxWidth: 692 }, weight: "medium", children: "На протяжении всего лечения вас сопровождает персональный менеджер, который решает все организационные вопросы." })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("form", { onSubmit: handleSubmit(onSubmit), children: /* @__PURE__ */ jsxs(Flex, { ref: formRef, align: "center", direction: "column", mb: "100px", pb: "40px", pt: "20px", px: "20px", style: { background: "#D5DEFF" }, children: [
      /* @__PURE__ */ jsx(Text, { as: "div", style: { fontSize: "25px", lineHeight: "29px", marginInline: "auto" }, weight: "bold", children: "Оставить заявку" }),
      /* @__PURE__ */ jsxs(Box, { maxWidth: "390px", children: [
        /* @__PURE__ */ jsxs(Flex, { direction: "column", gap: "16px", children: [
          /* @__PURE__ */ jsx(
            Controller,
            {
              name: "name",
              control,
              rules: { required: "Заполните имя пользователя" },
              render: ({ field, fieldState }) => /* @__PURE__ */ jsxs("label", { children: [
                /* @__PURE__ */ jsx(Text, { as: "div", mb: "1px", style: { fontSize: "14px", lineHeight: "20px" }, weight: "medium", children: "Имя*" }),
                /* @__PURE__ */ jsx(TextField.Root, { ...field }),
                /* @__PURE__ */ jsx("small", { style: { color: fieldState.invalid && "red" || void 0 }, children: fieldState.error?.message })
              ] })
            }
          ),
          /* @__PURE__ */ jsx(
            Controller,
            {
              name: "phone",
              control,
              rules: { required: "Введите номер телефона" },
              render: ({ field, fieldState }) => /* @__PURE__ */ jsxs("label", { children: [
                /* @__PURE__ */ jsx(Text, { as: "div", mb: "1px", style: { fontSize: "14px", lineHeight: "20px" }, weight: "medium", children: "Номер телефона*" }),
                /* @__PURE__ */ jsx(TextField.Root, { ...field }),
                /* @__PURE__ */ jsx("small", { style: { color: fieldState.invalid && "red" || void 0 }, children: fieldState.error?.message })
              ] })
            }
          )
        ] }),
        /* @__PURE__ */ jsx(
          Controller,
          {
            control,
            name: "isAgree",
            rules: { required: true },
            render: ({ field, fieldState }) => /* @__PURE__ */ jsx(Text, { as: "div", size: "2", style: { marginTop: 24 }, color: fieldState.invalid && "red" || void 0, children: /* @__PURE__ */ jsxs(Flex, { as: "span", gap: "2", children: [
              /* @__PURE__ */ jsx(Checkbox, { checked: field.value, onCheckedChange: () => field.onChange(!field.value) }),
              /* @__PURE__ */ jsxs("span", { children: [
                "Я согласен с ",
                /* @__PURE__ */ jsx(Link, { href: "#", style: { display: "inline" }, underline: "always", children: "политикой" }),
                " обработки персональных данных"
              ] })
            ] }) })
          }
        ),
        /* @__PURE__ */ jsx(Flex, { justify: "center", children: /* @__PURE__ */ jsx(
          Button,
          {
            color: "blue",
            style: {
              borderRadius: 28,
              height: 51,
              marginTop: "24px",
              padding: "16px 28px 16px 28px",
              width: "max-content"
            },
            children: /* @__PURE__ */ jsx(Text, { weight: "medium", children: "Отправить" })
          }
        ) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx(Dialog.Root, { open: isOpenSuccess, children: /* @__PURE__ */ jsxs(Dialog.Content, { maxWidth: "450px", children: [
      /* @__PURE__ */ jsxs(Flex, { direction: "column", align: "center", justify: "center", children: [
        /* @__PURE__ */ jsx(Dialog.Title, { children: "Заявка успешно отправлена" }),
        /* @__PURE__ */ jsx(Dialog.Description, { children: "Скоро с вами свяжется наш менеджер" })
      ] }),
      /* @__PURE__ */ jsx(Dialog.Close, { children: /* @__PURE__ */ jsx("button", { className: "IconButton", "aria-label": "Close", onClick: () => setIsOpenSuccess(false), children: /* @__PURE__ */ jsx("svg", { width: "15", height: "15", viewBox: "0 0 15 15", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ jsx("path", { d: "M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z", fill: "currentColor", "fill-rule": "evenodd", "clip-rule": "evenodd" }) }) }) })
    ] }) })
  ] });
}
const createRoot = ViteReactSSG(/* @__PURE__ */ jsx(Theme, { children: /* @__PURE__ */ jsx(App, {}) }));
export {
  createRoot
};
