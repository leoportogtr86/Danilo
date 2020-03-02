let concluido1 = document.getElementById('concluido1')
let concluido2 = document.getElementById('concluido2')
let concluido3 = document.getElementById('concluido3')
let concluido4 = document.getElementById('concluido4')
let concluido5 = document.getElementById('concluido5')
let duracao = document.getElementById('duracao')
let naoConcluido1 = document.getElementById('naoConcluido1')
let naoConcluido2 = document.getElementById('naoConcluido2')
let naoConcluido3 = document.getElementById('naoConcluido3')
let naoConcluido4 = document.getElementById('naoConcluido4')
let naoConcluido5 = document.getElementById('naoConcluido5')



let semana3 = document.getElementById('semana3')






semana3.onclick = function () {

    window.location = 'semana3.html'

}



let semana2 = document.getElementById('semana2')






semana2.onclick = function () {

    window.location = 'semana2.html'

}




let exConcluidos



/*
sessionStorage.setItem('concluido1', false)
sessionStorage.setItem('concluido2', false)
sessionStorage.setItem('concluido3', false)
sessionStorage.setItem('concluido4', false)
sessionStorage.setItem('concluido5', false)
*/

naoConcluido1.onclick = function () {

    naoConcluido1.style.display = 'none'
    concluido1.style.display = 'block'



    naoConcluido2.style.display = 'none'
    concluido2.style.display = 'none'

    naoConcluido3.style.display = 'none'
    concluido3.style.display = 'none'

    naoConcluido4.style.display = 'none'
    concluido4.style.display = 'none'

    naoConcluido5.style.display = 'none'
    concluido5.style.display = 'none'


    sessionStorage.setItem('concluido1', 1)

}

concluido1.onclick = function () {

    naoConcluido1.style.display = 'block'
    concluido1.style.display = 'none'
    sessionStorage.setItem('concluido1', 0)



}


naoConcluido2.onclick = function () {



    naoConcluido1.style.display = 'none'
    concluido1.style.display = 'none'

    naoConcluido2.style.display = 'none'
    concluido2.style.display = 'block'

    naoConcluido3.style.display = 'none'
    concluido3.style.display = 'none'

    naoConcluido4.style.display = 'none'
    concluido4.style.display = 'none'

    naoConcluido5.style.display = 'none'
    concluido5.style.display = 'none'


    sessionStorage.setItem('concluido2', 1)

}

concluido2.onclick = function () {

    naoConcluido2.style.display = 'block'
    concluido2.style.display = 'none'
    sessionStorage.setItem('concluido2', 0)



}


naoConcluido3.onclick = function () {


    naoConcluido1.style.display = 'none'
    concluido1.style.display = 'none'

    naoConcluido2.style.display = 'none'
    concluido2.style.display = 'none'

    naoConcluido3.style.display = 'none'
    concluido3.style.display = 'block'

    naoConcluido4.style.display = 'none'
    concluido4.style.display = 'none'

    naoConcluido5.style.display = 'none'
    concluido5.style.display = 'none'


    sessionStorage.setItem('concluido3', 1)

}

concluido3.onclick = function () {

    naoConcluido3.style.display = 'block'
    concluido3.style.display = 'none'
    sessionStorage.setItem('concluido3', 0)



}

naoConcluido4.onclick = function () {



    naoConcluido1.style.display = 'none'
    concluido1.style.display = 'none'

    naoConcluido2.style.display = 'none'
    concluido2.style.display = 'none'

    naoConcluido3.style.display = 'none'
    concluido3.style.display = 'none'

    naoConcluido4.style.display = 'none'
    concluido4.style.display = 'block'

    naoConcluido5.style.display = 'none'
    concluido5.style.display = 'none'


    sessionStorage.setItem('concluido4', 1)

}

concluido4.onclick = function () {

    naoConcluido4.style.display = 'block'
    concluido4.style.display = 'none'
    sessionStorage.setItem('concluido4', 0)



}


naoConcluido5.onclick = function () {



    naoConcluido1.style.display = 'none'
    concluido1.style.display = 'none'

    naoConcluido2.style.display = 'none'
    concluido2.style.display = 'none'

    naoConcluido3.style.display = 'none'
    concluido3.style.display = 'none'

    naoConcluido4.style.display = 'none'
    concluido4.style.display = 'none'

    naoConcluido5.style.display = 'none'
    concluido5.style.display = 'block'


    sessionStorage.setItem('concluido5', 1)

}

concluido5.onclick = function () {



    naoConcluido5.style.display = 'block'
    concluido5.style.display = 'none'
    sessionStorage.setItem('concluido5', 0)

}

function conclusao() {

    console.log(exConcluidos)

    if (exConcluidos == 5) {

        console.log('sessão de estudo finalizada')
        alert("Sessão de Estudos Finalizada com Sucesso!!")


    }

    if (sessionStorage.concluido1 == 1) {

        naoConcluido1.style.display = 'none'
        concluido1.style.display = 'block'
        console.log('concluído')
    }

    if (sessionStorage.concluido2 == 1) {

        naoConcluido2.style.display = 'none'
        concluido2.style.display = 'block'
        console.log('concluído')
    }

    if (sessionStorage.concluido3 == 1) {

        naoConcluido3.style.display = 'none'
        concluido3.style.display = 'block'
        console.log('concluído')
    }

    if (sessionStorage.concluido4 == 1) {

        naoConcluido4.style.display = 'none'
        concluido4.style.display = 'block'
        console.log('concluído')
    }

    if (sessionStorage.concluido5 == 1) {

        naoConcluido5.style.display = 'none'
        concluido5.style.display = 'block'
        console.log('concluído')
    }

}







let permissao = document.getElementById('permissao')
let still = document.getElementById('still')
let calendario = document.getElementById('calendario')
let abrCorda = document.getElementById('abrCorda')
let speed = document.getElementById('speed')
let traste1 = document.getElementById('traste1')
let traste2 = document.getElementById('traste2')
let traste3 = document.getElementById('traste3')
let traste4 = document.getElementById('traste4')
let traste5 = document.getElementById('traste5')
let traste6 = document.getElementById('traste6')
let traste7 = document.getElementById('traste7')
let traste8 = document.getElementById('traste8')
let traste9 = document.getElementById('traste9')
let traste10 = document.getElementById('traste10')
let traste11 = document.getElementById('traste11')
let traste12 = document.getElementById('traste12')
let traste13 = document.getElementById('traste13')
let traste14 = document.getElementById('traste14')
let traste15 = document.getElementById('traste15')
let menuH = document.getElementById('menuH')
let menuH1 = document.getElementById('menuH1')
let estrutura = document.getElementById('estrutura')
let tipo = document.getElementById('tipo')
let tonalidade = document.getElementById('tonalidade')
let botao0 = document.getElementById('botao0')
let posicao = document.getElementById('posicao')
let video = document.getElementById('video')
let inputVideo = document.getElementById('inputVideo')
let botao1 = document.getElementById('botao1')
let clear = document.getElementById('limpar')
let mostrar = document.getElementById('mostrar')
let botao = document.getElementById('botao')
let pestana = document.getElementById('pestana')
let pdf = document.getElementById('pdf')
let lista = document.getElementById('lista')
let corda = document.getElementsByClassName('corda')
let traste = document.getElementsByClassName('traste')
let nota = document.getElementsByClassName('nota')
let ex1 = document.getElementById('ex1')
let ex2 = document.getElementById('ex2')
let ex3 = document.getElementById('ex3')
let ex4 = document.getElementById('ex4')
let ex5 = document.getElementById('ex5')
let posicao1 = document.getElementById('posicao1')
let posicao2 = document.getElementById('posicao2')
let posicao3 = document.getElementById('posicao3')
let posicao4 = document.getElementById('posicao4')
let posicao5 = document.getElementById('posicao5')
let all = document.getElementsByTagName('*')
let bolinha = document.getElementsByClassName('bolinha')
let body = document.body
let timerSvg = document.getElementById('timerSvg')
let aviso = document.getElementById('aviso')
let timer = document.getElementById('timer')
let esquerda = document.getElementById('esquerda')
let direita = document.getElementById('direita')
let contadorPosicao = 1
let base = document.getElementById('base')
let click = document.getElementById('click')
let play = document.getElementById('play')
let pause = document.getElementById('pause')
let mais = document.getElementById('mais')
let menos = document.getElementById('menos')
let andamento = document.getElementById('andamento')
let bpm = 60
let camada1 = document.getElementById('camada1')
let tocando = false
let speedOn = false
let listaSemanas = document.getElementById('listaSemanas')
let semana1 = document.getElementById('semana1')
let css = document.getElementById('css')
let video1 = document.getElementById('video1')

semana1.onclick = function () {

    window.location = 'index.html'

}

semana2.onclick = function () {

    window.location = 'semana2.html'

}


console.log('Número de elementos da pág: ' + all.length)
console.log('Cordas: ' + corda.length)
console.log('Casas: ' + traste.length)


document.onclick = function () {

    console.log('X: ' + event.clientX + '\n' + 'Y: ' + event.clientY)

}

still.onclick = function () {

    window.location = 'still.html'

}

video1.play()

semana1.onclick = function () {

    listaSemanas.style.top = '-580px'
    window.location = 'index.html'


}

calendario.onclick = function () {

    listaSemanas.style.top = '10px'
}

listaSemanas.onmouseleave = function () {

    listaSemanas.style.top = '-630px'

}

speed.onclick = function () {

    if (speedOn == false) {

        speedOn = true
        speed.src = 'speedOn.svg'
        funcaoVelocidade()


    } else {

        speedOn = false
        speed.src = 'speed.svg'
        window.location.reload()

    }

}

andamento.innerHTML = bpm + ' BPM'

click.src = bpm + ' BPM.mp3'

function verificaBpm() {

    if (bpm <= 55) {

        if (tocando == true) {

            bpm = 60
            andamento.innerHTML = '60 BPM'
            click.src = '60 BPM.mp3'
            click.play()


        } else if (tocando == false) {

            bpm = 60
            andamento.innerHTML = '60 BPM'
            click.src = '60 BPM.mp3'


        }



    }

    if (bpm >= 285) {

        if (tocando == true) {

            bpm = 280
            andamento.innerHTML = '280 BPM'
            click.src = '280 BPM.mp3'
            click.play()


        } else if (tocando == false) {

            bpm = 280
            andamento.innerHTML = '280 BPM'
            click.src = '280 BPM.mp3'


        }

    }

}



play.onclick = function () {

    click.play()
    play.style.display = 'none'
    pause.style.display = 'block'
    click.currentTime = 0
    camada1.style.animation = 'pisca2 1s linear infinite'
    tocando = true

    if (bpm == 120) {

        camada1.style.animation = 'pisca2 0.5s linear infinite'


    } else if (bpm == 240) {

        camada1.style.animation = 'pisca2 0.25s linear infinite'


    } else if (bpm == 65) {

        camada1.style.animation = 'pisca2 0.92s linear infinite'


    } else if (bpm == 70) {

        camada1.style.animation = 'pisca2 0.85s linear infinite'


    } else if (bpm == 75) {

        camada1.style.animation = 'pisca2 0.8s linear infinite'


    } else if (bpm == 80) {

        camada1.style.animation = 'pisca2 0.75s linear infinite'


    } else if (bpm == 85) {

        camada1.style.animation = 'pisca2 0.70s linear infinite'


    } else if (bpm == 90) {

        camada1.style.animation = 'pisca2 0.66s linear infinite'


    } else if (bpm == 95) {

        camada1.style.animation = 'pisca2 0.63s linear infinite'


    } else if (bpm == 100) {

        camada1.style.animation = 'pisca2 0.6s linear infinite'


    } else if (bpm == 105) {

        camada1.style.animation = 'pisca2 0.57s linear infinite'


    } else if (bpm == 110) {

        camada1.style.animation = 'pisca2 0.54s linear infinite'


    } else if (bpm == 115) {

        camada1.style.animation = 'pisca2 0.52s linear infinite'


    } else if (bpm == 120) {

        camada1.style.animation = 'pisca2 0.5s linear infinite'


    } else if (bpm == 125) {

        camada1.style.animation = 'pisca2 0.48s linear infinite'


    } else if (bpm == 130) {

        camada1.style.animation = 'pisca2 0.46s linear infinite'


    } else if (bpm == 135) {

        camada1.style.animation = 'pisca2 0.44s linear infinite'


    } else if (bpm == 140) {

        camada1.style.animation = 'pisca2 0.42s linear infinite'


    } else if (bpm == 145) {

        camada1.style.animation = 'pisca2 0.41s linear infinite'


    } else if (bpm == 150) {

        camada1.style.animation = 'pisca2 0.4s linear infinite'


    } else if (bpm == 155) {

        camada1.style.animation = 'pisca2 0.38s linear infinite'


    } else if (bpm == 160) {

        camada1.style.animation = 'pisca2 0.375s linear infinite'


    } else if (bpm == 165) {

        camada1.style.animation = 'pisca2 0.36s linear infinite'


    } else if (bpm == 170) {

        camada1.style.animation = 'pisca2 0.35s linear infinite'


    } else if (bpm == 175) {

        camada1.style.animation = 'pisca2 0.34s linear infinite'


    } else if (bpm == 180) {

        camada1.style.animation = 'pisca2 0.33s linear infinite'


    } else if (bpm == 185) {

        camada1.style.animation = 'pisca2 0.32s linear infinite'


    } else if (bpm == 190) {

        camada1.style.animation = 'pisca2 0.31s linear infinite'


    } else if (bpm == 195) {

        camada1.style.animation = 'pisca2 0.307s linear infinite'


    } else if (bpm == 200) {

        camada1.style.animation = 'pisca2 0.3s linear infinite'


    } else if (bpm == 205) {

        camada1.style.animation = 'pisca2 0.292s linear infinite'


    } else if (bpm == 210) {

        camada1.style.animation = 'pisca2 0.285s linear infinite'


    } else if (bpm == 215) {

        camada1.style.animation = 'pisca2 0.279s linear infinite'


    } else if (bpm == 220) {

        camada1.style.animation = 'pisca2 0.272s linear infinite'


    } else if (bpm == 225) {

        camada1.style.animation = 'pisca2 0.266s linear infinite'


    } else if (bpm == 230) {

        camada1.style.animation = 'pisca2 0.260s linear infinite'


    } else if (bpm == 235) {

        camada1.style.animation = 'pisca2 0.255s linear infinite'


    } else if (bpm == 240) {

        camada1.style.animation = 'pisca2 0.25s linear infinite'


    }










    for (i = 60; i <= 240; i++) {

        if (i % 5 == 0) {

            console.log(60 / i)


        }


    }



}



pause.onclick = function () {

    click.pause()
    click.currentTime = 0
    play.style.display = 'block'
    pause.style.display = 'none'
    camada1.style.animation = ''
    tocando = false
    clearInterval(treinarVelocidade)





}

mais.onclick = function () {

    if (tocando == true) {

        bpm += 5
        andamento.innerHTML = bpm + ' BPM'
        click.src = bpm + ' BPM.mp3'
        click.currentTime = 0
        click.play()
        verificaBpm()
        if (bpm == 120) {

            camada1.style.animation = 'pisca2 0.5s linear infinite'


        } else if (bpm == 240) {

            camada1.style.animation = 'pisca2 0.25s linear infinite'


        } else if (bpm == 65) {

            camada1.style.animation = 'pisca2 0.92s linear infinite'


        } else if (bpm == 70) {

            camada1.style.animation = 'pisca2 0.85s linear infinite'


        } else if (bpm == 75) {

            camada1.style.animation = 'pisca2 0.8s linear infinite'


        } else if (bpm == 80) {

            camada1.style.animation = 'pisca2 0.75s linear infinite'


        } else if (bpm == 85) {

            camada1.style.animation = 'pisca2 0.70s linear infinite'


        } else if (bpm == 90) {

            camada1.style.animation = 'pisca2 0.66s linear infinite'


        } else if (bpm == 95) {

            camada1.style.animation = 'pisca2 0.63s linear infinite'


        } else if (bpm == 100) {

            camada1.style.animation = 'pisca2 0.6s linear infinite'


        } else if (bpm == 105) {

            camada1.style.animation = 'pisca2 0.57s linear infinite'


        } else if (bpm == 110) {

            camada1.style.animation = 'pisca2 0.54s linear infinite'


        } else if (bpm == 115) {

            camada1.style.animation = 'pisca2 0.52s linear infinite'


        } else if (bpm == 120) {

            camada1.style.animation = 'pisca2 0.5s linear infinite'


        } else if (bpm == 125) {

            camada1.style.animation = 'pisca2 0.48s linear infinite'


        } else if (bpm == 130) {

            camada1.style.animation = 'pisca2 0.46s linear infinite'


        } else if (bpm == 135) {

            camada1.style.animation = 'pisca2 0.44s linear infinite'


        } else if (bpm == 140) {

            camada1.style.animation = 'pisca2 0.42s linear infinite'


        } else if (bpm == 145) {

            camada1.style.animation = 'pisca2 0.41s linear infinite'


        } else if (bpm == 150) {

            camada1.style.animation = 'pisca2 0.4s linear infinite'


        } else if (bpm == 155) {

            camada1.style.animation = 'pisca2 0.38s linear infinite'


        } else if (bpm == 160) {

            camada1.style.animation = 'pisca2 0.375s linear infinite'


        } else if (bpm == 165) {

            camada1.style.animation = 'pisca2 0.36s linear infinite'


        } else if (bpm == 170) {

            camada1.style.animation = 'pisca2 0.35s linear infinite'


        } else if (bpm == 175) {

            camada1.style.animation = 'pisca2 0.34s linear infinite'


        } else if (bpm == 180) {

            camada1.style.animation = 'pisca2 0.33s linear infinite'


        } else if (bpm == 185) {

            camada1.style.animation = 'pisca2 0.32s linear infinite'


        } else if (bpm == 190) {

            camada1.style.animation = 'pisca2 0.31s linear infinite'


        } else if (bpm == 195) {

            camada1.style.animation = 'pisca2 0.307s linear infinite'


        } else if (bpm == 200) {

            camada1.style.animation = 'pisca2 0.3s linear infinite'


        } else if (bpm == 205) {

            camada1.style.animation = 'pisca2 0.292s linear infinite'


        } else if (bpm == 210) {

            camada1.style.animation = 'pisca2 0.285s linear infinite'


        } else if (bpm == 215) {

            camada1.style.animation = 'pisca2 0.279s linear infinite'


        } else if (bpm == 220) {

            camada1.style.animation = 'pisca2 0.272s linear infinite'


        } else if (bpm == 225) {

            camada1.style.animation = 'pisca2 0.266s linear infinite'


        } else if (bpm == 230) {

            camada1.style.animation = 'pisca2 0.260s linear infinite'


        } else if (bpm == 235) {

            camada1.style.animation = 'pisca2 0.255s linear infinite'


        } else if (bpm == 240) {

            camada1.style.animation = 'pisca2 0.25s linear infinite'


        }

    } else if (tocando == false) {

        bpm += 5
        andamento.innerHTML = bpm + ' BPM'
        click.src = bpm + ' BPM.mp3'
        click.currentTime = 0
        verificaBpm()
        camada1.style.animation = ''


    }





}

