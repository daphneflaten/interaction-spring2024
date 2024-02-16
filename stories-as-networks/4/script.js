function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  
  function rearrange() {
    const text = document.getElementById('scattered-text').innerText;
    const letters = text.split('');
    shuffleArray(letters);
    document.getElementById('scattered-text').innerText = letters.join('');
  }
  