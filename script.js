// clicks and buttons sound
const WHITE_KEYS = ['KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM']
const BLACK_KEYS = ['KeyS', 'KeyD', ' ', 'KeyG', 'KeyH', 'KeyJ']

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
  const key = e.code; 
  for (let i = 0; i < WHITE_KEYS.length; i++){
    if (key == WHITE_KEYS[i]){
      
      playNote(whiteKeys[i]);
    }
  }

  for (let i = 0; i < BLACK_KEYS.length; i++){
    if (key == BLACK_KEYS[i]){
      
      playNote(blackKeys[i]);
    }
  }
})

document.addEventListener('keyup', e => {
  const key = e.code; 
  for (let i = 0; i < WHITE_KEYS.length; i++){
    if (key == WHITE_KEYS[i]){
      
      removeStyle(whiteKeys[i]);
    }
  }

  for (let i = 0; i < BLACK_KEYS.length; i++){
    if (key == BLACK_KEYS[i]){
      
      removeStyle(blackKeys[i]);
    }
  }
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


