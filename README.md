# Jogo da Memória
Exemplo e template de jogo da memória com javascript.

## Como usar

### Declare os arquivos das imagens
Dentro de algum de seus scripts, declare uma lista dos arquivos das imagens que serão usadas nos cards do jogo numa variavel chamada `allImages`.
```javascript
const allImages = [
    ".path/to/image 1.jpg",
    ".path/to/image 2.jpg",
    ".path/to/image 3.jpg",
    .
    .
    .
];
```

### Adicione as imagens ao seu HTML
Para os cards, use a tag `<img>` com as classes `memoria-card` e `hide-card` como mostrado abaixo. Não precisa atribuir valor ao atributo `src`.
```html
<img src="" class="memoria-card hide-card">
```

### Declare a imagem da carta virada
```javascript
const hiddenImage = "./images/card-back.jpg";
```

### Declare os métodos de eventos
```javascript
const onUpdateCards = (totalScore, attempts, selection1, selection2) => {
    // Quando as cartas são atualizadas.
    // totalScores => quantidade de pares corretamente revelados
    // attempts => número de tentativas até o momento
    // selection1, selection2 => posição das cartas reveladas pelo jogador
}

const onFinish = (score, attempts) => {
    // Quando o jogo é finalizado.
    // totalScores => quantidade de pares corretamente revelados
    // attempts => número de tentativas até o momento
}
```

### Importe o Script do Jogo da Memória
```html
<script src="http://cdn.jsdelivr.net/gh/daniel-carlos/jogo-da-memoria/jogoDaMemoria.js"></script>
```

## Estilos
Você pode usar essas classes para estilizar as cartas
```css
.memoria-card{
    /* Estilo padrão das cartas */
}

.show-card{
    /* Estilo das cartas reveladas */
}

.hide-card{
    /* Estilo das cartas não reveladas */
}

.closed-card{
    /* Estilo das cartas corretas */
}

```

## Exemplo de Utilização
index.html
```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Jogo da Memória</title>

    <link rel="stylesheet" href="style.css">

    <script src="./js/jquery.js"></script>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous">
</head>

<body class="bg-dark text-light">
    <div id="memoria">
        <div class="container">
            <div class="row">
                <div class="my-2 col-4">
                    <img src="" class="memoria-card hide-card bg-dark w-100">
                </div>
                <div class="my-2 col-4">
                    <img src="" class="memoria-card hide-card bg-dark w-100">
                </div>
                <div class="my-2 col-4">
                    <img src="" class="memoria-card hide-card bg-dark w-100">
                </div>
            </div>
            <div class="row">
                <div class="my-2 col-4">
                    <img src="" class="memoria-card hide-card bg-dark w-100">
                </div>
                <div class="my-2 col-4">
                    <img src="" class="memoria-card hide-card bg-dark w-100">
                </div>
                <div class="my-2 col-4">
                    <img src="" class="memoria-card hide-card bg-dark w-100">
                </div>
            </div>
            <div class="row">
                <div class="my-2 col-4">
                    <img src="" class="memoria-card hide-card bg-dark w-100">
                </div>
                <div class="my-2 col-4">
                    <img src="" class="memoria-card hide-card bg-dark w-100">
                </div>
                <div class="my-2 col-4">
                    <img src="" class="memoria-card hide-card bg-dark w-100">
                </div>
            </div>
            <div class="row">
                <div class="my-2 col-4">
                    <img src="" class="memoria-card hide-card bg-dark w-100">
                </div>
                <div class="my-2 col-4">
                    <img src="" class="memoria-card hide-card bg-dark w-100">
                </div>
                <div class="my-2 col-4">
                    <img src="" class="memoria-card hide-card bg-dark w-100">
                </div>
            </div>
        </div>
    </div>

    <div class="d-flex justify-content-around w-100 container">
        <div id="score-label">Acertos: 0</div>
        <div id="attempts-label">Tentativas: 0</div>
    </div>

    <script>
        const allImages = [
            "./images/cards/animals/animal (1).jpg",
            "./images/cards/animals/animal (2).jpg",
            "./images/cards/animals/animal (3).jpg",
            "./images/cards/animals/animal (4).jpg",
            "./images/cards/animals/animal (5).jpg",
            "./images/cards/animals/animal (6).jpg",
            "./images/cards/animals/animal (7).jpg",
            "./images/cards/animals/animal (8).jpg",
            "./images/cards/animals/animal (9).jpg",
            "./images/cards/animals/animal (10).jpg",
        ];

        const hiddenImage = "./images/card-back.jpg";

        const onUpdateCards = (totalScore, attempts, selection1, selection2) => {
            console.log("Here");
            $("#score-label").text(`Acertos: ${totalScore}`);
            $("#attempts-label").text(`Tentativas: ${attempts}`);
        }

        const onFinish = (score, attempts) => {
            alert(`Parabéns! Você concluiu o game com ${100*score/attempts}%`);
        }
    </script>
    
    <!-- Importar script do github -->
    <script src="http://cdn.jsdelivr.net/gh/daniel-carlos/jogo-da-memoria/jogoDaMemoria.js"></script>
</body>

</html>
```

style.css
```css
.memoria-card{
    width: 160px;
    height: 100px;
    object-fit: contain;
    border: 1px solid;
}

.show-card{
    border: 3px solid;
    border-color: greenyellow;
}

.hide-card{
    border: none;
}

.closed-card{
    border: 3px solid;
    border-color: gold !important;
}
```