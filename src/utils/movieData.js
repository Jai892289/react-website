//Import Images
import athlete from '../img/athlete-small.png';
import athlete2 from '../img/athlete2.png';
import goodtimes from '../img/goodtimes-small.png';
import goodtimes2 from '../img/good-times2.jpg';
import theracer from '../img/theracer-small.png';
import theracer2 from '../img/the-racer2.jpg';

export const MovieData = () => {
  return [
    {
      id: 1,
      title: 'The Athlete',
      mainImg: athlete,
      secondaryImg: athlete2,
      url: '/work/the-athlete',
      awards: [
        {
          title: 'Truly A masterpiece',
          description:
            '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
        },
        {
          title: 'Fresh look on a brutal sport.',
          description:
            '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
        },
        {
          title: 'One of a kind.',
          description:
            '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
        },
      ],
    },
    {
      id: 2,
      title: 'Good Times',
      mainImg: goodtimes,
      url: '/work/good-times',
      secondaryImg: goodtimes2,
      awards: [
        {
          title: 'Truly A masterpiece',
          description:
            '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
        },
        {
          title: 'Fresh look on a brutal sport.',
          description:
            '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
        },
        {
          title: 'One of a kind.',
          description:
            '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
        },
      ],
    },
    {
      id: 3,
      title: 'The Racer',
      mainImg: theracer,
      url: '/work/the-racer',
      secondaryImg: theracer2,
      awards: [
        {
          title: 'Truly A masterpiece',
          description:
            '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
        },
        {
          title: 'Fresh look on a brutal sport.',
          description:
            '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
        },
        {
          title: 'One of a kind.',
          description:
            '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
        },
      ],
    },
  ];
};