menos.onclick = function () {



    if (tocando == true) {

        bpm -= 5
        andamento.innerHTML = bpm + ' BPM'
        click.src = bpm + ' BPM.mp3'
        click.currentTime = 0
        click.play()
        verificaBpm()
        if (bpm == 120) {

            camada1.style.animation = 'pisca2 0.5s linear infinite'


        } else if (bpm == 240) {

            camada1.style.animation = 'pisca2 0.25s linear infinite'


        } else if (bpm == 65) {

            camada1.style.animation = 'pisca2 0.92s linear infinite'


        } else if (bpm == 70) {

            camada1.style.animation = 'pisca2 0.85s linear infinite'


        } else if (bpm == 75) {

            camada1.style.animation = 'pisca2 0.8s linear infinite'


        } else if (bpm == 80) {

            camada1.style.animation = 'pisca2 0.75s linear infinite'


        } else if (bpm == 85) {

            camada1.style.animation = 'pisca2 0.70s linear infinite'


        } else if (bpm == 90) {

            camada1.style.animation = 'pisca2 0.66s linear infinite'


        } else if (bpm == 95) {

            camada1.style.animation = 'pisca2 0.63s linear infinite'


        } else if (bpm == 100) {

            camada1.style.animation = 'pisca2 0.6s linear infinite'


        } else if (bpm == 105) {

            camada1.style.animation = 'pisca2 0.57s linear infinite'


        } else if (bpm == 110) {

            camada1.style.animation = 'pisca2 0.54s linear infinite'


        } else if (bpm == 115) {

            camada1.style.animation = 'pisca2 0.52s linear infinite'


        } else if (bpm == 120) {

            camada1.style.animation = 'pisca2 0.5s linear infinite'


        } else if (bpm == 125) {

            camada1.style.animation = 'pisca2 0.48s linear infinite'


        } else if (bpm == 130) {

            camada1.style.animation = 'pisca2 0.46s linear infinite'


        } else if (bpm == 135) {

            camada1.style.animation = 'pisca2 0.44s linear infinite'


        } else if (bpm == 140) {

            camada1.style.animation = 'pisca2 0.42s linear infinite'


        } else if (bpm == 145) {

            camada1.style.animation = 'pisca2 0.41s linear infinite'


        } else if (bpm == 150) {

            camada1.style.animation = 'pisca2 0.4s linear infinite'


        } else if (bpm == 155) {

            camada1.style.animation = 'pisca2 0.38s linear infinite'


        } else if (bpm == 160) {

            camada1.style.animation = 'pisca2 0.375s linear infinite'


        } else if (bpm == 165) {

            camada1.style.animation = 'pisca2 0.36s linear infinite'


        } else if (bpm == 170) {

            camada1.style.animation = 'pisca2 0.35s linear infinite'


        } else if (bpm == 175) {

            camada1.style.animation = 'pisca2 0.34s linear infinite'


        } else if (bpm == 180) {

            camada1.style.animation = 'pisca2 0.33s linear infinite'


        } else if (bpm == 185) {

            camada1.style.animation = 'pisca2 0.32s linear infinite'


        } else if (bpm == 190) {

            camada1.style.animation = 'pisca2 0.31s linear infinite'


        } else if (bpm == 195) {

            camada1.style.animation = 'pisca2 0.307s linear infinite'


        } else if (bpm == 200) {

            camada1.style.animation = 'pisca2 0.3s linear infinite'


        } else if (bpm == 205) {

            camada1.style.animation = 'pisca2 0.292s linear infinite'


        } else if (bpm == 210) {

            camada1.style.animation = 'pisca2 0.285s linear infinite'


        } else if (bpm == 215) {

            camada1.style.animation = 'pisca2 0.279s linear infinite'


        } else if (bpm == 220) {

            camada1.style.animation = 'pisca2 0.272s linear infinite'


        } else if (bpm == 225) {

            camada1.style.animation = 'pisca2 0.266s linear infinite'


        } else if (bpm == 230) {

            camada1.style.animation = 'pisca2 0.260s linear infinite'


        } else if (bpm == 235) {

            camada1.style.animation = 'pisca2 0.255s linear infinite'


        } else if (bpm == 240) {

            camada1.style.animation = 'pisca2 0.25s linear infinite'


        }

    } else if (tocando == false) {

        bpm -= 5
        andamento.innerHTML = bpm + ' BPM'
        click.src = bpm + ' BPM.mp3'
        click.currentTime = 0
        verificaBpm()
        camada1.style.animation = ''


    }

}



ex5.onclick = function () {

    apagar()

    naoConcluido1.style.display = 'none'
    concluido1.style.display = 'none'

    naoConcluido2.style.display = 'none'
    concluido2.style.display = 'none'

    naoConcluido3.style.display = 'none'
    concluido3.style.display = 'none'

    naoConcluido4.style.display = 'none'
    concluido4.style.display = 'none'

    naoConcluido5.style.display = 'block'
    concluido5.style.display = 'none'


    console.log('ex5')
    video1.pause()
    apagar()
    lista.style.top = '-580px'
    base.style.display = 'block'

    base.play()

    setInterval(duasCordas, 500)



}

function duasCordas() {

    if (base.currentTime < 150) {

        apagar()

        tab('1', 0)
        tab('1', 1)
        tab('1', 4)
        tab('1', 5)
        tab('1', 7)
        tab('1', 8)
        tab('1', 10)
        tab('1', 12)


        tab('2', 0)
        tab('2', 1)
        tab('2', 3)
        tab('2', 5)
        tab('2', 6)
        tab('2', 9)
        tab('2', 10)
        tab('2', 12)



    } else if (base.currentTime < 300) {

        apagar()

        tab('3', 1)
        tab('3', 2)
        tab('3', 4)
        tab('3', 5)
        tab('3', 7)
        tab('3', 9)
        tab('3', 10)
        tab('3', 13)


        tab('4', 0)
        tab('4', 2)
        tab('4', 3)
        tab('4', 6)
        tab('4', 7)
        tab('4', 9)
        tab('4', 10)
        tab('4', 12)



    } else if (base.currentTime < 450) {

        apagar()

        tab('5', 0)
        tab('5', 2)
        tab('5', 3)
        tab('5', 5)
        tab('5', 7)
        tab('5', 8)
        tab('5', 11)
        tab('5', 12)


        tab('6', 0)
        tab('6', 1)
        tab('6', 4)
        tab('6', 5)
        tab('6', 7)
        tab('6', 8)
        tab('6', 10)
        tab('6', 12)



    }


}




function shape() {



    if (base.currentTime <= 71) {

        console.log('shape 1')

        apagar()
        corda6[5].style.display = 'block'
        corda6[7].style.display = 'block'
        corda6[8].style.display = 'block'
        corda5[5].style.display = 'block'
        corda5[7].style.display = 'block'
        corda5[8].style.display = 'block'
        corda4[6].style.display = 'block'
        corda4[7].style.display = 'block'
        corda4[9].style.display = 'block'
        corda3[5].style.display = 'block'
        corda3[7].style.display = 'block'
        corda3[9].style.display = 'block'
        corda2[6].style.display = 'block'
        corda2[9].style.display = 'block'
        corda2[10].style.display = 'block'
        corda1[7].style.display = 'block'
        corda1[8].style.display = 'block'
        corda1[10].style.display = 'block'



    } else if (base.currentTime <= 142) {

        console.log('shape 2')

        apagar()
        corda6[7].style.display = 'block'
        corda6[8].style.display = 'block'
        corda6[10].style.display = 'block'
        corda5[7].style.display = 'block'
        corda5[8].style.display = 'block'
        corda5[11].style.display = 'block'
        corda4[7].style.display = 'block'
        corda4[9].style.display = 'block'
        corda4[10].style.display = 'block'
        corda3[7].style.display = 'block'
        corda3[9].style.display = 'block'
        corda3[10].style.display = 'block'
        corda2[9].style.display = 'block'
        corda2[10].style.display = 'block'
        corda2[12].style.display = 'block'
        corda1[8].style.display = 'block'
        corda1[10].style.display = 'block'
        corda1[12].style.display = 'block'


    } else if (base.currentTime <= 213) {

        console.log('shape 3')

        apagar()
        corda6[8].style.display = 'block'
        corda6[10].style.display = 'block'
        corda6[12].style.display = 'block'
        corda5[8].style.display = 'block'
        corda5[11].style.display = 'block'
        corda5[12].style.display = 'block'
        corda4[9].style.display = 'block'
        corda4[10].style.display = 'block'
        corda4[12].style.display = 'block'
        corda3[9].style.display = 'block'
        corda3[10].style.display = 'block'
        corda3[13].style.display = 'block'
        corda2[10].style.display = 'block'
        corda2[12].style.display = 'block'
        corda2[13].style.display = 'block'
        corda1[10].style.display = 'block'
        corda1[12].style.display = 'block'
        corda1[13].style.display = 'block'



    } else if (base.currentTime <= 284) {

        console.log('shape 4')

        apagar()
        corda6[10].style.display = 'block'
        corda6[12].style.display = 'block'
        corda6[13].style.display = 'block'
        corda5[11].style.display = 'block'
        corda5[12].style.display = 'block'
        corda5[14].style.display = 'block'
        corda4[10].style.display = 'block'
        corda4[12].style.display = 'block'
        corda4[14].style.display = 'block'
        corda3[10].style.display = 'block'
        corda3[13].style.display = 'block'
        corda3[14].style.display = 'block'
        corda2[12].style.display = 'block'
        corda2[13].style.display = 'block'
        corda2[15].style.display = 'block'
        corda1[12].style.display = 'block'
        corda1[13].style.display = 'block'
        corda1[16].style.display = 'block'



    } else if (base.currentTime <= 355) {

        console.log('shape 5')

        apagar()
        corda6[0].style.display = 'block'
        corda6[1].style.display = 'block'
        corda6[4].style.display = 'block'
        corda5[0].style.display = 'block'
        corda5[2].style.display = 'block'
        corda5[3].style.display = 'block'
        corda4[0].style.display = 'block'
        corda4[2].style.display = 'block'
        corda4[3].style.display = 'block'
        corda3[1].style.display = 'block'
        corda3[2].style.display = 'block'
        corda3[4].style.display = 'block'
        corda2[1].style.display = 'block'
        corda2[3].style.display = 'block'
        corda2[5].style.display = 'block'
        corda1[1].style.display = 'block'
        corda1[4].style.display = 'block'
        corda1[5].style.display = 'block'



    } else if (base.currentTime <= 426) {

        console.log('shape 6')

        apagar()
        corda6[1].style.display = 'block'
        corda6[4].style.display = 'block'
        corda6[5].style.display = 'block'
        corda5[2].style.display = 'block'
        corda5[3].style.display = 'block'
        corda5[5].style.display = 'block'
        corda4[2].style.display = 'block'
        corda4[3].style.display = 'block'
        corda4[6].style.display = 'block'
        corda3[2].style.display = 'block'
        corda3[4].style.display = 'block'
        corda3[5].style.display = 'block'
        corda2[3].style.display = 'block'
        corda2[5].style.display = 'block'
        corda2[6].style.display = 'block'
        corda1[4].style.display = 'block'
        corda1[5].style.display = 'block'
        corda1[7].style.display = 'block'






    } else if (base.currentTime <= 497) {

        console.log('shape 7')

        apagar()
        corda6[4].style.display = 'block'
        corda6[5].style.display = 'block'
        corda6[7].style.display = 'block'
        corda5[3].style.display = 'block'
        corda5[5].style.display = 'block'
        corda5[7].style.display = 'block'
        corda4[3].style.display = 'block'
        corda4[6].style.display = 'block'
        corda4[7].style.display = 'block'
        corda3[4].style.display = 'block'
        corda3[5].style.display = 'block'
        corda3[7].style.display = 'block'
        corda2[5].style.display = 'block'
        corda2[6].style.display = 'block'
        corda2[9].style.display = 'block'
        corda1[5].style.display = 'block'
        corda1[7].style.display = 'block'
        corda1[8].style.display = 'block'



    }


}



menuH1.onclick = function () {

    lista.style.right = '10px'
    lista.style.top = '0px'



    for (i = 0; i < corda.length; i++) {

        corda[i].style.filter = 'blur(5px)'


    }


    for (i = 0; i < bolinha.length; i++) {

        bolinha[i].style.filter = 'blur(5px)'


    }

    for (i = 0; i < traste.length; i++) {

        traste[i].style.filter = 'blur(5px)'


    }

    for (i = 0; i < nota.length; i++) {

        nota[i].style.filter = 'blur(5px)'


    }



}

if (lista.style.right == '-550px') {

    for (i = 0; i < corda.length; i++) {

        corda[i].style.filter = 'blur(0px)'


    }

    for (i = 0; i < traste.length; i++) {

        traste[i].style.filter = 'blur(0px)'


    }

    for (i = 0; i < nota.length; i++) {

        nota[i].style.filter = 'blur(0px)'


    }



}

esquerda.onclick = function () {





}

direita.onclick = function () {








}





bolinha[1].onclick = function () {

    for (i = 0; i < corda.length; i++) {

        corda[i].style.backgroundColor = 'gray'


    }

    for (i = 0; i < traste.length; i++) {

        traste[i].style.backgroundColor = 'gray'


    }

    for (i = 0; i < bolinha.length; i++) {

        bolinha[i].style.backgroundColor = 'gray'


    }

    body.style.backgroundColor = 'white'

}

bolinha[0].onclick = function () {

    for (i = 0; i < corda.length; i++) {

        corda[i].style.backgroundColor = 'orangered'


    }

    for (i = 0; i < traste.length; i++) {

        traste[i].style.backgroundColor = 'orangered'


    }

    for (i = 0; i < bolinha.length; i++) {

        bolinha[i].style.backgroundColor = 'orangered'


    }

    body.style.backgroundColor = '#1F3340'

}

timerSvg.onmouseover = function () {


    aviso.style.display = 'block'

}

timerSvg.onmouseout = function () {


    aviso.style.display = 'none'

}

let min = 10



function verificaDuracao() {

    if (duracao.value == 10) {

        console.log('10 min')
        min = 10


    } else if (duracao.value == 9) {

        console.log('9 min')
        min = 9


    } else if (duracao.value == 8) {

        console.log('8 min')
        min = 8


    } else if (duracao.value == 7) {

        console.log('7 min')
        min = 7


    } else if (duracao.value == 6) {

        console.log('6 min')
        min = 6


    } else if (duracao.value == 5) {

        console.log('5 min')
        min = 5


    } else if (duracao.value == 4) {

        console.log('4 min')
        min = 4


    } else if (duracao.value == 3) {

        console.log('3 min')
        min = 3


    } else if (duracao.value == 2) {

        console.log('2 min')
        min = 2


    } else if (duracao.value == 1) {

        console.log('1 min')
        min = 1


    }

}

setInterval(verificaDuracao, 100)



timerSvg.onclick = function () {



    timer.style.animation = 'timer ' + 60 * min + 's linear'

    setTimeout(function () {

        aviso.style.display = 'block'
        aviso.innerHTML = 'Já chegamos na metade! Força, falta pouco. Não deixe as distrações te pararem!!!'
        aviso.style.animation = 'pisca 1s linear 5'

    }, 1000 * 60 * min / 2)

    setTimeout(function () {

        alert('Exercício finalizado!!!')
        video1.pause()
        video1.src = ''
        timer.style.animation = ''

    }, 1000 * 60 * min + 3)


    /*
    setTimeout(function () {

        video1.pause()
        video1.src = ''

        window.location.reload()
        video1.pause()
        video1.currentTime = 0

    }, 1000 * 60 * min + 3)

    video1.pause()
    video1.src = ''
*/
}







ex1.onclick = function () {

    lista.style.top = '-580px'

    ex1.style.backgroundColor = 'orange'

}

for (i = 0; i < bolinha.length; i++) {

    bolinha[i].style.backgroundColor = 'grey'


}


function molduraF(casa) {

    moldura.style.display = 'block'


    if (casa == 1) {

        moldura.style.left = '100px'


    } else if (casa == 0) {

        moldura.style.left = '20px'

    } else if (casa == 2) {

        moldura.style.left = '180px'
    } else if (casa == 3) {

        moldura.style.left = '260px'
    } else if (casa == 4) {

        moldura.style.left = '340px'
    } else if (casa == 5) {

        moldura.style.left = '420px'
    } else if (casa == 6) {

        moldura.style.left = '500px'
    } else if (casa == 7) {

        moldura.style.left = '580px'
    } else if (casa == 8) {

        moldura.style.left = '660px'
    } else if (casa == 9) {

        moldura.style.left = '740px'
    } else if (casa == 10) {

        moldura.style.left = '820px'
    } else if (casa == 11) {

        moldura.style.left = '900px'
    } else if (casa == 12) {

        moldura.style.left = '980px'
    }

}

