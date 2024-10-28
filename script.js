class blocos {


    constructor () {
        this.id = 1
        this.notas = []  
        
    }

    comessar() {
        var addicinar = document.getElementById('nova')
        let inquerito = document.getElementById('inquerito')
        
        if (addicinar.style.display == 'none'){
            addicinar.style.display = 'flex'
            inquerito.style.display = 'none'
        }else{
            addicinar.style.display = 'none'
            inquerito.style.display = 'flex'
        }
    }

    salvar(){
        if (this.validar()){
            let nota = this.guardar()
            this.notas.push(nota)
            this.mostrar()
            this.cancelar()
        }

        this.cancelar()
    }

    mostrar(){
         let continer = document.getElementById('continer')

        continer.innerHTML = `<div class="nota" id="nova" onclick="bloco.comessar()">
            +
        </div> 
        <div class="nota" id="inquerito">
            <input type="text" id="titolo" placeholder="Titolo">
            <textarea name="nota" id="txtn"></textarea>
            <div class="dest">
                <input type="color" name="cor" id="cor">
                <button id="cancelar" onclick="bloco.cancelar()">Cancelar</button>
                <button id="salvar" onclick="bloco.salvar()">Salvar</button>
            </div>
        </div>`
        for(let c in this.notas){
            continer.innerHTML += `<div class="nota">
            <div class="titolo">
                <h3 id="titolo${this.notas[c].id}" >${this.notas[c].titolo}</h3>
            </div>
            <div class="texto">
                <p id="texto${this.notas[c].id}" >${this.notas[c].texto}</p>
            </div>
            <div class="dest2">
                <button><img src="icons/delete.png" alt="">Eliminar</button>
                <button onclick="bloco.editar(${this.notas[c].id})"><img src="icons/edit.png" alt="">Editar</button>
            </div>
        </div>`

        }
    }

  
    validar(){
        let titolo = document.getElementById('titolo').value
        let texto = document.getElementById('txtn').value

        if(titolo.length == 0 && texto.length == 0){
            alert('prencha pelomesnos um dos campos')
            return false
        }
        return true
        
    }

    guardar(){
        let nota ={}
        nota.id = this.id
        nota.titolo = document.getElementById('titolo').value
        nota.texto = document.getElementById('txtn').value
        nota.cor = document.getElementById('cor').value
        
        console.log(nota)
        return nota
    }


    cancelar() {
        let titolo = document.getElementById('titolo')
        let texto = document.getElementById('txtn')

        titolo.value = ''
        texto.value = ''

        this.comessar()

    }

    //butão de editar

    editar(id){
        
        for(let c in this.notas){
            document.getElementById('nova').style.display ='flex'
            this.comessar()

            if (this.notas[c].id == id){
                let titolo = this.notas[c].titolo
                let texto = this.notas[c].texto

                document.getElementById('titolo').value = titolo
                document.getElementById('txtn').value = texto
                
                let dest = document.getElementsByClassName('dest')[0]
                dest.innerHTML = `<input type="color" name="cor" id="cor">
                <button id="cancelar" onclick="bloco.cancelar()">Cancelar</button>
                <button id="salvar" onclick="bloco.Atualizar(${id})">Actualizar</button>` 

                
            }
        }

        
        
    }

    Atualizar(id) {
        
        let textoN = document.getElementById(`texto${id}`)
        let titoloN = document.getElementById(`titolo${id}`)

        for(let c in this.notas){
            if(this.notas[c].id == id){
                this.notas[c].titolo = document.getElementById('titolo').value
                this.notas[c].texto = document.getElementById('txtn').value
                this.notas.u

                this.mostrar()
            }
        }
    }


}
let bloco = new blocos

