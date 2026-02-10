
let listener = document.addEventListener("keydown",(event) => {let collection = document.getElementsByClassName(`${event.key}`);
                                                              if(collection.length > 0){collection[0].classList.add('keyDown');}
                                                                let sound = document.getElementById(`${event.key}`);
                                                                if(sound === null) return;
                                                                sound.currentTime= 0;
                                                                sound.play()});
let remover = document.addEventListener("keyup",(event) => {let collection = document.getElementsByClassName(`${event.key}`); 
                                                                if(collection.length > 0){collection[0].classList.remove('keyDown')}});

                                                