ex1.onclick = function () {

    apagar()
    naoConcluido1.style.display = 'block'
    setInterval(conclusao, 100)




    base.pause()
    base.currentTime = 0

    lista.style.top = '-580px'
    pdf.src = 'precisao3.pdf'
    video1.src = 'exPrecisao3.mp4'
    pdf.style.zIndex = '50'
    pdf.style.display = 'inline'
    video1.style.display = 'inline'
    base.style.display = 'none'



    for (i = 3; i < 7; i++) {

        corda6[i].style.display = 'block'
        corda6[i].style.backgroundColor = 'greeyellow'

        corda5[i].style.display = 'block'
        corda5[i].style.backgroundColor = 'greeyellow'

        corda4[i].style.display = 'block'
        corda4[i].style.backgroundColor = 'greeyellow'

        corda3[i].style.display = 'block'
        corda3[i].style.backgroundColor = 'greeyellow'

        corda2[i].style.display = 'block'
        corda2[i].style.backgroundColor = 'greeyellow'

        corda1[i].style.display = 'block'
        corda1[i].style.backgroundColor = 'greeyellow'
    }




}



ex2.onclick = function () {

    apagar()

    naoConcluido1.style.display = 'none'
    concluido1.style.display = 'none'

    naoConcluido2.style.display = 'block'
    concluido2.style.display = 'none'

    naoConcluido3.style.display = 'none'
    concluido3.style.display = 'none'

    naoConcluido4.style.display = 'none'
    concluido4.style.display = 'none'

    naoConcluido5.style.display = 'none'
    concluido5.style.display = 'none'


    base.pause()
    base.currentTime = 0


    contadorPosicao = 0
    lista.style.top = '-580px'
    pdf.style.display = 'none'
    video1.style.display = 'none'
    video1.pause()
    video.style.display = 'none'
    base.style.display = 'none'

    enarmonia('D#', 'Eb')
    enarmonia('G#', 'Ab')

    mostrarTodas('C')
    mostrarTodas('D')
    mostrarTodas('Eb')
    mostrarTodas('F')
    mostrarTodas('G')
    mostrarTodas('Ab')
    mostrarTodas('B')














}

lista.onmouseleave = function () {

    lista.style.top = '-580px'
    for (i = 0; i < corda.length; i++) {

        corda[i].style.filter = 'blur(0px)'


    }



    for (i = 0; i < traste.length; i++) {

        traste[i].style.filter = 'blur(0px)'


    }


    for (i = 0; i < bolinha.length; i++) {

        bolinha[i].style.filter = 'blur(0px)'


    }

    for (i = 0; i < nota.length; i++) {

        nota[i].style.filter = 'blur(0px)'


    }

}

ex3.onclick = function () {

    apagar()

    naoConcluido1.style.display = 'none'
    concluido1.style.display = 'none'

    naoConcluido2.style.display = 'none'
    concluido2.style.display = 'none'

    naoConcluido3.style.display = 'block'
    concluido3.style.display = 'none'

    naoConcluido4.style.display = 'none'
    concluido4.style.display = 'none'

    naoConcluido5.style.display = 'none'
    concluido5.style.display = 'none'

    pdf.src = ''
    video1.pause()
    lista.style.top = '-580px'
    video.style.display = 'none'
    video.src = ''
    pdf.style.display = 'inline'
    video1.style.display = 'none'
    base.style.display = 'none'
    base.pause()

    base.currentTime = 0

    for (i = 0; i < nota.length; i++) {

        if (nota[i].innerHTML == 'A#') {

            nota[i].innerHTML = 'Bb'

        }

        if (nota[i].innerHTML == 'D#') {

            nota[i].innerHTML = 'Eb'

        }



    }


    let gm = document.createElement('p')
    body.appendChild(gm)
    gm.innerHTML = 'Gm'
    gm.style.backgroundColor = 'orangered'
    gm.style.width = '80px'
    gm.style.fontFamily = 'arial'
    gm.style.height = '30px'
    gm.style.fontWeight = 'bold'
    gm.style.fontSize = '20px'
    gm.style.borderRadius = '5px'
    gm.style.paddingTop = '1px'
    gm.style.paddingLeft = '15px'
    gm.style.position = 'absolute'
    gm.style.top = '55px'
    gm.style.left = '100px'
    gm.style.cursor = 'pointer'




    let aDim = document.createElement('p')
    body.appendChild(aDim)
    aDim.style.cursor = 'pointer'
    aDim.innerHTML = 'A°'
    aDim.style.backgroundColor = 'orangered'
    aDim.style.width = '80px'
    aDim.style.fontFamily = 'arial'
    aDim.style.height = '30px'
    aDim.style.fontWeight = 'bold'
    aDim.style.fontSize = '20px'
    aDim.style.borderRadius = '5px'
    aDim.style.paddingTop = '1px'
    aDim.style.paddingLeft = '15px'
    aDim.style.position = 'absolute'
    aDim.style.top = '55px'
    aDim.style.left = '200px'

    let bb = document.createElement('p')
    body.appendChild(bb)
    bb.style.cursor = 'pointer'
    bb.innerHTML = 'Bb(#5)'
    bb.style.backgroundColor = 'orangered'
    bb.style.width = '100px'
    bb.style.fontFamily = 'arial'
    bb.style.height = '30px'
    bb.style.fontWeight = 'bold'
    bb.style.fontSize = '20px'
    bb.style.borderRadius = '5px'
    bb.style.paddingTop = '1px'
    bb.style.paddingLeft = '15px'
    bb.style.position = 'absolute'
    bb.style.top = '55px'
    bb.style.left = '300px'


    let cm = document.createElement('p')
    body.appendChild(cm)
    cm.style.cursor = 'pointer'
    cm.innerHTML = 'Cm'
    cm.style.backgroundColor = 'orangered'
    cm.style.width = '80px'
    cm.style.fontFamily = 'arial'
    cm.style.height = '30px'
    cm.style.fontWeight = 'bold'
    cm.style.fontSize = '20px'
    cm.style.borderRadius = '5px'
    cm.style.paddingTop = '1px'
    cm.style.paddingLeft = '15px'
    cm.style.position = 'absolute'
    cm.style.top = '55px'
    cm.style.left = '420px'


    let d = document.createElement('p')
    body.appendChild(d)
    d.style.cursor = 'pointer'
    d.innerHTML = 'D'
    d.style.backgroundColor = 'orangered'
    d.style.width = '80px'
    d.style.fontFamily = 'arial'
    d.style.height = '30px'
    d.style.fontWeight = 'bold'
    d.style.fontSize = '20px'
    d.style.borderRadius = '5px'
    d.style.paddingTop = '1px'
    d.style.paddingLeft = '15px'
    d.style.position = 'absolute'
    d.style.top = '55px'
    d.style.left = '520px'


    let eb = document.createElement('p')
    body.appendChild(eb)
    eb.style.cursor = 'pointer'
    eb.innerHTML = 'Eb'
    eb.style.backgroundColor = 'orangered'
    eb.style.width = '80px'
    eb.style.fontFamily = 'arial'
    eb.style.height = '30px'
    eb.style.fontWeight = 'bold'
    eb.style.fontSize = '20px'
    eb.style.borderRadius = '5px'
    eb.style.paddingTop = '1px'
    eb.style.paddingLeft = '15px'
    eb.style.position = 'absolute'
    eb.style.top = '55px'
    eb.style.left = '620px'


    let fsDim = document.createElement('p')
    body.appendChild(fsDim)
    fsDim.style.cursor = 'pointer'
    fsDim.innerHTML = 'F#°'
    fsDim.style.backgroundColor = 'orangered'
    fsDim.style.width = '80px'
    fsDim.style.fontFamily = 'arial'
    fsDim.style.height = '30px'
    fsDim.style.fontWeight = 'bold'
    fsDim.style.fontSize = '20px'
    fsDim.style.borderRadius = '5px'
    fsDim.style.paddingTop = '1px'
    fsDim.style.paddingLeft = '15px'
    fsDim.style.position = 'absolute'
    fsDim.style.top = '55px'
    fsDim.style.left = '720px'



    gm.onclick = function () {

        apagar()

        tab('6', '3')
        tab('6', '6')
        tab('5', '5')
        tab('4', '5')
        tab('3', '3')
        tab('3', '7')
        tab('2', '8')
        tab('1', '6')
        tab('1', '10')

    }

    aDim.onclick = function () {

        apagar()


        tab('6', '5')
        tab('6', '8')
        tab('5', '6')
        tab('4', '7')
        tab('3', '5')
        tab('3', '8')
        tab('2', '10')
        tab('1', '8')
        tab('1', '11')

    }

    bb.onclick = function () {

        apagar()


        tab('6', '6')
        tab('6', '10')
        tab('5', '9')
        tab('4', '8')
        tab('3', '7')
        tab('3', '11')
        tab('2', '11')
        tab('1', '10')
        tab('1', '14')


    }

    cm.onclick = function () {

        apagar()


        tab('6', '8')
        tab('6', '11')
        tab('5', '10')
        tab('4', '10')
        tab('3', '8')
        tab('3', '12')
        tab('2', '13')
        tab('1', '11')
        tab('1', '15')

    }

    d.onclick = function () {

        apagar()
        tab('5', '5')
        tab('4', '4')
        tab('3', '2')
        tab('2', '3')
        tab('1', '2')
        tab('1', '5')


    }

    eb.onclick = function () {

        apagar()

        tab('5', '6')
        tab('4', '5')
        tab('3', '3')
        tab('2', '4')
        tab('1', '3')
        tab('1', '6')

    }

    fsDim.onclick = function () {

        apagar()

        tab('6', '2')
        tab('6', '5')
        tab('5', '3')
        tab('4', '4')
        tab('3', '2')
        tab('3', '5')
        tab('2', '7')
        tab('1', '5')
        tab('1', '8')





    }




}

ex4.onclick = function () {

    apagar()

    naoConcluido1.style.display = 'none'
    concluido1.style.display = 'none'

    naoConcluido2.style.display = 'none'
    concluido2.style.display = 'none'

    naoConcluido3.style.display = 'none'
    concluido3.style.display = 'none'

    naoConcluido4.style.display = 'block'
    concluido4.style.display = 'none'

    naoConcluido5.style.display = 'none'
    concluido5.style.display = 'none'

    apagar()

    pdf.src = ''
    base.pause()
    video1.pause()
    base.currentTime = 0
    lista.style.top = '-580px'
    video.style.display = 'block'
    video.src = ''
    pdf.style.display = 'inline'
    video1.style.display = 'none'

    base.style.display = 'none'

    for (i = 0; i < nota.length; i++) {

        if (nota[i].innerHTML == 'A#') {

            nota[i].innerHTML = 'Bb'

        }

        if (nota[i].innerHTML == 'D#') {

            nota[i].innerHTML = 'Eb'

        }



    }


    let gm = document.createElement('p')
    body.appendChild(gm)
    gm.innerHTML = 'Gm7+'
    gm.style.backgroundColor = 'orangered'
    gm.style.width = '80px'
    gm.style.fontFamily = 'arial'
    gm.style.height = '30px'
    gm.style.fontWeight = 'bold'
    gm.style.fontSize = '20px'
    gm.style.borderRadius = '5px'
    gm.style.paddingTop = '10px'
    gm.style.paddingLeft = '15px'
    gm.style.position = 'absolute'
    gm.style.top = '55px'
    gm.style.left = '100px'
    gm.style.cursor = 'pointer'




    let aDim = document.createElement('p')
    body.appendChild(aDim)
    aDim.style.cursor = 'pointer'
    aDim.innerHTML = 'Am7(b5)'
    aDim.style.backgroundColor = 'orangered'
    aDim.style.width = '80px'
    aDim.style.fontFamily = 'arial'
    aDim.style.height = '30px'
    aDim.style.fontWeight = 'bold'
    aDim.style.fontSize = '20px'
    aDim.style.borderRadius = '5px'
    aDim.style.paddingTop = '10px'
    aDim.style.paddingLeft = '10px'
    aDim.style.position = 'absolute'
    aDim.style.top = '55px'
    aDim.style.left = '200px'

    let bb = document.createElement('p')
    body.appendChild(bb)
    bb.style.cursor = 'pointer'
    bb.innerHTML = 'Bb7M(#5)'
    bb.style.backgroundColor = 'orangered'
    bb.style.width = '100px'
    bb.style.fontFamily = 'arial'
    bb.style.height = '30px'
    bb.style.fontWeight = 'bold'
    bb.style.fontSize = '20px'
    bb.style.borderRadius = '5px'
    bb.style.paddingTop = '10px'
    bb.style.paddingLeft = '15px'
    bb.style.position = 'absolute'
    bb.style.top = '55px'
    bb.style.left = '300px'


    let cm = document.createElement('p')
    body.appendChild(cm)
    cm.style.cursor = 'pointer'
    cm.innerHTML = 'Cm7'
    cm.style.backgroundColor = 'orangered'
    cm.style.width = '80px'
    cm.style.fontFamily = 'arial'
    cm.style.height = '30px'
    cm.style.fontWeight = 'bold'
    cm.style.fontSize = '20px'
    cm.style.borderRadius = '5px'
    cm.style.paddingTop = '10px'
    cm.style.paddingLeft = '15px'
    cm.style.position = 'absolute'
    cm.style.top = '55px'
    cm.style.left = '420px'


    let d = document.createElement('p')
    body.appendChild(d)
    d.style.cursor = 'pointer'
    d.innerHTML = 'D7'
    d.style.backgroundColor = 'orangered'
    d.style.width = '80px'
    d.style.fontFamily = 'arial'
    d.style.height = '30px'
    d.style.fontWeight = 'bold'
    d.style.fontSize = '20px'
    d.style.borderRadius = '5px'
    d.style.paddingTop = '10px'
    d.style.paddingLeft = '15px'
    d.style.position = 'absolute'
    d.style.top = '55px'
    d.style.left = '520px'


    let eb = document.createElement('p')
    body.appendChild(eb)
    eb.style.cursor = 'pointer'
    eb.innerHTML = 'Eb7M'
    eb.style.backgroundColor = 'orangered'
    eb.style.width = '80px'
    eb.style.fontFamily = 'arial'
    eb.style.height = '30px'
    eb.style.fontWeight = 'bold'
    eb.style.fontSize = '20px'
    eb.style.borderRadius = '5px'
    eb.style.paddingTop = '10px'
    eb.style.paddingLeft = '15px'
    eb.style.position = 'absolute'
    eb.style.top = '55px'
    eb.style.left = '620px'


    let fsDim = document.createElement('p')
    body.appendChild(fsDim)
    fsDim.style.cursor = 'pointer'
    fsDim.innerHTML = 'F#°'
    fsDim.style.backgroundColor = 'orangered'
    fsDim.style.width = '80px'
    fsDim.style.fontFamily = 'arial'
    fsDim.style.height = '30px'
    fsDim.style.fontWeight = 'bold'
    fsDim.style.fontSize = '20px'
    fsDim.style.borderRadius = '5px'
    fsDim.style.paddingTop = '10px'
    fsDim.style.paddingLeft = '15px'
    fsDim.style.position = 'absolute'
    fsDim.style.top = '55px'
    fsDim.style.left = '720px'



    gm.onclick = function () {

        apagar()

        tab('6', '3')
        tab('6', '6')
        tab('5', '5')
        tab('4', '4')
        tab('4', '5')
        tab('3', '3')
        tab('2', '3')
        tab('2', '7')
        tab('1', '3')


    }

    aDim.onclick = function () {

        apagar()

        tab('6', '5')
        tab('6', '8')
        tab('5', '6')
        tab('4', '5')
        tab('4', '7')
        tab('3', '5')
        tab('2', '4')
        tab('2', '8')
        tab('1', '5')

    }

    bb.onclick = function () {

        apagar()

        tab('6', '6')
        tab('6', '10')
        tab('5', '9')
        tab('4', '8')
        tab('4', '9')
        tab('3', '8')
        tab('2', '8')
        tab('2', '11')
        tab('1', '6')

    }

    cm.onclick = function () {

        apagar()

        tab('5', '3')
        tab('5', '6')
        tab('4', '5')
        tab('3', '3')
        tab('3', '5')
        tab('2', '4')
        tab('1', '3')
        tab('1', '6')


    }

    d.onclick = function () {

        apagar()

        tab('5', '5')
        tab('5', '9')
        tab('4', '7')
        tab('3', '5')
        tab('3', '7')
        tab('2', '7')
        tab('1', '5')
        tab('1', '8')


    }

    eb.onclick = function () {

        apagar()

        tab('5', '6')
        tab('5', '10')
        tab('4', '8')
        tab('3', '7')
        tab('3', '8')
        tab('2', '8')
        tab('1', '6')
        tab('1', '10')




    }

    fsDim.onclick = function () {

        apagar()
        tab('6', '2')
        tab('6', '5')
        tab('5', '3')
        tab('4', '1')
        tab('4', '4')
        tab('3', '2')
        tab('2', '1')
        tab('2', '4')
        tab('1', '2')



    }






}


botao.style.display = 'none'
input.style.display = 'none'

//tratando o código de incorporação e retirando apenas o src

botao1.onclick = function () {

    let link = inputVideo.value

    let vetorLink = link.split(' ')

    vetorLink = vetorLink[3].replace('src="', '')

    video.src = vetorLink.slice(0, -1)


}





//****************************************************************************************/

botao0.onclick = function () {

    enarmonia('D#', 'Eb')
    enarmonia('G#', 'Ab')

    if (posicao.value == 1) {

        console.log('shape 1')

        apagar()

        criaShape(8, 10, 11, 8, 10, 11, 9, 10, 12, 8, 10, 12, 9, 12, 13, 10, 11, 13)



    } else if (posicao.value == 2) {

        console.log('shape 2')

        apagar()
        criaShape(10, 11, 13, 10, 11, 14, 10, 12, 13, 10, 12, 13, 12, 13, 15, 11, 13, 15)


    } else if (posicao.value == 3) {

        console.log('shape 3')

        apagar()

        criaShape(10, 11, 13, 10, 11, 14, 10, 12, 13, 10, 12, 13, 12, 13, 15, 11, 13, 15)





    } else if (posicao.value == 4) {

        console.log('shape 4')

        apagar()
        criaShape(1, 3, 4, 2, 3, 5, 1, 3, 5, 1, 4, 5, 3, 4, 6, 3, 4, 7)



    } else if (posicao.value == 5) {

        console.log('shape 5')



        apagar()
        criaShape(3, 4, 7, 3, 5, 6, 3, 5, 6, 4, 5, 7, 4, 6, 8, 4, 7, 8)




    } else if (posicao.value == 6) {

        console.log('shape 6')

        apagar()
        criaShape(4, 7, 8, 5, 6, 8, 5, 6, 9, 5, 7, 8, 6, 8, 9, 7, 8, 10)




    } else if (posicao.value == 7) {

        console.log('shape 7')

        apagar()
        criaShape(7, 8, 10, 6, 8, 10, 6, 9, 10, 7, 8, 10, 8, 9, 11, 8, 10, 11)


    } else if (posicao.value == 8) {

        apagar()

        mostrarTodas('C')
        mostrarTodas('D')
        mostrarTodas('Eb')
        mostrarTodas('F')
        mostrarTodas('G')
        mostrarTodas('Ab')
        mostrarTodas('B')






    }



}


