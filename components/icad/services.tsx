"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import { ClockIcon } from "lucide-react";

interface Services {
  id: number;
  image: string;
  dayOfWeek: number; // 0 (Domingo) a 6 (Sábado)
  description: string;
  hour: number; // Hora del día en formato 24 horas
}

const servicesData: Services[] = [
  {
    id: 1,
    image: "/assets/cuervos3.jpg",
    dayOfWeek: 1, // Lunes
    description:
      "Nuevas Generaciones, Culto Unido de Misioneritas y Exploradores",
    hour: 18, // 6:00 PM
  },
  {
    id: 2,
    image: "/assets/cmf1.jpg",
    dayOfWeek: 2, // Martes
    description: "Concilio Misionero Femenil 'CMF'",
    hour: 18, // 6:00 PM
  },
  {
    id: 3,
    image: "/assets/Oracion.jpg",
    dayOfWeek: 3, // Miércoles
    description:
      "Oración e intersecion en el templo y transmisión en vivo en Facebook de Conectados con Dios",
    hour: 18, // 6:00 PM
  },
  {
    id: 4,
    image: "/assets/Fraternidad_1.jpg",
    dayOfWeek: 4, // Jueves
    description: "Fraternidad de Varones 'FV'",
    hour: 18, // 6:00 PM
  },
  {
    id: 5,
    image: "/assets/Biblia_1.jpg",
    dayOfWeek: 5, // Viernes
    description: "Enseñanza de Escuela Bíblica y CCDL",
    hour: 18, // 6:00 PM
  },
  {
    id: 6,
    image: "/assets/jovenes_2.jpg",
    dayOfWeek: 6, // Sábado
    description: "Culto de Jóvenes 'EDC'",
    hour: 18, // 6:00 PM
  },
  {
    id: 7,
    image: "/assets/Culto_General_1.jpg",
    dayOfWeek: 0, // Domingo
    description: "Culto General",
    hour: 9, // 9:00 AM
  },
];

// Función para calcular días y horas restantes
const calculateTimeRemaining = (dayOfWeek: number, hour: number) => {
  const now = new Date();
  const currentDay = now.getDay();
  const currentHour = now.getHours();
  const currentMinutes = now.getMinutes();

  let daysRemaining = dayOfWeek - currentDay;

  // Si el día ya pasó esta semana, contar para la próxima semana
  if (daysRemaining < 0 || (daysRemaining === 0 && currentHour >= hour)) {
    daysRemaining += 7;
  }

  // Si es el mismo día pero la hora no ha llegado
  if (daysRemaining === 0 && currentHour < hour) {
    daysRemaining = 0;
  }

  let hoursRemaining = hour - currentHour;

  if (hoursRemaining < 0) {
    hoursRemaining += 24;
    daysRemaining -= 1;
  }

  // Ajuste para minutos
  if (currentMinutes > 0 && hoursRemaining > 0) {
    hoursRemaining -= 1;
  }

  return { days: daysRemaining, hours: hoursRemaining };
};

// Parseador para formatear el resultado de tiempo restante
const formatTimeRemaining = (days: number, hours: number): string => {
  if (days === 0 && hours === 0) {
    return "¡Ahora!";
  }

  const dayText = days === 1 ? "día" : "días";
  const hourText = hours === 1 ? "hora" : "horas";

  if (days === 0) {
    return `Falta ${hours} ${hourText}`;
  }

  if (hours === 0) {
    return `Faltan ${days} ${dayText}`;
  }

  return `Faltan ${days} ${dayText} y ${hours} ${hourText}`;
};

// Función para obtener el día actual en formato de string
const getTodayDay = (): string => {
  const days = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
  ];
  const today = new Date();
  return days[today.getDay()];
};

// Función para determinar el estado del servicio
type ServiceStatus = "upcoming" | "live" | "finished";

const getServiceStatus = (dayOfWeek: number, hour: number): ServiceStatus => {
  const now = new Date();
  const currentDay = now.getDay();
  const currentHour = now.getHours();

  // Si no es el día del servicio
  if (currentDay !== dayOfWeek) {
    return "upcoming";
  }

  // Si es el día del servicio, verificar la hora
  const serviceEndHour = hour + 2; // El servicio dura 2 horas

  // Si aún no ha comenzado
  if (currentHour < hour) {
    return "upcoming";
  }

  // Si está en transmisión en vivo (entre la hora de inicio y 2 horas después)
  if (currentHour >= hour && currentHour < serviceEndHour) {
    return "live";
  }

  // Si ya finalizó
  return "finished";
};

