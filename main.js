const btnNosotros = document.getElementById('btn-Nosotros'),
	  btnBlog = document.getElementById('btn-Blog'),
	  btnEventos = document.getElementById('btn-Eventos'),
	  btnMultimedia = document.getElementById('btn-Multimedia'),
	  btnCerrarMenu = document.getElementById('btn-menu-cerrar'),
	  gridNosotros = document.getElementById('gridNosotros'),
	  gridBlog = document.getElementById('gridBlog'),
	  gridEvetos = document.getElementById('gridEventos'),
	  gridMultimedia = document.getElementById('gridMultimedia'),
	  contenedorEnlacesNav = document.querySelector('#menu .contenedor-enlaces-nav'),
	  esDispositivoMovil = () => window.innerWidth <= 800;

btnNosotros.addEventListener('mouseover', () => {
	if(!esDispositivoMovil()){
		gridNosotros.classList.add('activo');
	}
});

btnBlog.addEventListener('mouseover', () => {
	if(!esDispositivoMovil()){
		gridBlog.classList.add('activo');
	}
});

btnEventos.addEventListener('mouseover', () => {
	if(!esDispositivoMovil()){
		gridEvetos.classList.add('activo');
	}
});

btnMultimedia.addEventListener('mouseover', () => {
	if(!esDispositivoMovil()){
		gridMultimedia.classList.add('activo');
	}
});

gridNosotros.addEventListener('mouseleave', () => {
	if(!esDispositivoMovil()){
		gridNosotros.classList.remove('activo');
	}
});

gridBlog.addEventListener('mouseleave', () => {
	if(!esDispositivoMovil()){
		gridBlog.classList.remove('activo');
	}
});

gridEvetos.addEventListener('mouseleave', () => {
	if(!esDispositivoMovil()){
		gridEvetos.classList.remove('activo');
	}
});

gridMultimedia.addEventListener('mouseleave', () => {
	if(!esDispositivoMovil()){
		gridMultimedia.classList.remove('activo');
	}
});


document.querySelectorAll('#menu .categorias a').forEach((elemento) => {
	elemento.addEventListener('mouseenter', (e) => {
		if(!esDispositivoMovil()){
			document.querySelectorAll('#menu .subcategoria').forEach((categoria) => {
				categoria.classList.remove('activo');
				if(categoria.dataset.categoria == e.target.dataset.categoria){
					categoria.classList.add('activo');
				}
			});
		};
	});
});

// EventListeners para dispositivo movil.
document.querySelector('#btn-menu-barras').addEventListener('click', (e) => {
	e.preventDefault();
	if(contenedorEnlacesNav.classList.contains('activo')){
		contenedorEnlacesNav.classList.remove('activo');
		document.querySelector('body').style.overflow = 'visible';
	} else {
		contenedorEnlacesNav.classList.add('activo');
		document.querySelector('body').style.overflow = 'hidden';
	}
});

// Click en boton de todos los departamentos (Para version movil).
btnNosotros.addEventListener('click', (e) => {
	e.preventDefault();
	gridNosotros.classList.add('activo');
	btnCerrarMenu.classList.add('activo');
});

btnBlog.addEventListener('click', (e) => {
	e.preventDefault();
	gridBlog.classList.add('activo');
	btnCerrarMenu.classList.add('activo');
});

btnEventos.addEventListener('click', (e) => {
	e.preventDefault();
	gridEvetos.classList.add('activo');
	btnCerrarMenu.classList.add('activo');
});

btnMultimedia.addEventListener('click', (e) => {
	e.preventDefault();
	gridMultimedia.classList.add('activo');
	btnCerrarMenu.classList.add('activo');
});