//******************************************************************************************************* */
let corda1_casa0 = document.getElementById('corda1_casa0')
let corda1_casa1 = document.getElementById('corda1_casa1')
let corda1_casa2 = document.getElementById('corda1_casa2')
let corda1_casa3 = document.getElementById('corda1_casa3')
let corda1_casa4 = document.getElementById('corda1_casa4')
let corda1_casa5 = document.getElementById('corda1_casa5')
let corda1_casa6 = document.getElementById('corda1_casa6')
let corda1_casa7 = document.getElementById('corda1_casa7')
let corda1_casa8 = document.getElementById('corda1_casa8')
let corda1_casa9 = document.getElementById('corda1_casa9')
let corda1_casa10 = document.getElementById('corda1_casa10')
let corda1_casa11 = document.getElementById('corda1_casa11')
let corda1_casa12 = document.getElementById('corda1_casa12')
let corda1_casa13 = document.getElementById('corda1_casa13')
let corda1_casa14 = document.getElementById('corda1_casa14')
let corda1_casa15 = document.getElementById('corda1_casa15')
//****************************************************************/
let corda2_casa0 = document.getElementById('corda2_casa0')
let corda2_casa1 = document.getElementById('corda2_casa1')
let corda2_casa2 = document.getElementById('corda2_casa2')
let corda2_casa3 = document.getElementById('corda2_casa3')
let corda2_casa4 = document.getElementById('corda2_casa4')
let corda2_casa5 = document.getElementById('corda2_casa5')
let corda2_casa6 = document.getElementById('corda2_casa6')
let corda2_casa7 = document.getElementById('corda2_casa7')
let corda2_casa8 = document.getElementById('corda2_casa8')
let corda2_casa9 = document.getElementById('corda2_casa9')
let corda2_casa10 = document.getElementById('corda2_casa10')
let corda2_casa11 = document.getElementById('corda2_casa11')
let corda2_casa12 = document.getElementById('corda2_casa12')
let corda2_casa13 = document.getElementById('corda2_casa13')
let corda2_casa14 = document.getElementById('corda2_casa14')
let corda2_casa15 = document.getElementById('corda2_casa15')
//****************************************************************/
let corda3_casa0 = document.getElementById('corda3_casa0')
let corda3_casa1 = document.getElementById('corda3_casa1')
let corda3_casa2 = document.getElementById('corda3_casa2')
let corda3_casa3 = document.getElementById('corda3_casa3')
let corda3_casa4 = document.getElementById('corda3_casa4')
let corda3_casa5 = document.getElementById('corda3_casa5')
let corda3_casa6 = document.getElementById('corda3_casa6')
let corda3_casa7 = document.getElementById('corda3_casa7')
let corda3_casa8 = document.getElementById('corda3_casa8')
let corda3_casa9 = document.getElementById('corda3_casa9')
let corda3_casa10 = document.getElementById('corda3_casa10')
let corda3_casa11 = document.getElementById('corda3_casa11')
let corda3_casa12 = document.getElementById('corda3_casa12')
let corda3_casa13 = document.getElementById('corda3_casa13')
let corda3_casa14 = document.getElementById('corda3_casa14')
let corda3_casa15 = document.getElementById('corda3_casa15')
//****************************************************************/
let corda4_casa0 = document.getElementById('corda4_casa0')
let corda4_casa1 = document.getElementById('corda4_casa1')
let corda4_casa2 = document.getElementById('corda4_casa2')
let corda4_casa3 = document.getElementById('corda4_casa3')
let corda4_casa4 = document.getElementById('corda4_casa4')
let corda4_casa5 = document.getElementById('corda4_casa5')
let corda4_casa6 = document.getElementById('corda4_casa6')
let corda4_casa7 = document.getElementById('corda4_casa7')
let corda4_casa8 = document.getElementById('corda4_casa8')
let corda4_casa9 = document.getElementById('corda4_casa9')
let corda4_casa10 = document.getElementById('corda4_casa10')
let corda4_casa11 = document.getElementById('corda4_casa11')
let corda4_casa12 = document.getElementById('corda4_casa12')
let corda4_casa13 = document.getElementById('corda4_casa13')
let corda4_casa14 = document.getElementById('corda4_casa14')
let corda4_casa15 = document.getElementById('corda4_casa15')
//****************************************************************/
let corda5_casa0 = document.getElementById('corda5_casa0')
let corda5_casa1 = document.getElementById('corda5_casa1')
let corda5_casa2 = document.getElementById('corda5_casa2')
let corda5_casa3 = document.getElementById('corda5_casa3')
let corda5_casa4 = document.getElementById('corda5_casa4')
let corda5_casa5 = document.getElementById('corda5_casa5')
let corda5_casa6 = document.getElementById('corda5_casa6')
let corda5_casa7 = document.getElementById('corda5_casa7')
let corda5_casa8 = document.getElementById('corda5_casa8')
let corda5_casa9 = document.getElementById('corda5_casa9')
let corda5_casa10 = document.getElementById('corda5_casa10')
let corda5_casa11 = document.getElementById('corda5_casa11')
let corda5_casa12 = document.getElementById('corda5_casa12')
let corda5_casa13 = document.getElementById('corda5_casa13')
let corda5_casa14 = document.getElementById('corda5_casa14')
let corda5_casa15 = document.getElementById('corda5_casa15')
//****************************************************************/
let corda6_casa0 = document.getElementById('corda6_casa0')
let corda6_casa1 = document.getElementById('corda6_casa1')
let corda6_casa2 = document.getElementById('corda6_casa2')
let corda6_casa3 = document.getElementById('corda6_casa3')
let corda6_casa4 = document.getElementById('corda6_casa4')
let corda6_casa5 = document.getElementById('corda6_casa5')
let corda6_casa6 = document.getElementById('corda6_casa6')
let corda6_casa7 = document.getElementById('corda6_casa7')
let corda6_casa8 = document.getElementById('corda6_casa8')
let corda6_casa9 = document.getElementById('corda6_casa9')
let corda6_casa10 = document.getElementById('corda6_casa10')
let corda6_casa11 = document.getElementById('corda6_casa11')
let corda6_casa12 = document.getElementById('corda6_casa12')
let corda6_casa13 = document.getElementById('corda6_casa13')
let corda6_casa14 = document.getElementById('corda6_casa14')
let corda6_casa15 = document.getElementById('corda6_casa15')
//*****************************************************************************************************/


let corda1 = [corda1_casa0, corda1_casa1, corda1_casa2, corda1_casa3, corda1_casa4, corda1_casa5, corda1_casa6, corda1_casa7, corda1_casa8, corda1_casa9, corda1_casa10, corda1_casa11, corda1_casa12, corda1_casa13, corda1_casa14, corda1_casa15]
let corda2 = [corda2_casa0, corda2_casa1, corda2_casa2, corda2_casa3, corda2_casa4, corda2_casa5, corda2_casa6, corda2_casa7, corda2_casa8, corda2_casa9, corda2_casa10, corda2_casa11, corda2_casa12, corda2_casa13, corda2_casa14, corda2_casa15]
let corda3 = [corda3_casa0, corda3_casa1, corda3_casa2, corda3_casa3, corda3_casa4, corda3_casa5, corda3_casa6, corda3_casa7, corda3_casa8, corda3_casa9, corda3_casa10, corda3_casa11, corda3_casa12, corda3_casa13, corda3_casa14, corda3_casa15]
let corda4 = [corda4_casa0, corda4_casa1, corda4_casa2, corda4_casa3, corda4_casa4, corda4_casa5, corda4_casa6, corda4_casa7, corda4_casa8, corda4_casa9, corda4_casa10, corda4_casa11, corda4_casa12, corda4_casa13, corda4_casa14, corda4_casa15]
let corda5 = [corda5_casa0, corda5_casa1, corda5_casa2, corda5_casa3, corda5_casa4, corda5_casa5, corda5_casa6, corda5_casa7, corda5_casa8, corda5_casa9, corda5_casa10, corda5_casa11, corda5_casa12, corda5_casa13, corda5_casa14, corda5_casa15]
let corda6 = [corda6_casa0, corda6_casa1, corda6_casa2, corda6_casa3, corda6_casa4, corda6_casa5, corda6_casa6, corda6_casa7, corda6_casa8, corda6_casa9, corda6_casa10, corda6_casa11, corda6_casa12, corda6_casa13, corda6_casa14, corda6_casa15]

//******************************************************************************************************/










let escalas = document.getElementById('escalas')
let acordes = document.getElementById('acordes')
let arpejos = document.getElementById('arpejos')
let quadroEscalas = document.getElementById('quadroEscalas')
let quadroAcordes = document.getElementById('quadroAcordes')
let quadroArpejos = document.getElementById('quadroArpejos')


acordes.onmouseover = function () {

    quadroAcordes.style.display = 'block'
    acordes.style.backgroundColor = 'black'
    arpejos.style.backgroundColor = 'rgb(112, 112, 112)'
    escalas.style.backgroundColor = 'rgb(112, 112, 112)'

    quadroArpejos.style.display = 'none'
    quadroEscalas.style.display = 'none'

}

arpejos.onmouseover = function () {

    quadroArpejos.style.display = 'block'
    arpejos.style.backgroundColor = 'black'
    escalas.style.backgroundColor = 'rgb(112, 112, 112)'
    acordes.style.backgroundColor = 'rgb(112, 112, 112)'

    quadroAcordes.style.display = 'none'
    quadroEscalas.style.display = 'none'

}

escalas.onmouseover = function () {

    quadroEscalas.style.display = 'block'
    escalas.style.backgroundColor = 'black'
    arpejos.style.backgroundColor = 'rgb(112, 112, 112)'
    acordes.style.backgroundColor = 'rgb(112, 112, 112)'

    quadroArpejos.style.display = 'none'
    quadroAcordes.style.display = 'none'

}


clear.onclick = function () {

    pestana.style.display = 'none'
    moldura.style.display = 'none'
    console.log('limpar')


    apagar()
}




mostrar.onclick = function () {


    for (i = 0; i < nota.length; i++) {

        nota[i].style.display = 'block'
        nota[i].style.opacity = '1'

    }

    console.log('mostrar')


}
//************************************************************************************************** */
function cMaior(posicao) {



    apagar()

    corda5[3].style.display = 'block'
    corda5[3].style.backgroundColor = 'greenyellow'

    corda4[2].style.display = 'block'
    corda4[2].style.backgroundColor = 'greenyellow'

    corda3[0].style.display = 'block'
    corda3[0].style.backgroundColor = 'greenyellow'

    corda2[1].style.display = 'block'
    corda2[1].style.backgroundColor = 'greenyellow'

    corda1[0].style.display = 'block'
    corda1[0].style.backgroundColor = 'greenyellow'

    if (posicao == 2) {

        apagar()

        corda5[3].style.display = 'block'
        corda5[3].style.backgroundColor = 'greenyellow'

        corda4[5].style.display = 'block'
        corda4[5].style.backgroundColor = 'greenyellow'

        corda3[5].style.display = 'block'
        corda3[5].style.backgroundColor = 'greenyellow'

        corda2[5].style.display = 'block'
        corda2[5].style.backgroundColor = 'greenyellow'

        corda1[3].style.display = 'block'
        corda1[3].style.backgroundColor = 'greenyellow'

    } else if (posicao == 3) {

        apagar()

        corda6[8].style.display = 'block'
        corda6[8].style.backgroundColor = 'greenyellow'

        corda5[7].style.display = 'block'
        corda5[7].style.backgroundColor = 'greenyellow'

        corda4[5].style.display = 'block'
        corda4[5].style.backgroundColor = 'greenyellow'

        corda3[5].style.display = 'block'
        corda3[5].style.backgroundColor = 'greenyellow'

        corda2[5].style.display = 'block'
        corda2[5].style.backgroundColor = 'greenyellow'

        corda1[8].style.display = 'block'
        corda1[8].style.backgroundColor = 'greenyellow'

    } else if (posicao == 4) {

        apagar()

        pestanaF(8)

        corda5[10].style.display = 'block'
        corda5[10].style.backgroundColor = 'greenyellow'

        corda4[10].style.display = 'block'
        corda4[10].style.backgroundColor = 'greenyellow'

        corda3[9].style.display = 'block'
        corda3[9].style.backgroundColor = 'greenyellow'



    } else if (posicao == 5) {

        apagar()



        corda4[10].style.display = 'block'
        corda4[10].style.backgroundColor = 'greenyellow'

        corda3[12].style.display = 'block'
        corda3[12].style.backgroundColor = 'greenyellow'

        corda2[13].style.display = 'block'
        corda2[13].style.backgroundColor = 'greenyellow'

        corda1[12].style.display = 'block'
        corda1[12].style.backgroundColor = 'greenyellow'

    }

}

function cSMaior(posicao) {



    apagar()

    corda5[4].style.display = 'block'
    corda5[4].style.backgroundColor = 'greenyellow'

    corda4[3].style.display = 'block'
    corda4[3].style.backgroundColor = 'greenyellow'

    corda4[3].innerHTML = 'E#'

    corda3[1].style.display = 'block'
    corda3[1].style.backgroundColor = 'greenyellow'

    corda2[2].style.display = 'block'
    corda2[2].style.backgroundColor = 'greenyellow'

    corda1[1].style.display = 'block'
    corda1[1].style.backgroundColor = 'greenyellow'

    corda1[1].innerHTML = 'E#'

    if (posicao == 2) {

        apagar()

        corda5[4].style.display = 'block'
        corda5[4].style.backgroundColor = 'greenyellow'

        corda4[6].style.display = 'block'
        corda4[6].style.backgroundColor = 'greenyellow'

        corda3[6].style.display = 'block'
        corda3[6].style.backgroundColor = 'greenyellow'

        corda2[6].style.display = 'block'
        corda2[6].style.backgroundColor = 'greenyellow'
        corda2[6].innerHTML = 'E#'

        corda1[4].style.display = 'block'
        corda1[4].style.backgroundColor = 'greenyellow'

    } else if (posicao == 3) {

        apagar()

        corda6[9].style.display = 'block'
        corda6[9].style.backgroundColor = 'greenyellow'

        corda5[8].style.display = 'block'
        corda5[8].style.backgroundColor = 'greenyellow'
        corda5[8].innerHTML = 'E#'

        corda4[6].style.display = 'block'
        corda4[6].style.backgroundColor = 'greenyellow'

        corda3[6].style.display = 'block'
        corda3[6].style.backgroundColor = 'greenyellow'

        corda2[6].style.display = 'block'
        corda2[6].style.backgroundColor = 'greenyellow'

        corda1[9].style.display = 'block'
        corda1[9].style.backgroundColor = 'greenyellow'

    } else if (posicao == 4) {

        apagar()

        pestanaF(9)

        corda5[11].style.display = 'block'
        corda5[11].style.backgroundColor = 'greenyellow'

        corda4[11].style.display = 'block'
        corda4[11].style.backgroundColor = 'greenyellow'

        corda3[10].style.display = 'block'
        corda3[10].style.backgroundColor = 'greenyellow'
        corda3[10].innerHTML = 'E#'



    } else if (posicao == 5) {

        apagar()



        corda4[11].style.display = 'block'
        corda4[11].style.backgroundColor = 'greenyellow'

        corda3[13].style.display = 'block'
        corda3[13].style.backgroundColor = 'greenyellow'

        corda2[14].style.display = 'block'
        corda2[14].style.backgroundColor = 'greenyellow'

        corda1[13].style.display = 'block'
        corda1[13].style.backgroundColor = 'greenyellow'
        corda1[13].innerHTML = 'E#'

    }

}

function cMenor(posicao) {

    apagar()

    pestanaF(3)

    corda4[5].style.display = 'block'
    corda4[5].style.backgroundColor = 'greenyellow'

    corda3[5].style.display = 'block'
    corda3[5].style.backgroundColor = 'greenyellow'

    corda2[4].style.display = 'block'
    corda2[4].style.backgroundColor = 'greenyellow'

    corda6[3].style.display = 'block'
    corda6[3].style.backgroundColor = 'gray'
    corda6[3].innerHTML = 'X'

    corda2[4].innerHTML = 'Eb'


}

//************************************************************************************************** */
function c7(posicao) {

    apagar()

    corda5[3].style.display = 'block'
    corda5[3].style.backgroundColor = 'greenyellow'

    corda4[2].style.display = 'block'
    corda4[2].style.backgroundColor = 'greenyellow'

    corda3[3].style.display = 'block'
    corda3[3].style.backgroundColor = 'greenyellow'
    corda3[3].innerHTML = 'Bb'

    corda2[1].style.display = 'block'
    corda2[1].style.backgroundColor = 'greenyellow'



}

//********************************************************************************************** */

