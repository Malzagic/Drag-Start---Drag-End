const gifts = document.querySelectorAll('.gift');
const boxes = document.querySelectorAll('.box');
const giftBox = document.querySelector('.gift-box');
const chosenBox = document.querySelector('.chosen-box');
const sendBtn = document.querySelector('.send-btn');

gifts.forEach(gift => {
  gift.addEventListener('dragstart', ()=> {
    gift.classList.add('is-dragged');
  })

  gift.addEventListener('dragend', () => {
    gift.classList.remove('is-dragged')
  })
})

boxes.forEach(box => {
  box.addEventListener('dragover', e => {
    const isDragged = document.querySelector('.is-dragged');
    box.appendChild(isDragged);
    e.preventDefault();

    handleGifts();
  })
})

const handleGifts = () => {
  const chosenGifts = giftBox.querySelectorAll('.gift');
  if(chosenBox.childElementCount > 2) {
    chosenGifts.forEach(gift => {
      gift.setAttribute('draggable', 'false');
      gift.classList.add('gift-disabled');
    })

    sendBtn.disabled = false
  } else {
    chosenGifts.forEach(gift => {
      gift.setAttribute('draggable', 'true');
      gift.classList.remove('gift-disabled');
    })
  
    sendBtn.disabled = true
  }
}