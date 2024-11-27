// Lista de cores HTML em português com equivalentes em inglês
const allColors = [
    { pt: "Azul Alice", en: "AliceBlue" },
    { pt: "Branco Antigo", en: "AntiqueWhite" },
    { pt: "Água", en: "Aqua" },
    { pt: "Água Marinha", en: "Aquamarine" },
    { pt: "Azul Celeste", en: "Azure" },
    { pt: "Bege", en: "Beige" },
    { pt: "Creme", en: "Bisque" },
    { pt: "Preto", en: "Black" },
    { pt: "Amêndoa Branqueada", en: "BlanchedAlmond" },
    { pt: "Azul", en: "Blue" },
    { pt: "Azul Violeta", en: "BlueViolet" },
    { pt: "Marrom", en: "Brown" },
    { pt: "Madeira", en: "BurlyWood" },
    { pt: "Azul Cadete", en: "CadetBlue" },
    { pt: "Chartreuse", en: "Chartreuse" },
    { pt: "Chocolate", en: "Chocolate" },
    { pt: "Coral", en: "Coral" },
    { pt: "Azul Flor de Milho", en: "CornflowerBlue" },
    { pt: "Seda Milho", en: "Cornsilk" },
    { pt: "Carmesim", en: "Crimson" },
    { pt: "Ciano", en: "Cyan" },
    { pt: "Azul Escuro", en: "DarkBlue" },
    { pt: "Ciano Escuro", en: "DarkCyan" },
    { pt: "Dourado Escuro", en: "DarkGoldenRod" },
    { pt: "Cinza Escuro", en: "DarkGray" },
    { pt: "Verde Escuro", en: "DarkGreen" },
    { pt: "Caqui Escuro", en: "DarkKhaki" },
    { pt: "Magenta Escuro", en: "DarkMagenta" },
    { pt: "Oliva Escura", en: "DarkOliveGreen" },
    { pt: "Laranja Escuro", en: "DarkOrange" },
    { pt: "Orquídea Escura", en: "DarkOrchid" },
    { pt: "Vermelho Escuro", en: "DarkRed" },
    { pt: "Salmão Escuro", en: "DarkSalmon" },
    { pt: "Verde Mar Escuro", en: "DarkSeaGreen" },
    { pt: "Azul Ardósia Escuro", en: "DarkSlateBlue" },
    { pt: "Cinza Ardósia Escuro", en: "DarkSlateGray" },
    { pt: "Turquesa Escura", en: "DarkTurquoise" },
    { pt: "Violeta Escuro", en: "DarkViolet" },
    { pt: "Rosa Forte", en: "DeepPink" },
    { pt: "Azul Celeste Forte", en: "DeepSkyBlue" },
    { pt: "Cinza Escuro", en: "DimGray" },
    { pt: "Azul Dodger", en: "DodgerBlue" },
    { pt: "Tijolo de Fogo", en: "FireBrick" },
    { pt: "Branco Floral", en: "FloralWhite" },
    { pt: "Verde Floresta", en: "ForestGreen" },
    { pt: "Fúcsia", en: "Fuchsia" },
    { pt: "Gainsboro", en: "Gainsboro" },
    { pt: "Branco Fantasma", en: "GhostWhite" },
    { pt: "Ouro", en: "Gold" },
    { pt: "Dourado", en: "GoldenRod" },
    { pt: "Cinza", en: "Gray" },
    { pt: "Verde", en: "Green" },
    { pt: "Amarelo Esverdeado", en: "GreenYellow" },
    { pt: "Orvalho Doce", en: "HoneyDew" },
    { pt: "Rosa Quente", en: "HotPink" },
    { pt: "Vermelho Indiano", en: "IndianRed" },
    { pt: "Índigo", en: "Indigo" },
    { pt: "Marfim", en: "Ivory" },
    { pt: "Caqui", en: "Khaki" },
    { pt: "Lavanda", en: "Lavender" },
    { pt: "Lavanda Rubor", en: "LavenderBlush" },
    { pt: "Verde Grama", en: "LawnGreen" },
    { pt: "Limão Chiffon", en: "LemonChiffon" },
    { pt: "Azul Claro", en: "LightBlue" },
    { pt: "Coral Claro", en: "LightCoral" },
    { pt: "Ciano Claro", en: "LightCyan" },
    { pt: "Amarelo Dourado Claro", en: "LightGoldenRodYellow" },
    { pt: "Cinza Claro", en: "LightGray" },
    { pt: "Verde Claro", en: "LightGreen" },
    { pt: "Rosa Claro", en: "LightPink" },
    { pt: "Salmão Claro", en: "LightSalmon" },
    { pt: "Verde Mar Claro", en: "LightSeaGreen" },
    { pt: "Azul Celeste Claro", en: "LightSkyBlue" },
    { pt: "Cinza Ardósia Claro", en: "LightSlateGray" },
    { pt: "Azul Aço Claro", en: "LightSteelBlue" },
    { pt: "Amarelo Claro", en: "LightYellow" },
    { pt: "Lima", en: "Lime" },
    { pt: "Verde Lima", en: "LimeGreen" },
    { pt: "Linho", en: "Linen" },
    { pt: "Magenta", en: "Magenta" },
    { pt: "Marrom", en: "Maroon" },
    { pt: "Água Marinha Média", en: "MediumAquaMarine" },
    { pt: "Azul Médio", en: "MediumBlue" },
    { pt: "Orquídea Média", en: "MediumOrchid" },
    { pt: "Púrpura Média", en: "MediumPurple" },
    { pt: "Verde Mar Médio", en: "MediumSeaGreen" },
    { pt: "Azul Ardósia Médio", en: "MediumSlateBlue" },
    { pt: "Verde Primavera Médio", en: "MediumSpringGreen" },
    { pt: "Turquesa Média", en: "MediumTurquoise" },
    { pt: "Vermelho Violeta Médio", en: "MediumVioletRed" },
    { pt: "Azul Meia Noite", en: "MidnightBlue" },
    { pt: "Creme De Menta", en: "MintCream" },
    { pt: "Rosa Suave", en: "MistyRose" },
    { pt: "Camurça", en: "Moccasin" },
    { pt: "Branco Navajo", en: "NavajoWhite" },
    { pt: "Azul Marinho", en: "Navy" },
    { pt: "Renda Antiga", en: "OldLace" },
    { pt: "Oliva", en: "Olive" },
    { pt: "Oliva Rachada", en: "OliveDrab" },
    { pt: "Laranja", en: "Orange" },
    { pt: "Laranja Vermelha", en: "OrangeRed" },
    { pt: "Orquídea", en: "Orchid" },
    { pt: "Dourado Pálido", en: "PaleGoldenRod" },
    { pt: "Verde Pálido", en: "PaleGreen" },
    { pt: "Turquesa Pálido", en: "PaleTurquoise" },
    { pt: "Vermelho Violeta Pálido", en: "PaleVioletRed" },
    { pt: "Mamão Bate", en: "PapayaWhip" },
    { pt: "Pêssego Puff", en: "PeachPuff" },
    { pt: "Peru", en: "Peru" },
    { pt: "Rosa", en: "Pink" },
    { pt: "Ameixa", en: "Plum" },
    { pt: "Azul Pó", en: "PowderBlue" },
    { pt: "Roxo", en: "Purple" },
    { pt: "Roxo Rebecca", en: "RebeccaPurple" },
    { pt: "Vermelho", en: "Red" },
    { pt: "Marrom Rosado", en: "RosyBrown" },
    { pt: "Azul Real", en: "RoyalBlue" },
    { pt: "Marrom Sela", en: "SaddleBrown" },
    { pt: "Salmão", en: "Salmon" },
    { pt: "Marrom Areia", en: "SandyBrown" },
    { pt: "Verde Mar", en: "SeaGreen" },
    { pt: "Concha Do Mar", en: "SeaShell" },
    { pt: "Siena", en: "Sienna" },
    { pt: "Prata", en: "Silver" },
    { pt: "Azul Do Céu", en: "SkyBlue" },
    { pt: "Azul Ardósia", en: "SlateBlue" },
    { pt: "Cinza Ardósia", en: "SlateGray" },
    { pt: "Neve", en: "Snow" },
    { pt: "Verde Primavera", en: "SpringGreen" },
    { pt: "Azul Aço", en: "SteelBlue" },
    { pt: "Castanho", en: "Tan" },
    { pt: "Azul Petroléo", en: "Teal" },
    { pt: "Cardo", en: "Thistle" },
    { pt: "Tomate", en: "Tomato" },
    { pt: "Turquesa", en: "Turquoise" },
    { pt: "Violeta", en: "Violet" },
    { pt: "Trigo", en: "Wheat" },
    { pt: "Branco", en: "White" },
    { pt: "Branco Fumaça", en: "WhiteSmoke" },
    { pt: "Amarelo", en: "Yellow" },
    { pt: "Amarelo Esverdeado", en: "YellowGreen" }
  ];
  
  // Seleção aleatória de 10 cores
  const selectedColors = allColors.sort(() => 0.5 - Math.random()).slice(0, 10);
  
  // Escolher a cor secreta
  const secretColor = selectedColors[Math.floor(Math.random() * selectedColors.length)];
  
  // Exibir lista de cores ao jogador (em português)
  document.getElementById("colors-list").innerText = selectedColors.map(color => color.pt).join(", ");
  
  // Função para verificar o palpite
  function checkGuess() {
    const guess = document.getElementById("guess").value.trim();
    const feedback = document.getElementById("feedback");
  
    // Encontrar a cor correspondente ao palpite
    const guessedColor = selectedColors.find(color => color.pt === guess);
  
    if (guessedColor && guessedColor.pt === secretColor.pt) {
      feedback.innerText = `Parabéns! Você acertou. A cor era ${secretColor.pt}. recarregue a pagina para jogar outra vez!`;
      document.body.style.backgroundColor = secretColor.en; // Muda o fundo para o valor em inglês
    } else if (guessedColor && guessedColor.pt < secretColor.pt) {
      feedback.innerText = "Errou! A cor é alfabeticamente maior.";
    } else if (guessedColor) {
      feedback.innerText = "Errou! A cor é alfabeticamente menor.";
    } else {
      feedback.innerText = "Por favor, escolha uma cor válida da lista.";
    }
  }
  