function dMaior(posicao) {

    apagar()

    corda4[0].style.display = 'block'
    corda4[0].style.backgroundColor = 'greenyellow'

    corda3[2].style.display = 'block'
    corda3[2].style.backgroundColor = 'greenyellow'

    corda2[3].style.display = 'block'
    corda2[3].style.backgroundColor = 'greenyellow'

    corda1[2].style.display = 'block'
    corda1[2].style.backgroundColor = 'greenyellow'

    if (posicao == 2) {

        apagar()

        corda5[5].style.display = 'block'
        corda5[5].style.backgroundColor = 'greenyellow'

        corda4[4].style.display = 'block'
        corda4[4].style.backgroundColor = 'greenyellow'

        corda3[2].style.display = 'block'
        corda3[2].style.backgroundColor = 'greenyellow'

        corda2[3].style.display = 'block'
        corda2[3].style.backgroundColor = 'greenyellow'

        corda1[2].style.display = 'block'
        corda1[2].style.backgroundColor = 'greenyellow'

    } else if (posicao == 3) {

        apagar()

        pestanaF(5)

        corda6[5].innerHTML = 'X'
        corda6[5].style.display = 'block'
        corda6[5].backgroundColor = 'gray'

        corda4[7].style.display = 'block'
        corda4[7].style.backgroundColor = 'greenyellow'

        corda3[7].style.display = 'block'
        corda3[7].style.backgroundColor = 'greenyellow'

        corda2[7].style.display = 'block'
        corda2[7].style.backgroundColor = 'greenyellow'



    } else if (posicao == 4) {

        apagar()


        corda6[10].style.display = 'block'
        corda6[10].style.backgroundColor = 'greenyellow'

        corda5[9].style.display = 'block'
        corda5[9].style.backgroundColor = 'greenyellow'

        corda4[7].style.display = 'block'
        corda4[7].style.backgroundColor = 'greenyellow'

        corda3[7].style.display = 'block'
        corda3[7].style.backgroundColor = 'greenyellow'

        corda2[7].style.display = 'block'
        corda2[7].style.backgroundColor = 'greenyellow'

        corda1[10].style.display = 'block'
        corda1[10].style.backgroundColor = 'greenyellow'



    } else if (posicao == 5) {

        apagar()

        pestanaF(10)


        corda5[12].style.display = 'block'
        corda5[12].style.backgroundColor = 'greenyellow'

        corda4[12].style.display = 'block'
        corda4[12].style.backgroundColor = 'greenyellow'

        corda3[11].style.display = 'block'
        corda3[11].style.backgroundColor = 'greenyellow'





    }



}

//*************************************************************************************** */

function d7(posicao) {

    apagar()

    corda4[0].style.display = 'block'
    corda4[0].style.backgroundColor = 'greenyellow'

    corda3[2].style.display = 'block'
    corda3[2].style.backgroundColor = 'greenyellow'

    corda2[1].style.display = 'block'
    corda2[1].style.backgroundColor = 'greenyellow'

    corda1[2].style.display = 'block'
    corda1[2].style.backgroundColor = 'greenyellow'

}

function eMaior(posicao) {

    apagar()

    corda6[0].style.display = 'block'
    corda6[0].style.backgroundColor = 'greenyellow'

    corda5[2].style.display = 'block'
    corda5[2].style.backgroundColor = 'greenyellow'

    corda4[2].style.display = 'block'
    corda4[2].style.backgroundColor = 'greenyellow'

    corda3[1].style.display = 'block'
    corda3[1].style.backgroundColor = 'greenyellow'

    corda2[0].style.display = 'block'
    corda2[0].style.backgroundColor = 'greenyellow'

    corda1[0].style.display = 'block'
    corda1[0].style.backgroundColor = 'greenyellow'

}

//************************************************************************************** */
function e7(posicao) {

    apagar()

    corda6[0].style.display = 'block'
    corda6[0].style.backgroundColor = 'greenyellow'

    corda5[2].style.display = 'block'
    corda5[2].style.backgroundColor = 'greenyellow'

    corda4[0].style.display = 'block'
    corda4[0].style.backgroundColor = 'greenyellow'

    corda3[1].style.display = 'block'
    corda3[1].style.backgroundColor = 'greenyellow'

    corda2[3].style.display = 'block'
    corda2[3].style.backgroundColor = 'greenyellow'

    corda1[0].style.display = 'block'
    corda1[0].style.backgroundColor = 'greenyellow'

}

function fMaior(posicao) {

    apagar()
    pestanaF(1)



    corda5[3].style.display = 'block'
    corda5[3].style.backgroundColor = 'greenyellow'

    corda4[3].style.display = 'block'
    corda4[3].style.backgroundColor = 'greenyellow'

    corda3[2].style.display = 'block'
    corda3[2].style.backgroundColor = 'greenyellow'



}

function gMaior(posicao) {

    apagar()

    corda6[3].style.display = 'block'
    corda6[3].style.backgroundColor = 'greenyellow'

    corda5[2].style.display = 'block'
    corda5[2].style.backgroundColor = 'greenyellow'

    corda4[0].style.display = 'block'
    corda4[0].style.backgroundColor = 'greenyellow'

    corda3[0].style.display = 'block'
    corda3[0].style.backgroundColor = 'greenyellow'

    corda2[3].style.display = 'block'
    corda2[3].style.backgroundColor = 'greenyellow'

    corda1[3].style.display = 'block'
    corda1[3].style.backgroundColor = 'greenyellow'


}

function aMaior(posicao) {

    apagar()

    corda5[0].style.display = 'block'
    corda5[0].style.backgroundColor = 'greenyellow'

    corda4[2].style.display = 'block'
    corda4[2].style.backgroundColor = 'greenyellow'

    corda3[2].style.display = 'block'
    corda3[2].style.backgroundColor = 'greenyellow'

    corda2[2].style.display = 'block'
    corda2[2].style.backgroundColor = 'greenyellow'

    corda1[0].style.display = 'block'
    corda1[0].style.backgroundColor = 'greenyellow'

}

function bMaior(posicao) {

    apagar()

    pestanaF(2)
    corda4[4].style.display = 'block'
    corda4[4].style.backgroundColor = 'greenyellow'

    corda3[4].style.display = 'block'
    corda3[4].style.backgroundColor = 'greenyellow'

    corda2[4].style.display = 'block'
    corda2[4].style.backgroundColor = 'greenyellow'
}


function apagar() {

    pestana.style.display = 'none'
    moldura.style.display = 'none'



    for (i = 0; i < nota.length; i++) {


        nota[i].style.opacity = '0.001'
    }


}

apagar()
//**************************************************************************************************/

