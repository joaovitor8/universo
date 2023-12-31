
export const planetas = [
  {
    "id": 1,
    "nome": "Mercúrio",
    "tipo": "Terrestre",
    "diâmetro_km": 4879,
    "massa_kg": 3.3011e+23,
    "distancia_ao_sol_ua": 0.39,
    "satelites": [],
    "composicao": "Rocha e metal",
    "temperatura_media_celsius": 430,
    "atmosfera": "Praticamente ausente",
    "gravidade": 0.38,
    "missoes_espaciais": ["Mariner 10", "MESSENGER"],
    "caracteristicas_especificas": ["Calotas polares de gelo", "Grandes variações de temperatura"],
    "historia_da_descoberta": "Mercúrio é visível a olho nu e era conhecido desde os tempos antigos. Sua órbita próxima ao Sol tornou-o um dos objetos mais brilhantes no céu noturno. No entanto, os astrônomos antigos, como os gregos, tinham conhecimento limitado sobre suas características. A observação mais detalhada de Mercúrio ocorreu após o desenvolvimento de telescópios. A exploração espacial, com missões como a Mariner 10 e a MESSENGER, proporcionou informações detalhadas sobre o planeta.",
    "rotacao": "Mercúrio tem uma rotação muito lenta e uma rotação retrógrada, o que significa que um dia em Mercúrio (rotação completa) dura cerca de 176 dias terrestres. Sua rotação lenta resulta em grandes variações de temperatura entre o lado iluminado pelo Sol e o lado noturno, com temperaturas extremamente altas e baixas.",
    "orbita": "Mercúrio orbita o Sol a uma distância média de aproximadamente 0,39 unidades astronômicas (UA). Sua órbita é bastante elíptica, o que significa que a distância entre Mercúrio e o Sol varia consideravelmente ao longo de sua órbita.",
    "curiosidades": ["Mercúrio é o planeta mais próximo do Sol.", "Tem uma das maiores variações de temperatura na superfície, indo de extremamente quente a extremamente frio.", "É o planeta com a rotação mais lenta no sistema solar."]
  },
  {
    "id": 2,
    "nome": "Vênus",
    "tipo": "Terrestre",
    "diâmetro_km": 12104,
    "massa_kg": 4.8675e+24,
    "distancia_ao_sol_ua": 0.72,
    "satelites": [],
    "composicao": "Rocha e metal",
    "temperatura_media_celsius": 465,
    "atmosfera": "Espessa e dominada por dióxido de carbono",
    "gravidade": 0.91,
    "missoes_espaciais": ["Vênus Express", "Magellan"],
    "caracteristicas_especificas": ["Efeito estufa intenso", "Superfície vulcânica"],
    "historia_da_descoberta": "Vênus é frequentemente chamado de 'gêmeo da Terra' devido ao tamanho e composição semelhantes. No entanto, é um mundo abrasador com uma atmosfera densa de dióxido de carbono e temperaturas extremamente altas.",
    "rotacao": "Vênus tem uma rotação retrógrada lenta, o que significa que seu período de rotação é mais longo do que seu período orbital. Um dia em Vênus dura cerca de 243 dias terrestres. Além disso, a rotação de Vênus é incomum, pois ocorre no sentido horário (retrogrado), o oposto da maioria dos outros planetas.",
    "orbita": "Vênus orbita o Sol a uma distância média de aproximadamente 0,72 unidades astronômicas (UA). Sua órbita é quase circular, com uma excentricidade muito baixa, o que significa que a distância entre Vênus e o Sol varia pouco ao longo de sua órbita.",
    "curiosidades": ["Vênus é frequentemente chamado de 'estrela da manhã' ou 'estrela da tarde' devido à sua brilhante aparência no céu.", "Tem uma atmosfera densa que causa um efeito estufa intenso.", "Um dia em Vênus é mais longo do que um ano venusiano, pois sua rotação é extremamente lenta."]
  },
  {
    "id": 3,
    "nome": "Terra",
    "tipo": "Terrestre",
    "diâmetro_km": 12742,
    "massa_kg": 5.972e+24,
    "distancia_ao_sol_ua": 1.0,
    "satelites": ["Lua"],
    "composicao": "Rocha e metal",
    "temperatura_media_celsius": 15,
    "atmosfera": "Nitrogênio (78%) e oxigênio (21%)",
    "gravidade": 1.0,
    "missoes_espaciais": ["Apollo", "Hubble Space Telescope", "ISS"],
    "caracteristicas_especificas": ["Água líquida em abundância", "Diversidade de vida"],
    "historia_da_descoberta": "A Terra é o planeta onde vivemos e é conhecida desde tempos imemoriais. No entanto, nossa compreensão detalhada da Terra é contínua ao longo da história. A era da exploração espacial trouxe a capacidade de estudar a Terra a partir do espaço, permitindo-nos observar o planeta em sua totalidade.",
    "rotacao": "A Terra tem uma rotação no sentido anti-horário (prógrado) e um período de rotação de aproximadamente 24 horas, o que define um dia terrestre. Essa rotação é responsável pelo ciclo dia-noite na Terra.",
    "orbita": "A Terra orbita o Sol a uma distância média de aproximadamente 1 unidade astronômica (UA). Sua órbita é elíptica, mas a excentricidade é muito baixa, tornando-a quase circular. A órbita da Terra é responsável pelas estações do ano.",
    "curiosidades": ["A Terra é o único planeta conhecido com vida.", "É o terceiro planeta a partir do Sol em nosso sistema solar.", "A Grande Muralha da China é visível do espaço."]
  },
  {
    "id": 4,
    "nome": "Marte",
    "tipo": "Terrestre",
    "diâmetro_km": 6779,
    "massa_kg": 6.4171e+23,
    "distancia_ao_sol_ua": 1.52,
    "satelites": ["Fobos", "Deimos"],
    "composicao": "Rocha e metal",
    "temperatura_media_celsius": -63,
    "atmosfera": "Fina e dominada por dióxido de carbono",
    "gravidade": 0.38,
    "missoes_espaciais": ["Mars Rover (vários)", "Mars Odyssey", "Mars Express"],
    "caracteristicas_especificas": ["Monte Olimpo, o maior vulcão do sistema solar", "Canais secos"],
    "historia_da_descoberta": "Marte é conhecido desde a antiguidade e era frequentemente associado a deuses da guerra devido à sua cor avermelhada. As observações telescópicas revelaram detalhes da superfície e as características de sua fina atmosfera. As missões espaciais modernas proporcionaram uma visão mais clara da geologia e da atmosfera de Marte.",
    "rotacao": "Marte tem uma rotação no sentido anti-horário (prógrado) e um período de rotação de cerca de 24 horas e 37 minutos, muito semelhante ao dia terrestre.",
    "orbita": "Marte orbita o Sol a uma distância média de aproximadamente 1,52 unidades astronômicas (UA). Sua órbita é elíptica, o que significa que a distância entre Marte e o Sol varia ao longo de sua órbita.",
    "curiosidades": ["Marte é frequentemente chamado de 'Planeta Vermelho' devido à cor de sua superfície.", "É o quarto planeta a partir do Sol.", "Fobos, uma das luas de Marte, está se aproximando gradualmente do planeta e um dia poderá colidir com ele."]
  },
  {
    "id": 5,
    "nome": "Júpiter",
    "tipo": "Gasoso",
    "diâmetro_km": 139822,
    "massa_kg": 1.8982e+27,
    "distancia_ao_sol_ua": 5.2,
    "satelites": ["Ganimedes", "Calisto", "Io", "Europa", "e muitos outros"],
    "composicao": "Hidrogênio e hélio, com núcleo rochoso",
    "temperatura_media_celsius": -145,
    "atmosfera": "Rica em hidrogênio e hélio, com bandas de nuvens e tempestades",
    "gravidade": 2.53,
    "missoes_espaciais": ["Pioneer 10", "Voyager 1", "Galileo"],
    "caracteristicas_especificas": ["Grande Mancha Vermelha", "Anéis de nuvens"],
    "historia_da_descoberta": "Júpiter é um dos objetos mais brilhantes no céu noturno e foi conhecido desde a antiguidade. Galileu Galilei observou as quatro maiores luas de Júpiter, agora conhecidas como luas galileanas, no século XVII. A exploração espacial moderna revelou detalhes da atmosfera turbulenta e dos anéis de partículas de gelo de Júpiter.",
    "rotacao": "Júpiter tem uma rotação rápida, com um período de rotação de cerca de 9 horas e 56 minutos. Isso resulta em um achatamento pronunciado em seus polos devido à rápida rotação.",
    "orbita": "Júpiter orbita o Sol a uma distância média de aproximadamente 5,2 unidades astronômicas (UA). Sua órbita é elíptica, mas a excentricidade é relativamente baixa, tornando-a quase circular.",
    "curiosidades": ["Júpiter é o maior planeta do sistema solar.", "Possui uma Grande Mancha Vermelha, uma tempestade que dura séculos.", "Tem mais de 70 luas conhecidas."]
  },
  {
    "id": 6,
    "nome": "Saturno",
    "tipo": "Gasoso",
    "diâmetro_km": 116464,
    "massa_kg": 5.6834e+26,
    "distancia_ao_sol_ua": 9.58,
    "satelites": ["Titã", "Reia", "Dione", "e muitos outros"],
    "composicao": "Hidrogênio e hélio, com núcleo rochoso",
    "temperatura_media_celsius": -178,
    "atmosfera": "Rica em hidrogênio e hélio, com anéis de partículas de gelo",
    "gravidade": 1.07,
    "missoes_espaciais": ["Pioneer 11", "Voyager 2", "Cassini-Huygens"],
    "caracteristicas_especificas": ["Anéis notáveis", "Lua Titã com lagos de metano"],
    "historia_da_descoberta": "Saturno é visível a olho nu e foi conhecido desde a antiguidade. As observações telescópicas revelaram os anéis de Saturno e algumas de suas luas maiores. A exploração espacial moderna, com missões como a Cassini-Huygens, proporcionou informações detalhadas sobre os anéis, as luas e a atmosfera do planeta.",
    "rotacao": "Saturno tem uma rotação rápida, com um período de rotação de cerca de 10 horas e 33 minutos. Sua rápida rotação contribui para a formação de seus proeminentes anéis.",
    "orbita": "Saturno orbita o Sol a uma distância média de aproximadamente 9,58 unidades astronômicas (UA). Sua órbita é elíptica, mas a excentricidade é relativamente baixa, tornando-a quase circular.",
    "curiosidades": ["Saturno é famoso por seus deslumbrantes anéis.", "Titã, uma das luas de Saturno, tem lagos de metano e etano em sua superfície.", "Saturno é o planeta com mais de 80 luas confirmadas."]
  },
  {
    "id": 7,
    "nome": "Urano",
    "tipo": "Gasoso",
    "diâmetro_km": 50724,
    "massa_kg": 8.6810e+25,
    "distancia_ao_sol_ua": 19.22,
    "satelites": ["Titânia", "Óberon", "Umbriel", "e outros"],
    "composicao": "Hidrogênio e hélio, com água, metano e amônia",
    "temperatura_media_celsius": -224,
    "atmosfera": "Rica em hidrogênio e hélio, com nuvens de metano e amônia",
    "gravidade": 0.89,
    "missoes_espaciais": ["Voyager 2", "Keck Observatory"],
    "caracteristicas_especificas": ["Rotação inclinada", "Atmosfera gelada"],
    "historia_da_descoberta": "Urano foi descoberto em 1781 por William Herschel, tornando-se o primeiro planeta a ser descoberto com um telescópio. As observações subsequentes revelaram detalhes de sua atmosfera e sistema de anéis. Missões espaciais, como a Voyager 2, ampliaram nosso conhecimento sobre o planeta.",
    "rotacao": "Urano tem uma rotação peculiar, pois está inclinado em seu lado, com seu eixo de rotação quase paralelo ao plano orbital do sistema solar. Isso resulta em estações extremas em Urano, com cada hemisfério recebendo luz solar por períodos prolongados.",
    "orbita": "Urano orbita o Sol a uma distância média de aproximadamente 19,22 unidades astronômicas (UA). Sua órbita é elíptica, mas a excentricidade é relativamente baixa, tornando-a quase circular.",
    "curiosidades": ["Urano é o único planeta conhecido com uma rotação quase paralela ao plano orbital.", "É um dos dois planetas no sistema solar com uma rotação retrógrada.", "Urano é muitas vezes chamado de 'gigante de gelo'."]
  },
  {
    "id": 8,
    "nome": "Netuno",
    "tipo": "Gasoso",
    "diâmetro_km": 49244,
    "massa_kg": 1.02413e+26,
    "distancia_ao_sol_ua": 30.05,
    "satelites": ["Tritão", "Nereida", "Proteu", "e outros"],
    "composicao": "Hidrogênio e hélio, com água, amônia e metano",
    "temperatura_media_celsius": -214,
    "atmosfera": "Rica em hidrogênio e hélio, com tempestades e ventos poderosos",
    "gravidade": 1.14,
    "missoes_espaciais": ["Voyager 2", "Keck Observatory"],
    "caracteristicas_especificas": ["Tritão, lua com geisers de nitrogênio", "Grande Mancha Escura"],
    "historia_da_descoberta": "Netuno foi descoberto em 1846 por Johann Gottfried Galle, a partir de cálculos baseados na perturbação gravitacional observada em Urano. Missões espaciais, como a Voyager 2, revelaram detalhes da atmosfera turbulenta e das luas do planeta.",
    "rotacao": "Netuno tem uma rotação no sentido anti-horário (prógrado) e um período de rotação de cerca de 16 horas e 6 minutos. Sua rápida rotação contribui para sua atmosfera turbulenta e a formação de tempestades.",
    "orbita": "Netuno orbita o Sol a uma distância média de aproximadamente 30,05 unidades astronômicas (UA). Sua órbita é elíptica, mas a excentricidade é relativamente baixa, tornando-a quase circular.",
    "curiosidades": ["Netuno tem ventos poderosos que podem atingir velocidades de até 2.100 quilômetros por hora.", "Tritão, uma das luas de Netuno, possui geisers de nitrogênio em sua superfície.", "Netuno é o último planeta do sistema solar."]
  }
]
