
// get objetos
const icono= document.querySelector('#icono');
const tooltip = document.querySelector('#tool-tip');

const calcularPosicionamientoTooltip = () => {

  // get cordenadas del objeto (point marker)
  const x= icono.offsetLeft;
  const y= icono.offsetTop;

  // get tamaño del tooltip
  const anchoTooltip= tooltip.offsetWidth;
  const altoTooltip= tooltip.clientHeight;

  // calcular posicionamiento del tooltip
  var position_x= x - (anchoTooltip/2) +15;
  var position_y= y - altoTooltip -20;


  tooltip.style.left= `${position_x}px` ; // x +"px" (funciona tmb) / `${x}px` (EMC6)
  tooltip.style.top= `${position_y}px`;

};

window.addEventListener('resize', () => calcularPosicionamientoTooltip());

icono.addEventListener('mouseenter', () => {
  tooltip.classList.add('activo');
  calcularPosicionamientoTooltip();

});

icono.addEventListener('mouseleave', () => tooltip.classList.remove('activo'));


/* diseño tienda.dwc*/
