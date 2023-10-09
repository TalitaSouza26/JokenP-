const btnGenerator = document.querySelector('.green')
const btnGener = document.querySelector('.blue')
const btnGen = document.querySelector('.yellow')



btnGenerator.addEventListener('click', () => {
    const colors = [ '#0000ff']
    const colorone = ['#008000']

    document.body.style.background = `linear-gradient(-41deg, ${colors} 50%, ${colorone} 50%)`;

    
})

btnGener.addEventListener('click', () => {
    const colors = ['#FAE20D']
    const colorone =['#0000ff']

    document.body.style.background = `linear-gradient(41deg, ${colors} 50%, ${colorone} 50%)`;
})
btnGen.addEventListener('click', () => {
    const colors = ['#008000']
    const colorone =['#FAE20D']

    document.body.style.background = `linear-gradient(-41deg, ${colors} 50%, ${colorone} 50%)`;
})
