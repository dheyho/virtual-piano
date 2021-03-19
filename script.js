// clicks and buttons sound
const WHITE_KEYS = ['z', 'x', 'c', 'v', 'b', 'n', 'm']
const BLACK_KEYS = ['s', 'd', ' ', 'g', 'h', 'j']

const keys = document.querySelectorAll('.piano-key')

const whiteKeys = document.querySelectorAll('.piano-key')
const blackKeys = document.querySelectorAll('.piano-key.sharp')

keys.forEach(key => {
  key.addEventListener('mousedown', () => playNote(key))
})

keys.forEach(key => {
  key.addEventListener('mouseup', () => removeStyle(key))
})


document.addEventListener('keydown', e => {
  if (e.repeat) return
  const key = e.key.toLowerCase();
  const whiteKeyIndex = WHITE_KEYS.indexOf(key)
  const blackKeyIndex = BLACK_KEYS.indexOf(key)

  if (whiteKeyIndex > -1) playNote(whiteKeys[whiteKeyIndex])
  if (blackKeyIndex > -1) playNote(blackKeys[blackKeyIndex])
})


document.addEventListener('keyup', e => {
  if (e.repeat) return
  const key = e.key.toLowerCase();
  const whiteKeyIndex = WHITE_KEYS.indexOf(key)
  const blackKeyIndex = BLACK_KEYS.indexOf(key)

  if (whiteKeyIndex > -1) removeStyle(whiteKeys[whiteKeyIndex])
  if (blackKeyIndex > -1) removeStyle(blackKeys[blackKeyIndex])
})



function playNote(key) {
  const noteAudio = document.getElementById(key.dataset.note)
  noteAudio.currentTime = 0
  noteAudio.play()
  key.classList.add('active')
  noteAudio.addEventListener('ended', () => {
    key.classList.remove('active')
  })
  key.classList.add('piano-key-active');  
}

function removeStyle (key){
  key.classList.remove('piano-key-active');
}



// fullscreen

const fullscreen = document.querySelectorAll('.fullscreen')

fullscreen.forEach(v => {
  v.addEventListener('click', () => toggleFullScreen())
})


function toggleFullScreen() {
  if (!document.fullscreenElement &&    // alternative standard method
    !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {  // current working methods
    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen();
    } else if (document.documentElement.msRequestFullscreen) {
      document.documentElement.msRequestFullscreen();
    } else if (document.documentElement.mozRequestFullScreen) {
      document.documentElement.mozRequestFullScreen();
    } else if (document.documentElement.webkitRequestFullscreen) {
      document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
    }
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    }
  }
}

// notes/letters button

const notes = document.querySelector('.btn-notes');
const letters = document.querySelector('.btn-letters');
const buttons = document.querySelectorAll('.btn')

buttons.forEach(element => {
  element.addEventListener('click', changeButtons)
});

function changeButtons(event) {
  if (event.target.classList.contains('btn-letters')) {
    keys.forEach(key => key.classList.add('piano-key-letter'));
    event.target.classList.add('btn-active');
    notes.classList.remove('btn-active');
  }
  else {
    keys.forEach(key => key.classList.remove('piano-key-letter'));
    event.target.classList.add('btn-active');
    letters.classList.remove('btn-active');
  }

}


