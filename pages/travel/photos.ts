import {
  travel1,
  travel2,
  travel3,
  travel4,
  travel5,
  travel6,
  travel7,
  travel8,
  travel9,
  travel10,
  travel11,
  travel12,
  travel13,
  travel14,
  travel15,
} from '../../public/images/travelPhotos';
import { PhotoProps } from '../../components/Photo';

const travel: PhotoProps[] = [
  {
    alt: 'Street shot of Nepal',
    src: travel1,
    priority: true,
    orientation: 'portrait',
  },
  {
    alt: 'Street shot of Nepal',
    src: travel2,
    orientation: 'portrait',
    priority: true,
  },
  {
    alt: 'Street shot of Nepal',
    src: travel3,
    priority: true,
  },
  {
    alt: 'Architecture in Nepal',
    src: travel4,
    orientation: 'portrait',
    priority: true,
  },
  { alt: 'Architecture in Nepal', src: travel5, orientation: 'portrait' },
  {
    alt: 'Street shot in Nepal',
    src: travel6,
    orientation: 'portrait',
  },
  { alt: 'Street shot in Nepal', src: travel7, orientation: 'portrait' },
  { alt: 'Architecture in Nepal', src: travel8 },
  { alt: 'Peacocks', src: travel9 },
  {
    alt: 'Architecture in Spain',
    src: travel10,
    orientation: 'portrait',
  },
  {
    alt: 'Architecture in Spain',
    src: travel11,
    orientation: 'portrait',
  },
  { alt: 'Nature in England', src: travel12 },
  { alt: 'Nature and animals in England', src: travel13 },
  {
    alt: 'Nature and animals in England',
    src: travel14,
    orientation: 'portrait',
  },
  {
    alt: 'Architecture in England',
    src: travel15,
    orientation: 'portrait',
  },
];

export default travel;
