    const startState = document.querySelector('.rate');
    const submit = document.querySelector('.submit');
    const thanks = document.querySelector('.thanks');
    const selectedRating = document.querySelector(".selected-rating");
    submit.addEventListener('click', function(evt){
      evt.preventDefault();
      const rateGiven = document.querySelector('input[name="rating"]:checked').value;
      thanks.style.display="flex";
      selectedRating.textContent = `You selected ${rateGiven} out of 5`;
      startState.parentElement.replaceChild(thanks,startState);
    });