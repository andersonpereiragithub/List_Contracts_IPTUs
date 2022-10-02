/* DADOS DOS CONTRATOS */
const listOfTheContracts = [
    {  
      subscription: '010.835/000',
      address: 'Rua Marechal Deodoro, 368',
      Neighborhood: 'Centro',
      contracts: ['016824', '016825', '016826', '016827'],
      year: '2021'},
    {
      subscription: '010.823/000',
      address: 'Rua Marechal Dedodoro, 360 LJ 8',
      Neighborhood: 'Centro',
      contracts: ['016801', '016822', '016823', '016813', '016812', '016811'],
      year: '2021'},
    {
      subscription: '010.831/000',
      address: 'Rua Marechal Deodoro, 368 ap 104',
      Neighborhood: 'Centro',
      contracts: ['016810', '016809'],
      year: '2021'},
    {
      subscription: '010.832/000',
      address: 'Rua Marechal Deodoro, 368 ap 202',
      Neighborhood: 'Centro',
      contracts: ['016800', '016808', '016790'],
      year: '2021'},
    {
      subscription: '010.822/000',
      address: 'Rua Marechal Deodoro, 360 loja 6',
      Neighborhood: 'Centro',
      contracts: ['016816', '016815', '016814', '016821', '016820'],
      year: '2021'},
    {
      subscription: '065.241/000',
      address: 'Rua Dr. Ormindo Maia, 33 snlt',
      Neighborhood: 'Bosque do Imperador',
      contracts: ['016796', '016795', '016819', '016818', '016817', '016794', '016792', '016791', '016806', '016804', '016802', '016803', '016805', '016807', '016793'],
      year: '2021'},
    {
      subscription: '010.828/001',
      address: 'Rua Marechal Deodoro, 368 loja 20',
      Neighborhood: 'Centro',
      contracts: ['016828'],
      year: '2021'
  }]
  /* FIM DOS DADOS*/

  const ul = document.querySelector('.list-group')
  const ulContracts = document.querySelector('.contracts-items')
  const h2 = document.querySelector('h2')

  const createTitleContrats2 = title => {
    let li = document.createElement('li')
    li.setAttribute('class', "bg-primary fs-3 text-center text-white list-group-item")
    li.textContent = title
    ul.append(li)
  }
  
  listOfTheContracts.forEach( ({address, contracts}) => {

    if (ul.innerHTML.length === 0) {
      const title = 'Imóveis'
      createTitleContrats2(title)
    }
    
    let li = document.createElement('li')
    li.setAttribute('class', 'list-group-item d-flex justify-content-between align-items-center')
    li.textContent = `${address}`
    
    let span = document.createElement('span')
    span.setAttribute('class', 'badge bg-primary rounded-pill')
    span.textContent = `${contracts.length}`
    li.append(span)
    ul.append(li)
  })
  
  const setEffectMouseOver = event => {
    event.target.style.backgroundColor = '#0d6efd'
    event.target.style.color = 'white'
  }
  ul.addEventListener('mouseover', setEffectMouseOver)
  
  const setEffectMouseOut = event => {
    event.target.style.backgroundColor = 'white'
    event.target.style.color = 'black'
  }
  
  ul.addEventListener('mouseout', setEffectMouseOut)
  
  ul.addEventListener('click', event => {
    const selectedEddress = event.target.innerText.split('\n')[0]
    const selectedContract = listOfTheContracts.find((contract) => contract.address === selectedEddress)
    const listContracts = selectedContract.contracts
    listContractsShow(listContracts)
  })
  
  const createTitleContrats = () => {
    let li = document.createElement('li')
    li.setAttribute('class', "contracts-text bg-primary fs-3 text-center text-white list-group-item")
    li.textContent = 'Contratos'
    ulContracts.append(li)
  }
  
  let positionTopCurrent = 0
  let positionLeftCurrent = 0

  const listContractsShow = listOfTheContracts => {
    ulContracts.innerHTML = ''
    positionTopCurrent = 410
    positionLeftCurrent = 95
    createTitleContrats() 
    
    listOfTheContracts.forEach( contract => {
      const isFullLine = ulContracts.childNodes.length === 6
      const isFullLine2= ulContracts.childNodes.length === 12
      const li = `<li style="top: ${positionTopCurrent}px; left: ${positionLeftCurrent}px" class="list-items-contracts bg-primary">${contract}</li>`
      
      if (isFullLine) {
        positionTopCurrent = 460
        positionLeftCurrent = 17
      }
      if (isFullLine2) {
        positionTopCurrent = 510
        positionLeftCurrent = 17
      }
      ulContracts.innerHTML += li
      positionLeftCurrent += 78
    })
  }
  
  ulContracts.addEventListener( 'click', event => changePositionLi(event.target) )

  const changePositionLi = li => {
    li.style.position = `absolute`
    //let leftPosition = 0
    
    navigator.clipboard.writeText(li.innerText)

    li.remove()
    // const transitionElement = setInterval(() => {
    //   li.target.style.left = `${leftPosition++}px`
      
    //   if (leftPosition === 290) {
    //     clearInterval(transitionElement)
    //     leftPosition = 0
    //   }
    // }, 1)
  }