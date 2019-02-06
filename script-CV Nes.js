
{
	window.scrollY // Valeur du scroll en pixel
	document.body.offsetHeight // Hauteur totale de la page en pixel
	window.innerHeight // Hauteur de l'écran en pixel

}
	window.addEventListener("scroll", function() { if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("progress_bar").className = "test";
		} 
		else 
		{
    document.getElementById("progress_bar").className = "";
		}

	document.getElementById('progress_bar').value = deplacement; // Modifie la valeur de la barre de progression pour qu'elle corresponde au déplacement du scroll
}
);