// Función para obtener el mensaje y estilo del estado
const getStatusDisplay = (
  dayOfWeek: number,
  hour: number,
): { message: string; style: string } => {
  const status = getServiceStatus(dayOfWeek, hour);

  if (status === "live") {
    return {
      message: "🔴 Transmitiendo en vivo",
      style: "text-red-700 font-bold animate-pulse",
    };
  }

  if (status === "finished") {
    return {
      message: "Culto finalizado",
      style: "text-red-800",
    };
  }

  // upcoming
  const timeData = calculateTimeRemaining(dayOfWeek, hour);
  return {
    message: formatTimeRemaining(timeData.days, timeData.hours),
    style: "text-primary font-semibold",
  };
};

export default function Services() {
  const days = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
  ];
  const daysSpanish = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado",
  ];

  // Se inicializa con el día actual para que el componente tenga un valor
  // consistente desde el primer render.
  const [todayDay] = useState(() => getTodayDay());

  return (
    <div className="relative max-w-6xl py-8 sm:py-12 md:py-16 px-4 sm:px-5 md:px-6 mx-auto">
      <div className="flex justify-center items-center flex-col mb-8 md:mb-12">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-center">
          Servicios
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-muted-foreground mb-6 text-center max-w-2xl">
          Puedes acompañarnos durante todos nuestros servicios.
        </p>
      </div>

      <div className="w-full">
        <Tabs
          key={todayDay}
          defaultValue={todayDay}
          className="w-full flex flex-col items-center justify-center"
        >
          <TabsList className="bg-transparent flex flex-wrap gap-2 w-full mb-10">
            <TabsTrigger
              value="monday"
              className="border border-gray rounded-md transition-transform duration-200 hover:scale-110"
            >
              Lunes
            </TabsTrigger>
            <TabsTrigger
              value="tuesday"
              className="border border-gray rounded-md transition-transform duration-200 hover:scale-110"
            >
              Martes
            </TabsTrigger>
            <TabsTrigger
              value="wednesday"
              className="border border-gray rounded-md transition-transform duration-200 hover:scale-110"
            >
              Miércoles
            </TabsTrigger>
            <TabsTrigger
              value="thursday"
              className="border border-gray rounded-md transition-transform duration-200 hover:scale-110"
            >
              Jueves
            </TabsTrigger>
            <TabsTrigger
              value="friday"
              className="border border-gray rounded-md transition-transform duration-200 hover:scale-110"
            >
              Viernes
            </TabsTrigger>
            <TabsTrigger
              value="saturday"
              className="border border-gray rounded-md transition-transform duration-200 hover:scale-110"
            >
              Sábado
            </TabsTrigger>
            <TabsTrigger
              value="sunday"
              className="border border-gray rounded-md transition-transform duration-200 hover:scale-110"
            >
              Domingo
            </TabsTrigger>
          </TabsList>
          {servicesData.map((service) => {
            const { message, style } = getStatusDisplay(
              service.dayOfWeek,
              service.hour,
            );

            return (
              <TabsContent
                key={service.id}
                value={days[service.dayOfWeek]}
                className="w-fit"
              >
                <Card className="box-shadow-lg">
                  <Image
                    src={service.image}
                    alt="Event cover"
                    width={400}
                    height={400}
                    className="relative z-20 aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40"
                  />
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-center">
                      {daysSpanish[service.dayOfWeek]}
                    </CardTitle>
                    <CardDescription className="text-center">
                      <div className="mb-2">{service.description}</div>
                      <div>
                        <ClockIcon className="inline-block mr-1" />
                        <span>
                          {String(service.hour).padStart(2, "0")}:00{" "}
                          {service.hour >= 12 ? "PM" : "AM"}
                        </span>
                      </div>
                    </CardDescription>
                  </CardHeader>
                  <CardContent className={`text-center text-sm ${style}`}>
                    {message}
                  </CardContent>
                </Card>
              </TabsContent>
            );
          })}
        </Tabs>
      </div>
    </div>
  );
}
