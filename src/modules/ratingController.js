export const ratingController = (rating, ratingInput) => {
  rating.addEventListener('click', ({target, currentTarget}) => {
    const star = target.closest('.rating__star');
    if (star) {
      currentTarget.dataset.stars = star.dataset.rating;
      ratingInput.value = star.dataset.rating;
    }
  })
}
