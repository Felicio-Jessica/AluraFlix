function  adicionarFilme ( )  {
    var  campoFilmeFavorito  =  document . querySelector ( '#filme' )
    var  filmeFavorito  =  campoFilmeFavorito . valor
    if  ( filme Favorito . endsWith ( '.jpg' ) )  {
        listarFilmesNaTela ( filmeFavorito )
    }  senão  {
        alert ( "Imagem inválida" )
    }
    campoFilmeFavorito . valor  =  ""
}

function  listarFilmesNaTela ( filme )  {
    var  listaFilmes  =  document . querySelector ( '#listaFilmes' )
    var  elementoFilme  =  "<img src="  +  filme  +  ">"
    listaFilmes . innerHTML  =  listaFilmes . innerHTML  +  elementoFilme
}
