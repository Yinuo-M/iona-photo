import {
  portrait1,
  portrait2,
  portrait3,
  portrait4,
  portrait5,
  portrait6,
  portrait7,
  portrait8,
  portrait9,
  portrait10,
  portrait11,
  portrait12,
  portrait13,
  portrait14,
} from '../../public/images/portraits';
import { PhotoProps } from '../../components/Photo';

const portraits: PhotoProps[] = [
  { alt: 'Portrait of friends in Nepal', src: portrait1, priority: true },
  {
    alt: 'Portrait of a friend in Nepal',
    src: portrait2,
    orientation: 'portrait',
    priority: true,
  },
  {
    alt: 'Portrait of a friend in Nepal',
    src: portrait3,
    orientation: 'portrait',
    priority: true,
  },
  { alt: 'Portrait of locals in Nepal', src: portrait4, priority: true },
  { alt: 'Portrait of a local in Nepal', src: portrait5 },
  {
    alt: 'Portrait of a friend in Nepal',
    src: portrait6,
    orientation: 'portrait',
  },
  { alt: 'Portrait of a friend in Nepal', src: portrait7 },
  { alt: 'Portrait of a friend in Brighton', src: portrait8 },
  { alt: 'Portrait of a friend in Oxford', src: portrait9 },
  { alt: 'Portrait of a friend in Oxford', src: portrait10 },
  {
    alt: 'Portrait for graduate ceremony',
    src: portrait11,
    orientation: 'portrait',
  },
  { alt: 'Portrait for the Oxford Belles', src: portrait12 },
  { alt: 'Portrait for the Oxford Belles', src: portrait13 },
  {
    alt: 'Portrait for the Oxford Belles',
    src: portrait14,
    orientation: 'portrait',
  },
];

export default portraits;