let bracoGuitarra = [
    [],
    ['E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E'],
    ['B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'],
    ['G', 'G#', 'A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G'],
    ['D', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B', 'C', 'C#', 'D'],
    ['A', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A'],
    ['E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E']]




let escalaCromatica = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B']
let escalaCMaior = ['C', 'D', 'E', 'F', 'G', 'A', 'B']
let escalaCMenorNatural = ['C', 'D', 'Eb', 'F', 'G', 'Ab', 'Bb']
let escalaCMenorHarmonica = ['C', 'D', 'Eb', 'F', 'G', 'Ab', 'B']
let escalaCMenorMelodica = ['C', 'D', 'Eb', 'F', 'G', 'A', 'B']
let escalaCJonio = ['C', 'D', 'E', 'F', 'G', 'A', 'B']
let escalaCMixolidio = ['C', 'D', 'E', 'F', 'G', 'A', 'Bb']
let escalaCLidio = ['C', 'D', 'E', 'F#', 'G', 'A', 'B']
let escalaCEolio = ['C', 'D', 'Eb', 'F', 'G', 'Ab', 'Bb']
let escalaCDorico = ['C', 'D', 'Eb', 'F', 'G', 'A', 'Bb']
let escalaCFrigio = ['C', 'Db', 'Eb', 'F', 'G', 'Ab', 'Bb']
let escalaCLocrio = ['C', 'Db', 'Eb', 'F', 'Gb', 'Ab', 'Bb']

let triadeC = ['C', 'E', 'G']
let triadeCm = ['C', 'Eb', 'G']
let triadeCDim = ['C', 'Eb', 'Gb']
let triadeCAum = ['C', 'E', 'G#']

let tetradeC7M = ['C', 'E', 'G', 'B']
let tetradeC7 = ['C', 'E', 'G', 'Bb']
let tetradeCm7 = ['C', 'Eb', 'G', 'Bb']
let tetradeCm7b5 = ['C', 'Eb', 'Gb', 'Bb']
let tetradeCDim = ['C', 'Eb', 'Gb', 'Bbb']
let tetradeCm7M = ['C', 'Eb', 'G', 'B']


let escalaGMaior = ['G', 'A', 'B', 'C', 'D', 'E', 'F#', 'G']
let escalaGMenorNatural = ['G', 'A', 'Bb', 'C', 'D', 'Eb', 'F', 'G']
let escalaGMenorHarmonica = ['G', 'A', 'Bb', 'C', 'D', 'Eb', 'F#', 'G']
let escalaGMenorMelodica = ['G', 'A', 'Bb', 'C', 'D', 'E', 'F#', 'G']
let escalaGJonio = ['G', 'A', 'B', 'C', 'D', 'E', 'F#', 'G']
let escalaGMixolidio = ['G', 'A', 'B', 'C', 'D', 'E', 'F', 'G']
let escalaGLidio = ['G', 'A', 'B', 'C#', 'D', 'E', 'F#', 'G']
let escalaGEolio = ['G', 'A', 'Bb', 'C', 'D', 'Eb', 'F', 'G']
let escalaGDorico = ['G', 'A', 'Bb', 'C', 'D', 'E', 'F', 'G']
let escalaGFrigio = ['G', 'Ab', 'Bb', 'C', 'D', 'Eb', 'F', 'G']
let escalaGLocrio = ['G', 'Ab', 'Bb', 'C', 'Db', 'Eb', 'F', 'G']

let triadeG = ['G', 'B', 'D']
let triadeGm = ['G', 'Bb', 'D']
let triadeGDim = ['G', 'Bb', 'Db']
let triadeGAum = ['G', 'B', 'D#']

let tetradeG7M = ['G', 'B', 'D', 'F#']
let tetradeG7 = ['G', 'B', 'D', 'F']
let tetradeGm7 = ['G', 'Bb', 'D', 'F']
let tetradeGm7b5 = ['G', 'Bb', 'Db', 'F']
let tetradeGDim = ['G', 'Bb', 'Db', 'Fbb']
let tetradeGm7M = ['G', 'Bb', 'D', 'F#']

function pestanaF(casa) {

    pestana.style.display = 'block'

    if (casa == 1) {

        pestana.style.left = '150px'

    } else if (casa == 2) {

        pestana.style.left = '230px'

    } else if (casa == 3) {

        pestana.style.left = '310px'

    } else if (casa == 4) {

        pestana.style.left = '390px'

    } else if (casa == 5) {

        pestana.style.left = '470px'

    } else if (casa == 6) {

        pestana.style.left = '550px'

    } else if (casa == 7) {

        pestana.style.left = '630px'

    } else if (casa == 8) {

        pestana.style.left = '710px'

    } else if (casa == 9) {

        pestana.style.left = '790px'

    } else if (casa == 10) {

        pestana.style.left = '870px'

    } else if (casa == 11) {

        pestana.style.left = '950px'

    } else if (casa == 12) {

        pestana.style.left = '1030px'

    }

}

function mostrarC() {

    for (i = 0; i < 16; i++) {

        if (corda1[i].textContent == 'C') {

            corda1[i].style.display = 'block'
            corda1[i].style.backgroundColor = 'greenyellow'



        }
        if (corda2[i].textContent == 'C') {


            corda2[i].style.display = 'block'
            corda2[i].style.backgroundColor = 'greenyellow'



        }

        if (corda3[i].textContent == 'C') {


            corda3[i].style.display = 'block'
            corda3[i].style.backgroundColor = 'greenyellow'


        }

        if (corda4[i].textContent == 'C') {



            corda4[i].style.display = 'block'
            corda4[i].style.backgroundColor = 'greenyellow'



        }

        if (corda5[i].textContent == 'C') {


            corda5[i].style.display = 'block'
            corda5[i].style.backgroundColor = 'greenyellow'



        }

        if (corda6[i].textContent == 'C') {


            corda6[i].style.display = 'block'
            corda6[i].style.backgroundColor = 'greenyellow'


        }


    }

}

function mostrarCS() {

    for (i = 0; i < 16; i++) {

        if (corda1[i].textContent == 'C#') {

            corda1[i].style.display = 'block'
            corda1[i].style.backgroundColor = 'greenyellow'



        }
        if (corda2[i].textContent == 'C#') {


            corda2[i].style.display = 'block'
            corda2[i].style.backgroundColor = 'greenyellow'



        }

        if (corda3[i].textContent == 'C#') {


            corda3[i].style.display = 'block'
            corda3[i].style.backgroundColor = 'greenyellow'


        }

        if (corda4[i].textContent == 'C#') {



            corda4[i].style.display = 'block'
            corda4[i].style.backgroundColor = 'greenyellow'



        }

        if (corda5[i].textContent == 'C#') {


            corda5[i].style.display = 'block'
            corda5[i].style.backgroundColor = 'greenyellow'



        }

        if (corda6[i].textContent == 'C#') {


            corda6[i].style.display = 'block'
            corda6[i].style.backgroundColor = 'greenyellow'


        }


    }

}

function mostrarDb() {

    for (i = 0; i < 16; i++) {

        if (corda1[i].textContent == 'C#') {

            corda1[i].style.display = 'block'
            corda1[i].style.backgroundColor = 'greenyellow'
            corda1[i].innerHTML = 'Db'



        }
        if (corda2[i].textContent == 'C#') {


            corda2[i].style.display = 'block'
            corda2[i].style.backgroundColor = 'greenyellow'
            corda2[i].innerHTML = 'Db'



        }

        if (corda3[i].textContent == 'C#') {


            corda3[i].style.display = 'block'
            corda3[i].style.backgroundColor = 'greenyellow'
            corda3[i].innerHTML = 'Db'


        }

        if (corda4[i].textContent == 'C#') {



            corda4[i].style.display = 'block'
            corda4[i].style.backgroundColor = 'greenyellow'
            corda4[i].innerHTML = 'Db'


        }

        if (corda5[i].textContent == 'C#') {


            corda5[i].style.display = 'block'
            corda5[i].style.backgroundColor = 'greenyellow'
            corda5[i].innerHTML = 'Db'


        }

        if (corda6[i].textContent == 'C#') {


            corda6[i].style.display = 'block'
            corda6[i].style.backgroundColor = 'greenyellow'
            corda6[i].innerHTML = 'Db'


        }


    }

}


function mostrarD() {

    for (i = 0; i < 16; i++) {

        if (corda1[i].textContent == 'D') {

            corda1[i].style.display = 'block'
            corda1[i].style.backgroundColor = 'greenyellow'



        }
        if (corda2[i].textContent == 'D') {


            corda2[i].style.display = 'block'
            corda2[i].style.backgroundColor = 'greenyellow'



        }

        if (corda3[i].textContent == 'D') {


            corda3[i].style.display = 'block'
            corda3[i].style.backgroundColor = 'greenyellow'


        }

        if (corda4[i].textContent == 'D') {



            corda4[i].style.display = 'block'
            corda4[i].style.backgroundColor = 'greenyellow'



        }

        if (corda5[i].textContent == 'D') {


            corda5[i].style.display = 'block'
            corda5[i].style.backgroundColor = 'greenyellow'



        }

        if (corda6[i].textContent == 'D') {


            corda6[i].style.display = 'block'
            corda6[i].style.backgroundColor = 'greenyellow'


        }


    }

}

function mostrarDS() {

    for (i = 0; i < 16; i++) {

        if (corda1[i].textContent == 'D#') {

            corda1[i].style.display = 'block'
            corda1[i].style.backgroundColor = 'greenyellow'



        }
        if (corda2[i].textContent == 'D#') {


            corda2[i].style.display = 'block'
            corda2[i].style.backgroundColor = 'greenyellow'



        }

        if (corda3[i].textContent == 'D#') {


            corda3[i].style.display = 'block'
            corda3[i].style.backgroundColor = 'greenyellow'


        }

        if (corda4[i].textContent == 'D#') {



            corda4[i].style.display = 'block'
            corda4[i].style.backgroundColor = 'greenyellow'



        }

        if (corda5[i].textContent == 'D#') {


            corda5[i].style.display = 'block'
            corda5[i].style.backgroundColor = 'greenyellow'



        }

        if (corda6[i].textContent == 'D#') {


            corda6[i].style.display = 'block'
            corda6[i].style.backgroundColor = 'greenyellow'


        }


    }

}
function mostrarEb() {

    for (i = 0; i < 16; i++) {

        if (corda1[i].textContent == 'D#') {

            corda1[i].style.display = 'block'
            corda1[i].style.backgroundColor = 'greenyellow'
            corda1[i].innerHTML = 'Eb'



        }
        if (corda2[i].textContent == 'D#') {


            corda2[i].style.display = 'block'
            corda2[i].style.backgroundColor = 'greenyellow'
            corda2[i].innerHTML = 'Eb'


        }

        if (corda3[i].textContent == 'D#') {


            corda3[i].style.display = 'block'
            corda3[i].style.backgroundColor = 'greenyellow'
            corda3[i].innerHTML = 'Eb'

        }

        if (corda4[i].textContent == 'D#') {



            corda4[i].style.display = 'block'
            corda4[i].style.backgroundColor = 'greenyellow'
            corda4[i].innerHTML = 'Eb'


        }

        if (corda5[i].textContent == 'D#') {


            corda5[i].style.display = 'block'
            corda5[i].style.backgroundColor = 'greenyellow'
            corda5[i].innerHTML = 'Eb'


        }

        if (corda6[i].textContent == 'D#') {


            corda6[i].style.display = 'block'
            corda6[i].style.backgroundColor = 'greenyellow'
            corda6[i].innerHTML = 'Eb'


        }


    }

}


function mostrarE() {

    for (i = 0; i < 16; i++) {

        if (corda1[i].textContent == 'E') {

            corda1[i].style.display = 'block'
            corda1[i].style.backgroundColor = 'greenyellow'



        }
        if (corda2[i].textContent == 'E') {


            corda2[i].style.display = 'block'
            corda2[i].style.backgroundColor = 'greenyellow'



        }

        if (corda3[i].textContent == 'E') {


            corda3[i].style.display = 'block'
            corda3[i].style.backgroundColor = 'greenyellow'


        }

        if (corda4[i].textContent == 'E') {



            corda4[i].style.display = 'block'
            corda4[i].style.backgroundColor = 'greenyellow'



        }

        if (corda5[i].textContent == 'E') {


            corda5[i].style.display = 'block'
            corda5[i].style.backgroundColor = 'greenyellow'



        }

        if (corda6[i].textContent == 'E') {


            corda6[i].style.display = 'block'
            corda6[i].style.backgroundColor = 'greenyellow'


        }


    }

}

function mostrarF() {

    for (i = 0; i < 16; i++) {

        if (corda1[i].textContent == 'F') {

            corda1[i].style.display = 'block'
            corda1[i].style.backgroundColor = 'greenyellow'



        }
        if (corda2[i].textContent == 'F') {


            corda2[i].style.display = 'block'
            corda2[i].style.backgroundColor = 'greenyellow'



        }

        if (corda3[i].textContent == 'F') {


            corda3[i].style.display = 'block'
            corda3[i].style.backgroundColor = 'greenyellow'


        }

        if (corda4[i].textContent == 'F') {



            corda4[i].style.display = 'block'
            corda4[i].style.backgroundColor = 'greenyellow'



        }

        if (corda5[i].textContent == 'F') {


            corda5[i].style.display = 'block'
            corda5[i].style.backgroundColor = 'greenyellow'



        }

        if (corda6[i].textContent == 'F') {


            corda6[i].style.display = 'block'
            corda6[i].style.backgroundColor = 'greenyellow'


        }


    }

}
function mostrarGb() {

    for (i = 0; i < 16; i++) {

        if (corda1[i].textContent == 'F#') {

            corda1[i].style.display = 'block'
            corda1[i].style.backgroundColor = 'greenyellow'
            corda1[i].innerHTML = 'Gb'



        }
        if (corda2[i].textContent == 'F#') {


            corda2[i].style.display = 'block'
            corda2[i].style.backgroundColor = 'greenyellow'
            corda2[i].innerHTML = 'Gb'



        }

        if (corda3[i].textContent == 'F#') {


            corda3[i].style.display = 'block'
            corda3[i].style.backgroundColor = 'greenyellow'
            corda3[i].innerHTML = 'Gb'

        }

        if (corda4[i].textContent == 'F#') {



            corda4[i].style.display = 'block'
            corda4[i].style.backgroundColor = 'greenyellow'
            corda4[i].innerHTML = 'Gb'


        }

        if (corda5[i].textContent == 'F#') {


            corda5[i].style.display = 'block'
            corda5[i].style.backgroundColor = 'greenyellow'
            corda5[i].innerHTML = 'Gb'


        }

        if (corda6[i].textContent == 'F#') {


            corda6[i].style.display = 'block'
            corda6[i].style.backgroundColor = 'greenyellow'
            corda6[i].innerHTML = 'Gb'


        }


    }

}


function mostrarFS() {

    for (i = 0; i < 16; i++) {

        if (corda1[i].textContent == 'F#') {

            corda1[i].style.display = 'block'
            corda1[i].style.backgroundColor = 'greenyellow'



        }
        if (corda2[i].textContent == 'F#') {


            corda2[i].style.display = 'block'
            corda2[i].style.backgroundColor = 'greenyellow'



        }

        if (corda3[i].textContent == 'F#') {


            corda3[i].style.display = 'block'
            corda3[i].style.backgroundColor = 'greenyellow'


        }

        if (corda4[i].textContent == 'F#') {



            corda4[i].style.display = 'block'
            corda4[i].style.backgroundColor = 'greenyellow'



        }

        if (corda5[i].textContent == 'F#') {


            corda5[i].style.display = 'block'
            corda5[i].style.backgroundColor = 'greenyellow'



        }

        if (corda6[i].textContent == 'F#') {


            corda6[i].style.display = 'block'
            corda6[i].style.backgroundColor = 'greenyellow'


        }


    }

}

function mostrarG() {

    for (i = 0; i < 16; i++) {

        if (corda1[i].textContent == 'G') {

            corda1[i].style.display = 'block'
            corda1[i].style.backgroundColor = 'greenyellow'



        }
        if (corda2[i].textContent == 'G') {


            corda2[i].style.display = 'block'
            corda2[i].style.backgroundColor = 'greenyellow'



        }

        if (corda3[i].textContent == 'G') {


            corda3[i].style.display = 'block'
            corda3[i].style.backgroundColor = 'greenyellow'


        }

        if (corda4[i].textContent == 'G') {



            corda4[i].style.display = 'block'
            corda4[i].style.backgroundColor = 'greenyellow'



        }

        if (corda5[i].textContent == 'G') {


            corda5[i].style.display = 'block'
            corda5[i].style.backgroundColor = 'greenyellow'



        }

        if (corda6[i].textContent == 'G') {


            corda6[i].style.display = 'block'
            corda6[i].style.backgroundColor = 'greenyellow'


        }


    }

}
function mostrarAb() {

    for (i = 0; i < 16; i++) {

        if (corda1[i].textContent == 'G#') {

            corda1[i].style.display = 'block'
            corda1[i].style.backgroundColor = 'greenyellow'
            corda1[i].innerHTML = 'Ab'


        }
        if (corda2[i].textContent == 'G#') {


            corda2[i].style.display = 'block'
            corda2[i].style.backgroundColor = 'greenyellow'
            corda2[i].innerHTML = 'Ab'



        }

        if (corda3[i].textContent == 'G#') {


            corda3[i].style.display = 'block'
            corda3[i].style.backgroundColor = 'greenyellow'
            corda3[i].innerHTML = 'Ab'

        }

        if (corda4[i].textContent == 'G#') {



            corda4[i].style.display = 'block'
            corda4[i].style.backgroundColor = 'greenyellow'
            corda4[i].innerHTML = 'Ab'


        }

        if (corda5[i].textContent == 'G#') {


            corda5[i].style.display = 'block'
            corda5[i].style.backgroundColor = 'greenyellow'
            corda5[i].innerHTML = 'Ab'


        }

        if (corda6[i].textContent == 'G#') {


            corda6[i].style.display = 'block'
            corda6[i].style.backgroundColor = 'greenyellow'
            corda6[i].innerHTML = 'Ab'


        }


    }

}

function mostrarGS() {

    for (i = 0; i < 16; i++) {

        if (corda1[i].textContent == 'G#') {

            corda1[i].style.display = 'block'
            corda1[i].style.backgroundColor = 'greenyellow'



        }
        if (corda2[i].textContent == 'G#') {


            corda2[i].style.display = 'block'
            corda2[i].style.backgroundColor = 'greenyellow'



        }

        if (corda3[i].textContent == 'G#') {


            corda3[i].style.display = 'block'
            corda3[i].style.backgroundColor = 'greenyellow'


        }

        if (corda4[i].textContent == 'G#') {



            corda4[i].style.display = 'block'
            corda4[i].style.backgroundColor = 'greenyellow'



        }

        if (corda5[i].textContent == 'G#') {


            corda5[i].style.display = 'block'
            corda5[i].style.backgroundColor = 'greenyellow'



        }

        if (corda6[i].textContent == 'G#') {


            corda6[i].style.display = 'block'
            corda6[i].style.backgroundColor = 'greenyellow'


        }


    }

}

function mostrarA() {

    for (i = 0; i < 16; i++) {

        if (corda1[i].textContent == 'A') {

            corda1[i].style.display = 'block'
            corda1[i].style.backgroundColor = 'greenyellow'



        }
        if (corda2[i].textContent == 'A') {


            corda2[i].style.display = 'block'
            corda2[i].style.backgroundColor = 'greenyellow'



        }

        if (corda3[i].textContent == 'A') {


            corda3[i].style.display = 'block'
            corda3[i].style.backgroundColor = 'greenyellow'


        }

        if (corda4[i].textContent == 'A') {



            corda4[i].style.display = 'block'
            corda4[i].style.backgroundColor = 'greenyellow'



        }

        if (corda5[i].textContent == 'A') {


            corda5[i].style.display = 'block'
            corda5[i].style.backgroundColor = 'greenyellow'



        }

        if (corda6[i].textContent == 'A') {


            corda6[i].style.display = 'block'
            corda6[i].style.backgroundColor = 'greenyellow'


        }


    }

}

function mostrarBb() {

    for (i = 0; i < 16; i++) {

        if (corda1[i].textContent == 'A#') {

            corda1[i].style.display = 'block'
            corda1[i].style.backgroundColor = 'greenyellow'
            corda1[i].innerHTML = 'Bb'



        }
        if (corda2[i].textContent == 'A#') {


            corda2[i].style.display = 'block'
            corda2[i].style.backgroundColor = 'greenyellow'
            corda2[i].innerHTML = 'Bb'


        }

        if (corda3[i].textContent == 'A#') {


            corda3[i].style.display = 'block'
            corda3[i].style.backgroundColor = 'greenyellow'
            corda3[i].innerHTML = 'Bb'

        }

        if (corda4[i].textContent == 'A#') {



            corda4[i].style.display = 'block'
            corda4[i].style.backgroundColor = 'greenyellow'
            corda4[i].innerHTML = 'Bb'


        }

        if (corda5[i].textContent == 'A#') {


            corda5[i].style.display = 'block'
            corda5[i].style.backgroundColor = 'greenyellow'
            corda5[i].innerHTML = 'Bb'


        }

        if (corda6[i].textContent == 'A#') {


            corda6[i].style.display = 'block'
            corda6[i].style.backgroundColor = 'greenyellow'
            corda6[i].innerHTML = 'Bb'


        }


    }

}




function mostrarAS() {

    for (i = 0; i < 16; i++) {

        if (corda1[i].textContent == 'A#') {

            corda1[i].style.display = 'block'
            corda1[i].style.backgroundColor = 'greenyellow'



        }
        if (corda2[i].textContent == 'A#') {


            corda2[i].style.display = 'block'
            corda2[i].style.backgroundColor = 'greenyellow'



        }

        if (corda3[i].textContent == 'A#') {


            corda3[i].style.display = 'block'
            corda3[i].style.backgroundColor = 'greenyellow'


        }

        if (corda4[i].textContent == 'A#') {



            corda4[i].style.display = 'block'
            corda4[i].style.backgroundColor = 'greenyellow'



        }

        if (corda5[i].textContent == 'A#') {


            corda5[i].style.display = 'block'
            corda5[i].style.backgroundColor = 'greenyellow'



        }

        if (corda6[i].textContent == 'A#') {


            corda6[i].style.display = 'block'
            corda6[i].style.backgroundColor = 'greenyellow'


        }


    }

}




function mostrarB() {

    for (i = 0; i < 16; i++) {

        if (corda1[i].textContent == 'B') {

            corda1[i].style.display = 'block'
            corda1[i].style.backgroundColor = 'greenyellow'



        }
        if (corda2[i].textContent == 'B') {


            corda2[i].style.display = 'block'
            corda2[i].style.backgroundColor = 'greenyellow'



        }

        if (corda3[i].textContent == 'B') {


            corda3[i].style.display = 'block'
            corda3[i].style.backgroundColor = 'greenyellow'


        }

        if (corda4[i].textContent == 'B') {



            corda4[i].style.display = 'block'
            corda4[i].style.backgroundColor = 'greenyellow'



        }

        if (corda5[i].textContent == 'B') {


            corda5[i].style.display = 'block'
            corda5[i].style.backgroundColor = 'greenyellow'



        }

        if (corda6[i].textContent == 'B') {


            corda6[i].style.display = 'block'
            corda6[i].style.backgroundColor = 'greenyellow'


        }


    }

}

function escalaCMaiorF() {

    apagar()
    mostrarC()
    mostrarD()
    mostrarE()
    mostrarF()
    mostrarG()
    mostrarA()
    mostrarB()

}

function escalaGMaiorF() {

    apagar()
    mostrarC()
    mostrarD()
    mostrarE()
    mostrarFS()
    mostrarG()
    mostrarA()
    mostrarB()

}

function escalaDMaiorF() {

    apagar()
    mostrarCS()
    mostrarD()
    mostrarE()
    mostrarFS()
    mostrarG()
    mostrarA()
    mostrarB()

}

function escalaAMaiorF() {

    apagar()
    mostrarCS()
    mostrarD()
    mostrarE()
    mostrarFS()
    mostrarGS()
    mostrarA()
    mostrarB()

}

function escalaEMaiorF() {

    apagar()
    mostrarCS()
    mostrarDS()
    mostrarE()
    mostrarFS()
    mostrarGS()
    mostrarA()
    mostrarB()

}

function escalaBMaiorF() {

    apagar()
    mostrarCS()
    mostrarDS()
    mostrarE()
    mostrarFS()
    mostrarGS()
    mostrarAS()
    mostrarB()

}

function escalaFMaiorF() {

    apagar()
    mostrarC()
    mostrarD()
    mostrarE()
    mostrarF()
    mostrarG()
    mostrarA()
    mostrarBb()

}

function escalaBbMaiorF() {

    apagar()
    mostrarC()
    mostrarD()
    mostrarEb()
    mostrarF()
    mostrarG()
    mostrarA()
    mostrarBb()

}

function escalaEbMaiorF() {

    apagar()
    mostrarC()
    mostrarD()
    mostrarEb()
    mostrarF()
    mostrarG()
    mostrarAb()
    mostrarBb()

}

function escalaDbMaiorF() {

    apagar()
    mostrarC()
    mostrarDb()
    mostrarEb()
    mostrarF()
    mostrarGb()
    mostrarAb()
    mostrarBb()

}

function escalaGbMaiorF() {

    apagar()
    mostrarC()
    mostrarDb()
    mostrarEb()
    mostrarF()
    mostrarGb()
    mostrarAb()
    mostrarBb()

}

function escalaAbMaiorF() {

    apagar()
    mostrarC()
    mostrarDb()
    mostrarEb()
    mostrarF()
    mostrarG()
    mostrarAb()
    mostrarBb()

}





//*********************************************************************************************************/




apagar()

estrutura.style.display = 'none'
tipo.style.display = 'none'
tonalidade.style.display = 'none'
direita.style.display = 'none'
esquerda.style.display = 'none'
posicao.style.borderLeftColor = 'orangered'

for (i = 0; i < corda.length; i++) {

    corda[i].style.backgroundColor = 'orangered'


}

for (i = 0; i < traste.length; i++) {

    traste[i].style.backgroundColor = 'orangered'


}

for (i = 0; i < bolinha.length; i++) {

    bolinha[i].style.backgroundColor = 'orangered'


}

body.style.backgroundColor = '#1F3340'




let funcaoVelocidade = function treinarVelocidade(batidas = 10, minutos = 1) {

    setInterval(function () {

        if (tocando == true) {

            bpm += batidas
            andamento.innerHTML = bpm + ' BPM'
            click.src = bpm + ' BPM.mp3'
            click.currentTime = 0
            click.play()
            verificaBpm()
            if (bpm == 120) {

                camada1.style.animation = 'pisca2 0.5s linear infinite'


            } else if (bpm == 240) {

                camada1.style.animation = 'pisca2 0.25s linear infinite'


            } else if (bpm == 65) {

                camada1.style.animation = 'pisca2 0.92s linear infinite'


            } else if (bpm == 70) {

                camada1.style.animation = 'pisca2 0.85s linear infinite'


            } else if (bpm == 75) {

                camada1.style.animation = 'pisca2 0.8s linear infinite'


            } else if (bpm == 80) {

                camada1.style.animation = 'pisca2 0.75s linear infinite'


            } else if (bpm == 85) {

                camada1.style.animation = 'pisca2 0.70s linear infinite'


            } else if (bpm == 90) {

                camada1.style.animation = 'pisca2 0.66s linear infinite'


            } else if (bpm == 95) {

                camada1.style.animation = 'pisca2 0.63s linear infinite'


            } else if (bpm == 100) {

                camada1.style.animation = 'pisca2 0.6s linear infinite'


            } else if (bpm == 105) {

                camada1.style.animation = 'pisca2 0.57s linear infinite'


            } else if (bpm == 110) {

                camada1.style.animation = 'pisca2 0.54s linear infinite'


            } else if (bpm == 115) {

                camada1.style.animation = 'pisca2 0.52s linear infinite'


            } else if (bpm == 120) {

                camada1.style.animation = 'pisca2 0.5s linear infinite'


            } else if (bpm == 125) {

                camada1.style.animation = 'pisca2 0.48s linear infinite'


            } else if (bpm == 130) {

                camada1.style.animation = 'pisca2 0.46s linear infinite'


            } else if (bpm == 135) {

                camada1.style.animation = 'pisca2 0.44s linear infinite'


            } else if (bpm == 140) {

                camada1.style.animation = 'pisca2 0.42s linear infinite'


            } else if (bpm == 145) {

                camada1.style.animation = 'pisca2 0.41s linear infinite'


            } else if (bpm == 150) {

                camada1.style.animation = 'pisca2 0.4s linear infinite'


            } else if (bpm == 155) {

                camada1.style.animation = 'pisca2 0.38s linear infinite'


            } else if (bpm == 160) {

                camada1.style.animation = 'pisca2 0.375s linear infinite'


            } else if (bpm == 165) {

                camada1.style.animation = 'pisca2 0.36s linear infinite'


            } else if (bpm == 170) {

                camada1.style.animation = 'pisca2 0.35s linear infinite'


            } else if (bpm == 175) {

                camada1.style.animation = 'pisca2 0.34s linear infinite'


            } else if (bpm == 180) {

                camada1.style.animation = 'pisca2 0.33s linear infinite'


            } else if (bpm == 185) {

                camada1.style.animation = 'pisca2 0.32s linear infinite'


            } else if (bpm == 190) {

                camada1.style.animation = 'pisca2 0.31s linear infinite'


            } else if (bpm == 195) {

                camada1.style.animation = 'pisca2 0.307s linear infinite'


            } else if (bpm == 200) {

                camada1.style.animation = 'pisca2 0.3s linear infinite'


            } else if (bpm == 205) {

                camada1.style.animation = 'pisca2 0.292s linear infinite'


            } else if (bpm == 210) {

                camada1.style.animation = 'pisca2 0.285s linear infinite'


            } else if (bpm == 215) {

                camada1.style.animation = 'pisca2 0.279s linear infinite'


            } else if (bpm == 220) {

                camada1.style.animation = 'pisca2 0.272s linear infinite'


            } else if (bpm == 225) {

                camada1.style.animation = 'pisca2 0.266s linear infinite'


            } else if (bpm == 230) {

                camada1.style.animation = 'pisca2 0.260s linear infinite'


            } else if (bpm == 235) {

                camada1.style.animation = 'pisca2 0.255s linear infinite'


            } else if (bpm == 240) {

                camada1.style.animation = 'pisca2 0.25s linear infinite'


            }

        } else if (tocando == false) {

            bpm += batidas
            andamento.innerHTML = bpm + ' BPM'
            click.src = bpm + ' BPM.mp3'
            click.currentTime = 10
            verificaBpm()
            camada1.style.animation = ''


        }


    }, 1000 * 60 * minutos)

}



for (i = 0; i < corda.length; i++) {


    corda[i].style.zIndex = 11
    corda[i].style.transition = 'all 2s'


}

for (i = 0; i < traste.length; i++) {

    traste[i].style.zIndex = 11
    traste[i].style.transition = 'all 2s'


}

for (i = 0; i < nota.length; i++) {


    nota[i].style.zIndex = 13
    nota[i].style.transition = 'all 2s'

}

for (i = 0; i < bolinha.length; i++) {


    bolinha[i].style.zIndex = 11


}

for (i = 0; i < bolinha.length; i++) {

    bolinha[i].style.backgroundColor = 'gray'

}

/*

let audio2 = document.getElementById('audio2')

setInterval(function () {


    if(audio2.currentTime >= 4){

        apagar()

        corda5[5].style.display = 'block'
        corda4[6].style.display = 'block'
        corda3[5].style.display = 'block'
        corda2[6].style.display = 'block'

        console.log('teste')


    }

    if(audio2.currentTime >= 6){

        apagar()

        corda6[3].style.display = 'block'
        corda4[3].style.display = 'block'
        corda3[4].style.display = 'block'
        corda2[4].style.display = 'block'



    }

    if(audio2.currentTime >= 8){

        apagar()

        corda5[3].style.display = 'block'
        corda4[5].style.display = 'block'
        corda3[3].style.display = 'block'
        corda2[4].style.display = 'block'

        console.log('teste')


    }

    if(audio2.currentTime >= 12){

        apagar()

        corda5[5].style.display = 'block'
        corda4[6].style.display = 'block'
        corda3[5].style.display = 'block'
        corda2[6].style.display = 'block'

        console.log('teste')


    }

    if(audio2.currentTime >= 14){

        apagar()

        corda6[3].style.display = 'block'
        corda4[3].style.display = 'block'
        corda3[4].style.display = 'block'
        corda2[4].style.display = 'block'



    }

    if(audio2.currentTime >= 16){

        apagar()

        corda5[3].style.display = 'block'
        corda4[5].style.display = 'block'
        corda3[3].style.display = 'block'
        corda2[4].style.display = 'block'

        console.log('teste')


    }


}, 500)
*/

function clearFret() {

    for (i = 0; i < corda.length; i++) {

        corda[i].style.display = 'none'

    }


    for (i = 0; i < traste.length; i++) {

        traste[i].style.display = 'none'

    }

    fret.style.display = 'none'


    for (i = 0; i < bolinha.length; i++) {

        bolinha[i].style.display = 'none'

    }

}






for (i = 0; i < nota.length; i++) {


    nota[i].style.opacity = '0.001'
    console.log(nota.length)
    nota[i].style.display = 'block'
    nota[i].style.transition = 'none'



}

/*

nota[0].onclick = function () {

    nota[0].style.opacity = '1'

}
nota[1].onclick = function () {

    nota[1].style.opacity = '1'

}
nota[2].onclick = function () {

    nota[2].style.opacity = '1'

}
nota[3].onclick = function () {

    nota[3].style.opacity = '1'

}
nota[4].onclick = function () {

    nota[4].style.opacity = '1'

}
nota[5].onclick = function () {

    nota[5].style.opacity = '1'

}
nota[6].onclick = function () {

    nota[6].style.opacity = '1'

}
nota[7].onclick = function () {

    nota[7].style.opacity = '1'

}
nota[8].onclick = function () {

    nota[8].style.opacity = '1'

}
nota[9].onclick = function () {

    nota[9].style.opacity = '1'

}
nota[10].onclick = function () {

    nota[10].style.opacity = '1'

}
nota[11].onclick = function () {

    nota[11].style.opacity = '1'

}
nota[12].onclick = function () {

    nota[12].style.opacity = '1'

}
nota[13].onclick = function () {

    nota[13].style.opacity = '1'

}
nota[14].onclick = function () {

    nota[14].style.opacity = '1'

}
nota[15].onclick = function () {

    nota[15].style.opacity = '1'

}
nota[16].onclick = function () {

    nota[16].style.opacity = '1'

}
nota[17].onclick = function () {

    nota[17].style.opacity = '1'

}
nota[18].onclick = function () {

    nota[18].style.opacity = '1'

}
nota[19].onclick = function () {

    nota[19].style.opacity = '1'

}
nota[20].onclick = function () {

    nota[20].style.opacity = '1'

}

nota[21].onclick = function () {

    nota[21].style.opacity = '1'

}
nota[22].onclick = function () {

    nota[22].style.opacity = '1'

}
nota[23].onclick = function () {

    nota[23].style.opacity = '1'

}
nota[24].onclick = function () {

    nota[24].style.opacity = '1'

}
nota[25].onclick = function () {

    nota[25].style.opacity = '1'

}
nota[26].onclick = function () {

    nota[26].style.opacity = '1'

}
nota[27].onclick = function () {

    nota[27].style.opacity = '1'

}
nota[28].onclick = function () {

    nota[28].style.opacity = '1'

}
nota[29].onclick = function () {

    nota[29].style.opacity = '1'

}
nota[30].onclick = function () {

    nota[30].style.opacity = '1'

}
nota[31].onclick = function () {

    nota[31].style.opacity = '1'
}
nota[32].onclick = function () {

    nota[32].style.opacity = '1'

}
nota[33].onclick = function () {

    nota[33].style.opacity = '1'

}
nota[34].onclick = function () {

    nota[34].style.opacity = '1'

}
nota[35].onclick = function () {

    nota[35].style.opacity = '1'

}
nota[36].onclick = function () {

    nota[36].style.opacity = '1'

}
nota[37].onclick = function () {

    nota[37].style.opacity = '1'

}
nota[38].onclick = function () {

    nota[38].style.opacity = '1'

}
nota[39].onclick = function () {

    nota[39].style.opacity = '1'

}
nota[40].onclick = function () {

    nota[40].style.opacity = '1'

}
nota[41].onclick = function () {

    nota[41].style.opacity = '1'

}

nota[42].onclick = function () {

    nota[42].style.opacity = '1'

}
nota[43].onclick = function () {

    nota[43].style.opacity = '1'

}
nota[44].onclick = function () {

    nota[44].style.opacity = '1'

}
nota[45].onclick = function () {

    nota[45].style.opacity = '1'

}
nota[46].onclick = function () {

    nota[46].style.opacity = '1'

}
nota[47].onclick = function () {

    nota[47].style.opacity = '1'

}
nota[48].onclick = function () {

    nota[48].style.opacity = '1'

}
nota[49].onclick = function () {

    nota[49].style.opacity = '1'

}
nota[50].onclick = function () {

    nota[50].style.opacity = '1'

}
nota[51].onclick = function () {

    nota[51].style.opacity = '1'

}
nota[52].onclick = function () {

    nota[52].style.opacity = '1'

}
nota[0].onclick = function () {

    nota[0].style.opacity = '1'

}
nota[0].onclick = function () {

    nota[0].style.opacity = '1'

}
nota[0].onclick = function () {

    nota[0].style.opacity = '1'

}
nota[0].onclick = function () {

    nota[0].style.opacity = '1'

}
nota[0].onclick = function () {

    nota[0].style.opacity = '1'

}
nota[0].onclick = function () {

    nota[0].style.opacity = '1'

}
nota[0].onclick = function () {

    nota[0].style.opacity = '1'

}
nota[0].onclick = function () {

    nota[0].style.opacity = '1'

}
nota[0].onclick = function () {

    nota[0].style.opacity = '1'

}
nota[0].onclick = function () {

    nota[0].style.opacity = '1'

}

nota[0].onclick = function () {

    nota[0].style.opacity = '1'

}
nota[0].onclick = function () {

    nota[0].style.opacity = '1'

}
nota[0].onclick = function () {

    nota[0].style.opacity = '1'

}
nota[0].onclick = function () {

    nota[0].style.opacity = '1'

}
nota[0].onclick = function () {

    nota[0].style.opacity = '1'

}
nota[0].onclick = function () {

    nota[0].style.opacity = '1'

}
nota[0].onclick = function () {

    nota[0].style.opacity = '1'

}
nota[0].onclick = function () {

    nota[0].style.opacity = '1'

}
nota[0].onclick = function () {

    nota[0].style.opacity = '1'

}
nota[0].onclick = function () {

    nota[0].style.opacity = '1'

}
nota[0].onclick = function () {

    nota[0].style.opacity = '1'

}
nota[0].onclick = function () {

    nota[0].style.opacity = '1'

}
nota[0].onclick = function () {

    nota[0].style.opacity = '1'

}
nota[0].onclick = function () {

    nota[0].style.opacity = '1'

}
nota[0].onclick = function () {

    nota[0].style.opacity = '1'

}
nota[0].onclick = function () {

    nota[0].style.opacity = '1'

}
nota[0].onclick = function () {

    nota[0].style.opacity = '1'

}
nota[0].onclick = function () {

    nota[0].style.opacity = '1'

}
nota[0].onclick = function () {

    nota[0].style.opacity = '1'

}
nota[0].onclick = function () {

    nota[0].style.opacity = '1'

}
nota[0].onclick = function () {

    nota[0].style.opacity = '1'

}

nota[0].onclick = function () {

    nota[0].style.opacity = '1'

}
nota[0].onclick = function () {

    nota[0].style.opacity = '1'

}
nota[0].onclick = function () {

    nota[0].style.opacity = '1'

}
nota[0].onclick = function () {

    nota[0].style.opacity = '1'

}
nota[0].onclick = function () {

    nota[0].style.opacity = '1'

}
nota[0].onclick = function () {

    nota[0].style.opacity = '1'

}
nota[0].onclick = function () {

    nota[0].style.opacity = '1'

}
nota[0].onclick = function () {

    nota[0].style.opacity = '1'

}
nota[0].onclick = function () {

    nota[0].style.opacity = '1'

}
nota[0].onclick = function () {

    nota[0].style.opacity = '1'

}
nota[0].onclick = function () {

    nota[0].style.opacity = '1'

}
nota[0].onclick = function () {

    nota[0].style.opacity = '1'

}
nota[0].onclick = function () {

    nota[0].style.opacity = '1'

}
nota[0].onclick = function () {

    nota[0].style.opacity = '1'

}
nota[0].onclick = function () {

    nota[0].style.opacity = '1'

}
nota[0].onclick = function () {

    nota[0].style.opacity = '1'

}
nota[0].onclick = function () {

    nota[0].style.opacity = '1'

}
nota[0].onclick = function () {

    nota[0].style.opacity = '1'

}
nota[0].onclick = function () {

    nota[0].style.opacity = '1'

}
nota[0].onclick = function () {

    nota[0].style.opacity = '1'

}
nota[0].onclick = function () {

    nota[0].style.opacity = '1'

}
*/


//onclick sobre os elementos do array 'nota'

function markSelection() {

    if (this.style.opacity == '1') {

        this.style.opacity = '0.001'


    } else {

        this.style.opacity = '1'
    }
}

for (i = 0; i < nota.length; i++) {
    nota[i].onclick = markSelection;
}








function bass(cordas) {

    if (cordas == 4) {

        corda[0].style.display = 'none'
        corda[1].style.display = 'none'

        for (i = 0; i < traste.length; i++) {

            traste[i].style.height = '150px'
            traste[i].style.top = '200px'
            fret.style.height = '150px'
            fret.style.top = '200px'
            traste[i].style.transition = 'none'

            bolinha[0].style.top = '270px'
            bolinha[1].style.top = '270px'
            bolinha[2].style.top = '270px'
            bolinha[3].style.top = '270px'
            bolinha[4].style.top = '240px'
            bolinha[5].style.top = '300px'

        }

    } else if (cordas == 5) {

        corda[0].style.display = 'none'


        for (i = 0; i < traste.length; i++) {

            traste[i].style.height = '200px'
            traste[i].style.top = '150px'
            fret.style.height = '200px'
            fret.style.top = '150px'
            traste[i].style.transition = 'none'

            bolinha[0].style.top = '245px'
            bolinha[1].style.top = '245px'
            bolinha[2].style.top = '245px'
            bolinha[3].style.top = '245px'
            bolinha[4].style.top = '205px'
            bolinha[5].style.top = '275px'

        }

    }
}



for (i = 0; i < corda.length; i++) {

    corda[i].style.zIndex = '40'


}


for (i = 0; i < nota.length; i++) {

    nota[i].style.zIndex = '50'


}

//--------------------------------------------------------------------------------------------------

function criaShape(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r) {

    corda6[a].style.display = 'block'
    corda6[a].style.opacity = '1'
    corda6[b].style.display = 'block'
    corda6[b].style.opacity = '1'
    corda6[c].style.display = 'block'
    corda6[c].style.opacity = '1'
    corda5[d].style.display = 'block'
    corda5[d].style.opacity = '1'
    corda5[e].style.display = 'block'
    corda5[e].style.opacity = '1'
    corda5[f].style.display = 'block'
    corda5[f].style.opacity = '1'
    corda4[g].style.display = 'block'
    corda4[g].style.opacity = '1'
    corda4[h].style.display = 'block'
    corda4[h].style.opacity = '1'
    corda4[i].style.display = 'block'
    corda4[i].style.opacity = '1'
    corda3[j].style.display = 'block'
    corda3[j].style.opacity = '1'
    corda3[k].style.display = 'block'
    corda3[k].style.opacity = '1'
    corda3[l].style.display = 'block'
    corda3[l].style.opacity = '1'
    corda2[m].style.display = 'block'
    corda2[m].style.opacity = '1'
    corda2[n].style.display = 'block'
    corda2[n].style.opacity = '1'
    corda2[o].style.display = 'block'
    corda2[o].style.opacity = '1'
    corda1[p].style.display = 'block'
    corda1[p].style.opacity = '1'
    corda1[q].style.display = 'block'
    corda1[q].style.opacity = '1'
    corda1[r].style.display = 'block'
    corda1[r].style.opacity = '1'

    for (i = 0; i < nota.length; i++) {

        if (nota[i].innerHTML == 'A#') {

            nota[i].innerHTML = 'Bb'

        }

        if (nota[i].innerHTML == 'D#') {

            nota[i].innerHTML = 'Eb'

        }



    }
}


function criaShapePenta(a, b, c, d, e, f, g, h, i, j, k, l) {

    corda6[a].style.display = 'block'
    corda6[a].style.opacity = '1'
    corda6[b].style.display = 'block'
    corda6[b].style.opacity = '1'

    corda5[c].style.display = 'block'
    corda5[c].style.opacity = '1'
    corda5[d].style.display = 'block'
    corda5[d].style.opacity = '1'

    corda4[e].style.display = 'block'
    corda4[e].style.opacity = '1'
    corda4[f].style.display = 'block'
    corda4[f].style.opacity = '1'

    corda3[g].style.display = 'block'
    corda3[g].style.opacity = '1'
    corda3[h].style.display = 'block'
    corda3[h].style.opacity = '1'

    corda2[i].style.display = 'block'
    corda2[i].style.opacity = '1'
    corda2[j].style.display = 'block'
    corda2[j].style.opacity = '1'

    corda1[k].style.display = 'block'
    corda1[k].style.opacity = '1'
    corda1[l].style.display = 'block'
    corda1[l].style.opacity = '1'

}


function colorNote(note, cor) {

    for (i = 0; i < nota.length; i++) {

        if (nota[i].innerHTML == note) {

            nota[i].style.backgroundColor = cor
            nota[i].style.backgroundImage = 'none'


        }


    }

}

function enarmonia(note0, note1) {

    for (i = 0; i < nota.length; i++) {

        if (nota[i].innerHTML == note0) {

            nota[i].innerHTML = note1


        }


    }
}

function intervalos(tonica) {

    for (i = 0; i < nota.length; i++) {

        if (tonica == 'C') {




            if (nota[i].innerHTML == 'C') {

                nota[i].innerHTML = 'T'


            } else if (nota[i].innerHTML == 'C#' || nota[i].innerHTML == 'Db') {

                nota[i].innerHTML = 'b2'


            } else if (nota[i].innerHTML == 'D') {

                nota[i].innerHTML = '2'


            } else if (nota[i].innerHTML == 'D#') {

                nota[i].innerHTML = '#2'


            } else if (nota[i].innerHTML == 'Eb') {

                nota[i].innerHTML = 'b3'


            } else if (nota[i].innerHTML == 'E') {

                nota[i].innerHTML = '3'


            } else if (nota[i].innerHTML == 'F') {

                nota[i].innerHTML = '4'


            } else if (nota[i].innerHTML == 'F#') {

                nota[i].innerHTML = '#4'


            } else if (nota[i].innerHTML == 'Gb') {

                nota[i].innerHTML = 'b5'


            } else if (nota[i].innerHTML == 'G') {

                nota[i].innerHTML = '5'


            } else if (nota[i].innerHTML == 'G#') {

                nota[i].innerHTML = '#5'


            } else if (nota[i].innerHTML == 'Ab') {

                nota[i].innerHTML = 'b6'


            } else if (nota[i].innerHTML == 'A') {

                nota[i].innerHTML = '6'


            } else if (nota[i].innerHTML == 'A#') {

                nota[i].innerHTML = '#6'


            } else if (nota[i].innerHTML == 'Bb') {

                nota[i].innerHTML = 'b7'


            } else if (nota[i].innerHTML == 'B') {

                nota[i].innerHTML = '7'


            }


        } else if (tonica == 'G') {




            if (nota[i].innerHTML == 'G') {

                nota[i].innerHTML = 'T'


            } else if (nota[i].innerHTML == 'G#' || nota[i].innerHTML == 'Ab') {

                nota[i].innerHTML = 'b2'


            } else if (nota[i].innerHTML == 'A') {

                nota[i].innerHTML = '2'


            } else if (nota[i].innerHTML == 'A#') {

                nota[i].innerHTML = '#2'


            } else if (nota[i].innerHTML == 'Bb') {

                nota[i].innerHTML = 'b3'


            } else if (nota[i].innerHTML == 'B') {

                nota[i].innerHTML = '3'


            } else if (nota[i].innerHTML == 'C') {

                nota[i].innerHTML = '4'


            } else if (nota[i].innerHTML == 'C#') {

                nota[i].innerHTML = '#4'


            } else if (nota[i].innerHTML == 'Db') {

                nota[i].innerHTML = 'b5'


            } else if (nota[i].innerHTML == 'D') {

                nota[i].innerHTML = '5'


            } else if (nota[i].innerHTML == 'D#') {

                nota[i].innerHTML = '#5'


            } else if (nota[i].innerHTML == 'Eb') {

                nota[i].innerHTML = 'b6'


            } else if (nota[i].innerHTML == 'E') {

                nota[i].innerHTML = '6'


            } else if (nota[i].innerHTML == 'E#') {

                nota[i].innerHTML = '#6'


            } else if (nota[i].innerHTML == 'F') {

                nota[i].innerHTML = 'b7'


            } else if (nota[i].innerHTML == 'F#') {

                nota[i].innerHTML = '7'


            }


        } else if (tonica == 'D') {




            if (nota[i].innerHTML == 'D') {

                nota[i].innerHTML = 'T'


            } else if (nota[i].innerHTML == 'D#' || nota[i].innerHTML == 'Eb') {

                nota[i].innerHTML = 'b2'


            } else if (nota[i].innerHTML == 'E') {

                nota[i].innerHTML = '2'


            } else if (nota[i].innerHTML == 'E#') {

                nota[i].innerHTML = '#2'


            } else if (nota[i].innerHTML == 'F') {

                nota[i].innerHTML = 'b3'


            } else if (nota[i].innerHTML == 'F#') {

                nota[i].innerHTML = '3'


            } else if (nota[i].innerHTML == 'G') {

                nota[i].innerHTML = '4'


            } else if (nota[i].innerHTML == 'G#') {

                nota[i].innerHTML = '#4'


            } else if (nota[i].innerHTML == 'Ab') {

                nota[i].innerHTML = 'b5'


            } else if (nota[i].innerHTML == 'A') {

                nota[i].innerHTML = '5'


            } else if (nota[i].innerHTML == 'A#') {

                nota[i].innerHTML = '#5'


            } else if (nota[i].innerHTML == 'Bb') {

                nota[i].innerHTML = 'b6'


            } else if (nota[i].innerHTML == 'B') {

                nota[i].innerHTML = '6'


            } else if (nota[i].innerHTML == 'B#') {

                nota[i].innerHTML = '#6'


            } else if (nota[i].innerHTML == 'C') {

                nota[i].innerHTML = 'b7'


            } else if (nota[i].innerHTML == 'C#') {

                nota[i].innerHTML = '7'


            }


        } else if (tonica == 'A') {




            if (nota[i].innerHTML == 'A') {

                nota[i].innerHTML = 'T'


            } else if (nota[i].innerHTML == 'A#' || nota[i].innerHTML == 'Bb') {

                nota[i].innerHTML = 'b2'


            } else if (nota[i].innerHTML == 'B') {

                nota[i].innerHTML = '2'


            } else if (nota[i].innerHTML == 'B#') {

                nota[i].innerHTML = '#2'


            } else if (nota[i].innerHTML == 'C') {

                nota[i].innerHTML = 'b3'


            } else if (nota[i].innerHTML == 'C#') {

                nota[i].innerHTML = '3'


            } else if (nota[i].innerHTML == 'D') {

                nota[i].innerHTML = '4'


            } else if (nota[i].innerHTML == 'D#') {

                nota[i].innerHTML = '#4'


            } else if (nota[i].innerHTML == 'Eb') {

                nota[i].innerHTML = 'b5'


            } else if (nota[i].innerHTML == 'E') {

                nota[i].innerHTML = '5'


            } else if (nota[i].innerHTML == 'E#') {

                nota[i].innerHTML = '#5'


            } else if (nota[i].innerHTML == 'F') {

                nota[i].innerHTML = 'b6'


            } else if (nota[i].innerHTML == 'F#') {

                nota[i].innerHTML = '6'


            } else if (nota[i].innerHTML == 'F##') {

                nota[i].innerHTML = '#6'


            } else if (nota[i].innerHTML == 'G') {

                nota[i].innerHTML = 'b7'


            } else if (nota[i].innerHTML == 'G#') {

                nota[i].innerHTML = '7'


            }


        } else if (tonica == 'E') {




            if (nota[i].innerHTML == 'E') {

                nota[i].innerHTML = 'T'


            } else if (nota[i].innerHTML == 'F') {

                nota[i].innerHTML = 'b2'


            } else if (nota[i].innerHTML == 'F#') {

                nota[i].innerHTML = '2'


            } else if (nota[i].innerHTML == 'F##') {

                nota[i].innerHTML = '#2'


            } else if (nota[i].innerHTML == 'G') {

                nota[i].innerHTML = 'b3'


            } else if (nota[i].innerHTML == 'G#') {

                nota[i].innerHTML = '3'


            } else if (nota[i].innerHTML == 'A') {

                nota[i].innerHTML = '4'


            } else if (nota[i].innerHTML == 'A#') {

                nota[i].innerHTML = '#4'


            } else if (nota[i].innerHTML == 'Bb') {

                nota[i].innerHTML = 'b5'


            } else if (nota[i].innerHTML == 'B') {

                nota[i].innerHTML = '5'


            } else if (nota[i].innerHTML == 'B#') {

                nota[i].innerHTML = '#5'


            } else if (nota[i].innerHTML == 'C') {

                nota[i].innerHTML = 'b6'


            } else if (nota[i].innerHTML == 'C#') {

                nota[i].innerHTML = '6'


            } else if (nota[i].innerHTML == 'C##') {

                nota[i].innerHTML = '#6'


            } else if (nota[i].innerHTML == 'D') {

                nota[i].innerHTML = 'b7'


            } else if (nota[i].innerHTML == 'D#') {

                nota[i].innerHTML = '7'


            }


        } else if (tonica == 'B') {




            if (nota[i].innerHTML == 'B') {

                nota[i].innerHTML = 'T'


            } else if (nota[i].innerHTML == 'C') {

                nota[i].innerHTML = 'b2'


            } else if (nota[i].innerHTML == 'C#') {

                nota[i].innerHTML = '2'


            } else if (nota[i].innerHTML == 'C##') {

                nota[i].innerHTML = '#2'


            } else if (nota[i].innerHTML == 'D') {

                nota[i].innerHTML = 'b3'


            } else if (nota[i].innerHTML == 'D#') {

                nota[i].innerHTML = '3'


            } else if (nota[i].innerHTML == 'E') {

                nota[i].innerHTML = '4'


            } else if (nota[i].innerHTML == 'E#') {

                nota[i].innerHTML = '#4'


            } else if (nota[i].innerHTML == 'F') {

                nota[i].innerHTML = 'b5'


            } else if (nota[i].innerHTML == 'F#') {

                nota[i].innerHTML = '5'


            } else if (nota[i].innerHTML == 'F##') {

                nota[i].innerHTML = '#5'


            } else if (nota[i].innerHTML == 'G') {

                nota[i].innerHTML = 'b6'


            } else if (nota[i].innerHTML == 'G#') {

                nota[i].innerHTML = '6'


            } else if (nota[i].innerHTML == 'G##') {

                nota[i].innerHTML = '#6'


            } else if (nota[i].innerHTML == 'A') {

                nota[i].innerHTML = 'b7'


            } else if (nota[i].innerHTML == 'A#') {

                nota[i].innerHTML = '7'


            }


        } else if (tonica == 'F') {




            if (nota[i].innerHTML == 'F') {

                nota[i].innerHTML = 'T'


            } else if (nota[i].innerHTML == 'F#' || nota[i].innerHTML == 'Gb') {

                nota[i].innerHTML = 'b2'


            } else if (nota[i].innerHTML == 'G') {

                nota[i].innerHTML = '2'


            } else if (nota[i].innerHTML == 'G#') {

                nota[i].innerHTML = '#2'


            } else if (nota[i].innerHTML == 'Ab') {

                nota[i].innerHTML = 'b3'


            } else if (nota[i].innerHTML == 'A') {

                nota[i].innerHTML = '3'


            } else if (nota[i].innerHTML == 'Bb') {

                nota[i].innerHTML = '4'


            } else if (nota[i].innerHTML == 'B') {

                nota[i].innerHTML = '#4'


            } else if (nota[i].innerHTML == 'Cb') {

                nota[i].innerHTML = 'b5'


            } else if (nota[i].innerHTML == 'C') {

                nota[i].innerHTML = '5'


            } else if (nota[i].innerHTML == 'C#') {

                nota[i].innerHTML = '#5'


            } else if (nota[i].innerHTML == 'Db') {

                nota[i].innerHTML = 'b6'


            } else if (nota[i].innerHTML == 'D') {

                nota[i].innerHTML = '6'


            } else if (nota[i].innerHTML == 'D#') {

                nota[i].innerHTML = '#6'


            } else if (nota[i].innerHTML == 'Eb') {

                nota[i].innerHTML = 'b7'


            } else if (nota[i].innerHTML == 'E') {

                nota[i].innerHTML = '7'


            }


        } else if (tonica == 'Bb') {




            if (nota[i].innerHTML == 'Bb') {

                nota[i].innerHTML = 'T'


            } else if (nota[i].innerHTML == 'B' || nota[i].innerHTML == 'Cb') {

                nota[i].innerHTML = 'b2'


            } else if (nota[i].innerHTML == 'C') {

                nota[i].innerHTML = '2'


            } else if (nota[i].innerHTML == 'C#') {

                nota[i].innerHTML = '#2'


            } else if (nota[i].innerHTML == 'Db') {

                nota[i].innerHTML = 'b3'


            } else if (nota[i].innerHTML == 'D') {

                nota[i].innerHTML = '3'


            } else if (nota[i].innerHTML == 'Eb') {

                nota[i].innerHTML = '4'


            } else if (nota[i].innerHTML == 'E') {

                nota[i].innerHTML = '#4'


            } else if (nota[i].innerHTML == 'Fb') {

                nota[i].innerHTML = 'b5'


            } else if (nota[i].innerHTML == 'F') {

                nota[i].innerHTML = '5'


            } else if (nota[i].innerHTML == 'F#') {

                nota[i].innerHTML = '#5'


            } else if (nota[i].innerHTML == 'Gb') {

                nota[i].innerHTML = 'b6'


            } else if (nota[i].innerHTML == 'G') {

                nota[i].innerHTML = '6'


            } else if (nota[i].innerHTML == 'G#') {

                nota[i].innerHTML = '#6'


            } else if (nota[i].innerHTML == 'Ab') {

                nota[i].innerHTML = 'b7'


            } else if (nota[i].innerHTML == 'A') {

                nota[i].innerHTML = '7'


            }


        }






    }




}

//-----------------------------------------------------------------------------------------------------------------------------------

function intervaloModos(tonica, modo) {

    intervalos('C')


    if (tonica == 'C' && modo == 'jonio') {

        colorNote('T', 'green')
        colorNote('4', 'yellow')
        colorNote('#2', 'red')
        colorNote('b2', 'red')
        colorNote('b3', 'red')
        colorNote('#4', 'red')
        colorNote('b5', 'red')
        colorNote('#5', 'red')
        colorNote('b6', 'red')
        colorNote('#6', 'red')
        colorNote('b7', 'red')

        for (i = 0; i < nota.length; i++) {

            nota[i].style.display = 'block'
            nota[i].style.opacity = '1'


        }


    } else if (tonica == 'C' && modo == 'mixolidio') {

        colorNote('T', 'green')
        colorNote('#2', 'red')
        colorNote('b2', 'red')
        colorNote('b3', 'red')
        colorNote('#4', 'red')
        colorNote('b5', 'red')
        colorNote('#5', 'red')
        colorNote('b6', 'red')
        colorNote('7', 'red')

        for (i = 0; i < nota.length; i++) {

            nota[i].style.display = 'block'
            nota[i].style.opacity = '1'


        }


    } else if (tonica == 'C' && modo == 'lidio') {

        colorNote('T', 'green')
        colorNote('#2', 'red')
        colorNote('b2', 'red')
        colorNote('b3', 'red')
        colorNote('4', 'red')
        colorNote('#5', 'red')
        colorNote('b6', 'red')
        colorNote('#6', 'red')
        colorNote('b7', 'red')

        for (i = 0; i < nota.length; i++) {

            nota[i].style.display = 'block'
            nota[i].style.opacity = '1'


        }


    } else if (tonica == 'C' && modo == 'dorico') {

        colorNote('T', 'green')
        colorNote('b2', 'red')
        colorNote('3', 'red')
        colorNote('#4', 'red')
        colorNote('#5', 'red')
        colorNote('b6', 'red')
        colorNote('7', 'red')

        for (i = 0; i < nota.length; i++) {

            nota[i].style.display = 'block'
            nota[i].style.opacity = '1'


        }


    } else if (tonica == 'C' && modo == 'eolio') {

        colorNote('T', 'green')
        colorNote('b2', 'red')
        colorNote('3', 'red')
        colorNote('#4', 'red')
        colorNote('#5', 'red')
        colorNote('6', 'red')
        colorNote('7', 'red')

        for (i = 0; i < nota.length; i++) {

            nota[i].style.display = 'block'
            nota[i].style.opacity = '1'


        }


    }



}
function miniFret() {

    corda[0].style.width = '400px'
    corda[1].style.width = '400px'
    corda[2].style.width = '400px'
    corda[3].style.width = '400px'
    corda[4].style.width = '400px'
    corda[5].style.width = '400px'

    traste[6].style.display = 'none'
    traste[7].style.display = 'none'
    traste[8].style.display = 'none'
    traste[9].style.display = 'none'
    traste[10].style.display = 'none'
    traste[11].style.display = 'none'
    traste[12].style.display = 'none'
    traste[13].style.display = 'none'
    traste[14].style.display = 'none'
    fret.style.width = '400px'

    bolinha[3].style.display = 'none'
    bolinha[4].style.display = 'none'
    bolinha[2].style.display = 'none'
    bolinha[5].style.display = 'none'
    bolinha[6].style.display = 'none'


}

//miniFret()


let cordaVetor = ['x', corda1, corda2, corda3, corda4, corda5, corda6]

function tab(x, y) {

    cordaVetor[x][y].style.display = 'block'
    cordaVetor[x][y].style.opacity = '1'

}


function mostrarTodas(note) {

    for (i = 0; i < nota.length; i++) {

        if (nota[i].innerHTML == note) {

            nota[i].style.display = 'block'
            nota[i].style.opacity = '1'


        }


    }

}

let bonus1 = document.getElementById('bonus1')

bonus1.onclick = function () {

    window.location = 'fouraxis.html'

}


document.addEventListener('keypress', function (e) {

    if (e.key == 'c') {

        mostrarTodas('C')


    } else if (e.key == 'd') {

        mostrarTodas('D')


    } else if (e.key == 'e') {

        mostrarTodas('E')


    } else if (e.key == 'f') {

        mostrarTodas('F')


    } else if (e.key == 'g') {

        mostrarTodas('G')


    } else if (e.key == 'a') {

        mostrarTodas('A')


    } else if (e.key == 'b') {

        mostrarTodas('B')


    } else if (e.key == 'C') {

        mostrarTodas('C#')


    } else if (e.key == 'D') {

        mostrarTodas('D#')


    } else if (e.key == 'F') {

        mostrarTodas('F#')


    } else if (e.key == 'G') {

        mostrarTodas('G#')


    } else if (e.key == 'A') {

        mostrarTodas('A#')


    } else if (e.key == '-') {

        apagar()


    }

})

function resetColor(e) {

    for (i = 0; i < nota.length; i++) {

        if (nota[i].innerHTML == e) {

            nota[i].style.backgroundImage = 'linear-gradient(45deg, greenyellow, rgb(146, 201, 63) , rgb(161, 201, 102), rgb(136, 197, 45) )'


        }


    }



}

function card(titulo, dica) {

    return {

        titulo,
        dica,
        mostrarCard() {


            let divCard = document.createElement('div')
            body.appendChild(divCard)
            divCard.classList.add('card')
            console.log('classe adicionada')

            let tituloDica = document.createElement('h1')
            divCard.appendChild(tituloDica)
            tituloDica.innerHTML = titulo

            let corpoDica = document.createElement('p')
            divCard.appendChild(corpoDica)
            corpoDica.innerHTML = dica

            let fechar = document.createElement('p')
            divCard.appendChild(fechar)

            fechar.innerHTML = 'X'
            fechar.style.backgroundColor = 'red'
            fechar.style.width = '25px'
            fechar.style.height = '25px'
            fechar.style.color = 'white'
            fechar.style.fontWeight = 'bolder'
            fechar.style.fontFamily = 'arial'
            fechar.style.position = 'absolute'
            fechar.style.top = '0px'
            fechar.style.right = '0px'
            fechar.style.paddingLeft = '8px'
            fechar.style.marginRight = '0px'
            fechar.style.marginTop = '0px'

            let icone = document.createElement('img')
            divCard.appendChild(icone)
            icone.src = 'dica.png'
            icone.style.width = '50px'
            icone.style.position = 'absolute'
            icone.style.bottom = '0'
            icone.style.left = '0'
            icone.style.marginBottom = '0'
            icone.style.marginLeft = '0'

            fechar.onclick = function () {

                divCard.style.display = 'none'

            }

        }
    }

}

let dicaPausa = card('Hora da pausa', 'Uns minutinhos de pausa cairiam bem hein? Tomar uma água, ir ao banheiro, só não vale ir pro facebook, whatsapp e CIA hein. Bons estudos!')

setTimeout(dicaPausa.mostrarCard, 1000*30*60)