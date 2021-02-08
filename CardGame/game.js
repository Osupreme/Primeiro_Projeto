const board = document.querySelector(".table_board")

let ClickedAdd = []

let pairs = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8]

pairs.forEach(pair => {
    
    const card = document.createElement("div")//aqui esta a variavel CARD criando um documento e um elemento "div" 

    card.className = "table_board_card"// aqui foi colocado a variavel CARD para criar uma classe com classname, assim podendo manipular as cartas com CSS
    card.dataset.value = pair
    card.innerText = pair//variavel CARD.inserir o texto que esta na variavel PAIR.

    card.addEventListener('click', EventClicked)

    board.append(card)//mostrar as cartas na (div.table_board).
});

function EventClicked(value){
    const ClickedCard = value.target

    ClickedCard.className.add('open')

    //ClickedAdd.dataset.Select = true
   
    ClickedAdd.push(ClickedCard)

    if(ClickedAdd.length > 1 ){
        const [fistcard , twocard] = [...ClickedAdd]

        //console.log(fistcard.dataset.value)
        //console.log(twocard.dataset.value)

        if(fistcard.dataset.value == twocard.dataset.value){
            alert("Par")

            ClickedAdd = []//limpar os pares 
        }else{
            console.log("nao formal")
            
            ClickedAdd = []//limpar os pares
        }
    }
}

/* a trés tipos de variaveis
 Var, let e const, var e let  são usadas basicamente para a mesma função, ja a const e utilizada para []
*/

//A FUNÇÃO FOR E USADA PARA ELEMENTOS DE REPETIÇÃO

//FUNÇÃO IF(SE), ELA E USADA PARA FAZER COMPARAÇÕES, SE ISSO NÃO FOR ISSO, SE NÃO FOR AQUILO, E ETC