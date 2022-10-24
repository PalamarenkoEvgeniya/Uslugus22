import Croppie from 'croppie';
import 'croppie/croppie.css';

export const avatarController = ({inputFile, uploadResult}) => {
  const upload = document.querySelector(inputFile);
  const avatar = document.querySelector(uploadResult);

  const crp = new Croppie(avatar, {
    boundary: {width: 160, height: 160},
    viewport: {width: 100, height: 100, type: 'circle'},
  });

  crp.hideAvatar = () => {
    avatar.style.display = 'none';
  }

  crp.hideAvatar();

  const readFile = ({target: input}) => {
    if (input.files && input.files[0]) {
      const reader = new FileReader();
      reader.addEventListener('load', (e) => {
        avatar.style.display = 'block';
        crp.bind({url: e.target.result})
      });
      reader.readAsDataURL(input.files[0])
    }
  }

  upload.addEventListener('change', readFile);

  return crp;
}
