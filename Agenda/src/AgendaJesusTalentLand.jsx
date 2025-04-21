
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const agenda = {
  "21 ABR": [
    { hora: "11:00", charla: "Potencia tu Creatividad y Productividad con Gemini, la IA de Google", land: "AI Land" },
    { hora: "11:30", charla: "Cerebro de Plástico", land: "Main Stage" },
    { hora: "12:00", charla: "Código + Flow", land: "Main Stage" },
    { hora: "14:00", charla: "Una Platica con Marcus Dantus", land: "Main Stage" },
    { hora: "15:00", charla: "Ceremonia de Inauguración", land: "Main Stage" },
    { hora: "15:00", charla: "Hack The Drone (Plan B)", land: "Developer Land" },
    { hora: "16:00", charla: "Multijugador sin drama", land: "Developer Land" },
    { hora: "16:00", charla: "Espacio con IA (Plan B)", land: "AI Land" },
    { hora: "16:30", charla: "Venciendo la gravedad", land: "Future Land" },
    { hora: "17:00", charla: "Mini Apps 101", land: "AI Land" },
    { hora: "17:00", charla: "¿Cómo se rompe la 3era dimensión? (Plan B)", land: "Talent World Space" },
    { hora: "17:30", charla: "El Content del Content", land: "Creative Land" },
    { hora: "18:00", charla: "Big Data & Automation @ HPE", land: "Developer Land" },
    { hora: "Noche", charla: "Zona Chill + DJ + Networking", land: "Main Stage" },
  ],
  "22 ABR": [
    { hora: "11:00", charla: "Educación aumentada", land: "Future Land" },
    { hora: "11:30", charla: "Experiencias inmersivas", land: "Creative Land" },
    { hora: "11:30", charla: "Mars Rover (Plan B)", land: "Future Land" },
    { hora: "12:30", charla: "Emprender en vertical - TikTok", land: "Business Land" },
    { hora: "13:00", charla: "AWS Builder Cards", land: "Talent World Space" },
    { hora: "Noche", charla: "Talent Nights + Gaming + Chill", land: "Main Stage" },
  ],
  "23 ABR": [
    { hora: "10:00", charla: "Batalla de Robots !", land: "Talent World Space" },
    { hora: "11:00", charla: "IA Cuántica", land: "AI Land" },
    { hora: "11:30", charla: "CubeSat", land: "Planet Innovators" },
    { hora: "12:00", charla: "Sexualidad, placer y educación", land: "Workshop 1" },
    { hora: "12:00", charla: "Tech abierta (Plan B)", land: "Developer Land" },
    { hora: "13:00", charla: "Power Speaking", land: "Main Stage" },
    { hora: "13:30", charla: "B Jones y Luis López", land: "Main Stage" },
    { hora: "Libre", charla: "Chistes de tragedias (YouTube)", land: "Workshop 2" },
    { hora: "Noche", charla: "After Devs + Chill", land: "Maker/Dev Zone" },
  ],
  "24 ABR": [
    { hora: "11:00", charla: "IA: Ficción a Realidad", land: "Main Stage" },
    { hora: "11:00", charla: "Integración en videojuegos (Plan B)", land: "Workshop 2" },
    { hora: "11:30", charla: "Videojuegos realistas", land: "Main Stage" },
    { hora: "13:00", charla: "Servicios de Nube Web3", land: "Developer Land" },
    { hora: "13:30", charla: "Creación de contenido", land: "Main Stage" },
    { hora: "Noche", charla: "FIESTA FINAL con DJ + Luces", land: "Main Stage" },
  ]
};

export default function AgendaJesusTalentLand() {
  return (
    <Tabs defaultValue="21 ABR" className="w-full">
      <TabsList className="grid grid-cols-4 w-full">
        {Object.keys(agenda).map((dia) => (
          <TabsTrigger key={dia} value={dia}>{dia}</TabsTrigger>
        ))}
      </TabsList>
      {Object.entries(agenda).map(([dia, eventos]) => (
        <TabsContent key={dia} value={dia}>
          <div className="grid gap-4 mt-4">
            {eventos.map((e, i) => (
              <Card key={i}>
                <CardContent className="p-4">
                  <p className="text-lg font-bold">{e.hora}</p>
                  <p>{e.charla}</p>
                  <p className="text-sm text-muted-foreground">{e.land}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      ))}
    </Tabs>
  );
}
